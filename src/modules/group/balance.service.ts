import { prisma } from "../../prisma";
import { AppError } from "../../errors/AppError";

interface ParticipantBalance {
  userId: string;
  userName: string;
  amount: number;
}

export class BalanceService {
  public static async calculateGroupBalances(groupId: string, callerUserId: string) {
    const group = await prisma.expenseGroup.findFirst({
      where: { id: groupId, archivedAt: null },
    });

    if (!group) {
      throw new AppError(404, "Group not found");
    }

    const isMember = await prisma.groupMember.findFirst({
      where: {
        groupId,
        userId: callerUserId,
        status: "ACTIVE",
      },
    });

    if (!isMember) {
      throw new AppError(403, "You are not an active member of this group");
    }

    return this.computeGroupBalances(group);
  }

  public static async calculateUserNetBalance(groupId: string, userId: string): Promise<number> {
    // 1. Total paid by user in group (active expenses)
    const paidExpenses = await prisma.expense.findMany({
      where: {
        groupId,
        paidById: userId,
        deletedAt: null,
      },
      select: { amount: true },
    });
    const totalPaid = paidExpenses.reduce((sum: number, e: { amount: any }) => sum + Number(e.amount), 0);

    // 2. Total share owed by user in group (active expenses)
    const splits = await prisma.expenseSplit.findMany({
      where: {
        userId,
        expense: {
          groupId,
          deletedAt: null,
        },
      },
      select: { shareAmount: true },
    });
    const totalShare = splits.reduce((sum: number, s: { shareAmount: any }) => sum + Number(s.shareAmount), 0);

    // 3. Confirmed settlements sent
    const settlementsSent = await prisma.settlement.findMany({
      where: {
        groupId,
        fromUserId: userId,
        status: "CONFIRMED",
      },
      select: { amount: true },
    });
    const totalSent = settlementsSent.reduce((sum: number, s: { amount: any }) => sum + Number(s.amount), 0);

    // 4. Confirmed settlements received
    const settlementsReceived = await prisma.settlement.findMany({
      where: {
        groupId,
        toUserId: userId,
        status: "CONFIRMED",
      },
      select: { amount: true },
    });
    const totalReceived = settlementsReceived.reduce((sum: number, s: { amount: any }) => sum + Number(s.amount), 0);

    const net = totalPaid - totalShare + totalSent - totalReceived;
    return Number(net.toFixed(2));
  }

  private static async computeGroupBalances(group: { id: string; currency: string }) {
    const groupId = group.id;

    const activeMembers = await prisma.groupMember.findMany({
      where: {
        groupId,
        status: "ACTIVE",
      },
      include: {
        user: true,
      },
    });

    const expenses = await prisma.expense.findMany({
      where: {
        groupId,
        deletedAt: null,
      },
      orderBy: { createdAt: "desc" },
    });

    const splits = await prisma.expenseSplit.findMany({
      where: {
        expense: {
          groupId,
          deletedAt: null,
        },
      },
    });

    const confirmedSettlements = await prisma.settlement.findMany({
      where: {
        groupId,
        status: "CONFIRMED",
      },
    });

    let totalExpenses = 0;
    const totalPaidMap = new Map<string, number>();
    const totalShareMap = new Map<string, number>();
    const settlementsSentMap = new Map<string, number>();
    const settlementsReceivedMap = new Map<string, number>();
    const memberNameMap = new Map<string, string>();

    for (const member of activeMembers) {
      const uid = member.userId;
      totalPaidMap.set(uid, 0);
      totalShareMap.set(uid, 0);
      settlementsSentMap.set(uid, 0);
      settlementsReceivedMap.set(uid, 0);

      let name = member.user.name;
      if (!name || !name.trim()) {
        name = member.user.phoneNumber || member.user.email || "Unknown";
      }
      memberNameMap.set(uid, name);
    }

    for (const expense of expenses) {
      const amt = Number(expense.amount);
      totalExpenses += amt;
      const payerId = expense.paidById || expense.userId;
      totalPaidMap.set(payerId, (totalPaidMap.get(payerId) || 0) + amt);
    }

    for (const split of splits) {
      const uid = split.userId;
      const share = Number(split.shareAmount);
      totalShareMap.set(uid, (totalShareMap.get(uid) || 0) + share);
    }

    for (const st of confirmedSettlements) {
      const amt = Number(st.amount);
      settlementsSentMap.set(st.fromUserId, (settlementsSentMap.get(st.fromUserId) || 0) + amt);
      settlementsReceivedMap.set(st.toUserId, (settlementsReceivedMap.get(st.toUserId) || 0) + amt);
    }

    const memberBalances = [];
    const debtors: ParticipantBalance[] = [];
    const creditors: ParticipantBalance[] = [];

    for (const member of activeMembers) {
      const uid = member.userId;
      const paid = Number((totalPaidMap.get(uid) || 0).toFixed(2));
      const share = Number((totalShareMap.get(uid) || 0).toFixed(2));
      const sent = Number((settlementsSentMap.get(uid) || 0).toFixed(2));
      const rec = Number((settlementsReceivedMap.get(uid) || 0).toFixed(2));
      const netBalance = Number((paid - share + sent - rec).toFixed(2));
      const name = memberNameMap.get(uid) || "Unknown";

      memberBalances.push({
        userId: uid,
        name,
        totalPaid: paid,
        totalShare: share,
        settlementsSent: sent,
        settlementsReceived: rec,
        netBalance,
      });

      if (netBalance < 0) {
        debtors.push({ userId: uid, userName: name, amount: Math.abs(netBalance) });
      } else if (netBalance > 0) {
        creditors.push({ userId: uid, userName: name, amount: netBalance });
      }
    }

    // Greedy debt simplification
    debtors.sort((a, b) => b.amount - a.amount);
    creditors.sort((a, b) => b.amount - a.amount);

    const suggestedTransfers = [];
    let dIdx = 0;
    let cIdx = 0;

    while (dIdx < debtors.length && cIdx < creditors.length) {
      const debtor = debtors[dIdx];
      const creditor = creditors[cIdx];

      const transferAmount = Math.min(debtor.amount, creditor.amount);
      if (transferAmount > 0.009) {
        suggestedTransfers.push({
          fromUserId: debtor.userId,
          fromUserName: debtor.userName,
          toUserId: creditor.userId,
          toUserName: creditor.userName,
          amount: Number(transferAmount.toFixed(2)),
        });
      }

      debtor.amount = Number((debtor.amount - transferAmount).toFixed(4));
      creditor.amount = Number((creditor.amount - transferAmount).toFixed(4));

      if (debtor.amount <= 0.009) {
        dIdx++;
      }
      if (creditor.amount <= 0.009) {
        cIdx++;
      }
    }

    return {
      groupId,
      currency: group.currency,
      totalExpenses: Number(totalExpenses.toFixed(2)),
      memberBalances,
      suggestedTransfers,
    };
  }
}
