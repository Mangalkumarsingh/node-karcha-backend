
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model ExpenseGroup
 * 
 */
export type ExpenseGroup = $Result.DefaultSelection<Prisma.$ExpenseGroupPayload>
/**
 * Model GroupMember
 * 
 */
export type GroupMember = $Result.DefaultSelection<Prisma.$GroupMemberPayload>
/**
 * Model GroupInvitation
 * 
 */
export type GroupInvitation = $Result.DefaultSelection<Prisma.$GroupInvitationPayload>
/**
 * Model Expense
 * 
 */
export type Expense = $Result.DefaultSelection<Prisma.$ExpensePayload>
/**
 * Model ExpenseSplit
 * 
 */
export type ExpenseSplit = $Result.DefaultSelection<Prisma.$ExpenseSplitPayload>
/**
 * Model Settlement
 * 
 */
export type Settlement = $Result.DefaultSelection<Prisma.$SettlementPayload>
/**
 * Model flyway_schema_history
 * 
 */
export type flyway_schema_history = $Result.DefaultSelection<Prisma.$flyway_schema_historyPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.expenseGroup`: Exposes CRUD operations for the **ExpenseGroup** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExpenseGroups
    * const expenseGroups = await prisma.expenseGroup.findMany()
    * ```
    */
  get expenseGroup(): Prisma.ExpenseGroupDelegate<ExtArgs>;

  /**
   * `prisma.groupMember`: Exposes CRUD operations for the **GroupMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GroupMembers
    * const groupMembers = await prisma.groupMember.findMany()
    * ```
    */
  get groupMember(): Prisma.GroupMemberDelegate<ExtArgs>;

  /**
   * `prisma.groupInvitation`: Exposes CRUD operations for the **GroupInvitation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GroupInvitations
    * const groupInvitations = await prisma.groupInvitation.findMany()
    * ```
    */
  get groupInvitation(): Prisma.GroupInvitationDelegate<ExtArgs>;

  /**
   * `prisma.expense`: Exposes CRUD operations for the **Expense** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Expenses
    * const expenses = await prisma.expense.findMany()
    * ```
    */
  get expense(): Prisma.ExpenseDelegate<ExtArgs>;

  /**
   * `prisma.expenseSplit`: Exposes CRUD operations for the **ExpenseSplit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExpenseSplits
    * const expenseSplits = await prisma.expenseSplit.findMany()
    * ```
    */
  get expenseSplit(): Prisma.ExpenseSplitDelegate<ExtArgs>;

  /**
   * `prisma.settlement`: Exposes CRUD operations for the **Settlement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Settlements
    * const settlements = await prisma.settlement.findMany()
    * ```
    */
  get settlement(): Prisma.SettlementDelegate<ExtArgs>;

  /**
   * `prisma.flyway_schema_history`: Exposes CRUD operations for the **flyway_schema_history** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Flyway_schema_histories
    * const flyway_schema_histories = await prisma.flyway_schema_history.findMany()
    * ```
    */
  get flyway_schema_history(): Prisma.flyway_schema_historyDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    ExpenseGroup: 'ExpenseGroup',
    GroupMember: 'GroupMember',
    GroupInvitation: 'GroupInvitation',
    Expense: 'Expense',
    ExpenseSplit: 'ExpenseSplit',
    Settlement: 'Settlement',
    flyway_schema_history: 'flyway_schema_history'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "expenseGroup" | "groupMember" | "groupInvitation" | "expense" | "expenseSplit" | "settlement" | "flyway_schema_history"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      ExpenseGroup: {
        payload: Prisma.$ExpenseGroupPayload<ExtArgs>
        fields: Prisma.ExpenseGroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExpenseGroupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseGroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExpenseGroupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseGroupPayload>
          }
          findFirst: {
            args: Prisma.ExpenseGroupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseGroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExpenseGroupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseGroupPayload>
          }
          findMany: {
            args: Prisma.ExpenseGroupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseGroupPayload>[]
          }
          create: {
            args: Prisma.ExpenseGroupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseGroupPayload>
          }
          createMany: {
            args: Prisma.ExpenseGroupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExpenseGroupCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseGroupPayload>[]
          }
          delete: {
            args: Prisma.ExpenseGroupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseGroupPayload>
          }
          update: {
            args: Prisma.ExpenseGroupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseGroupPayload>
          }
          deleteMany: {
            args: Prisma.ExpenseGroupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExpenseGroupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ExpenseGroupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseGroupPayload>
          }
          aggregate: {
            args: Prisma.ExpenseGroupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExpenseGroup>
          }
          groupBy: {
            args: Prisma.ExpenseGroupGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExpenseGroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExpenseGroupCountArgs<ExtArgs>
            result: $Utils.Optional<ExpenseGroupCountAggregateOutputType> | number
          }
        }
      }
      GroupMember: {
        payload: Prisma.$GroupMemberPayload<ExtArgs>
        fields: Prisma.GroupMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GroupMemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroupMemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>
          }
          findFirst: {
            args: Prisma.GroupMemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroupMemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>
          }
          findMany: {
            args: Prisma.GroupMemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>[]
          }
          create: {
            args: Prisma.GroupMemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>
          }
          createMany: {
            args: Prisma.GroupMemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GroupMemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>[]
          }
          delete: {
            args: Prisma.GroupMemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>
          }
          update: {
            args: Prisma.GroupMemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>
          }
          deleteMany: {
            args: Prisma.GroupMemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GroupMemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GroupMemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>
          }
          aggregate: {
            args: Prisma.GroupMemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGroupMember>
          }
          groupBy: {
            args: Prisma.GroupMemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<GroupMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.GroupMemberCountArgs<ExtArgs>
            result: $Utils.Optional<GroupMemberCountAggregateOutputType> | number
          }
        }
      }
      GroupInvitation: {
        payload: Prisma.$GroupInvitationPayload<ExtArgs>
        fields: Prisma.GroupInvitationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GroupInvitationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupInvitationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroupInvitationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupInvitationPayload>
          }
          findFirst: {
            args: Prisma.GroupInvitationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupInvitationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroupInvitationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupInvitationPayload>
          }
          findMany: {
            args: Prisma.GroupInvitationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupInvitationPayload>[]
          }
          create: {
            args: Prisma.GroupInvitationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupInvitationPayload>
          }
          createMany: {
            args: Prisma.GroupInvitationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GroupInvitationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupInvitationPayload>[]
          }
          delete: {
            args: Prisma.GroupInvitationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupInvitationPayload>
          }
          update: {
            args: Prisma.GroupInvitationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupInvitationPayload>
          }
          deleteMany: {
            args: Prisma.GroupInvitationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GroupInvitationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GroupInvitationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupInvitationPayload>
          }
          aggregate: {
            args: Prisma.GroupInvitationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGroupInvitation>
          }
          groupBy: {
            args: Prisma.GroupInvitationGroupByArgs<ExtArgs>
            result: $Utils.Optional<GroupInvitationGroupByOutputType>[]
          }
          count: {
            args: Prisma.GroupInvitationCountArgs<ExtArgs>
            result: $Utils.Optional<GroupInvitationCountAggregateOutputType> | number
          }
        }
      }
      Expense: {
        payload: Prisma.$ExpensePayload<ExtArgs>
        fields: Prisma.ExpenseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExpenseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExpenseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          findFirst: {
            args: Prisma.ExpenseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExpenseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          findMany: {
            args: Prisma.ExpenseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>[]
          }
          create: {
            args: Prisma.ExpenseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          createMany: {
            args: Prisma.ExpenseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExpenseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>[]
          }
          delete: {
            args: Prisma.ExpenseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          update: {
            args: Prisma.ExpenseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          deleteMany: {
            args: Prisma.ExpenseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExpenseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ExpenseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          aggregate: {
            args: Prisma.ExpenseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExpense>
          }
          groupBy: {
            args: Prisma.ExpenseGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExpenseGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExpenseCountArgs<ExtArgs>
            result: $Utils.Optional<ExpenseCountAggregateOutputType> | number
          }
        }
      }
      ExpenseSplit: {
        payload: Prisma.$ExpenseSplitPayload<ExtArgs>
        fields: Prisma.ExpenseSplitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExpenseSplitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseSplitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExpenseSplitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseSplitPayload>
          }
          findFirst: {
            args: Prisma.ExpenseSplitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseSplitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExpenseSplitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseSplitPayload>
          }
          findMany: {
            args: Prisma.ExpenseSplitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseSplitPayload>[]
          }
          create: {
            args: Prisma.ExpenseSplitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseSplitPayload>
          }
          createMany: {
            args: Prisma.ExpenseSplitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExpenseSplitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseSplitPayload>[]
          }
          delete: {
            args: Prisma.ExpenseSplitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseSplitPayload>
          }
          update: {
            args: Prisma.ExpenseSplitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseSplitPayload>
          }
          deleteMany: {
            args: Prisma.ExpenseSplitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExpenseSplitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ExpenseSplitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseSplitPayload>
          }
          aggregate: {
            args: Prisma.ExpenseSplitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExpenseSplit>
          }
          groupBy: {
            args: Prisma.ExpenseSplitGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExpenseSplitGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExpenseSplitCountArgs<ExtArgs>
            result: $Utils.Optional<ExpenseSplitCountAggregateOutputType> | number
          }
        }
      }
      Settlement: {
        payload: Prisma.$SettlementPayload<ExtArgs>
        fields: Prisma.SettlementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SettlementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettlementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SettlementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettlementPayload>
          }
          findFirst: {
            args: Prisma.SettlementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettlementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SettlementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettlementPayload>
          }
          findMany: {
            args: Prisma.SettlementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettlementPayload>[]
          }
          create: {
            args: Prisma.SettlementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettlementPayload>
          }
          createMany: {
            args: Prisma.SettlementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SettlementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettlementPayload>[]
          }
          delete: {
            args: Prisma.SettlementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettlementPayload>
          }
          update: {
            args: Prisma.SettlementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettlementPayload>
          }
          deleteMany: {
            args: Prisma.SettlementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SettlementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SettlementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettlementPayload>
          }
          aggregate: {
            args: Prisma.SettlementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSettlement>
          }
          groupBy: {
            args: Prisma.SettlementGroupByArgs<ExtArgs>
            result: $Utils.Optional<SettlementGroupByOutputType>[]
          }
          count: {
            args: Prisma.SettlementCountArgs<ExtArgs>
            result: $Utils.Optional<SettlementCountAggregateOutputType> | number
          }
        }
      }
      flyway_schema_history: {
        payload: Prisma.$flyway_schema_historyPayload<ExtArgs>
        fields: Prisma.flyway_schema_historyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.flyway_schema_historyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flyway_schema_historyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.flyway_schema_historyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flyway_schema_historyPayload>
          }
          findFirst: {
            args: Prisma.flyway_schema_historyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flyway_schema_historyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.flyway_schema_historyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flyway_schema_historyPayload>
          }
          findMany: {
            args: Prisma.flyway_schema_historyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flyway_schema_historyPayload>[]
          }
          create: {
            args: Prisma.flyway_schema_historyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flyway_schema_historyPayload>
          }
          createMany: {
            args: Prisma.flyway_schema_historyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.flyway_schema_historyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flyway_schema_historyPayload>[]
          }
          delete: {
            args: Prisma.flyway_schema_historyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flyway_schema_historyPayload>
          }
          update: {
            args: Prisma.flyway_schema_historyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flyway_schema_historyPayload>
          }
          deleteMany: {
            args: Prisma.flyway_schema_historyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.flyway_schema_historyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.flyway_schema_historyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flyway_schema_historyPayload>
          }
          aggregate: {
            args: Prisma.Flyway_schema_historyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFlyway_schema_history>
          }
          groupBy: {
            args: Prisma.flyway_schema_historyGroupByArgs<ExtArgs>
            result: $Utils.Optional<Flyway_schema_historyGroupByOutputType>[]
          }
          count: {
            args: Prisma.flyway_schema_historyCountArgs<ExtArgs>
            result: $Utils.Optional<Flyway_schema_historyCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    createdGroups: number
    splits: number
    expensesPaid: number
    expensesCreated: number
    sentInvitations: number
    receivedInvitations: number
    groupMemberships: number
    settlementsSent: number
    settlementsReceived: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdGroups?: boolean | UserCountOutputTypeCountCreatedGroupsArgs
    splits?: boolean | UserCountOutputTypeCountSplitsArgs
    expensesPaid?: boolean | UserCountOutputTypeCountExpensesPaidArgs
    expensesCreated?: boolean | UserCountOutputTypeCountExpensesCreatedArgs
    sentInvitations?: boolean | UserCountOutputTypeCountSentInvitationsArgs
    receivedInvitations?: boolean | UserCountOutputTypeCountReceivedInvitationsArgs
    groupMemberships?: boolean | UserCountOutputTypeCountGroupMembershipsArgs
    settlementsSent?: boolean | UserCountOutputTypeCountSettlementsSentArgs
    settlementsReceived?: boolean | UserCountOutputTypeCountSettlementsReceivedArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpenseGroupWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSplitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpenseSplitWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountExpensesPaidArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpenseWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountExpensesCreatedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpenseWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSentInvitationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupInvitationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReceivedInvitationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupInvitationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGroupMembershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupMemberWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSettlementsSentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SettlementWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSettlementsReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SettlementWhereInput
  }


  /**
   * Count Type ExpenseGroupCountOutputType
   */

  export type ExpenseGroupCountOutputType = {
    expenses: number
    invitations: number
    members: number
    settlements: number
  }

  export type ExpenseGroupCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expenses?: boolean | ExpenseGroupCountOutputTypeCountExpensesArgs
    invitations?: boolean | ExpenseGroupCountOutputTypeCountInvitationsArgs
    members?: boolean | ExpenseGroupCountOutputTypeCountMembersArgs
    settlements?: boolean | ExpenseGroupCountOutputTypeCountSettlementsArgs
  }

  // Custom InputTypes
  /**
   * ExpenseGroupCountOutputType without action
   */
  export type ExpenseGroupCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseGroupCountOutputType
     */
    select?: ExpenseGroupCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExpenseGroupCountOutputType without action
   */
  export type ExpenseGroupCountOutputTypeCountExpensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpenseWhereInput
  }

  /**
   * ExpenseGroupCountOutputType without action
   */
  export type ExpenseGroupCountOutputTypeCountInvitationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupInvitationWhereInput
  }

  /**
   * ExpenseGroupCountOutputType without action
   */
  export type ExpenseGroupCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupMemberWhereInput
  }

  /**
   * ExpenseGroupCountOutputType without action
   */
  export type ExpenseGroupCountOutputTypeCountSettlementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SettlementWhereInput
  }


  /**
   * Count Type ExpenseCountOutputType
   */

  export type ExpenseCountOutputType = {
    splits: number
  }

  export type ExpenseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    splits?: boolean | ExpenseCountOutputTypeCountSplitsArgs
  }

  // Custom InputTypes
  /**
   * ExpenseCountOutputType without action
   */
  export type ExpenseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseCountOutputType
     */
    select?: ExpenseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExpenseCountOutputType without action
   */
  export type ExpenseCountOutputTypeCountSplitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpenseSplitWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    otpAttempts: number | null
  }

  export type UserSumAggregateOutputType = {
    otpAttempts: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    phoneNumber: string | null
    createdAt: Date | null
    otp: string | null
    otpExpiryTime: Date | null
    email: string | null
    googleSubject: string | null
    phoneVerified: boolean | null
    emailVerified: boolean | null
    otpHash: string | null
    otpAttempts: number | null
    otpLastSentAt: Date | null
    name: string | null
    profileImageUrl: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    phoneNumber: string | null
    createdAt: Date | null
    otp: string | null
    otpExpiryTime: Date | null
    email: string | null
    googleSubject: string | null
    phoneVerified: boolean | null
    emailVerified: boolean | null
    otpHash: string | null
    otpAttempts: number | null
    otpLastSentAt: Date | null
    name: string | null
    profileImageUrl: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    phoneNumber: number
    createdAt: number
    otp: number
    otpExpiryTime: number
    email: number
    googleSubject: number
    phoneVerified: number
    emailVerified: number
    otpHash: number
    otpAttempts: number
    otpLastSentAt: number
    name: number
    profileImageUrl: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    otpAttempts?: true
  }

  export type UserSumAggregateInputType = {
    otpAttempts?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    phoneNumber?: true
    createdAt?: true
    otp?: true
    otpExpiryTime?: true
    email?: true
    googleSubject?: true
    phoneVerified?: true
    emailVerified?: true
    otpHash?: true
    otpAttempts?: true
    otpLastSentAt?: true
    name?: true
    profileImageUrl?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    phoneNumber?: true
    createdAt?: true
    otp?: true
    otpExpiryTime?: true
    email?: true
    googleSubject?: true
    phoneVerified?: true
    emailVerified?: true
    otpHash?: true
    otpAttempts?: true
    otpLastSentAt?: true
    name?: true
    profileImageUrl?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    phoneNumber?: true
    createdAt?: true
    otp?: true
    otpExpiryTime?: true
    email?: true
    googleSubject?: true
    phoneVerified?: true
    emailVerified?: true
    otpHash?: true
    otpAttempts?: true
    otpLastSentAt?: true
    name?: true
    profileImageUrl?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    phoneNumber: string | null
    createdAt: Date | null
    otp: string | null
    otpExpiryTime: Date | null
    email: string | null
    googleSubject: string | null
    phoneVerified: boolean | null
    emailVerified: boolean | null
    otpHash: string | null
    otpAttempts: number | null
    otpLastSentAt: Date | null
    name: string | null
    profileImageUrl: string | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phoneNumber?: boolean
    createdAt?: boolean
    otp?: boolean
    otpExpiryTime?: boolean
    email?: boolean
    googleSubject?: boolean
    phoneVerified?: boolean
    emailVerified?: boolean
    otpHash?: boolean
    otpAttempts?: boolean
    otpLastSentAt?: boolean
    name?: boolean
    profileImageUrl?: boolean
    createdGroups?: boolean | User$createdGroupsArgs<ExtArgs>
    splits?: boolean | User$splitsArgs<ExtArgs>
    expensesPaid?: boolean | User$expensesPaidArgs<ExtArgs>
    expensesCreated?: boolean | User$expensesCreatedArgs<ExtArgs>
    sentInvitations?: boolean | User$sentInvitationsArgs<ExtArgs>
    receivedInvitations?: boolean | User$receivedInvitationsArgs<ExtArgs>
    groupMemberships?: boolean | User$groupMembershipsArgs<ExtArgs>
    settlementsSent?: boolean | User$settlementsSentArgs<ExtArgs>
    settlementsReceived?: boolean | User$settlementsReceivedArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phoneNumber?: boolean
    createdAt?: boolean
    otp?: boolean
    otpExpiryTime?: boolean
    email?: boolean
    googleSubject?: boolean
    phoneVerified?: boolean
    emailVerified?: boolean
    otpHash?: boolean
    otpAttempts?: boolean
    otpLastSentAt?: boolean
    name?: boolean
    profileImageUrl?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    phoneNumber?: boolean
    createdAt?: boolean
    otp?: boolean
    otpExpiryTime?: boolean
    email?: boolean
    googleSubject?: boolean
    phoneVerified?: boolean
    emailVerified?: boolean
    otpHash?: boolean
    otpAttempts?: boolean
    otpLastSentAt?: boolean
    name?: boolean
    profileImageUrl?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdGroups?: boolean | User$createdGroupsArgs<ExtArgs>
    splits?: boolean | User$splitsArgs<ExtArgs>
    expensesPaid?: boolean | User$expensesPaidArgs<ExtArgs>
    expensesCreated?: boolean | User$expensesCreatedArgs<ExtArgs>
    sentInvitations?: boolean | User$sentInvitationsArgs<ExtArgs>
    receivedInvitations?: boolean | User$receivedInvitationsArgs<ExtArgs>
    groupMemberships?: boolean | User$groupMembershipsArgs<ExtArgs>
    settlementsSent?: boolean | User$settlementsSentArgs<ExtArgs>
    settlementsReceived?: boolean | User$settlementsReceivedArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      createdGroups: Prisma.$ExpenseGroupPayload<ExtArgs>[]
      splits: Prisma.$ExpenseSplitPayload<ExtArgs>[]
      expensesPaid: Prisma.$ExpensePayload<ExtArgs>[]
      expensesCreated: Prisma.$ExpensePayload<ExtArgs>[]
      sentInvitations: Prisma.$GroupInvitationPayload<ExtArgs>[]
      receivedInvitations: Prisma.$GroupInvitationPayload<ExtArgs>[]
      groupMemberships: Prisma.$GroupMemberPayload<ExtArgs>[]
      settlementsSent: Prisma.$SettlementPayload<ExtArgs>[]
      settlementsReceived: Prisma.$SettlementPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      phoneNumber: string | null
      createdAt: Date | null
      otp: string | null
      otpExpiryTime: Date | null
      email: string | null
      googleSubject: string | null
      phoneVerified: boolean | null
      emailVerified: boolean | null
      otpHash: string | null
      otpAttempts: number | null
      otpLastSentAt: Date | null
      name: string | null
      profileImageUrl: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdGroups<T extends User$createdGroupsArgs<ExtArgs> = {}>(args?: Subset<T, User$createdGroupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpenseGroupPayload<ExtArgs>, T, "findMany"> | Null>
    splits<T extends User$splitsArgs<ExtArgs> = {}>(args?: Subset<T, User$splitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpenseSplitPayload<ExtArgs>, T, "findMany"> | Null>
    expensesPaid<T extends User$expensesPaidArgs<ExtArgs> = {}>(args?: Subset<T, User$expensesPaidArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findMany"> | Null>
    expensesCreated<T extends User$expensesCreatedArgs<ExtArgs> = {}>(args?: Subset<T, User$expensesCreatedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findMany"> | Null>
    sentInvitations<T extends User$sentInvitationsArgs<ExtArgs> = {}>(args?: Subset<T, User$sentInvitationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupInvitationPayload<ExtArgs>, T, "findMany"> | Null>
    receivedInvitations<T extends User$receivedInvitationsArgs<ExtArgs> = {}>(args?: Subset<T, User$receivedInvitationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupInvitationPayload<ExtArgs>, T, "findMany"> | Null>
    groupMemberships<T extends User$groupMembershipsArgs<ExtArgs> = {}>(args?: Subset<T, User$groupMembershipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "findMany"> | Null>
    settlementsSent<T extends User$settlementsSentArgs<ExtArgs> = {}>(args?: Subset<T, User$settlementsSentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettlementPayload<ExtArgs>, T, "findMany"> | Null>
    settlementsReceived<T extends User$settlementsReceivedArgs<ExtArgs> = {}>(args?: Subset<T, User$settlementsReceivedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettlementPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly phoneNumber: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly otp: FieldRef<"User", 'String'>
    readonly otpExpiryTime: FieldRef<"User", 'DateTime'>
    readonly email: FieldRef<"User", 'String'>
    readonly googleSubject: FieldRef<"User", 'String'>
    readonly phoneVerified: FieldRef<"User", 'Boolean'>
    readonly emailVerified: FieldRef<"User", 'Boolean'>
    readonly otpHash: FieldRef<"User", 'String'>
    readonly otpAttempts: FieldRef<"User", 'Int'>
    readonly otpLastSentAt: FieldRef<"User", 'DateTime'>
    readonly name: FieldRef<"User", 'String'>
    readonly profileImageUrl: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data?: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.createdGroups
   */
  export type User$createdGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseGroup
     */
    select?: ExpenseGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseGroupInclude<ExtArgs> | null
    where?: ExpenseGroupWhereInput
    orderBy?: ExpenseGroupOrderByWithRelationInput | ExpenseGroupOrderByWithRelationInput[]
    cursor?: ExpenseGroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExpenseGroupScalarFieldEnum | ExpenseGroupScalarFieldEnum[]
  }

  /**
   * User.splits
   */
  export type User$splitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseSplit
     */
    select?: ExpenseSplitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseSplitInclude<ExtArgs> | null
    where?: ExpenseSplitWhereInput
    orderBy?: ExpenseSplitOrderByWithRelationInput | ExpenseSplitOrderByWithRelationInput[]
    cursor?: ExpenseSplitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExpenseSplitScalarFieldEnum | ExpenseSplitScalarFieldEnum[]
  }

  /**
   * User.expensesPaid
   */
  export type User$expensesPaidArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    where?: ExpenseWhereInput
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    cursor?: ExpenseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * User.expensesCreated
   */
  export type User$expensesCreatedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    where?: ExpenseWhereInput
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    cursor?: ExpenseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * User.sentInvitations
   */
  export type User$sentInvitationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupInvitation
     */
    select?: GroupInvitationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInvitationInclude<ExtArgs> | null
    where?: GroupInvitationWhereInput
    orderBy?: GroupInvitationOrderByWithRelationInput | GroupInvitationOrderByWithRelationInput[]
    cursor?: GroupInvitationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupInvitationScalarFieldEnum | GroupInvitationScalarFieldEnum[]
  }

  /**
   * User.receivedInvitations
   */
  export type User$receivedInvitationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupInvitation
     */
    select?: GroupInvitationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInvitationInclude<ExtArgs> | null
    where?: GroupInvitationWhereInput
    orderBy?: GroupInvitationOrderByWithRelationInput | GroupInvitationOrderByWithRelationInput[]
    cursor?: GroupInvitationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupInvitationScalarFieldEnum | GroupInvitationScalarFieldEnum[]
  }

  /**
   * User.groupMemberships
   */
  export type User$groupMembershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    where?: GroupMemberWhereInput
    orderBy?: GroupMemberOrderByWithRelationInput | GroupMemberOrderByWithRelationInput[]
    cursor?: GroupMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupMemberScalarFieldEnum | GroupMemberScalarFieldEnum[]
  }

  /**
   * User.settlementsSent
   */
  export type User$settlementsSentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settlement
     */
    select?: SettlementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettlementInclude<ExtArgs> | null
    where?: SettlementWhereInput
    orderBy?: SettlementOrderByWithRelationInput | SettlementOrderByWithRelationInput[]
    cursor?: SettlementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SettlementScalarFieldEnum | SettlementScalarFieldEnum[]
  }

  /**
   * User.settlementsReceived
   */
  export type User$settlementsReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settlement
     */
    select?: SettlementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettlementInclude<ExtArgs> | null
    where?: SettlementWhereInput
    orderBy?: SettlementOrderByWithRelationInput | SettlementOrderByWithRelationInput[]
    cursor?: SettlementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SettlementScalarFieldEnum | SettlementScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model ExpenseGroup
   */

  export type AggregateExpenseGroup = {
    _count: ExpenseGroupCountAggregateOutputType | null
    _min: ExpenseGroupMinAggregateOutputType | null
    _max: ExpenseGroupMaxAggregateOutputType | null
  }

  export type ExpenseGroupMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    currency: string | null
    createdById: string | null
    createdAt: Date | null
    updatedAt: Date | null
    archivedAt: Date | null
  }

  export type ExpenseGroupMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    currency: string | null
    createdById: string | null
    createdAt: Date | null
    updatedAt: Date | null
    archivedAt: Date | null
  }

  export type ExpenseGroupCountAggregateOutputType = {
    id: number
    name: number
    description: number
    currency: number
    createdById: number
    createdAt: number
    updatedAt: number
    archivedAt: number
    _all: number
  }


  export type ExpenseGroupMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    currency?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
    archivedAt?: true
  }

  export type ExpenseGroupMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    currency?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
    archivedAt?: true
  }

  export type ExpenseGroupCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    currency?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
    archivedAt?: true
    _all?: true
  }

  export type ExpenseGroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExpenseGroup to aggregate.
     */
    where?: ExpenseGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpenseGroups to fetch.
     */
    orderBy?: ExpenseGroupOrderByWithRelationInput | ExpenseGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExpenseGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpenseGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpenseGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExpenseGroups
    **/
    _count?: true | ExpenseGroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExpenseGroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExpenseGroupMaxAggregateInputType
  }

  export type GetExpenseGroupAggregateType<T extends ExpenseGroupAggregateArgs> = {
        [P in keyof T & keyof AggregateExpenseGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExpenseGroup[P]>
      : GetScalarType<T[P], AggregateExpenseGroup[P]>
  }




  export type ExpenseGroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpenseGroupWhereInput
    orderBy?: ExpenseGroupOrderByWithAggregationInput | ExpenseGroupOrderByWithAggregationInput[]
    by: ExpenseGroupScalarFieldEnum[] | ExpenseGroupScalarFieldEnum
    having?: ExpenseGroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExpenseGroupCountAggregateInputType | true
    _min?: ExpenseGroupMinAggregateInputType
    _max?: ExpenseGroupMaxAggregateInputType
  }

  export type ExpenseGroupGroupByOutputType = {
    id: string
    name: string
    description: string | null
    currency: string
    createdById: string
    createdAt: Date
    updatedAt: Date
    archivedAt: Date | null
    _count: ExpenseGroupCountAggregateOutputType | null
    _min: ExpenseGroupMinAggregateOutputType | null
    _max: ExpenseGroupMaxAggregateOutputType | null
  }

  type GetExpenseGroupGroupByPayload<T extends ExpenseGroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExpenseGroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExpenseGroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExpenseGroupGroupByOutputType[P]>
            : GetScalarType<T[P], ExpenseGroupGroupByOutputType[P]>
        }
      >
    >


  export type ExpenseGroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    currency?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    archivedAt?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    expenses?: boolean | ExpenseGroup$expensesArgs<ExtArgs>
    invitations?: boolean | ExpenseGroup$invitationsArgs<ExtArgs>
    members?: boolean | ExpenseGroup$membersArgs<ExtArgs>
    settlements?: boolean | ExpenseGroup$settlementsArgs<ExtArgs>
    _count?: boolean | ExpenseGroupCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expenseGroup"]>

  export type ExpenseGroupSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    currency?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    archivedAt?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expenseGroup"]>

  export type ExpenseGroupSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    currency?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    archivedAt?: boolean
  }

  export type ExpenseGroupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    expenses?: boolean | ExpenseGroup$expensesArgs<ExtArgs>
    invitations?: boolean | ExpenseGroup$invitationsArgs<ExtArgs>
    members?: boolean | ExpenseGroup$membersArgs<ExtArgs>
    settlements?: boolean | ExpenseGroup$settlementsArgs<ExtArgs>
    _count?: boolean | ExpenseGroupCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ExpenseGroupIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ExpenseGroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExpenseGroup"
    objects: {
      createdBy: Prisma.$UserPayload<ExtArgs>
      expenses: Prisma.$ExpensePayload<ExtArgs>[]
      invitations: Prisma.$GroupInvitationPayload<ExtArgs>[]
      members: Prisma.$GroupMemberPayload<ExtArgs>[]
      settlements: Prisma.$SettlementPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      currency: string
      createdById: string
      createdAt: Date
      updatedAt: Date
      archivedAt: Date | null
    }, ExtArgs["result"]["expenseGroup"]>
    composites: {}
  }

  type ExpenseGroupGetPayload<S extends boolean | null | undefined | ExpenseGroupDefaultArgs> = $Result.GetResult<Prisma.$ExpenseGroupPayload, S>

  type ExpenseGroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ExpenseGroupFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ExpenseGroupCountAggregateInputType | true
    }

  export interface ExpenseGroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExpenseGroup'], meta: { name: 'ExpenseGroup' } }
    /**
     * Find zero or one ExpenseGroup that matches the filter.
     * @param {ExpenseGroupFindUniqueArgs} args - Arguments to find a ExpenseGroup
     * @example
     * // Get one ExpenseGroup
     * const expenseGroup = await prisma.expenseGroup.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExpenseGroupFindUniqueArgs>(args: SelectSubset<T, ExpenseGroupFindUniqueArgs<ExtArgs>>): Prisma__ExpenseGroupClient<$Result.GetResult<Prisma.$ExpenseGroupPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ExpenseGroup that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ExpenseGroupFindUniqueOrThrowArgs} args - Arguments to find a ExpenseGroup
     * @example
     * // Get one ExpenseGroup
     * const expenseGroup = await prisma.expenseGroup.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExpenseGroupFindUniqueOrThrowArgs>(args: SelectSubset<T, ExpenseGroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExpenseGroupClient<$Result.GetResult<Prisma.$ExpenseGroupPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ExpenseGroup that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseGroupFindFirstArgs} args - Arguments to find a ExpenseGroup
     * @example
     * // Get one ExpenseGroup
     * const expenseGroup = await prisma.expenseGroup.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExpenseGroupFindFirstArgs>(args?: SelectSubset<T, ExpenseGroupFindFirstArgs<ExtArgs>>): Prisma__ExpenseGroupClient<$Result.GetResult<Prisma.$ExpenseGroupPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ExpenseGroup that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseGroupFindFirstOrThrowArgs} args - Arguments to find a ExpenseGroup
     * @example
     * // Get one ExpenseGroup
     * const expenseGroup = await prisma.expenseGroup.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExpenseGroupFindFirstOrThrowArgs>(args?: SelectSubset<T, ExpenseGroupFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExpenseGroupClient<$Result.GetResult<Prisma.$ExpenseGroupPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ExpenseGroups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseGroupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExpenseGroups
     * const expenseGroups = await prisma.expenseGroup.findMany()
     * 
     * // Get first 10 ExpenseGroups
     * const expenseGroups = await prisma.expenseGroup.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const expenseGroupWithIdOnly = await prisma.expenseGroup.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExpenseGroupFindManyArgs>(args?: SelectSubset<T, ExpenseGroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpenseGroupPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ExpenseGroup.
     * @param {ExpenseGroupCreateArgs} args - Arguments to create a ExpenseGroup.
     * @example
     * // Create one ExpenseGroup
     * const ExpenseGroup = await prisma.expenseGroup.create({
     *   data: {
     *     // ... data to create a ExpenseGroup
     *   }
     * })
     * 
     */
    create<T extends ExpenseGroupCreateArgs>(args: SelectSubset<T, ExpenseGroupCreateArgs<ExtArgs>>): Prisma__ExpenseGroupClient<$Result.GetResult<Prisma.$ExpenseGroupPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ExpenseGroups.
     * @param {ExpenseGroupCreateManyArgs} args - Arguments to create many ExpenseGroups.
     * @example
     * // Create many ExpenseGroups
     * const expenseGroup = await prisma.expenseGroup.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExpenseGroupCreateManyArgs>(args?: SelectSubset<T, ExpenseGroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ExpenseGroups and returns the data saved in the database.
     * @param {ExpenseGroupCreateManyAndReturnArgs} args - Arguments to create many ExpenseGroups.
     * @example
     * // Create many ExpenseGroups
     * const expenseGroup = await prisma.expenseGroup.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ExpenseGroups and only return the `id`
     * const expenseGroupWithIdOnly = await prisma.expenseGroup.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExpenseGroupCreateManyAndReturnArgs>(args?: SelectSubset<T, ExpenseGroupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpenseGroupPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ExpenseGroup.
     * @param {ExpenseGroupDeleteArgs} args - Arguments to delete one ExpenseGroup.
     * @example
     * // Delete one ExpenseGroup
     * const ExpenseGroup = await prisma.expenseGroup.delete({
     *   where: {
     *     // ... filter to delete one ExpenseGroup
     *   }
     * })
     * 
     */
    delete<T extends ExpenseGroupDeleteArgs>(args: SelectSubset<T, ExpenseGroupDeleteArgs<ExtArgs>>): Prisma__ExpenseGroupClient<$Result.GetResult<Prisma.$ExpenseGroupPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ExpenseGroup.
     * @param {ExpenseGroupUpdateArgs} args - Arguments to update one ExpenseGroup.
     * @example
     * // Update one ExpenseGroup
     * const expenseGroup = await prisma.expenseGroup.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExpenseGroupUpdateArgs>(args: SelectSubset<T, ExpenseGroupUpdateArgs<ExtArgs>>): Prisma__ExpenseGroupClient<$Result.GetResult<Prisma.$ExpenseGroupPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ExpenseGroups.
     * @param {ExpenseGroupDeleteManyArgs} args - Arguments to filter ExpenseGroups to delete.
     * @example
     * // Delete a few ExpenseGroups
     * const { count } = await prisma.expenseGroup.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExpenseGroupDeleteManyArgs>(args?: SelectSubset<T, ExpenseGroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExpenseGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseGroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExpenseGroups
     * const expenseGroup = await prisma.expenseGroup.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExpenseGroupUpdateManyArgs>(args: SelectSubset<T, ExpenseGroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ExpenseGroup.
     * @param {ExpenseGroupUpsertArgs} args - Arguments to update or create a ExpenseGroup.
     * @example
     * // Update or create a ExpenseGroup
     * const expenseGroup = await prisma.expenseGroup.upsert({
     *   create: {
     *     // ... data to create a ExpenseGroup
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExpenseGroup we want to update
     *   }
     * })
     */
    upsert<T extends ExpenseGroupUpsertArgs>(args: SelectSubset<T, ExpenseGroupUpsertArgs<ExtArgs>>): Prisma__ExpenseGroupClient<$Result.GetResult<Prisma.$ExpenseGroupPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ExpenseGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseGroupCountArgs} args - Arguments to filter ExpenseGroups to count.
     * @example
     * // Count the number of ExpenseGroups
     * const count = await prisma.expenseGroup.count({
     *   where: {
     *     // ... the filter for the ExpenseGroups we want to count
     *   }
     * })
    **/
    count<T extends ExpenseGroupCountArgs>(
      args?: Subset<T, ExpenseGroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExpenseGroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExpenseGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseGroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExpenseGroupAggregateArgs>(args: Subset<T, ExpenseGroupAggregateArgs>): Prisma.PrismaPromise<GetExpenseGroupAggregateType<T>>

    /**
     * Group by ExpenseGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseGroupGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExpenseGroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExpenseGroupGroupByArgs['orderBy'] }
        : { orderBy?: ExpenseGroupGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExpenseGroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExpenseGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExpenseGroup model
   */
  readonly fields: ExpenseGroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExpenseGroup.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExpenseGroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    expenses<T extends ExpenseGroup$expensesArgs<ExtArgs> = {}>(args?: Subset<T, ExpenseGroup$expensesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findMany"> | Null>
    invitations<T extends ExpenseGroup$invitationsArgs<ExtArgs> = {}>(args?: Subset<T, ExpenseGroup$invitationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupInvitationPayload<ExtArgs>, T, "findMany"> | Null>
    members<T extends ExpenseGroup$membersArgs<ExtArgs> = {}>(args?: Subset<T, ExpenseGroup$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "findMany"> | Null>
    settlements<T extends ExpenseGroup$settlementsArgs<ExtArgs> = {}>(args?: Subset<T, ExpenseGroup$settlementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettlementPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ExpenseGroup model
   */ 
  interface ExpenseGroupFieldRefs {
    readonly id: FieldRef<"ExpenseGroup", 'String'>
    readonly name: FieldRef<"ExpenseGroup", 'String'>
    readonly description: FieldRef<"ExpenseGroup", 'String'>
    readonly currency: FieldRef<"ExpenseGroup", 'String'>
    readonly createdById: FieldRef<"ExpenseGroup", 'String'>
    readonly createdAt: FieldRef<"ExpenseGroup", 'DateTime'>
    readonly updatedAt: FieldRef<"ExpenseGroup", 'DateTime'>
    readonly archivedAt: FieldRef<"ExpenseGroup", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ExpenseGroup findUnique
   */
  export type ExpenseGroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseGroup
     */
    select?: ExpenseGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseGroupInclude<ExtArgs> | null
    /**
     * Filter, which ExpenseGroup to fetch.
     */
    where: ExpenseGroupWhereUniqueInput
  }

  /**
   * ExpenseGroup findUniqueOrThrow
   */
  export type ExpenseGroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseGroup
     */
    select?: ExpenseGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseGroupInclude<ExtArgs> | null
    /**
     * Filter, which ExpenseGroup to fetch.
     */
    where: ExpenseGroupWhereUniqueInput
  }

  /**
   * ExpenseGroup findFirst
   */
  export type ExpenseGroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseGroup
     */
    select?: ExpenseGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseGroupInclude<ExtArgs> | null
    /**
     * Filter, which ExpenseGroup to fetch.
     */
    where?: ExpenseGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpenseGroups to fetch.
     */
    orderBy?: ExpenseGroupOrderByWithRelationInput | ExpenseGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExpenseGroups.
     */
    cursor?: ExpenseGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpenseGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpenseGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExpenseGroups.
     */
    distinct?: ExpenseGroupScalarFieldEnum | ExpenseGroupScalarFieldEnum[]
  }

  /**
   * ExpenseGroup findFirstOrThrow
   */
  export type ExpenseGroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseGroup
     */
    select?: ExpenseGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseGroupInclude<ExtArgs> | null
    /**
     * Filter, which ExpenseGroup to fetch.
     */
    where?: ExpenseGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpenseGroups to fetch.
     */
    orderBy?: ExpenseGroupOrderByWithRelationInput | ExpenseGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExpenseGroups.
     */
    cursor?: ExpenseGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpenseGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpenseGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExpenseGroups.
     */
    distinct?: ExpenseGroupScalarFieldEnum | ExpenseGroupScalarFieldEnum[]
  }

  /**
   * ExpenseGroup findMany
   */
  export type ExpenseGroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseGroup
     */
    select?: ExpenseGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseGroupInclude<ExtArgs> | null
    /**
     * Filter, which ExpenseGroups to fetch.
     */
    where?: ExpenseGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpenseGroups to fetch.
     */
    orderBy?: ExpenseGroupOrderByWithRelationInput | ExpenseGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExpenseGroups.
     */
    cursor?: ExpenseGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpenseGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpenseGroups.
     */
    skip?: number
    distinct?: ExpenseGroupScalarFieldEnum | ExpenseGroupScalarFieldEnum[]
  }

  /**
   * ExpenseGroup create
   */
  export type ExpenseGroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseGroup
     */
    select?: ExpenseGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseGroupInclude<ExtArgs> | null
    /**
     * The data needed to create a ExpenseGroup.
     */
    data: XOR<ExpenseGroupCreateInput, ExpenseGroupUncheckedCreateInput>
  }

  /**
   * ExpenseGroup createMany
   */
  export type ExpenseGroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExpenseGroups.
     */
    data: ExpenseGroupCreateManyInput | ExpenseGroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExpenseGroup createManyAndReturn
   */
  export type ExpenseGroupCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseGroup
     */
    select?: ExpenseGroupSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ExpenseGroups.
     */
    data: ExpenseGroupCreateManyInput | ExpenseGroupCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseGroupIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExpenseGroup update
   */
  export type ExpenseGroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseGroup
     */
    select?: ExpenseGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseGroupInclude<ExtArgs> | null
    /**
     * The data needed to update a ExpenseGroup.
     */
    data: XOR<ExpenseGroupUpdateInput, ExpenseGroupUncheckedUpdateInput>
    /**
     * Choose, which ExpenseGroup to update.
     */
    where: ExpenseGroupWhereUniqueInput
  }

  /**
   * ExpenseGroup updateMany
   */
  export type ExpenseGroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExpenseGroups.
     */
    data: XOR<ExpenseGroupUpdateManyMutationInput, ExpenseGroupUncheckedUpdateManyInput>
    /**
     * Filter which ExpenseGroups to update
     */
    where?: ExpenseGroupWhereInput
  }

  /**
   * ExpenseGroup upsert
   */
  export type ExpenseGroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseGroup
     */
    select?: ExpenseGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseGroupInclude<ExtArgs> | null
    /**
     * The filter to search for the ExpenseGroup to update in case it exists.
     */
    where: ExpenseGroupWhereUniqueInput
    /**
     * In case the ExpenseGroup found by the `where` argument doesn't exist, create a new ExpenseGroup with this data.
     */
    create: XOR<ExpenseGroupCreateInput, ExpenseGroupUncheckedCreateInput>
    /**
     * In case the ExpenseGroup was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExpenseGroupUpdateInput, ExpenseGroupUncheckedUpdateInput>
  }

  /**
   * ExpenseGroup delete
   */
  export type ExpenseGroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseGroup
     */
    select?: ExpenseGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseGroupInclude<ExtArgs> | null
    /**
     * Filter which ExpenseGroup to delete.
     */
    where: ExpenseGroupWhereUniqueInput
  }

  /**
   * ExpenseGroup deleteMany
   */
  export type ExpenseGroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExpenseGroups to delete
     */
    where?: ExpenseGroupWhereInput
  }

  /**
   * ExpenseGroup.expenses
   */
  export type ExpenseGroup$expensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    where?: ExpenseWhereInput
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    cursor?: ExpenseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * ExpenseGroup.invitations
   */
  export type ExpenseGroup$invitationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupInvitation
     */
    select?: GroupInvitationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInvitationInclude<ExtArgs> | null
    where?: GroupInvitationWhereInput
    orderBy?: GroupInvitationOrderByWithRelationInput | GroupInvitationOrderByWithRelationInput[]
    cursor?: GroupInvitationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupInvitationScalarFieldEnum | GroupInvitationScalarFieldEnum[]
  }

  /**
   * ExpenseGroup.members
   */
  export type ExpenseGroup$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    where?: GroupMemberWhereInput
    orderBy?: GroupMemberOrderByWithRelationInput | GroupMemberOrderByWithRelationInput[]
    cursor?: GroupMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupMemberScalarFieldEnum | GroupMemberScalarFieldEnum[]
  }

  /**
   * ExpenseGroup.settlements
   */
  export type ExpenseGroup$settlementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settlement
     */
    select?: SettlementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettlementInclude<ExtArgs> | null
    where?: SettlementWhereInput
    orderBy?: SettlementOrderByWithRelationInput | SettlementOrderByWithRelationInput[]
    cursor?: SettlementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SettlementScalarFieldEnum | SettlementScalarFieldEnum[]
  }

  /**
   * ExpenseGroup without action
   */
  export type ExpenseGroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseGroup
     */
    select?: ExpenseGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseGroupInclude<ExtArgs> | null
  }


  /**
   * Model GroupMember
   */

  export type AggregateGroupMember = {
    _count: GroupMemberCountAggregateOutputType | null
    _min: GroupMemberMinAggregateOutputType | null
    _max: GroupMemberMaxAggregateOutputType | null
  }

  export type GroupMemberMinAggregateOutputType = {
    id: string | null
    groupId: string | null
    userId: string | null
    role: string | null
    status: string | null
    joinedAt: Date | null
  }

  export type GroupMemberMaxAggregateOutputType = {
    id: string | null
    groupId: string | null
    userId: string | null
    role: string | null
    status: string | null
    joinedAt: Date | null
  }

  export type GroupMemberCountAggregateOutputType = {
    id: number
    groupId: number
    userId: number
    role: number
    status: number
    joinedAt: number
    _all: number
  }


  export type GroupMemberMinAggregateInputType = {
    id?: true
    groupId?: true
    userId?: true
    role?: true
    status?: true
    joinedAt?: true
  }

  export type GroupMemberMaxAggregateInputType = {
    id?: true
    groupId?: true
    userId?: true
    role?: true
    status?: true
    joinedAt?: true
  }

  export type GroupMemberCountAggregateInputType = {
    id?: true
    groupId?: true
    userId?: true
    role?: true
    status?: true
    joinedAt?: true
    _all?: true
  }

  export type GroupMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GroupMember to aggregate.
     */
    where?: GroupMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupMembers to fetch.
     */
    orderBy?: GroupMemberOrderByWithRelationInput | GroupMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroupMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GroupMembers
    **/
    _count?: true | GroupMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupMemberMaxAggregateInputType
  }

  export type GetGroupMemberAggregateType<T extends GroupMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateGroupMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroupMember[P]>
      : GetScalarType<T[P], AggregateGroupMember[P]>
  }




  export type GroupMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupMemberWhereInput
    orderBy?: GroupMemberOrderByWithAggregationInput | GroupMemberOrderByWithAggregationInput[]
    by: GroupMemberScalarFieldEnum[] | GroupMemberScalarFieldEnum
    having?: GroupMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupMemberCountAggregateInputType | true
    _min?: GroupMemberMinAggregateInputType
    _max?: GroupMemberMaxAggregateInputType
  }

  export type GroupMemberGroupByOutputType = {
    id: string
    groupId: string
    userId: string
    role: string
    status: string
    joinedAt: Date
    _count: GroupMemberCountAggregateOutputType | null
    _min: GroupMemberMinAggregateOutputType | null
    _max: GroupMemberMaxAggregateOutputType | null
  }

  type GetGroupMemberGroupByPayload<T extends GroupMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupMemberGroupByOutputType[P]>
            : GetScalarType<T[P], GroupMemberGroupByOutputType[P]>
        }
      >
    >


  export type GroupMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupId?: boolean
    userId?: boolean
    role?: boolean
    status?: boolean
    joinedAt?: boolean
    group?: boolean | ExpenseGroupDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupMember"]>

  export type GroupMemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupId?: boolean
    userId?: boolean
    role?: boolean
    status?: boolean
    joinedAt?: boolean
    group?: boolean | ExpenseGroupDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupMember"]>

  export type GroupMemberSelectScalar = {
    id?: boolean
    groupId?: boolean
    userId?: boolean
    role?: boolean
    status?: boolean
    joinedAt?: boolean
  }

  export type GroupMemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | ExpenseGroupDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GroupMemberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | ExpenseGroupDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $GroupMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GroupMember"
    objects: {
      group: Prisma.$ExpenseGroupPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      groupId: string
      userId: string
      role: string
      status: string
      joinedAt: Date
    }, ExtArgs["result"]["groupMember"]>
    composites: {}
  }

  type GroupMemberGetPayload<S extends boolean | null | undefined | GroupMemberDefaultArgs> = $Result.GetResult<Prisma.$GroupMemberPayload, S>

  type GroupMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<GroupMemberFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: GroupMemberCountAggregateInputType | true
    }

  export interface GroupMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GroupMember'], meta: { name: 'GroupMember' } }
    /**
     * Find zero or one GroupMember that matches the filter.
     * @param {GroupMemberFindUniqueArgs} args - Arguments to find a GroupMember
     * @example
     * // Get one GroupMember
     * const groupMember = await prisma.groupMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GroupMemberFindUniqueArgs>(args: SelectSubset<T, GroupMemberFindUniqueArgs<ExtArgs>>): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one GroupMember that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {GroupMemberFindUniqueOrThrowArgs} args - Arguments to find a GroupMember
     * @example
     * // Get one GroupMember
     * const groupMember = await prisma.groupMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GroupMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, GroupMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first GroupMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberFindFirstArgs} args - Arguments to find a GroupMember
     * @example
     * // Get one GroupMember
     * const groupMember = await prisma.groupMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GroupMemberFindFirstArgs>(args?: SelectSubset<T, GroupMemberFindFirstArgs<ExtArgs>>): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first GroupMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberFindFirstOrThrowArgs} args - Arguments to find a GroupMember
     * @example
     * // Get one GroupMember
     * const groupMember = await prisma.groupMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GroupMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, GroupMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more GroupMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GroupMembers
     * const groupMembers = await prisma.groupMember.findMany()
     * 
     * // Get first 10 GroupMembers
     * const groupMembers = await prisma.groupMember.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groupMemberWithIdOnly = await prisma.groupMember.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GroupMemberFindManyArgs>(args?: SelectSubset<T, GroupMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a GroupMember.
     * @param {GroupMemberCreateArgs} args - Arguments to create a GroupMember.
     * @example
     * // Create one GroupMember
     * const GroupMember = await prisma.groupMember.create({
     *   data: {
     *     // ... data to create a GroupMember
     *   }
     * })
     * 
     */
    create<T extends GroupMemberCreateArgs>(args: SelectSubset<T, GroupMemberCreateArgs<ExtArgs>>): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many GroupMembers.
     * @param {GroupMemberCreateManyArgs} args - Arguments to create many GroupMembers.
     * @example
     * // Create many GroupMembers
     * const groupMember = await prisma.groupMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GroupMemberCreateManyArgs>(args?: SelectSubset<T, GroupMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GroupMembers and returns the data saved in the database.
     * @param {GroupMemberCreateManyAndReturnArgs} args - Arguments to create many GroupMembers.
     * @example
     * // Create many GroupMembers
     * const groupMember = await prisma.groupMember.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GroupMembers and only return the `id`
     * const groupMemberWithIdOnly = await prisma.groupMember.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GroupMemberCreateManyAndReturnArgs>(args?: SelectSubset<T, GroupMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a GroupMember.
     * @param {GroupMemberDeleteArgs} args - Arguments to delete one GroupMember.
     * @example
     * // Delete one GroupMember
     * const GroupMember = await prisma.groupMember.delete({
     *   where: {
     *     // ... filter to delete one GroupMember
     *   }
     * })
     * 
     */
    delete<T extends GroupMemberDeleteArgs>(args: SelectSubset<T, GroupMemberDeleteArgs<ExtArgs>>): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one GroupMember.
     * @param {GroupMemberUpdateArgs} args - Arguments to update one GroupMember.
     * @example
     * // Update one GroupMember
     * const groupMember = await prisma.groupMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GroupMemberUpdateArgs>(args: SelectSubset<T, GroupMemberUpdateArgs<ExtArgs>>): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more GroupMembers.
     * @param {GroupMemberDeleteManyArgs} args - Arguments to filter GroupMembers to delete.
     * @example
     * // Delete a few GroupMembers
     * const { count } = await prisma.groupMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GroupMemberDeleteManyArgs>(args?: SelectSubset<T, GroupMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GroupMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GroupMembers
     * const groupMember = await prisma.groupMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GroupMemberUpdateManyArgs>(args: SelectSubset<T, GroupMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GroupMember.
     * @param {GroupMemberUpsertArgs} args - Arguments to update or create a GroupMember.
     * @example
     * // Update or create a GroupMember
     * const groupMember = await prisma.groupMember.upsert({
     *   create: {
     *     // ... data to create a GroupMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GroupMember we want to update
     *   }
     * })
     */
    upsert<T extends GroupMemberUpsertArgs>(args: SelectSubset<T, GroupMemberUpsertArgs<ExtArgs>>): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of GroupMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberCountArgs} args - Arguments to filter GroupMembers to count.
     * @example
     * // Count the number of GroupMembers
     * const count = await prisma.groupMember.count({
     *   where: {
     *     // ... the filter for the GroupMembers we want to count
     *   }
     * })
    **/
    count<T extends GroupMemberCountArgs>(
      args?: Subset<T, GroupMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GroupMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GroupMemberAggregateArgs>(args: Subset<T, GroupMemberAggregateArgs>): Prisma.PrismaPromise<GetGroupMemberAggregateType<T>>

    /**
     * Group by GroupMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GroupMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupMemberGroupByArgs['orderBy'] }
        : { orderBy?: GroupMemberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GroupMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GroupMember model
   */
  readonly fields: GroupMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GroupMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroupMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    group<T extends ExpenseGroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExpenseGroupDefaultArgs<ExtArgs>>): Prisma__ExpenseGroupClient<$Result.GetResult<Prisma.$ExpenseGroupPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GroupMember model
   */ 
  interface GroupMemberFieldRefs {
    readonly id: FieldRef<"GroupMember", 'String'>
    readonly groupId: FieldRef<"GroupMember", 'String'>
    readonly userId: FieldRef<"GroupMember", 'String'>
    readonly role: FieldRef<"GroupMember", 'String'>
    readonly status: FieldRef<"GroupMember", 'String'>
    readonly joinedAt: FieldRef<"GroupMember", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GroupMember findUnique
   */
  export type GroupMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * Filter, which GroupMember to fetch.
     */
    where: GroupMemberWhereUniqueInput
  }

  /**
   * GroupMember findUniqueOrThrow
   */
  export type GroupMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * Filter, which GroupMember to fetch.
     */
    where: GroupMemberWhereUniqueInput
  }

  /**
   * GroupMember findFirst
   */
  export type GroupMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * Filter, which GroupMember to fetch.
     */
    where?: GroupMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupMembers to fetch.
     */
    orderBy?: GroupMemberOrderByWithRelationInput | GroupMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroupMembers.
     */
    cursor?: GroupMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupMembers.
     */
    distinct?: GroupMemberScalarFieldEnum | GroupMemberScalarFieldEnum[]
  }

  /**
   * GroupMember findFirstOrThrow
   */
  export type GroupMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * Filter, which GroupMember to fetch.
     */
    where?: GroupMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupMembers to fetch.
     */
    orderBy?: GroupMemberOrderByWithRelationInput | GroupMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroupMembers.
     */
    cursor?: GroupMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupMembers.
     */
    distinct?: GroupMemberScalarFieldEnum | GroupMemberScalarFieldEnum[]
  }

  /**
   * GroupMember findMany
   */
  export type GroupMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * Filter, which GroupMembers to fetch.
     */
    where?: GroupMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupMembers to fetch.
     */
    orderBy?: GroupMemberOrderByWithRelationInput | GroupMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GroupMembers.
     */
    cursor?: GroupMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupMembers.
     */
    skip?: number
    distinct?: GroupMemberScalarFieldEnum | GroupMemberScalarFieldEnum[]
  }

  /**
   * GroupMember create
   */
  export type GroupMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * The data needed to create a GroupMember.
     */
    data: XOR<GroupMemberCreateInput, GroupMemberUncheckedCreateInput>
  }

  /**
   * GroupMember createMany
   */
  export type GroupMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GroupMembers.
     */
    data: GroupMemberCreateManyInput | GroupMemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GroupMember createManyAndReturn
   */
  export type GroupMemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many GroupMembers.
     */
    data: GroupMemberCreateManyInput | GroupMemberCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GroupMember update
   */
  export type GroupMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * The data needed to update a GroupMember.
     */
    data: XOR<GroupMemberUpdateInput, GroupMemberUncheckedUpdateInput>
    /**
     * Choose, which GroupMember to update.
     */
    where: GroupMemberWhereUniqueInput
  }

  /**
   * GroupMember updateMany
   */
  export type GroupMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GroupMembers.
     */
    data: XOR<GroupMemberUpdateManyMutationInput, GroupMemberUncheckedUpdateManyInput>
    /**
     * Filter which GroupMembers to update
     */
    where?: GroupMemberWhereInput
  }

  /**
   * GroupMember upsert
   */
  export type GroupMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * The filter to search for the GroupMember to update in case it exists.
     */
    where: GroupMemberWhereUniqueInput
    /**
     * In case the GroupMember found by the `where` argument doesn't exist, create a new GroupMember with this data.
     */
    create: XOR<GroupMemberCreateInput, GroupMemberUncheckedCreateInput>
    /**
     * In case the GroupMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroupMemberUpdateInput, GroupMemberUncheckedUpdateInput>
  }

  /**
   * GroupMember delete
   */
  export type GroupMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * Filter which GroupMember to delete.
     */
    where: GroupMemberWhereUniqueInput
  }

  /**
   * GroupMember deleteMany
   */
  export type GroupMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GroupMembers to delete
     */
    where?: GroupMemberWhereInput
  }

  /**
   * GroupMember without action
   */
  export type GroupMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
  }


  /**
   * Model GroupInvitation
   */

  export type AggregateGroupInvitation = {
    _count: GroupInvitationCountAggregateOutputType | null
    _min: GroupInvitationMinAggregateOutputType | null
    _max: GroupInvitationMaxAggregateOutputType | null
  }

  export type GroupInvitationMinAggregateOutputType = {
    id: string | null
    groupId: string | null
    invitedPhoneNumber: string | null
    invitedUserId: string | null
    invitedById: string | null
    status: string | null
    createdAt: Date | null
    expiresAt: Date | null
  }

  export type GroupInvitationMaxAggregateOutputType = {
    id: string | null
    groupId: string | null
    invitedPhoneNumber: string | null
    invitedUserId: string | null
    invitedById: string | null
    status: string | null
    createdAt: Date | null
    expiresAt: Date | null
  }

  export type GroupInvitationCountAggregateOutputType = {
    id: number
    groupId: number
    invitedPhoneNumber: number
    invitedUserId: number
    invitedById: number
    status: number
    createdAt: number
    expiresAt: number
    _all: number
  }


  export type GroupInvitationMinAggregateInputType = {
    id?: true
    groupId?: true
    invitedPhoneNumber?: true
    invitedUserId?: true
    invitedById?: true
    status?: true
    createdAt?: true
    expiresAt?: true
  }

  export type GroupInvitationMaxAggregateInputType = {
    id?: true
    groupId?: true
    invitedPhoneNumber?: true
    invitedUserId?: true
    invitedById?: true
    status?: true
    createdAt?: true
    expiresAt?: true
  }

  export type GroupInvitationCountAggregateInputType = {
    id?: true
    groupId?: true
    invitedPhoneNumber?: true
    invitedUserId?: true
    invitedById?: true
    status?: true
    createdAt?: true
    expiresAt?: true
    _all?: true
  }

  export type GroupInvitationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GroupInvitation to aggregate.
     */
    where?: GroupInvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupInvitations to fetch.
     */
    orderBy?: GroupInvitationOrderByWithRelationInput | GroupInvitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroupInvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupInvitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupInvitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GroupInvitations
    **/
    _count?: true | GroupInvitationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupInvitationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupInvitationMaxAggregateInputType
  }

  export type GetGroupInvitationAggregateType<T extends GroupInvitationAggregateArgs> = {
        [P in keyof T & keyof AggregateGroupInvitation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroupInvitation[P]>
      : GetScalarType<T[P], AggregateGroupInvitation[P]>
  }




  export type GroupInvitationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupInvitationWhereInput
    orderBy?: GroupInvitationOrderByWithAggregationInput | GroupInvitationOrderByWithAggregationInput[]
    by: GroupInvitationScalarFieldEnum[] | GroupInvitationScalarFieldEnum
    having?: GroupInvitationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupInvitationCountAggregateInputType | true
    _min?: GroupInvitationMinAggregateInputType
    _max?: GroupInvitationMaxAggregateInputType
  }

  export type GroupInvitationGroupByOutputType = {
    id: string
    groupId: string
    invitedPhoneNumber: string
    invitedUserId: string | null
    invitedById: string
    status: string
    createdAt: Date
    expiresAt: Date
    _count: GroupInvitationCountAggregateOutputType | null
    _min: GroupInvitationMinAggregateOutputType | null
    _max: GroupInvitationMaxAggregateOutputType | null
  }

  type GetGroupInvitationGroupByPayload<T extends GroupInvitationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupInvitationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupInvitationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupInvitationGroupByOutputType[P]>
            : GetScalarType<T[P], GroupInvitationGroupByOutputType[P]>
        }
      >
    >


  export type GroupInvitationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupId?: boolean
    invitedPhoneNumber?: boolean
    invitedUserId?: boolean
    invitedById?: boolean
    status?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    group?: boolean | ExpenseGroupDefaultArgs<ExtArgs>
    invitedBy?: boolean | UserDefaultArgs<ExtArgs>
    invitedUser?: boolean | GroupInvitation$invitedUserArgs<ExtArgs>
  }, ExtArgs["result"]["groupInvitation"]>

  export type GroupInvitationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupId?: boolean
    invitedPhoneNumber?: boolean
    invitedUserId?: boolean
    invitedById?: boolean
    status?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    group?: boolean | ExpenseGroupDefaultArgs<ExtArgs>
    invitedBy?: boolean | UserDefaultArgs<ExtArgs>
    invitedUser?: boolean | GroupInvitation$invitedUserArgs<ExtArgs>
  }, ExtArgs["result"]["groupInvitation"]>

  export type GroupInvitationSelectScalar = {
    id?: boolean
    groupId?: boolean
    invitedPhoneNumber?: boolean
    invitedUserId?: boolean
    invitedById?: boolean
    status?: boolean
    createdAt?: boolean
    expiresAt?: boolean
  }

  export type GroupInvitationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | ExpenseGroupDefaultArgs<ExtArgs>
    invitedBy?: boolean | UserDefaultArgs<ExtArgs>
    invitedUser?: boolean | GroupInvitation$invitedUserArgs<ExtArgs>
  }
  export type GroupInvitationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | ExpenseGroupDefaultArgs<ExtArgs>
    invitedBy?: boolean | UserDefaultArgs<ExtArgs>
    invitedUser?: boolean | GroupInvitation$invitedUserArgs<ExtArgs>
  }

  export type $GroupInvitationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GroupInvitation"
    objects: {
      group: Prisma.$ExpenseGroupPayload<ExtArgs>
      invitedBy: Prisma.$UserPayload<ExtArgs>
      invitedUser: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      groupId: string
      invitedPhoneNumber: string
      invitedUserId: string | null
      invitedById: string
      status: string
      createdAt: Date
      expiresAt: Date
    }, ExtArgs["result"]["groupInvitation"]>
    composites: {}
  }

  type GroupInvitationGetPayload<S extends boolean | null | undefined | GroupInvitationDefaultArgs> = $Result.GetResult<Prisma.$GroupInvitationPayload, S>

  type GroupInvitationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<GroupInvitationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: GroupInvitationCountAggregateInputType | true
    }

  export interface GroupInvitationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GroupInvitation'], meta: { name: 'GroupInvitation' } }
    /**
     * Find zero or one GroupInvitation that matches the filter.
     * @param {GroupInvitationFindUniqueArgs} args - Arguments to find a GroupInvitation
     * @example
     * // Get one GroupInvitation
     * const groupInvitation = await prisma.groupInvitation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GroupInvitationFindUniqueArgs>(args: SelectSubset<T, GroupInvitationFindUniqueArgs<ExtArgs>>): Prisma__GroupInvitationClient<$Result.GetResult<Prisma.$GroupInvitationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one GroupInvitation that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {GroupInvitationFindUniqueOrThrowArgs} args - Arguments to find a GroupInvitation
     * @example
     * // Get one GroupInvitation
     * const groupInvitation = await prisma.groupInvitation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GroupInvitationFindUniqueOrThrowArgs>(args: SelectSubset<T, GroupInvitationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GroupInvitationClient<$Result.GetResult<Prisma.$GroupInvitationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first GroupInvitation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupInvitationFindFirstArgs} args - Arguments to find a GroupInvitation
     * @example
     * // Get one GroupInvitation
     * const groupInvitation = await prisma.groupInvitation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GroupInvitationFindFirstArgs>(args?: SelectSubset<T, GroupInvitationFindFirstArgs<ExtArgs>>): Prisma__GroupInvitationClient<$Result.GetResult<Prisma.$GroupInvitationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first GroupInvitation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupInvitationFindFirstOrThrowArgs} args - Arguments to find a GroupInvitation
     * @example
     * // Get one GroupInvitation
     * const groupInvitation = await prisma.groupInvitation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GroupInvitationFindFirstOrThrowArgs>(args?: SelectSubset<T, GroupInvitationFindFirstOrThrowArgs<ExtArgs>>): Prisma__GroupInvitationClient<$Result.GetResult<Prisma.$GroupInvitationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more GroupInvitations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupInvitationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GroupInvitations
     * const groupInvitations = await prisma.groupInvitation.findMany()
     * 
     * // Get first 10 GroupInvitations
     * const groupInvitations = await prisma.groupInvitation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groupInvitationWithIdOnly = await prisma.groupInvitation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GroupInvitationFindManyArgs>(args?: SelectSubset<T, GroupInvitationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupInvitationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a GroupInvitation.
     * @param {GroupInvitationCreateArgs} args - Arguments to create a GroupInvitation.
     * @example
     * // Create one GroupInvitation
     * const GroupInvitation = await prisma.groupInvitation.create({
     *   data: {
     *     // ... data to create a GroupInvitation
     *   }
     * })
     * 
     */
    create<T extends GroupInvitationCreateArgs>(args: SelectSubset<T, GroupInvitationCreateArgs<ExtArgs>>): Prisma__GroupInvitationClient<$Result.GetResult<Prisma.$GroupInvitationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many GroupInvitations.
     * @param {GroupInvitationCreateManyArgs} args - Arguments to create many GroupInvitations.
     * @example
     * // Create many GroupInvitations
     * const groupInvitation = await prisma.groupInvitation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GroupInvitationCreateManyArgs>(args?: SelectSubset<T, GroupInvitationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GroupInvitations and returns the data saved in the database.
     * @param {GroupInvitationCreateManyAndReturnArgs} args - Arguments to create many GroupInvitations.
     * @example
     * // Create many GroupInvitations
     * const groupInvitation = await prisma.groupInvitation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GroupInvitations and only return the `id`
     * const groupInvitationWithIdOnly = await prisma.groupInvitation.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GroupInvitationCreateManyAndReturnArgs>(args?: SelectSubset<T, GroupInvitationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupInvitationPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a GroupInvitation.
     * @param {GroupInvitationDeleteArgs} args - Arguments to delete one GroupInvitation.
     * @example
     * // Delete one GroupInvitation
     * const GroupInvitation = await prisma.groupInvitation.delete({
     *   where: {
     *     // ... filter to delete one GroupInvitation
     *   }
     * })
     * 
     */
    delete<T extends GroupInvitationDeleteArgs>(args: SelectSubset<T, GroupInvitationDeleteArgs<ExtArgs>>): Prisma__GroupInvitationClient<$Result.GetResult<Prisma.$GroupInvitationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one GroupInvitation.
     * @param {GroupInvitationUpdateArgs} args - Arguments to update one GroupInvitation.
     * @example
     * // Update one GroupInvitation
     * const groupInvitation = await prisma.groupInvitation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GroupInvitationUpdateArgs>(args: SelectSubset<T, GroupInvitationUpdateArgs<ExtArgs>>): Prisma__GroupInvitationClient<$Result.GetResult<Prisma.$GroupInvitationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more GroupInvitations.
     * @param {GroupInvitationDeleteManyArgs} args - Arguments to filter GroupInvitations to delete.
     * @example
     * // Delete a few GroupInvitations
     * const { count } = await prisma.groupInvitation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GroupInvitationDeleteManyArgs>(args?: SelectSubset<T, GroupInvitationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GroupInvitations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupInvitationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GroupInvitations
     * const groupInvitation = await prisma.groupInvitation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GroupInvitationUpdateManyArgs>(args: SelectSubset<T, GroupInvitationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GroupInvitation.
     * @param {GroupInvitationUpsertArgs} args - Arguments to update or create a GroupInvitation.
     * @example
     * // Update or create a GroupInvitation
     * const groupInvitation = await prisma.groupInvitation.upsert({
     *   create: {
     *     // ... data to create a GroupInvitation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GroupInvitation we want to update
     *   }
     * })
     */
    upsert<T extends GroupInvitationUpsertArgs>(args: SelectSubset<T, GroupInvitationUpsertArgs<ExtArgs>>): Prisma__GroupInvitationClient<$Result.GetResult<Prisma.$GroupInvitationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of GroupInvitations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupInvitationCountArgs} args - Arguments to filter GroupInvitations to count.
     * @example
     * // Count the number of GroupInvitations
     * const count = await prisma.groupInvitation.count({
     *   where: {
     *     // ... the filter for the GroupInvitations we want to count
     *   }
     * })
    **/
    count<T extends GroupInvitationCountArgs>(
      args?: Subset<T, GroupInvitationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupInvitationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GroupInvitation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupInvitationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GroupInvitationAggregateArgs>(args: Subset<T, GroupInvitationAggregateArgs>): Prisma.PrismaPromise<GetGroupInvitationAggregateType<T>>

    /**
     * Group by GroupInvitation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupInvitationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GroupInvitationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupInvitationGroupByArgs['orderBy'] }
        : { orderBy?: GroupInvitationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GroupInvitationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupInvitationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GroupInvitation model
   */
  readonly fields: GroupInvitationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GroupInvitation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroupInvitationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    group<T extends ExpenseGroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExpenseGroupDefaultArgs<ExtArgs>>): Prisma__ExpenseGroupClient<$Result.GetResult<Prisma.$ExpenseGroupPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    invitedBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    invitedUser<T extends GroupInvitation$invitedUserArgs<ExtArgs> = {}>(args?: Subset<T, GroupInvitation$invitedUserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GroupInvitation model
   */ 
  interface GroupInvitationFieldRefs {
    readonly id: FieldRef<"GroupInvitation", 'String'>
    readonly groupId: FieldRef<"GroupInvitation", 'String'>
    readonly invitedPhoneNumber: FieldRef<"GroupInvitation", 'String'>
    readonly invitedUserId: FieldRef<"GroupInvitation", 'String'>
    readonly invitedById: FieldRef<"GroupInvitation", 'String'>
    readonly status: FieldRef<"GroupInvitation", 'String'>
    readonly createdAt: FieldRef<"GroupInvitation", 'DateTime'>
    readonly expiresAt: FieldRef<"GroupInvitation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GroupInvitation findUnique
   */
  export type GroupInvitationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupInvitation
     */
    select?: GroupInvitationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInvitationInclude<ExtArgs> | null
    /**
     * Filter, which GroupInvitation to fetch.
     */
    where: GroupInvitationWhereUniqueInput
  }

  /**
   * GroupInvitation findUniqueOrThrow
   */
  export type GroupInvitationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupInvitation
     */
    select?: GroupInvitationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInvitationInclude<ExtArgs> | null
    /**
     * Filter, which GroupInvitation to fetch.
     */
    where: GroupInvitationWhereUniqueInput
  }

  /**
   * GroupInvitation findFirst
   */
  export type GroupInvitationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupInvitation
     */
    select?: GroupInvitationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInvitationInclude<ExtArgs> | null
    /**
     * Filter, which GroupInvitation to fetch.
     */
    where?: GroupInvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupInvitations to fetch.
     */
    orderBy?: GroupInvitationOrderByWithRelationInput | GroupInvitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroupInvitations.
     */
    cursor?: GroupInvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupInvitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupInvitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupInvitations.
     */
    distinct?: GroupInvitationScalarFieldEnum | GroupInvitationScalarFieldEnum[]
  }

  /**
   * GroupInvitation findFirstOrThrow
   */
  export type GroupInvitationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupInvitation
     */
    select?: GroupInvitationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInvitationInclude<ExtArgs> | null
    /**
     * Filter, which GroupInvitation to fetch.
     */
    where?: GroupInvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupInvitations to fetch.
     */
    orderBy?: GroupInvitationOrderByWithRelationInput | GroupInvitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroupInvitations.
     */
    cursor?: GroupInvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupInvitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupInvitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupInvitations.
     */
    distinct?: GroupInvitationScalarFieldEnum | GroupInvitationScalarFieldEnum[]
  }

  /**
   * GroupInvitation findMany
   */
  export type GroupInvitationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupInvitation
     */
    select?: GroupInvitationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInvitationInclude<ExtArgs> | null
    /**
     * Filter, which GroupInvitations to fetch.
     */
    where?: GroupInvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupInvitations to fetch.
     */
    orderBy?: GroupInvitationOrderByWithRelationInput | GroupInvitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GroupInvitations.
     */
    cursor?: GroupInvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupInvitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupInvitations.
     */
    skip?: number
    distinct?: GroupInvitationScalarFieldEnum | GroupInvitationScalarFieldEnum[]
  }

  /**
   * GroupInvitation create
   */
  export type GroupInvitationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupInvitation
     */
    select?: GroupInvitationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInvitationInclude<ExtArgs> | null
    /**
     * The data needed to create a GroupInvitation.
     */
    data: XOR<GroupInvitationCreateInput, GroupInvitationUncheckedCreateInput>
  }

  /**
   * GroupInvitation createMany
   */
  export type GroupInvitationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GroupInvitations.
     */
    data: GroupInvitationCreateManyInput | GroupInvitationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GroupInvitation createManyAndReturn
   */
  export type GroupInvitationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupInvitation
     */
    select?: GroupInvitationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many GroupInvitations.
     */
    data: GroupInvitationCreateManyInput | GroupInvitationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInvitationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GroupInvitation update
   */
  export type GroupInvitationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupInvitation
     */
    select?: GroupInvitationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInvitationInclude<ExtArgs> | null
    /**
     * The data needed to update a GroupInvitation.
     */
    data: XOR<GroupInvitationUpdateInput, GroupInvitationUncheckedUpdateInput>
    /**
     * Choose, which GroupInvitation to update.
     */
    where: GroupInvitationWhereUniqueInput
  }

  /**
   * GroupInvitation updateMany
   */
  export type GroupInvitationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GroupInvitations.
     */
    data: XOR<GroupInvitationUpdateManyMutationInput, GroupInvitationUncheckedUpdateManyInput>
    /**
     * Filter which GroupInvitations to update
     */
    where?: GroupInvitationWhereInput
  }

  /**
   * GroupInvitation upsert
   */
  export type GroupInvitationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupInvitation
     */
    select?: GroupInvitationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInvitationInclude<ExtArgs> | null
    /**
     * The filter to search for the GroupInvitation to update in case it exists.
     */
    where: GroupInvitationWhereUniqueInput
    /**
     * In case the GroupInvitation found by the `where` argument doesn't exist, create a new GroupInvitation with this data.
     */
    create: XOR<GroupInvitationCreateInput, GroupInvitationUncheckedCreateInput>
    /**
     * In case the GroupInvitation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroupInvitationUpdateInput, GroupInvitationUncheckedUpdateInput>
  }

  /**
   * GroupInvitation delete
   */
  export type GroupInvitationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupInvitation
     */
    select?: GroupInvitationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInvitationInclude<ExtArgs> | null
    /**
     * Filter which GroupInvitation to delete.
     */
    where: GroupInvitationWhereUniqueInput
  }

  /**
   * GroupInvitation deleteMany
   */
  export type GroupInvitationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GroupInvitations to delete
     */
    where?: GroupInvitationWhereInput
  }

  /**
   * GroupInvitation.invitedUser
   */
  export type GroupInvitation$invitedUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * GroupInvitation without action
   */
  export type GroupInvitationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupInvitation
     */
    select?: GroupInvitationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInvitationInclude<ExtArgs> | null
  }


  /**
   * Model Expense
   */

  export type AggregateExpense = {
    _count: ExpenseCountAggregateOutputType | null
    _avg: ExpenseAvgAggregateOutputType | null
    _sum: ExpenseSumAggregateOutputType | null
    _min: ExpenseMinAggregateOutputType | null
    _max: ExpenseMaxAggregateOutputType | null
  }

  export type ExpenseAvgAggregateOutputType = {
    amount: Decimal | null
  }

  export type ExpenseSumAggregateOutputType = {
    amount: Decimal | null
  }

  export type ExpenseMinAggregateOutputType = {
    id: string | null
    title: string | null
    amount: Decimal | null
    userId: string | null
    createdAt: Date | null
    groupId: string | null
    description: string | null
    currency: string | null
    paidById: string | null
    splitType: string | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type ExpenseMaxAggregateOutputType = {
    id: string | null
    title: string | null
    amount: Decimal | null
    userId: string | null
    createdAt: Date | null
    groupId: string | null
    description: string | null
    currency: string | null
    paidById: string | null
    splitType: string | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type ExpenseCountAggregateOutputType = {
    id: number
    title: number
    amount: number
    userId: number
    createdAt: number
    groupId: number
    description: number
    currency: number
    paidById: number
    splitType: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type ExpenseAvgAggregateInputType = {
    amount?: true
  }

  export type ExpenseSumAggregateInputType = {
    amount?: true
  }

  export type ExpenseMinAggregateInputType = {
    id?: true
    title?: true
    amount?: true
    userId?: true
    createdAt?: true
    groupId?: true
    description?: true
    currency?: true
    paidById?: true
    splitType?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type ExpenseMaxAggregateInputType = {
    id?: true
    title?: true
    amount?: true
    userId?: true
    createdAt?: true
    groupId?: true
    description?: true
    currency?: true
    paidById?: true
    splitType?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type ExpenseCountAggregateInputType = {
    id?: true
    title?: true
    amount?: true
    userId?: true
    createdAt?: true
    groupId?: true
    description?: true
    currency?: true
    paidById?: true
    splitType?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type ExpenseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Expense to aggregate.
     */
    where?: ExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Expenses
    **/
    _count?: true | ExpenseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExpenseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExpenseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExpenseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExpenseMaxAggregateInputType
  }

  export type GetExpenseAggregateType<T extends ExpenseAggregateArgs> = {
        [P in keyof T & keyof AggregateExpense]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExpense[P]>
      : GetScalarType<T[P], AggregateExpense[P]>
  }




  export type ExpenseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpenseWhereInput
    orderBy?: ExpenseOrderByWithAggregationInput | ExpenseOrderByWithAggregationInput[]
    by: ExpenseScalarFieldEnum[] | ExpenseScalarFieldEnum
    having?: ExpenseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExpenseCountAggregateInputType | true
    _avg?: ExpenseAvgAggregateInputType
    _sum?: ExpenseSumAggregateInputType
    _min?: ExpenseMinAggregateInputType
    _max?: ExpenseMaxAggregateInputType
  }

  export type ExpenseGroupByOutputType = {
    id: string
    title: string
    amount: Decimal
    userId: string
    createdAt: Date | null
    groupId: string | null
    description: string | null
    currency: string | null
    paidById: string | null
    splitType: string | null
    updatedAt: Date | null
    deletedAt: Date | null
    _count: ExpenseCountAggregateOutputType | null
    _avg: ExpenseAvgAggregateOutputType | null
    _sum: ExpenseSumAggregateOutputType | null
    _min: ExpenseMinAggregateOutputType | null
    _max: ExpenseMaxAggregateOutputType | null
  }

  type GetExpenseGroupByPayload<T extends ExpenseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExpenseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExpenseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExpenseGroupByOutputType[P]>
            : GetScalarType<T[P], ExpenseGroupByOutputType[P]>
        }
      >
    >


  export type ExpenseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    amount?: boolean
    userId?: boolean
    createdAt?: boolean
    groupId?: boolean
    description?: boolean
    currency?: boolean
    paidById?: boolean
    splitType?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    splits?: boolean | Expense$splitsArgs<ExtArgs>
    group?: boolean | Expense$groupArgs<ExtArgs>
    paidBy?: boolean | Expense$paidByArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | ExpenseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expense"]>

  export type ExpenseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    amount?: boolean
    userId?: boolean
    createdAt?: boolean
    groupId?: boolean
    description?: boolean
    currency?: boolean
    paidById?: boolean
    splitType?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    group?: boolean | Expense$groupArgs<ExtArgs>
    paidBy?: boolean | Expense$paidByArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expense"]>

  export type ExpenseSelectScalar = {
    id?: boolean
    title?: boolean
    amount?: boolean
    userId?: boolean
    createdAt?: boolean
    groupId?: boolean
    description?: boolean
    currency?: boolean
    paidById?: boolean
    splitType?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type ExpenseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    splits?: boolean | Expense$splitsArgs<ExtArgs>
    group?: boolean | Expense$groupArgs<ExtArgs>
    paidBy?: boolean | Expense$paidByArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | ExpenseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ExpenseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | Expense$groupArgs<ExtArgs>
    paidBy?: boolean | Expense$paidByArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ExpensePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Expense"
    objects: {
      splits: Prisma.$ExpenseSplitPayload<ExtArgs>[]
      group: Prisma.$ExpenseGroupPayload<ExtArgs> | null
      paidBy: Prisma.$UserPayload<ExtArgs> | null
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      amount: Prisma.Decimal
      userId: string
      createdAt: Date | null
      groupId: string | null
      description: string | null
      currency: string | null
      paidById: string | null
      splitType: string | null
      updatedAt: Date | null
      deletedAt: Date | null
    }, ExtArgs["result"]["expense"]>
    composites: {}
  }

  type ExpenseGetPayload<S extends boolean | null | undefined | ExpenseDefaultArgs> = $Result.GetResult<Prisma.$ExpensePayload, S>

  type ExpenseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ExpenseFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ExpenseCountAggregateInputType | true
    }

  export interface ExpenseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Expense'], meta: { name: 'Expense' } }
    /**
     * Find zero or one Expense that matches the filter.
     * @param {ExpenseFindUniqueArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExpenseFindUniqueArgs>(args: SelectSubset<T, ExpenseFindUniqueArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Expense that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ExpenseFindUniqueOrThrowArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExpenseFindUniqueOrThrowArgs>(args: SelectSubset<T, ExpenseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Expense that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseFindFirstArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExpenseFindFirstArgs>(args?: SelectSubset<T, ExpenseFindFirstArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Expense that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseFindFirstOrThrowArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExpenseFindFirstOrThrowArgs>(args?: SelectSubset<T, ExpenseFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Expenses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Expenses
     * const expenses = await prisma.expense.findMany()
     * 
     * // Get first 10 Expenses
     * const expenses = await prisma.expense.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const expenseWithIdOnly = await prisma.expense.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExpenseFindManyArgs>(args?: SelectSubset<T, ExpenseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Expense.
     * @param {ExpenseCreateArgs} args - Arguments to create a Expense.
     * @example
     * // Create one Expense
     * const Expense = await prisma.expense.create({
     *   data: {
     *     // ... data to create a Expense
     *   }
     * })
     * 
     */
    create<T extends ExpenseCreateArgs>(args: SelectSubset<T, ExpenseCreateArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Expenses.
     * @param {ExpenseCreateManyArgs} args - Arguments to create many Expenses.
     * @example
     * // Create many Expenses
     * const expense = await prisma.expense.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExpenseCreateManyArgs>(args?: SelectSubset<T, ExpenseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Expenses and returns the data saved in the database.
     * @param {ExpenseCreateManyAndReturnArgs} args - Arguments to create many Expenses.
     * @example
     * // Create many Expenses
     * const expense = await prisma.expense.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Expenses and only return the `id`
     * const expenseWithIdOnly = await prisma.expense.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExpenseCreateManyAndReturnArgs>(args?: SelectSubset<T, ExpenseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Expense.
     * @param {ExpenseDeleteArgs} args - Arguments to delete one Expense.
     * @example
     * // Delete one Expense
     * const Expense = await prisma.expense.delete({
     *   where: {
     *     // ... filter to delete one Expense
     *   }
     * })
     * 
     */
    delete<T extends ExpenseDeleteArgs>(args: SelectSubset<T, ExpenseDeleteArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Expense.
     * @param {ExpenseUpdateArgs} args - Arguments to update one Expense.
     * @example
     * // Update one Expense
     * const expense = await prisma.expense.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExpenseUpdateArgs>(args: SelectSubset<T, ExpenseUpdateArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Expenses.
     * @param {ExpenseDeleteManyArgs} args - Arguments to filter Expenses to delete.
     * @example
     * // Delete a few Expenses
     * const { count } = await prisma.expense.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExpenseDeleteManyArgs>(args?: SelectSubset<T, ExpenseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Expenses
     * const expense = await prisma.expense.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExpenseUpdateManyArgs>(args: SelectSubset<T, ExpenseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Expense.
     * @param {ExpenseUpsertArgs} args - Arguments to update or create a Expense.
     * @example
     * // Update or create a Expense
     * const expense = await prisma.expense.upsert({
     *   create: {
     *     // ... data to create a Expense
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Expense we want to update
     *   }
     * })
     */
    upsert<T extends ExpenseUpsertArgs>(args: SelectSubset<T, ExpenseUpsertArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseCountArgs} args - Arguments to filter Expenses to count.
     * @example
     * // Count the number of Expenses
     * const count = await prisma.expense.count({
     *   where: {
     *     // ... the filter for the Expenses we want to count
     *   }
     * })
    **/
    count<T extends ExpenseCountArgs>(
      args?: Subset<T, ExpenseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExpenseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Expense.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExpenseAggregateArgs>(args: Subset<T, ExpenseAggregateArgs>): Prisma.PrismaPromise<GetExpenseAggregateType<T>>

    /**
     * Group by Expense.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExpenseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExpenseGroupByArgs['orderBy'] }
        : { orderBy?: ExpenseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExpenseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExpenseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Expense model
   */
  readonly fields: ExpenseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Expense.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExpenseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    splits<T extends Expense$splitsArgs<ExtArgs> = {}>(args?: Subset<T, Expense$splitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpenseSplitPayload<ExtArgs>, T, "findMany"> | Null>
    group<T extends Expense$groupArgs<ExtArgs> = {}>(args?: Subset<T, Expense$groupArgs<ExtArgs>>): Prisma__ExpenseGroupClient<$Result.GetResult<Prisma.$ExpenseGroupPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    paidBy<T extends Expense$paidByArgs<ExtArgs> = {}>(args?: Subset<T, Expense$paidByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Expense model
   */ 
  interface ExpenseFieldRefs {
    readonly id: FieldRef<"Expense", 'String'>
    readonly title: FieldRef<"Expense", 'String'>
    readonly amount: FieldRef<"Expense", 'Decimal'>
    readonly userId: FieldRef<"Expense", 'String'>
    readonly createdAt: FieldRef<"Expense", 'DateTime'>
    readonly groupId: FieldRef<"Expense", 'String'>
    readonly description: FieldRef<"Expense", 'String'>
    readonly currency: FieldRef<"Expense", 'String'>
    readonly paidById: FieldRef<"Expense", 'String'>
    readonly splitType: FieldRef<"Expense", 'String'>
    readonly updatedAt: FieldRef<"Expense", 'DateTime'>
    readonly deletedAt: FieldRef<"Expense", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Expense findUnique
   */
  export type ExpenseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter, which Expense to fetch.
     */
    where: ExpenseWhereUniqueInput
  }

  /**
   * Expense findUniqueOrThrow
   */
  export type ExpenseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter, which Expense to fetch.
     */
    where: ExpenseWhereUniqueInput
  }

  /**
   * Expense findFirst
   */
  export type ExpenseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter, which Expense to fetch.
     */
    where?: ExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Expenses.
     */
    cursor?: ExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Expenses.
     */
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * Expense findFirstOrThrow
   */
  export type ExpenseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter, which Expense to fetch.
     */
    where?: ExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Expenses.
     */
    cursor?: ExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Expenses.
     */
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * Expense findMany
   */
  export type ExpenseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter, which Expenses to fetch.
     */
    where?: ExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Expenses.
     */
    cursor?: ExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * Expense create
   */
  export type ExpenseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * The data needed to create a Expense.
     */
    data: XOR<ExpenseCreateInput, ExpenseUncheckedCreateInput>
  }

  /**
   * Expense createMany
   */
  export type ExpenseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Expenses.
     */
    data: ExpenseCreateManyInput | ExpenseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Expense createManyAndReturn
   */
  export type ExpenseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Expenses.
     */
    data: ExpenseCreateManyInput | ExpenseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Expense update
   */
  export type ExpenseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * The data needed to update a Expense.
     */
    data: XOR<ExpenseUpdateInput, ExpenseUncheckedUpdateInput>
    /**
     * Choose, which Expense to update.
     */
    where: ExpenseWhereUniqueInput
  }

  /**
   * Expense updateMany
   */
  export type ExpenseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Expenses.
     */
    data: XOR<ExpenseUpdateManyMutationInput, ExpenseUncheckedUpdateManyInput>
    /**
     * Filter which Expenses to update
     */
    where?: ExpenseWhereInput
  }

  /**
   * Expense upsert
   */
  export type ExpenseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * The filter to search for the Expense to update in case it exists.
     */
    where: ExpenseWhereUniqueInput
    /**
     * In case the Expense found by the `where` argument doesn't exist, create a new Expense with this data.
     */
    create: XOR<ExpenseCreateInput, ExpenseUncheckedCreateInput>
    /**
     * In case the Expense was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExpenseUpdateInput, ExpenseUncheckedUpdateInput>
  }

  /**
   * Expense delete
   */
  export type ExpenseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter which Expense to delete.
     */
    where: ExpenseWhereUniqueInput
  }

  /**
   * Expense deleteMany
   */
  export type ExpenseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Expenses to delete
     */
    where?: ExpenseWhereInput
  }

  /**
   * Expense.splits
   */
  export type Expense$splitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseSplit
     */
    select?: ExpenseSplitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseSplitInclude<ExtArgs> | null
    where?: ExpenseSplitWhereInput
    orderBy?: ExpenseSplitOrderByWithRelationInput | ExpenseSplitOrderByWithRelationInput[]
    cursor?: ExpenseSplitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExpenseSplitScalarFieldEnum | ExpenseSplitScalarFieldEnum[]
  }

  /**
   * Expense.group
   */
  export type Expense$groupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseGroup
     */
    select?: ExpenseGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseGroupInclude<ExtArgs> | null
    where?: ExpenseGroupWhereInput
  }

  /**
   * Expense.paidBy
   */
  export type Expense$paidByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Expense without action
   */
  export type ExpenseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
  }


  /**
   * Model ExpenseSplit
   */

  export type AggregateExpenseSplit = {
    _count: ExpenseSplitCountAggregateOutputType | null
    _avg: ExpenseSplitAvgAggregateOutputType | null
    _sum: ExpenseSplitSumAggregateOutputType | null
    _min: ExpenseSplitMinAggregateOutputType | null
    _max: ExpenseSplitMaxAggregateOutputType | null
  }

  export type ExpenseSplitAvgAggregateOutputType = {
    shareAmount: Decimal | null
  }

  export type ExpenseSplitSumAggregateOutputType = {
    shareAmount: Decimal | null
  }

  export type ExpenseSplitMinAggregateOutputType = {
    id: string | null
    expenseId: string | null
    userId: string | null
    shareAmount: Decimal | null
  }

  export type ExpenseSplitMaxAggregateOutputType = {
    id: string | null
    expenseId: string | null
    userId: string | null
    shareAmount: Decimal | null
  }

  export type ExpenseSplitCountAggregateOutputType = {
    id: number
    expenseId: number
    userId: number
    shareAmount: number
    _all: number
  }


  export type ExpenseSplitAvgAggregateInputType = {
    shareAmount?: true
  }

  export type ExpenseSplitSumAggregateInputType = {
    shareAmount?: true
  }

  export type ExpenseSplitMinAggregateInputType = {
    id?: true
    expenseId?: true
    userId?: true
    shareAmount?: true
  }

  export type ExpenseSplitMaxAggregateInputType = {
    id?: true
    expenseId?: true
    userId?: true
    shareAmount?: true
  }

  export type ExpenseSplitCountAggregateInputType = {
    id?: true
    expenseId?: true
    userId?: true
    shareAmount?: true
    _all?: true
  }

  export type ExpenseSplitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExpenseSplit to aggregate.
     */
    where?: ExpenseSplitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpenseSplits to fetch.
     */
    orderBy?: ExpenseSplitOrderByWithRelationInput | ExpenseSplitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExpenseSplitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpenseSplits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpenseSplits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExpenseSplits
    **/
    _count?: true | ExpenseSplitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExpenseSplitAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExpenseSplitSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExpenseSplitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExpenseSplitMaxAggregateInputType
  }

  export type GetExpenseSplitAggregateType<T extends ExpenseSplitAggregateArgs> = {
        [P in keyof T & keyof AggregateExpenseSplit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExpenseSplit[P]>
      : GetScalarType<T[P], AggregateExpenseSplit[P]>
  }




  export type ExpenseSplitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpenseSplitWhereInput
    orderBy?: ExpenseSplitOrderByWithAggregationInput | ExpenseSplitOrderByWithAggregationInput[]
    by: ExpenseSplitScalarFieldEnum[] | ExpenseSplitScalarFieldEnum
    having?: ExpenseSplitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExpenseSplitCountAggregateInputType | true
    _avg?: ExpenseSplitAvgAggregateInputType
    _sum?: ExpenseSplitSumAggregateInputType
    _min?: ExpenseSplitMinAggregateInputType
    _max?: ExpenseSplitMaxAggregateInputType
  }

  export type ExpenseSplitGroupByOutputType = {
    id: string
    expenseId: string
    userId: string
    shareAmount: Decimal
    _count: ExpenseSplitCountAggregateOutputType | null
    _avg: ExpenseSplitAvgAggregateOutputType | null
    _sum: ExpenseSplitSumAggregateOutputType | null
    _min: ExpenseSplitMinAggregateOutputType | null
    _max: ExpenseSplitMaxAggregateOutputType | null
  }

  type GetExpenseSplitGroupByPayload<T extends ExpenseSplitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExpenseSplitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExpenseSplitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExpenseSplitGroupByOutputType[P]>
            : GetScalarType<T[P], ExpenseSplitGroupByOutputType[P]>
        }
      >
    >


  export type ExpenseSplitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expenseId?: boolean
    userId?: boolean
    shareAmount?: boolean
    expense?: boolean | ExpenseDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expenseSplit"]>

  export type ExpenseSplitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expenseId?: boolean
    userId?: boolean
    shareAmount?: boolean
    expense?: boolean | ExpenseDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expenseSplit"]>

  export type ExpenseSplitSelectScalar = {
    id?: boolean
    expenseId?: boolean
    userId?: boolean
    shareAmount?: boolean
  }

  export type ExpenseSplitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expense?: boolean | ExpenseDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ExpenseSplitIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expense?: boolean | ExpenseDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ExpenseSplitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExpenseSplit"
    objects: {
      expense: Prisma.$ExpensePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      expenseId: string
      userId: string
      shareAmount: Prisma.Decimal
    }, ExtArgs["result"]["expenseSplit"]>
    composites: {}
  }

  type ExpenseSplitGetPayload<S extends boolean | null | undefined | ExpenseSplitDefaultArgs> = $Result.GetResult<Prisma.$ExpenseSplitPayload, S>

  type ExpenseSplitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ExpenseSplitFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ExpenseSplitCountAggregateInputType | true
    }

  export interface ExpenseSplitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExpenseSplit'], meta: { name: 'ExpenseSplit' } }
    /**
     * Find zero or one ExpenseSplit that matches the filter.
     * @param {ExpenseSplitFindUniqueArgs} args - Arguments to find a ExpenseSplit
     * @example
     * // Get one ExpenseSplit
     * const expenseSplit = await prisma.expenseSplit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExpenseSplitFindUniqueArgs>(args: SelectSubset<T, ExpenseSplitFindUniqueArgs<ExtArgs>>): Prisma__ExpenseSplitClient<$Result.GetResult<Prisma.$ExpenseSplitPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ExpenseSplit that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ExpenseSplitFindUniqueOrThrowArgs} args - Arguments to find a ExpenseSplit
     * @example
     * // Get one ExpenseSplit
     * const expenseSplit = await prisma.expenseSplit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExpenseSplitFindUniqueOrThrowArgs>(args: SelectSubset<T, ExpenseSplitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExpenseSplitClient<$Result.GetResult<Prisma.$ExpenseSplitPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ExpenseSplit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseSplitFindFirstArgs} args - Arguments to find a ExpenseSplit
     * @example
     * // Get one ExpenseSplit
     * const expenseSplit = await prisma.expenseSplit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExpenseSplitFindFirstArgs>(args?: SelectSubset<T, ExpenseSplitFindFirstArgs<ExtArgs>>): Prisma__ExpenseSplitClient<$Result.GetResult<Prisma.$ExpenseSplitPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ExpenseSplit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseSplitFindFirstOrThrowArgs} args - Arguments to find a ExpenseSplit
     * @example
     * // Get one ExpenseSplit
     * const expenseSplit = await prisma.expenseSplit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExpenseSplitFindFirstOrThrowArgs>(args?: SelectSubset<T, ExpenseSplitFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExpenseSplitClient<$Result.GetResult<Prisma.$ExpenseSplitPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ExpenseSplits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseSplitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExpenseSplits
     * const expenseSplits = await prisma.expenseSplit.findMany()
     * 
     * // Get first 10 ExpenseSplits
     * const expenseSplits = await prisma.expenseSplit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const expenseSplitWithIdOnly = await prisma.expenseSplit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExpenseSplitFindManyArgs>(args?: SelectSubset<T, ExpenseSplitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpenseSplitPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ExpenseSplit.
     * @param {ExpenseSplitCreateArgs} args - Arguments to create a ExpenseSplit.
     * @example
     * // Create one ExpenseSplit
     * const ExpenseSplit = await prisma.expenseSplit.create({
     *   data: {
     *     // ... data to create a ExpenseSplit
     *   }
     * })
     * 
     */
    create<T extends ExpenseSplitCreateArgs>(args: SelectSubset<T, ExpenseSplitCreateArgs<ExtArgs>>): Prisma__ExpenseSplitClient<$Result.GetResult<Prisma.$ExpenseSplitPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ExpenseSplits.
     * @param {ExpenseSplitCreateManyArgs} args - Arguments to create many ExpenseSplits.
     * @example
     * // Create many ExpenseSplits
     * const expenseSplit = await prisma.expenseSplit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExpenseSplitCreateManyArgs>(args?: SelectSubset<T, ExpenseSplitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ExpenseSplits and returns the data saved in the database.
     * @param {ExpenseSplitCreateManyAndReturnArgs} args - Arguments to create many ExpenseSplits.
     * @example
     * // Create many ExpenseSplits
     * const expenseSplit = await prisma.expenseSplit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ExpenseSplits and only return the `id`
     * const expenseSplitWithIdOnly = await prisma.expenseSplit.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExpenseSplitCreateManyAndReturnArgs>(args?: SelectSubset<T, ExpenseSplitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpenseSplitPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ExpenseSplit.
     * @param {ExpenseSplitDeleteArgs} args - Arguments to delete one ExpenseSplit.
     * @example
     * // Delete one ExpenseSplit
     * const ExpenseSplit = await prisma.expenseSplit.delete({
     *   where: {
     *     // ... filter to delete one ExpenseSplit
     *   }
     * })
     * 
     */
    delete<T extends ExpenseSplitDeleteArgs>(args: SelectSubset<T, ExpenseSplitDeleteArgs<ExtArgs>>): Prisma__ExpenseSplitClient<$Result.GetResult<Prisma.$ExpenseSplitPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ExpenseSplit.
     * @param {ExpenseSplitUpdateArgs} args - Arguments to update one ExpenseSplit.
     * @example
     * // Update one ExpenseSplit
     * const expenseSplit = await prisma.expenseSplit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExpenseSplitUpdateArgs>(args: SelectSubset<T, ExpenseSplitUpdateArgs<ExtArgs>>): Prisma__ExpenseSplitClient<$Result.GetResult<Prisma.$ExpenseSplitPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ExpenseSplits.
     * @param {ExpenseSplitDeleteManyArgs} args - Arguments to filter ExpenseSplits to delete.
     * @example
     * // Delete a few ExpenseSplits
     * const { count } = await prisma.expenseSplit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExpenseSplitDeleteManyArgs>(args?: SelectSubset<T, ExpenseSplitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExpenseSplits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseSplitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExpenseSplits
     * const expenseSplit = await prisma.expenseSplit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExpenseSplitUpdateManyArgs>(args: SelectSubset<T, ExpenseSplitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ExpenseSplit.
     * @param {ExpenseSplitUpsertArgs} args - Arguments to update or create a ExpenseSplit.
     * @example
     * // Update or create a ExpenseSplit
     * const expenseSplit = await prisma.expenseSplit.upsert({
     *   create: {
     *     // ... data to create a ExpenseSplit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExpenseSplit we want to update
     *   }
     * })
     */
    upsert<T extends ExpenseSplitUpsertArgs>(args: SelectSubset<T, ExpenseSplitUpsertArgs<ExtArgs>>): Prisma__ExpenseSplitClient<$Result.GetResult<Prisma.$ExpenseSplitPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ExpenseSplits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseSplitCountArgs} args - Arguments to filter ExpenseSplits to count.
     * @example
     * // Count the number of ExpenseSplits
     * const count = await prisma.expenseSplit.count({
     *   where: {
     *     // ... the filter for the ExpenseSplits we want to count
     *   }
     * })
    **/
    count<T extends ExpenseSplitCountArgs>(
      args?: Subset<T, ExpenseSplitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExpenseSplitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExpenseSplit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseSplitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExpenseSplitAggregateArgs>(args: Subset<T, ExpenseSplitAggregateArgs>): Prisma.PrismaPromise<GetExpenseSplitAggregateType<T>>

    /**
     * Group by ExpenseSplit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseSplitGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExpenseSplitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExpenseSplitGroupByArgs['orderBy'] }
        : { orderBy?: ExpenseSplitGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExpenseSplitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExpenseSplitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExpenseSplit model
   */
  readonly fields: ExpenseSplitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExpenseSplit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExpenseSplitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    expense<T extends ExpenseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExpenseDefaultArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ExpenseSplit model
   */ 
  interface ExpenseSplitFieldRefs {
    readonly id: FieldRef<"ExpenseSplit", 'String'>
    readonly expenseId: FieldRef<"ExpenseSplit", 'String'>
    readonly userId: FieldRef<"ExpenseSplit", 'String'>
    readonly shareAmount: FieldRef<"ExpenseSplit", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * ExpenseSplit findUnique
   */
  export type ExpenseSplitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseSplit
     */
    select?: ExpenseSplitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseSplitInclude<ExtArgs> | null
    /**
     * Filter, which ExpenseSplit to fetch.
     */
    where: ExpenseSplitWhereUniqueInput
  }

  /**
   * ExpenseSplit findUniqueOrThrow
   */
  export type ExpenseSplitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseSplit
     */
    select?: ExpenseSplitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseSplitInclude<ExtArgs> | null
    /**
     * Filter, which ExpenseSplit to fetch.
     */
    where: ExpenseSplitWhereUniqueInput
  }

  /**
   * ExpenseSplit findFirst
   */
  export type ExpenseSplitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseSplit
     */
    select?: ExpenseSplitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseSplitInclude<ExtArgs> | null
    /**
     * Filter, which ExpenseSplit to fetch.
     */
    where?: ExpenseSplitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpenseSplits to fetch.
     */
    orderBy?: ExpenseSplitOrderByWithRelationInput | ExpenseSplitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExpenseSplits.
     */
    cursor?: ExpenseSplitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpenseSplits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpenseSplits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExpenseSplits.
     */
    distinct?: ExpenseSplitScalarFieldEnum | ExpenseSplitScalarFieldEnum[]
  }

  /**
   * ExpenseSplit findFirstOrThrow
   */
  export type ExpenseSplitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseSplit
     */
    select?: ExpenseSplitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseSplitInclude<ExtArgs> | null
    /**
     * Filter, which ExpenseSplit to fetch.
     */
    where?: ExpenseSplitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpenseSplits to fetch.
     */
    orderBy?: ExpenseSplitOrderByWithRelationInput | ExpenseSplitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExpenseSplits.
     */
    cursor?: ExpenseSplitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpenseSplits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpenseSplits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExpenseSplits.
     */
    distinct?: ExpenseSplitScalarFieldEnum | ExpenseSplitScalarFieldEnum[]
  }

  /**
   * ExpenseSplit findMany
   */
  export type ExpenseSplitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseSplit
     */
    select?: ExpenseSplitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseSplitInclude<ExtArgs> | null
    /**
     * Filter, which ExpenseSplits to fetch.
     */
    where?: ExpenseSplitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpenseSplits to fetch.
     */
    orderBy?: ExpenseSplitOrderByWithRelationInput | ExpenseSplitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExpenseSplits.
     */
    cursor?: ExpenseSplitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpenseSplits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpenseSplits.
     */
    skip?: number
    distinct?: ExpenseSplitScalarFieldEnum | ExpenseSplitScalarFieldEnum[]
  }

  /**
   * ExpenseSplit create
   */
  export type ExpenseSplitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseSplit
     */
    select?: ExpenseSplitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseSplitInclude<ExtArgs> | null
    /**
     * The data needed to create a ExpenseSplit.
     */
    data: XOR<ExpenseSplitCreateInput, ExpenseSplitUncheckedCreateInput>
  }

  /**
   * ExpenseSplit createMany
   */
  export type ExpenseSplitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExpenseSplits.
     */
    data: ExpenseSplitCreateManyInput | ExpenseSplitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExpenseSplit createManyAndReturn
   */
  export type ExpenseSplitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseSplit
     */
    select?: ExpenseSplitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ExpenseSplits.
     */
    data: ExpenseSplitCreateManyInput | ExpenseSplitCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseSplitIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExpenseSplit update
   */
  export type ExpenseSplitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseSplit
     */
    select?: ExpenseSplitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseSplitInclude<ExtArgs> | null
    /**
     * The data needed to update a ExpenseSplit.
     */
    data: XOR<ExpenseSplitUpdateInput, ExpenseSplitUncheckedUpdateInput>
    /**
     * Choose, which ExpenseSplit to update.
     */
    where: ExpenseSplitWhereUniqueInput
  }

  /**
   * ExpenseSplit updateMany
   */
  export type ExpenseSplitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExpenseSplits.
     */
    data: XOR<ExpenseSplitUpdateManyMutationInput, ExpenseSplitUncheckedUpdateManyInput>
    /**
     * Filter which ExpenseSplits to update
     */
    where?: ExpenseSplitWhereInput
  }

  /**
   * ExpenseSplit upsert
   */
  export type ExpenseSplitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseSplit
     */
    select?: ExpenseSplitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseSplitInclude<ExtArgs> | null
    /**
     * The filter to search for the ExpenseSplit to update in case it exists.
     */
    where: ExpenseSplitWhereUniqueInput
    /**
     * In case the ExpenseSplit found by the `where` argument doesn't exist, create a new ExpenseSplit with this data.
     */
    create: XOR<ExpenseSplitCreateInput, ExpenseSplitUncheckedCreateInput>
    /**
     * In case the ExpenseSplit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExpenseSplitUpdateInput, ExpenseSplitUncheckedUpdateInput>
  }

  /**
   * ExpenseSplit delete
   */
  export type ExpenseSplitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseSplit
     */
    select?: ExpenseSplitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseSplitInclude<ExtArgs> | null
    /**
     * Filter which ExpenseSplit to delete.
     */
    where: ExpenseSplitWhereUniqueInput
  }

  /**
   * ExpenseSplit deleteMany
   */
  export type ExpenseSplitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExpenseSplits to delete
     */
    where?: ExpenseSplitWhereInput
  }

  /**
   * ExpenseSplit without action
   */
  export type ExpenseSplitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseSplit
     */
    select?: ExpenseSplitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseSplitInclude<ExtArgs> | null
  }


  /**
   * Model Settlement
   */

  export type AggregateSettlement = {
    _count: SettlementCountAggregateOutputType | null
    _avg: SettlementAvgAggregateOutputType | null
    _sum: SettlementSumAggregateOutputType | null
    _min: SettlementMinAggregateOutputType | null
    _max: SettlementMaxAggregateOutputType | null
  }

  export type SettlementAvgAggregateOutputType = {
    amount: Decimal | null
  }

  export type SettlementSumAggregateOutputType = {
    amount: Decimal | null
  }

  export type SettlementMinAggregateOutputType = {
    id: string | null
    groupId: string | null
    fromUserId: string | null
    toUserId: string | null
    amount: Decimal | null
    currency: string | null
    paymentMethod: string | null
    status: string | null
    note: string | null
    idempotencyKey: string | null
    createdAt: Date | null
    confirmedAt: Date | null
  }

  export type SettlementMaxAggregateOutputType = {
    id: string | null
    groupId: string | null
    fromUserId: string | null
    toUserId: string | null
    amount: Decimal | null
    currency: string | null
    paymentMethod: string | null
    status: string | null
    note: string | null
    idempotencyKey: string | null
    createdAt: Date | null
    confirmedAt: Date | null
  }

  export type SettlementCountAggregateOutputType = {
    id: number
    groupId: number
    fromUserId: number
    toUserId: number
    amount: number
    currency: number
    paymentMethod: number
    status: number
    note: number
    idempotencyKey: number
    createdAt: number
    confirmedAt: number
    _all: number
  }


  export type SettlementAvgAggregateInputType = {
    amount?: true
  }

  export type SettlementSumAggregateInputType = {
    amount?: true
  }

  export type SettlementMinAggregateInputType = {
    id?: true
    groupId?: true
    fromUserId?: true
    toUserId?: true
    amount?: true
    currency?: true
    paymentMethod?: true
    status?: true
    note?: true
    idempotencyKey?: true
    createdAt?: true
    confirmedAt?: true
  }

  export type SettlementMaxAggregateInputType = {
    id?: true
    groupId?: true
    fromUserId?: true
    toUserId?: true
    amount?: true
    currency?: true
    paymentMethod?: true
    status?: true
    note?: true
    idempotencyKey?: true
    createdAt?: true
    confirmedAt?: true
  }

  export type SettlementCountAggregateInputType = {
    id?: true
    groupId?: true
    fromUserId?: true
    toUserId?: true
    amount?: true
    currency?: true
    paymentMethod?: true
    status?: true
    note?: true
    idempotencyKey?: true
    createdAt?: true
    confirmedAt?: true
    _all?: true
  }

  export type SettlementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Settlement to aggregate.
     */
    where?: SettlementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settlements to fetch.
     */
    orderBy?: SettlementOrderByWithRelationInput | SettlementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SettlementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settlements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settlements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Settlements
    **/
    _count?: true | SettlementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SettlementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SettlementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SettlementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SettlementMaxAggregateInputType
  }

  export type GetSettlementAggregateType<T extends SettlementAggregateArgs> = {
        [P in keyof T & keyof AggregateSettlement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSettlement[P]>
      : GetScalarType<T[P], AggregateSettlement[P]>
  }




  export type SettlementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SettlementWhereInput
    orderBy?: SettlementOrderByWithAggregationInput | SettlementOrderByWithAggregationInput[]
    by: SettlementScalarFieldEnum[] | SettlementScalarFieldEnum
    having?: SettlementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SettlementCountAggregateInputType | true
    _avg?: SettlementAvgAggregateInputType
    _sum?: SettlementSumAggregateInputType
    _min?: SettlementMinAggregateInputType
    _max?: SettlementMaxAggregateInputType
  }

  export type SettlementGroupByOutputType = {
    id: string
    groupId: string
    fromUserId: string
    toUserId: string
    amount: Decimal
    currency: string
    paymentMethod: string
    status: string
    note: string | null
    idempotencyKey: string | null
    createdAt: Date
    confirmedAt: Date | null
    _count: SettlementCountAggregateOutputType | null
    _avg: SettlementAvgAggregateOutputType | null
    _sum: SettlementSumAggregateOutputType | null
    _min: SettlementMinAggregateOutputType | null
    _max: SettlementMaxAggregateOutputType | null
  }

  type GetSettlementGroupByPayload<T extends SettlementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SettlementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SettlementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SettlementGroupByOutputType[P]>
            : GetScalarType<T[P], SettlementGroupByOutputType[P]>
        }
      >
    >


  export type SettlementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupId?: boolean
    fromUserId?: boolean
    toUserId?: boolean
    amount?: boolean
    currency?: boolean
    paymentMethod?: boolean
    status?: boolean
    note?: boolean
    idempotencyKey?: boolean
    createdAt?: boolean
    confirmedAt?: boolean
    fromUser?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | ExpenseGroupDefaultArgs<ExtArgs>
    toUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["settlement"]>

  export type SettlementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupId?: boolean
    fromUserId?: boolean
    toUserId?: boolean
    amount?: boolean
    currency?: boolean
    paymentMethod?: boolean
    status?: boolean
    note?: boolean
    idempotencyKey?: boolean
    createdAt?: boolean
    confirmedAt?: boolean
    fromUser?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | ExpenseGroupDefaultArgs<ExtArgs>
    toUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["settlement"]>

  export type SettlementSelectScalar = {
    id?: boolean
    groupId?: boolean
    fromUserId?: boolean
    toUserId?: boolean
    amount?: boolean
    currency?: boolean
    paymentMethod?: boolean
    status?: boolean
    note?: boolean
    idempotencyKey?: boolean
    createdAt?: boolean
    confirmedAt?: boolean
  }

  export type SettlementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fromUser?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | ExpenseGroupDefaultArgs<ExtArgs>
    toUser?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SettlementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fromUser?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | ExpenseGroupDefaultArgs<ExtArgs>
    toUser?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SettlementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Settlement"
    objects: {
      fromUser: Prisma.$UserPayload<ExtArgs>
      group: Prisma.$ExpenseGroupPayload<ExtArgs>
      toUser: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      groupId: string
      fromUserId: string
      toUserId: string
      amount: Prisma.Decimal
      currency: string
      paymentMethod: string
      status: string
      note: string | null
      idempotencyKey: string | null
      createdAt: Date
      confirmedAt: Date | null
    }, ExtArgs["result"]["settlement"]>
    composites: {}
  }

  type SettlementGetPayload<S extends boolean | null | undefined | SettlementDefaultArgs> = $Result.GetResult<Prisma.$SettlementPayload, S>

  type SettlementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SettlementFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SettlementCountAggregateInputType | true
    }

  export interface SettlementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Settlement'], meta: { name: 'Settlement' } }
    /**
     * Find zero or one Settlement that matches the filter.
     * @param {SettlementFindUniqueArgs} args - Arguments to find a Settlement
     * @example
     * // Get one Settlement
     * const settlement = await prisma.settlement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SettlementFindUniqueArgs>(args: SelectSubset<T, SettlementFindUniqueArgs<ExtArgs>>): Prisma__SettlementClient<$Result.GetResult<Prisma.$SettlementPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Settlement that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SettlementFindUniqueOrThrowArgs} args - Arguments to find a Settlement
     * @example
     * // Get one Settlement
     * const settlement = await prisma.settlement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SettlementFindUniqueOrThrowArgs>(args: SelectSubset<T, SettlementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SettlementClient<$Result.GetResult<Prisma.$SettlementPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Settlement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettlementFindFirstArgs} args - Arguments to find a Settlement
     * @example
     * // Get one Settlement
     * const settlement = await prisma.settlement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SettlementFindFirstArgs>(args?: SelectSubset<T, SettlementFindFirstArgs<ExtArgs>>): Prisma__SettlementClient<$Result.GetResult<Prisma.$SettlementPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Settlement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettlementFindFirstOrThrowArgs} args - Arguments to find a Settlement
     * @example
     * // Get one Settlement
     * const settlement = await prisma.settlement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SettlementFindFirstOrThrowArgs>(args?: SelectSubset<T, SettlementFindFirstOrThrowArgs<ExtArgs>>): Prisma__SettlementClient<$Result.GetResult<Prisma.$SettlementPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Settlements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettlementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Settlements
     * const settlements = await prisma.settlement.findMany()
     * 
     * // Get first 10 Settlements
     * const settlements = await prisma.settlement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const settlementWithIdOnly = await prisma.settlement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SettlementFindManyArgs>(args?: SelectSubset<T, SettlementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettlementPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Settlement.
     * @param {SettlementCreateArgs} args - Arguments to create a Settlement.
     * @example
     * // Create one Settlement
     * const Settlement = await prisma.settlement.create({
     *   data: {
     *     // ... data to create a Settlement
     *   }
     * })
     * 
     */
    create<T extends SettlementCreateArgs>(args: SelectSubset<T, SettlementCreateArgs<ExtArgs>>): Prisma__SettlementClient<$Result.GetResult<Prisma.$SettlementPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Settlements.
     * @param {SettlementCreateManyArgs} args - Arguments to create many Settlements.
     * @example
     * // Create many Settlements
     * const settlement = await prisma.settlement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SettlementCreateManyArgs>(args?: SelectSubset<T, SettlementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Settlements and returns the data saved in the database.
     * @param {SettlementCreateManyAndReturnArgs} args - Arguments to create many Settlements.
     * @example
     * // Create many Settlements
     * const settlement = await prisma.settlement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Settlements and only return the `id`
     * const settlementWithIdOnly = await prisma.settlement.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SettlementCreateManyAndReturnArgs>(args?: SelectSubset<T, SettlementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettlementPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Settlement.
     * @param {SettlementDeleteArgs} args - Arguments to delete one Settlement.
     * @example
     * // Delete one Settlement
     * const Settlement = await prisma.settlement.delete({
     *   where: {
     *     // ... filter to delete one Settlement
     *   }
     * })
     * 
     */
    delete<T extends SettlementDeleteArgs>(args: SelectSubset<T, SettlementDeleteArgs<ExtArgs>>): Prisma__SettlementClient<$Result.GetResult<Prisma.$SettlementPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Settlement.
     * @param {SettlementUpdateArgs} args - Arguments to update one Settlement.
     * @example
     * // Update one Settlement
     * const settlement = await prisma.settlement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SettlementUpdateArgs>(args: SelectSubset<T, SettlementUpdateArgs<ExtArgs>>): Prisma__SettlementClient<$Result.GetResult<Prisma.$SettlementPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Settlements.
     * @param {SettlementDeleteManyArgs} args - Arguments to filter Settlements to delete.
     * @example
     * // Delete a few Settlements
     * const { count } = await prisma.settlement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SettlementDeleteManyArgs>(args?: SelectSubset<T, SettlementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Settlements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettlementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Settlements
     * const settlement = await prisma.settlement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SettlementUpdateManyArgs>(args: SelectSubset<T, SettlementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Settlement.
     * @param {SettlementUpsertArgs} args - Arguments to update or create a Settlement.
     * @example
     * // Update or create a Settlement
     * const settlement = await prisma.settlement.upsert({
     *   create: {
     *     // ... data to create a Settlement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Settlement we want to update
     *   }
     * })
     */
    upsert<T extends SettlementUpsertArgs>(args: SelectSubset<T, SettlementUpsertArgs<ExtArgs>>): Prisma__SettlementClient<$Result.GetResult<Prisma.$SettlementPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Settlements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettlementCountArgs} args - Arguments to filter Settlements to count.
     * @example
     * // Count the number of Settlements
     * const count = await prisma.settlement.count({
     *   where: {
     *     // ... the filter for the Settlements we want to count
     *   }
     * })
    **/
    count<T extends SettlementCountArgs>(
      args?: Subset<T, SettlementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SettlementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Settlement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettlementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SettlementAggregateArgs>(args: Subset<T, SettlementAggregateArgs>): Prisma.PrismaPromise<GetSettlementAggregateType<T>>

    /**
     * Group by Settlement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettlementGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SettlementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SettlementGroupByArgs['orderBy'] }
        : { orderBy?: SettlementGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SettlementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSettlementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Settlement model
   */
  readonly fields: SettlementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Settlement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SettlementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fromUser<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    group<T extends ExpenseGroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExpenseGroupDefaultArgs<ExtArgs>>): Prisma__ExpenseGroupClient<$Result.GetResult<Prisma.$ExpenseGroupPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    toUser<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Settlement model
   */ 
  interface SettlementFieldRefs {
    readonly id: FieldRef<"Settlement", 'String'>
    readonly groupId: FieldRef<"Settlement", 'String'>
    readonly fromUserId: FieldRef<"Settlement", 'String'>
    readonly toUserId: FieldRef<"Settlement", 'String'>
    readonly amount: FieldRef<"Settlement", 'Decimal'>
    readonly currency: FieldRef<"Settlement", 'String'>
    readonly paymentMethod: FieldRef<"Settlement", 'String'>
    readonly status: FieldRef<"Settlement", 'String'>
    readonly note: FieldRef<"Settlement", 'String'>
    readonly idempotencyKey: FieldRef<"Settlement", 'String'>
    readonly createdAt: FieldRef<"Settlement", 'DateTime'>
    readonly confirmedAt: FieldRef<"Settlement", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Settlement findUnique
   */
  export type SettlementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settlement
     */
    select?: SettlementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettlementInclude<ExtArgs> | null
    /**
     * Filter, which Settlement to fetch.
     */
    where: SettlementWhereUniqueInput
  }

  /**
   * Settlement findUniqueOrThrow
   */
  export type SettlementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settlement
     */
    select?: SettlementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettlementInclude<ExtArgs> | null
    /**
     * Filter, which Settlement to fetch.
     */
    where: SettlementWhereUniqueInput
  }

  /**
   * Settlement findFirst
   */
  export type SettlementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settlement
     */
    select?: SettlementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettlementInclude<ExtArgs> | null
    /**
     * Filter, which Settlement to fetch.
     */
    where?: SettlementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settlements to fetch.
     */
    orderBy?: SettlementOrderByWithRelationInput | SettlementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Settlements.
     */
    cursor?: SettlementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settlements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settlements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Settlements.
     */
    distinct?: SettlementScalarFieldEnum | SettlementScalarFieldEnum[]
  }

  /**
   * Settlement findFirstOrThrow
   */
  export type SettlementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settlement
     */
    select?: SettlementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettlementInclude<ExtArgs> | null
    /**
     * Filter, which Settlement to fetch.
     */
    where?: SettlementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settlements to fetch.
     */
    orderBy?: SettlementOrderByWithRelationInput | SettlementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Settlements.
     */
    cursor?: SettlementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settlements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settlements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Settlements.
     */
    distinct?: SettlementScalarFieldEnum | SettlementScalarFieldEnum[]
  }

  /**
   * Settlement findMany
   */
  export type SettlementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settlement
     */
    select?: SettlementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettlementInclude<ExtArgs> | null
    /**
     * Filter, which Settlements to fetch.
     */
    where?: SettlementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settlements to fetch.
     */
    orderBy?: SettlementOrderByWithRelationInput | SettlementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Settlements.
     */
    cursor?: SettlementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settlements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settlements.
     */
    skip?: number
    distinct?: SettlementScalarFieldEnum | SettlementScalarFieldEnum[]
  }

  /**
   * Settlement create
   */
  export type SettlementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settlement
     */
    select?: SettlementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettlementInclude<ExtArgs> | null
    /**
     * The data needed to create a Settlement.
     */
    data: XOR<SettlementCreateInput, SettlementUncheckedCreateInput>
  }

  /**
   * Settlement createMany
   */
  export type SettlementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Settlements.
     */
    data: SettlementCreateManyInput | SettlementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Settlement createManyAndReturn
   */
  export type SettlementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settlement
     */
    select?: SettlementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Settlements.
     */
    data: SettlementCreateManyInput | SettlementCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettlementIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Settlement update
   */
  export type SettlementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settlement
     */
    select?: SettlementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettlementInclude<ExtArgs> | null
    /**
     * The data needed to update a Settlement.
     */
    data: XOR<SettlementUpdateInput, SettlementUncheckedUpdateInput>
    /**
     * Choose, which Settlement to update.
     */
    where: SettlementWhereUniqueInput
  }

  /**
   * Settlement updateMany
   */
  export type SettlementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Settlements.
     */
    data: XOR<SettlementUpdateManyMutationInput, SettlementUncheckedUpdateManyInput>
    /**
     * Filter which Settlements to update
     */
    where?: SettlementWhereInput
  }

  /**
   * Settlement upsert
   */
  export type SettlementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settlement
     */
    select?: SettlementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettlementInclude<ExtArgs> | null
    /**
     * The filter to search for the Settlement to update in case it exists.
     */
    where: SettlementWhereUniqueInput
    /**
     * In case the Settlement found by the `where` argument doesn't exist, create a new Settlement with this data.
     */
    create: XOR<SettlementCreateInput, SettlementUncheckedCreateInput>
    /**
     * In case the Settlement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SettlementUpdateInput, SettlementUncheckedUpdateInput>
  }

  /**
   * Settlement delete
   */
  export type SettlementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settlement
     */
    select?: SettlementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettlementInclude<ExtArgs> | null
    /**
     * Filter which Settlement to delete.
     */
    where: SettlementWhereUniqueInput
  }

  /**
   * Settlement deleteMany
   */
  export type SettlementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Settlements to delete
     */
    where?: SettlementWhereInput
  }

  /**
   * Settlement without action
   */
  export type SettlementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settlement
     */
    select?: SettlementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettlementInclude<ExtArgs> | null
  }


  /**
   * Model flyway_schema_history
   */

  export type AggregateFlyway_schema_history = {
    _count: Flyway_schema_historyCountAggregateOutputType | null
    _avg: Flyway_schema_historyAvgAggregateOutputType | null
    _sum: Flyway_schema_historySumAggregateOutputType | null
    _min: Flyway_schema_historyMinAggregateOutputType | null
    _max: Flyway_schema_historyMaxAggregateOutputType | null
  }

  export type Flyway_schema_historyAvgAggregateOutputType = {
    installed_rank: number | null
    checksum: number | null
    execution_time: number | null
  }

  export type Flyway_schema_historySumAggregateOutputType = {
    installed_rank: number | null
    checksum: number | null
    execution_time: number | null
  }

  export type Flyway_schema_historyMinAggregateOutputType = {
    installed_rank: number | null
    version: string | null
    description: string | null
    type: string | null
    script: string | null
    checksum: number | null
    installed_by: string | null
    installed_on: Date | null
    execution_time: number | null
    success: boolean | null
  }

  export type Flyway_schema_historyMaxAggregateOutputType = {
    installed_rank: number | null
    version: string | null
    description: string | null
    type: string | null
    script: string | null
    checksum: number | null
    installed_by: string | null
    installed_on: Date | null
    execution_time: number | null
    success: boolean | null
  }

  export type Flyway_schema_historyCountAggregateOutputType = {
    installed_rank: number
    version: number
    description: number
    type: number
    script: number
    checksum: number
    installed_by: number
    installed_on: number
    execution_time: number
    success: number
    _all: number
  }


  export type Flyway_schema_historyAvgAggregateInputType = {
    installed_rank?: true
    checksum?: true
    execution_time?: true
  }

  export type Flyway_schema_historySumAggregateInputType = {
    installed_rank?: true
    checksum?: true
    execution_time?: true
  }

  export type Flyway_schema_historyMinAggregateInputType = {
    installed_rank?: true
    version?: true
    description?: true
    type?: true
    script?: true
    checksum?: true
    installed_by?: true
    installed_on?: true
    execution_time?: true
    success?: true
  }

  export type Flyway_schema_historyMaxAggregateInputType = {
    installed_rank?: true
    version?: true
    description?: true
    type?: true
    script?: true
    checksum?: true
    installed_by?: true
    installed_on?: true
    execution_time?: true
    success?: true
  }

  export type Flyway_schema_historyCountAggregateInputType = {
    installed_rank?: true
    version?: true
    description?: true
    type?: true
    script?: true
    checksum?: true
    installed_by?: true
    installed_on?: true
    execution_time?: true
    success?: true
    _all?: true
  }

  export type Flyway_schema_historyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which flyway_schema_history to aggregate.
     */
    where?: flyway_schema_historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of flyway_schema_histories to fetch.
     */
    orderBy?: flyway_schema_historyOrderByWithRelationInput | flyway_schema_historyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: flyway_schema_historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` flyway_schema_histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` flyway_schema_histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned flyway_schema_histories
    **/
    _count?: true | Flyway_schema_historyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Flyway_schema_historyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Flyway_schema_historySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Flyway_schema_historyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Flyway_schema_historyMaxAggregateInputType
  }

  export type GetFlyway_schema_historyAggregateType<T extends Flyway_schema_historyAggregateArgs> = {
        [P in keyof T & keyof AggregateFlyway_schema_history]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFlyway_schema_history[P]>
      : GetScalarType<T[P], AggregateFlyway_schema_history[P]>
  }




  export type flyway_schema_historyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: flyway_schema_historyWhereInput
    orderBy?: flyway_schema_historyOrderByWithAggregationInput | flyway_schema_historyOrderByWithAggregationInput[]
    by: Flyway_schema_historyScalarFieldEnum[] | Flyway_schema_historyScalarFieldEnum
    having?: flyway_schema_historyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Flyway_schema_historyCountAggregateInputType | true
    _avg?: Flyway_schema_historyAvgAggregateInputType
    _sum?: Flyway_schema_historySumAggregateInputType
    _min?: Flyway_schema_historyMinAggregateInputType
    _max?: Flyway_schema_historyMaxAggregateInputType
  }

  export type Flyway_schema_historyGroupByOutputType = {
    installed_rank: number
    version: string | null
    description: string
    type: string
    script: string
    checksum: number | null
    installed_by: string
    installed_on: Date
    execution_time: number
    success: boolean
    _count: Flyway_schema_historyCountAggregateOutputType | null
    _avg: Flyway_schema_historyAvgAggregateOutputType | null
    _sum: Flyway_schema_historySumAggregateOutputType | null
    _min: Flyway_schema_historyMinAggregateOutputType | null
    _max: Flyway_schema_historyMaxAggregateOutputType | null
  }

  type GetFlyway_schema_historyGroupByPayload<T extends flyway_schema_historyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Flyway_schema_historyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Flyway_schema_historyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Flyway_schema_historyGroupByOutputType[P]>
            : GetScalarType<T[P], Flyway_schema_historyGroupByOutputType[P]>
        }
      >
    >


  export type flyway_schema_historySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    installed_rank?: boolean
    version?: boolean
    description?: boolean
    type?: boolean
    script?: boolean
    checksum?: boolean
    installed_by?: boolean
    installed_on?: boolean
    execution_time?: boolean
    success?: boolean
  }, ExtArgs["result"]["flyway_schema_history"]>

  export type flyway_schema_historySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    installed_rank?: boolean
    version?: boolean
    description?: boolean
    type?: boolean
    script?: boolean
    checksum?: boolean
    installed_by?: boolean
    installed_on?: boolean
    execution_time?: boolean
    success?: boolean
  }, ExtArgs["result"]["flyway_schema_history"]>

  export type flyway_schema_historySelectScalar = {
    installed_rank?: boolean
    version?: boolean
    description?: boolean
    type?: boolean
    script?: boolean
    checksum?: boolean
    installed_by?: boolean
    installed_on?: boolean
    execution_time?: boolean
    success?: boolean
  }


  export type $flyway_schema_historyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "flyway_schema_history"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      installed_rank: number
      version: string | null
      description: string
      type: string
      script: string
      checksum: number | null
      installed_by: string
      installed_on: Date
      execution_time: number
      success: boolean
    }, ExtArgs["result"]["flyway_schema_history"]>
    composites: {}
  }

  type flyway_schema_historyGetPayload<S extends boolean | null | undefined | flyway_schema_historyDefaultArgs> = $Result.GetResult<Prisma.$flyway_schema_historyPayload, S>

  type flyway_schema_historyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<flyway_schema_historyFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Flyway_schema_historyCountAggregateInputType | true
    }

  export interface flyway_schema_historyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['flyway_schema_history'], meta: { name: 'flyway_schema_history' } }
    /**
     * Find zero or one Flyway_schema_history that matches the filter.
     * @param {flyway_schema_historyFindUniqueArgs} args - Arguments to find a Flyway_schema_history
     * @example
     * // Get one Flyway_schema_history
     * const flyway_schema_history = await prisma.flyway_schema_history.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends flyway_schema_historyFindUniqueArgs>(args: SelectSubset<T, flyway_schema_historyFindUniqueArgs<ExtArgs>>): Prisma__flyway_schema_historyClient<$Result.GetResult<Prisma.$flyway_schema_historyPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Flyway_schema_history that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {flyway_schema_historyFindUniqueOrThrowArgs} args - Arguments to find a Flyway_schema_history
     * @example
     * // Get one Flyway_schema_history
     * const flyway_schema_history = await prisma.flyway_schema_history.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends flyway_schema_historyFindUniqueOrThrowArgs>(args: SelectSubset<T, flyway_schema_historyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__flyway_schema_historyClient<$Result.GetResult<Prisma.$flyway_schema_historyPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Flyway_schema_history that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {flyway_schema_historyFindFirstArgs} args - Arguments to find a Flyway_schema_history
     * @example
     * // Get one Flyway_schema_history
     * const flyway_schema_history = await prisma.flyway_schema_history.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends flyway_schema_historyFindFirstArgs>(args?: SelectSubset<T, flyway_schema_historyFindFirstArgs<ExtArgs>>): Prisma__flyway_schema_historyClient<$Result.GetResult<Prisma.$flyway_schema_historyPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Flyway_schema_history that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {flyway_schema_historyFindFirstOrThrowArgs} args - Arguments to find a Flyway_schema_history
     * @example
     * // Get one Flyway_schema_history
     * const flyway_schema_history = await prisma.flyway_schema_history.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends flyway_schema_historyFindFirstOrThrowArgs>(args?: SelectSubset<T, flyway_schema_historyFindFirstOrThrowArgs<ExtArgs>>): Prisma__flyway_schema_historyClient<$Result.GetResult<Prisma.$flyway_schema_historyPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Flyway_schema_histories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {flyway_schema_historyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Flyway_schema_histories
     * const flyway_schema_histories = await prisma.flyway_schema_history.findMany()
     * 
     * // Get first 10 Flyway_schema_histories
     * const flyway_schema_histories = await prisma.flyway_schema_history.findMany({ take: 10 })
     * 
     * // Only select the `installed_rank`
     * const flyway_schema_historyWithInstalled_rankOnly = await prisma.flyway_schema_history.findMany({ select: { installed_rank: true } })
     * 
     */
    findMany<T extends flyway_schema_historyFindManyArgs>(args?: SelectSubset<T, flyway_schema_historyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$flyway_schema_historyPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Flyway_schema_history.
     * @param {flyway_schema_historyCreateArgs} args - Arguments to create a Flyway_schema_history.
     * @example
     * // Create one Flyway_schema_history
     * const Flyway_schema_history = await prisma.flyway_schema_history.create({
     *   data: {
     *     // ... data to create a Flyway_schema_history
     *   }
     * })
     * 
     */
    create<T extends flyway_schema_historyCreateArgs>(args: SelectSubset<T, flyway_schema_historyCreateArgs<ExtArgs>>): Prisma__flyway_schema_historyClient<$Result.GetResult<Prisma.$flyway_schema_historyPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Flyway_schema_histories.
     * @param {flyway_schema_historyCreateManyArgs} args - Arguments to create many Flyway_schema_histories.
     * @example
     * // Create many Flyway_schema_histories
     * const flyway_schema_history = await prisma.flyway_schema_history.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends flyway_schema_historyCreateManyArgs>(args?: SelectSubset<T, flyway_schema_historyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Flyway_schema_histories and returns the data saved in the database.
     * @param {flyway_schema_historyCreateManyAndReturnArgs} args - Arguments to create many Flyway_schema_histories.
     * @example
     * // Create many Flyway_schema_histories
     * const flyway_schema_history = await prisma.flyway_schema_history.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Flyway_schema_histories and only return the `installed_rank`
     * const flyway_schema_historyWithInstalled_rankOnly = await prisma.flyway_schema_history.createManyAndReturn({ 
     *   select: { installed_rank: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends flyway_schema_historyCreateManyAndReturnArgs>(args?: SelectSubset<T, flyway_schema_historyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$flyway_schema_historyPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Flyway_schema_history.
     * @param {flyway_schema_historyDeleteArgs} args - Arguments to delete one Flyway_schema_history.
     * @example
     * // Delete one Flyway_schema_history
     * const Flyway_schema_history = await prisma.flyway_schema_history.delete({
     *   where: {
     *     // ... filter to delete one Flyway_schema_history
     *   }
     * })
     * 
     */
    delete<T extends flyway_schema_historyDeleteArgs>(args: SelectSubset<T, flyway_schema_historyDeleteArgs<ExtArgs>>): Prisma__flyway_schema_historyClient<$Result.GetResult<Prisma.$flyway_schema_historyPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Flyway_schema_history.
     * @param {flyway_schema_historyUpdateArgs} args - Arguments to update one Flyway_schema_history.
     * @example
     * // Update one Flyway_schema_history
     * const flyway_schema_history = await prisma.flyway_schema_history.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends flyway_schema_historyUpdateArgs>(args: SelectSubset<T, flyway_schema_historyUpdateArgs<ExtArgs>>): Prisma__flyway_schema_historyClient<$Result.GetResult<Prisma.$flyway_schema_historyPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Flyway_schema_histories.
     * @param {flyway_schema_historyDeleteManyArgs} args - Arguments to filter Flyway_schema_histories to delete.
     * @example
     * // Delete a few Flyway_schema_histories
     * const { count } = await prisma.flyway_schema_history.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends flyway_schema_historyDeleteManyArgs>(args?: SelectSubset<T, flyway_schema_historyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Flyway_schema_histories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {flyway_schema_historyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Flyway_schema_histories
     * const flyway_schema_history = await prisma.flyway_schema_history.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends flyway_schema_historyUpdateManyArgs>(args: SelectSubset<T, flyway_schema_historyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Flyway_schema_history.
     * @param {flyway_schema_historyUpsertArgs} args - Arguments to update or create a Flyway_schema_history.
     * @example
     * // Update or create a Flyway_schema_history
     * const flyway_schema_history = await prisma.flyway_schema_history.upsert({
     *   create: {
     *     // ... data to create a Flyway_schema_history
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Flyway_schema_history we want to update
     *   }
     * })
     */
    upsert<T extends flyway_schema_historyUpsertArgs>(args: SelectSubset<T, flyway_schema_historyUpsertArgs<ExtArgs>>): Prisma__flyway_schema_historyClient<$Result.GetResult<Prisma.$flyway_schema_historyPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Flyway_schema_histories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {flyway_schema_historyCountArgs} args - Arguments to filter Flyway_schema_histories to count.
     * @example
     * // Count the number of Flyway_schema_histories
     * const count = await prisma.flyway_schema_history.count({
     *   where: {
     *     // ... the filter for the Flyway_schema_histories we want to count
     *   }
     * })
    **/
    count<T extends flyway_schema_historyCountArgs>(
      args?: Subset<T, flyway_schema_historyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Flyway_schema_historyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Flyway_schema_history.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Flyway_schema_historyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Flyway_schema_historyAggregateArgs>(args: Subset<T, Flyway_schema_historyAggregateArgs>): Prisma.PrismaPromise<GetFlyway_schema_historyAggregateType<T>>

    /**
     * Group by Flyway_schema_history.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {flyway_schema_historyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends flyway_schema_historyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: flyway_schema_historyGroupByArgs['orderBy'] }
        : { orderBy?: flyway_schema_historyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, flyway_schema_historyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFlyway_schema_historyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the flyway_schema_history model
   */
  readonly fields: flyway_schema_historyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for flyway_schema_history.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__flyway_schema_historyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the flyway_schema_history model
   */ 
  interface flyway_schema_historyFieldRefs {
    readonly installed_rank: FieldRef<"flyway_schema_history", 'Int'>
    readonly version: FieldRef<"flyway_schema_history", 'String'>
    readonly description: FieldRef<"flyway_schema_history", 'String'>
    readonly type: FieldRef<"flyway_schema_history", 'String'>
    readonly script: FieldRef<"flyway_schema_history", 'String'>
    readonly checksum: FieldRef<"flyway_schema_history", 'Int'>
    readonly installed_by: FieldRef<"flyway_schema_history", 'String'>
    readonly installed_on: FieldRef<"flyway_schema_history", 'DateTime'>
    readonly execution_time: FieldRef<"flyway_schema_history", 'Int'>
    readonly success: FieldRef<"flyway_schema_history", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * flyway_schema_history findUnique
   */
  export type flyway_schema_historyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flyway_schema_history
     */
    select?: flyway_schema_historySelect<ExtArgs> | null
    /**
     * Filter, which flyway_schema_history to fetch.
     */
    where: flyway_schema_historyWhereUniqueInput
  }

  /**
   * flyway_schema_history findUniqueOrThrow
   */
  export type flyway_schema_historyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flyway_schema_history
     */
    select?: flyway_schema_historySelect<ExtArgs> | null
    /**
     * Filter, which flyway_schema_history to fetch.
     */
    where: flyway_schema_historyWhereUniqueInput
  }

  /**
   * flyway_schema_history findFirst
   */
  export type flyway_schema_historyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flyway_schema_history
     */
    select?: flyway_schema_historySelect<ExtArgs> | null
    /**
     * Filter, which flyway_schema_history to fetch.
     */
    where?: flyway_schema_historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of flyway_schema_histories to fetch.
     */
    orderBy?: flyway_schema_historyOrderByWithRelationInput | flyway_schema_historyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for flyway_schema_histories.
     */
    cursor?: flyway_schema_historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` flyway_schema_histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` flyway_schema_histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of flyway_schema_histories.
     */
    distinct?: Flyway_schema_historyScalarFieldEnum | Flyway_schema_historyScalarFieldEnum[]
  }

  /**
   * flyway_schema_history findFirstOrThrow
   */
  export type flyway_schema_historyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flyway_schema_history
     */
    select?: flyway_schema_historySelect<ExtArgs> | null
    /**
     * Filter, which flyway_schema_history to fetch.
     */
    where?: flyway_schema_historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of flyway_schema_histories to fetch.
     */
    orderBy?: flyway_schema_historyOrderByWithRelationInput | flyway_schema_historyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for flyway_schema_histories.
     */
    cursor?: flyway_schema_historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` flyway_schema_histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` flyway_schema_histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of flyway_schema_histories.
     */
    distinct?: Flyway_schema_historyScalarFieldEnum | Flyway_schema_historyScalarFieldEnum[]
  }

  /**
   * flyway_schema_history findMany
   */
  export type flyway_schema_historyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flyway_schema_history
     */
    select?: flyway_schema_historySelect<ExtArgs> | null
    /**
     * Filter, which flyway_schema_histories to fetch.
     */
    where?: flyway_schema_historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of flyway_schema_histories to fetch.
     */
    orderBy?: flyway_schema_historyOrderByWithRelationInput | flyway_schema_historyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing flyway_schema_histories.
     */
    cursor?: flyway_schema_historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` flyway_schema_histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` flyway_schema_histories.
     */
    skip?: number
    distinct?: Flyway_schema_historyScalarFieldEnum | Flyway_schema_historyScalarFieldEnum[]
  }

  /**
   * flyway_schema_history create
   */
  export type flyway_schema_historyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flyway_schema_history
     */
    select?: flyway_schema_historySelect<ExtArgs> | null
    /**
     * The data needed to create a flyway_schema_history.
     */
    data: XOR<flyway_schema_historyCreateInput, flyway_schema_historyUncheckedCreateInput>
  }

  /**
   * flyway_schema_history createMany
   */
  export type flyway_schema_historyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many flyway_schema_histories.
     */
    data: flyway_schema_historyCreateManyInput | flyway_schema_historyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * flyway_schema_history createManyAndReturn
   */
  export type flyway_schema_historyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flyway_schema_history
     */
    select?: flyway_schema_historySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many flyway_schema_histories.
     */
    data: flyway_schema_historyCreateManyInput | flyway_schema_historyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * flyway_schema_history update
   */
  export type flyway_schema_historyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flyway_schema_history
     */
    select?: flyway_schema_historySelect<ExtArgs> | null
    /**
     * The data needed to update a flyway_schema_history.
     */
    data: XOR<flyway_schema_historyUpdateInput, flyway_schema_historyUncheckedUpdateInput>
    /**
     * Choose, which flyway_schema_history to update.
     */
    where: flyway_schema_historyWhereUniqueInput
  }

  /**
   * flyway_schema_history updateMany
   */
  export type flyway_schema_historyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update flyway_schema_histories.
     */
    data: XOR<flyway_schema_historyUpdateManyMutationInput, flyway_schema_historyUncheckedUpdateManyInput>
    /**
     * Filter which flyway_schema_histories to update
     */
    where?: flyway_schema_historyWhereInput
  }

  /**
   * flyway_schema_history upsert
   */
  export type flyway_schema_historyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flyway_schema_history
     */
    select?: flyway_schema_historySelect<ExtArgs> | null
    /**
     * The filter to search for the flyway_schema_history to update in case it exists.
     */
    where: flyway_schema_historyWhereUniqueInput
    /**
     * In case the flyway_schema_history found by the `where` argument doesn't exist, create a new flyway_schema_history with this data.
     */
    create: XOR<flyway_schema_historyCreateInput, flyway_schema_historyUncheckedCreateInput>
    /**
     * In case the flyway_schema_history was found with the provided `where` argument, update it with this data.
     */
    update: XOR<flyway_schema_historyUpdateInput, flyway_schema_historyUncheckedUpdateInput>
  }

  /**
   * flyway_schema_history delete
   */
  export type flyway_schema_historyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flyway_schema_history
     */
    select?: flyway_schema_historySelect<ExtArgs> | null
    /**
     * Filter which flyway_schema_history to delete.
     */
    where: flyway_schema_historyWhereUniqueInput
  }

  /**
   * flyway_schema_history deleteMany
   */
  export type flyway_schema_historyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which flyway_schema_histories to delete
     */
    where?: flyway_schema_historyWhereInput
  }

  /**
   * flyway_schema_history without action
   */
  export type flyway_schema_historyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flyway_schema_history
     */
    select?: flyway_schema_historySelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    phoneNumber: 'phoneNumber',
    createdAt: 'createdAt',
    otp: 'otp',
    otpExpiryTime: 'otpExpiryTime',
    email: 'email',
    googleSubject: 'googleSubject',
    phoneVerified: 'phoneVerified',
    emailVerified: 'emailVerified',
    otpHash: 'otpHash',
    otpAttempts: 'otpAttempts',
    otpLastSentAt: 'otpLastSentAt',
    name: 'name',
    profileImageUrl: 'profileImageUrl'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ExpenseGroupScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    currency: 'currency',
    createdById: 'createdById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    archivedAt: 'archivedAt'
  };

  export type ExpenseGroupScalarFieldEnum = (typeof ExpenseGroupScalarFieldEnum)[keyof typeof ExpenseGroupScalarFieldEnum]


  export const GroupMemberScalarFieldEnum: {
    id: 'id',
    groupId: 'groupId',
    userId: 'userId',
    role: 'role',
    status: 'status',
    joinedAt: 'joinedAt'
  };

  export type GroupMemberScalarFieldEnum = (typeof GroupMemberScalarFieldEnum)[keyof typeof GroupMemberScalarFieldEnum]


  export const GroupInvitationScalarFieldEnum: {
    id: 'id',
    groupId: 'groupId',
    invitedPhoneNumber: 'invitedPhoneNumber',
    invitedUserId: 'invitedUserId',
    invitedById: 'invitedById',
    status: 'status',
    createdAt: 'createdAt',
    expiresAt: 'expiresAt'
  };

  export type GroupInvitationScalarFieldEnum = (typeof GroupInvitationScalarFieldEnum)[keyof typeof GroupInvitationScalarFieldEnum]


  export const ExpenseScalarFieldEnum: {
    id: 'id',
    title: 'title',
    amount: 'amount',
    userId: 'userId',
    createdAt: 'createdAt',
    groupId: 'groupId',
    description: 'description',
    currency: 'currency',
    paidById: 'paidById',
    splitType: 'splitType',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type ExpenseScalarFieldEnum = (typeof ExpenseScalarFieldEnum)[keyof typeof ExpenseScalarFieldEnum]


  export const ExpenseSplitScalarFieldEnum: {
    id: 'id',
    expenseId: 'expenseId',
    userId: 'userId',
    shareAmount: 'shareAmount'
  };

  export type ExpenseSplitScalarFieldEnum = (typeof ExpenseSplitScalarFieldEnum)[keyof typeof ExpenseSplitScalarFieldEnum]


  export const SettlementScalarFieldEnum: {
    id: 'id',
    groupId: 'groupId',
    fromUserId: 'fromUserId',
    toUserId: 'toUserId',
    amount: 'amount',
    currency: 'currency',
    paymentMethod: 'paymentMethod',
    status: 'status',
    note: 'note',
    idempotencyKey: 'idempotencyKey',
    createdAt: 'createdAt',
    confirmedAt: 'confirmedAt'
  };

  export type SettlementScalarFieldEnum = (typeof SettlementScalarFieldEnum)[keyof typeof SettlementScalarFieldEnum]


  export const Flyway_schema_historyScalarFieldEnum: {
    installed_rank: 'installed_rank',
    version: 'version',
    description: 'description',
    type: 'type',
    script: 'script',
    checksum: 'checksum',
    installed_by: 'installed_by',
    installed_on: 'installed_on',
    execution_time: 'execution_time',
    success: 'success'
  };

  export type Flyway_schema_historyScalarFieldEnum = (typeof Flyway_schema_historyScalarFieldEnum)[keyof typeof Flyway_schema_historyScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: UuidFilter<"User"> | string
    phoneNumber?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeNullableFilter<"User"> | Date | string | null
    otp?: StringNullableFilter<"User"> | string | null
    otpExpiryTime?: DateTimeNullableFilter<"User"> | Date | string | null
    email?: StringNullableFilter<"User"> | string | null
    googleSubject?: StringNullableFilter<"User"> | string | null
    phoneVerified?: BoolNullableFilter<"User"> | boolean | null
    emailVerified?: BoolNullableFilter<"User"> | boolean | null
    otpHash?: StringNullableFilter<"User"> | string | null
    otpAttempts?: IntNullableFilter<"User"> | number | null
    otpLastSentAt?: DateTimeNullableFilter<"User"> | Date | string | null
    name?: StringNullableFilter<"User"> | string | null
    profileImageUrl?: StringNullableFilter<"User"> | string | null
    createdGroups?: ExpenseGroupListRelationFilter
    splits?: ExpenseSplitListRelationFilter
    expensesPaid?: ExpenseListRelationFilter
    expensesCreated?: ExpenseListRelationFilter
    sentInvitations?: GroupInvitationListRelationFilter
    receivedInvitations?: GroupInvitationListRelationFilter
    groupMemberships?: GroupMemberListRelationFilter
    settlementsSent?: SettlementListRelationFilter
    settlementsReceived?: SettlementListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    otp?: SortOrderInput | SortOrder
    otpExpiryTime?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    googleSubject?: SortOrderInput | SortOrder
    phoneVerified?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    otpHash?: SortOrderInput | SortOrder
    otpAttempts?: SortOrderInput | SortOrder
    otpLastSentAt?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    profileImageUrl?: SortOrderInput | SortOrder
    createdGroups?: ExpenseGroupOrderByRelationAggregateInput
    splits?: ExpenseSplitOrderByRelationAggregateInput
    expensesPaid?: ExpenseOrderByRelationAggregateInput
    expensesCreated?: ExpenseOrderByRelationAggregateInput
    sentInvitations?: GroupInvitationOrderByRelationAggregateInput
    receivedInvitations?: GroupInvitationOrderByRelationAggregateInput
    groupMemberships?: GroupMemberOrderByRelationAggregateInput
    settlementsSent?: SettlementOrderByRelationAggregateInput
    settlementsReceived?: SettlementOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    phoneNumber?: string
    email?: string
    googleSubject?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    createdAt?: DateTimeNullableFilter<"User"> | Date | string | null
    otp?: StringNullableFilter<"User"> | string | null
    otpExpiryTime?: DateTimeNullableFilter<"User"> | Date | string | null
    phoneVerified?: BoolNullableFilter<"User"> | boolean | null
    emailVerified?: BoolNullableFilter<"User"> | boolean | null
    otpHash?: StringNullableFilter<"User"> | string | null
    otpAttempts?: IntNullableFilter<"User"> | number | null
    otpLastSentAt?: DateTimeNullableFilter<"User"> | Date | string | null
    name?: StringNullableFilter<"User"> | string | null
    profileImageUrl?: StringNullableFilter<"User"> | string | null
    createdGroups?: ExpenseGroupListRelationFilter
    splits?: ExpenseSplitListRelationFilter
    expensesPaid?: ExpenseListRelationFilter
    expensesCreated?: ExpenseListRelationFilter
    sentInvitations?: GroupInvitationListRelationFilter
    receivedInvitations?: GroupInvitationListRelationFilter
    groupMemberships?: GroupMemberListRelationFilter
    settlementsSent?: SettlementListRelationFilter
    settlementsReceived?: SettlementListRelationFilter
  }, "id" | "phoneNumber" | "email" | "googleSubject">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    otp?: SortOrderInput | SortOrder
    otpExpiryTime?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    googleSubject?: SortOrderInput | SortOrder
    phoneVerified?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    otpHash?: SortOrderInput | SortOrder
    otpAttempts?: SortOrderInput | SortOrder
    otpLastSentAt?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    profileImageUrl?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"User"> | string
    phoneNumber?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    otp?: StringNullableWithAggregatesFilter<"User"> | string | null
    otpExpiryTime?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    googleSubject?: StringNullableWithAggregatesFilter<"User"> | string | null
    phoneVerified?: BoolNullableWithAggregatesFilter<"User"> | boolean | null
    emailVerified?: BoolNullableWithAggregatesFilter<"User"> | boolean | null
    otpHash?: StringNullableWithAggregatesFilter<"User"> | string | null
    otpAttempts?: IntNullableWithAggregatesFilter<"User"> | number | null
    otpLastSentAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    profileImageUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type ExpenseGroupWhereInput = {
    AND?: ExpenseGroupWhereInput | ExpenseGroupWhereInput[]
    OR?: ExpenseGroupWhereInput[]
    NOT?: ExpenseGroupWhereInput | ExpenseGroupWhereInput[]
    id?: UuidFilter<"ExpenseGroup"> | string
    name?: StringFilter<"ExpenseGroup"> | string
    description?: StringNullableFilter<"ExpenseGroup"> | string | null
    currency?: StringFilter<"ExpenseGroup"> | string
    createdById?: UuidFilter<"ExpenseGroup"> | string
    createdAt?: DateTimeFilter<"ExpenseGroup"> | Date | string
    updatedAt?: DateTimeFilter<"ExpenseGroup"> | Date | string
    archivedAt?: DateTimeNullableFilter<"ExpenseGroup"> | Date | string | null
    createdBy?: XOR<UserRelationFilter, UserWhereInput>
    expenses?: ExpenseListRelationFilter
    invitations?: GroupInvitationListRelationFilter
    members?: GroupMemberListRelationFilter
    settlements?: SettlementListRelationFilter
  }

  export type ExpenseGroupOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    currency?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    archivedAt?: SortOrderInput | SortOrder
    createdBy?: UserOrderByWithRelationInput
    expenses?: ExpenseOrderByRelationAggregateInput
    invitations?: GroupInvitationOrderByRelationAggregateInput
    members?: GroupMemberOrderByRelationAggregateInput
    settlements?: SettlementOrderByRelationAggregateInput
  }

  export type ExpenseGroupWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExpenseGroupWhereInput | ExpenseGroupWhereInput[]
    OR?: ExpenseGroupWhereInput[]
    NOT?: ExpenseGroupWhereInput | ExpenseGroupWhereInput[]
    name?: StringFilter<"ExpenseGroup"> | string
    description?: StringNullableFilter<"ExpenseGroup"> | string | null
    currency?: StringFilter<"ExpenseGroup"> | string
    createdById?: UuidFilter<"ExpenseGroup"> | string
    createdAt?: DateTimeFilter<"ExpenseGroup"> | Date | string
    updatedAt?: DateTimeFilter<"ExpenseGroup"> | Date | string
    archivedAt?: DateTimeNullableFilter<"ExpenseGroup"> | Date | string | null
    createdBy?: XOR<UserRelationFilter, UserWhereInput>
    expenses?: ExpenseListRelationFilter
    invitations?: GroupInvitationListRelationFilter
    members?: GroupMemberListRelationFilter
    settlements?: SettlementListRelationFilter
  }, "id">

  export type ExpenseGroupOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    currency?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    archivedAt?: SortOrderInput | SortOrder
    _count?: ExpenseGroupCountOrderByAggregateInput
    _max?: ExpenseGroupMaxOrderByAggregateInput
    _min?: ExpenseGroupMinOrderByAggregateInput
  }

  export type ExpenseGroupScalarWhereWithAggregatesInput = {
    AND?: ExpenseGroupScalarWhereWithAggregatesInput | ExpenseGroupScalarWhereWithAggregatesInput[]
    OR?: ExpenseGroupScalarWhereWithAggregatesInput[]
    NOT?: ExpenseGroupScalarWhereWithAggregatesInput | ExpenseGroupScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"ExpenseGroup"> | string
    name?: StringWithAggregatesFilter<"ExpenseGroup"> | string
    description?: StringNullableWithAggregatesFilter<"ExpenseGroup"> | string | null
    currency?: StringWithAggregatesFilter<"ExpenseGroup"> | string
    createdById?: UuidWithAggregatesFilter<"ExpenseGroup"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ExpenseGroup"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ExpenseGroup"> | Date | string
    archivedAt?: DateTimeNullableWithAggregatesFilter<"ExpenseGroup"> | Date | string | null
  }

  export type GroupMemberWhereInput = {
    AND?: GroupMemberWhereInput | GroupMemberWhereInput[]
    OR?: GroupMemberWhereInput[]
    NOT?: GroupMemberWhereInput | GroupMemberWhereInput[]
    id?: UuidFilter<"GroupMember"> | string
    groupId?: UuidFilter<"GroupMember"> | string
    userId?: UuidFilter<"GroupMember"> | string
    role?: StringFilter<"GroupMember"> | string
    status?: StringFilter<"GroupMember"> | string
    joinedAt?: DateTimeFilter<"GroupMember"> | Date | string
    group?: XOR<ExpenseGroupRelationFilter, ExpenseGroupWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type GroupMemberOrderByWithRelationInput = {
    id?: SortOrder
    groupId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    status?: SortOrder
    joinedAt?: SortOrder
    group?: ExpenseGroupOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type GroupMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    uq_group_member?: GroupMemberUq_group_memberCompoundUniqueInput
    AND?: GroupMemberWhereInput | GroupMemberWhereInput[]
    OR?: GroupMemberWhereInput[]
    NOT?: GroupMemberWhereInput | GroupMemberWhereInput[]
    groupId?: UuidFilter<"GroupMember"> | string
    userId?: UuidFilter<"GroupMember"> | string
    role?: StringFilter<"GroupMember"> | string
    status?: StringFilter<"GroupMember"> | string
    joinedAt?: DateTimeFilter<"GroupMember"> | Date | string
    group?: XOR<ExpenseGroupRelationFilter, ExpenseGroupWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "uq_group_member">

  export type GroupMemberOrderByWithAggregationInput = {
    id?: SortOrder
    groupId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    status?: SortOrder
    joinedAt?: SortOrder
    _count?: GroupMemberCountOrderByAggregateInput
    _max?: GroupMemberMaxOrderByAggregateInput
    _min?: GroupMemberMinOrderByAggregateInput
  }

  export type GroupMemberScalarWhereWithAggregatesInput = {
    AND?: GroupMemberScalarWhereWithAggregatesInput | GroupMemberScalarWhereWithAggregatesInput[]
    OR?: GroupMemberScalarWhereWithAggregatesInput[]
    NOT?: GroupMemberScalarWhereWithAggregatesInput | GroupMemberScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"GroupMember"> | string
    groupId?: UuidWithAggregatesFilter<"GroupMember"> | string
    userId?: UuidWithAggregatesFilter<"GroupMember"> | string
    role?: StringWithAggregatesFilter<"GroupMember"> | string
    status?: StringWithAggregatesFilter<"GroupMember"> | string
    joinedAt?: DateTimeWithAggregatesFilter<"GroupMember"> | Date | string
  }

  export type GroupInvitationWhereInput = {
    AND?: GroupInvitationWhereInput | GroupInvitationWhereInput[]
    OR?: GroupInvitationWhereInput[]
    NOT?: GroupInvitationWhereInput | GroupInvitationWhereInput[]
    id?: UuidFilter<"GroupInvitation"> | string
    groupId?: UuidFilter<"GroupInvitation"> | string
    invitedPhoneNumber?: StringFilter<"GroupInvitation"> | string
    invitedUserId?: UuidNullableFilter<"GroupInvitation"> | string | null
    invitedById?: UuidFilter<"GroupInvitation"> | string
    status?: StringFilter<"GroupInvitation"> | string
    createdAt?: DateTimeFilter<"GroupInvitation"> | Date | string
    expiresAt?: DateTimeFilter<"GroupInvitation"> | Date | string
    group?: XOR<ExpenseGroupRelationFilter, ExpenseGroupWhereInput>
    invitedBy?: XOR<UserRelationFilter, UserWhereInput>
    invitedUser?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }

  export type GroupInvitationOrderByWithRelationInput = {
    id?: SortOrder
    groupId?: SortOrder
    invitedPhoneNumber?: SortOrder
    invitedUserId?: SortOrderInput | SortOrder
    invitedById?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    group?: ExpenseGroupOrderByWithRelationInput
    invitedBy?: UserOrderByWithRelationInput
    invitedUser?: UserOrderByWithRelationInput
  }

  export type GroupInvitationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GroupInvitationWhereInput | GroupInvitationWhereInput[]
    OR?: GroupInvitationWhereInput[]
    NOT?: GroupInvitationWhereInput | GroupInvitationWhereInput[]
    groupId?: UuidFilter<"GroupInvitation"> | string
    invitedPhoneNumber?: StringFilter<"GroupInvitation"> | string
    invitedUserId?: UuidNullableFilter<"GroupInvitation"> | string | null
    invitedById?: UuidFilter<"GroupInvitation"> | string
    status?: StringFilter<"GroupInvitation"> | string
    createdAt?: DateTimeFilter<"GroupInvitation"> | Date | string
    expiresAt?: DateTimeFilter<"GroupInvitation"> | Date | string
    group?: XOR<ExpenseGroupRelationFilter, ExpenseGroupWhereInput>
    invitedBy?: XOR<UserRelationFilter, UserWhereInput>
    invitedUser?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }, "id">

  export type GroupInvitationOrderByWithAggregationInput = {
    id?: SortOrder
    groupId?: SortOrder
    invitedPhoneNumber?: SortOrder
    invitedUserId?: SortOrderInput | SortOrder
    invitedById?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    _count?: GroupInvitationCountOrderByAggregateInput
    _max?: GroupInvitationMaxOrderByAggregateInput
    _min?: GroupInvitationMinOrderByAggregateInput
  }

  export type GroupInvitationScalarWhereWithAggregatesInput = {
    AND?: GroupInvitationScalarWhereWithAggregatesInput | GroupInvitationScalarWhereWithAggregatesInput[]
    OR?: GroupInvitationScalarWhereWithAggregatesInput[]
    NOT?: GroupInvitationScalarWhereWithAggregatesInput | GroupInvitationScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"GroupInvitation"> | string
    groupId?: UuidWithAggregatesFilter<"GroupInvitation"> | string
    invitedPhoneNumber?: StringWithAggregatesFilter<"GroupInvitation"> | string
    invitedUserId?: UuidNullableWithAggregatesFilter<"GroupInvitation"> | string | null
    invitedById?: UuidWithAggregatesFilter<"GroupInvitation"> | string
    status?: StringWithAggregatesFilter<"GroupInvitation"> | string
    createdAt?: DateTimeWithAggregatesFilter<"GroupInvitation"> | Date | string
    expiresAt?: DateTimeWithAggregatesFilter<"GroupInvitation"> | Date | string
  }

  export type ExpenseWhereInput = {
    AND?: ExpenseWhereInput | ExpenseWhereInput[]
    OR?: ExpenseWhereInput[]
    NOT?: ExpenseWhereInput | ExpenseWhereInput[]
    id?: UuidFilter<"Expense"> | string
    title?: StringFilter<"Expense"> | string
    amount?: DecimalFilter<"Expense"> | Decimal | DecimalJsLike | number | string
    userId?: UuidFilter<"Expense"> | string
    createdAt?: DateTimeNullableFilter<"Expense"> | Date | string | null
    groupId?: UuidNullableFilter<"Expense"> | string | null
    description?: StringNullableFilter<"Expense"> | string | null
    currency?: StringNullableFilter<"Expense"> | string | null
    paidById?: UuidNullableFilter<"Expense"> | string | null
    splitType?: StringNullableFilter<"Expense"> | string | null
    updatedAt?: DateTimeNullableFilter<"Expense"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Expense"> | Date | string | null
    splits?: ExpenseSplitListRelationFilter
    group?: XOR<ExpenseGroupNullableRelationFilter, ExpenseGroupWhereInput> | null
    paidBy?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type ExpenseOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    amount?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    groupId?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    currency?: SortOrderInput | SortOrder
    paidById?: SortOrderInput | SortOrder
    splitType?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    splits?: ExpenseSplitOrderByRelationAggregateInput
    group?: ExpenseGroupOrderByWithRelationInput
    paidBy?: UserOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type ExpenseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExpenseWhereInput | ExpenseWhereInput[]
    OR?: ExpenseWhereInput[]
    NOT?: ExpenseWhereInput | ExpenseWhereInput[]
    title?: StringFilter<"Expense"> | string
    amount?: DecimalFilter<"Expense"> | Decimal | DecimalJsLike | number | string
    userId?: UuidFilter<"Expense"> | string
    createdAt?: DateTimeNullableFilter<"Expense"> | Date | string | null
    groupId?: UuidNullableFilter<"Expense"> | string | null
    description?: StringNullableFilter<"Expense"> | string | null
    currency?: StringNullableFilter<"Expense"> | string | null
    paidById?: UuidNullableFilter<"Expense"> | string | null
    splitType?: StringNullableFilter<"Expense"> | string | null
    updatedAt?: DateTimeNullableFilter<"Expense"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Expense"> | Date | string | null
    splits?: ExpenseSplitListRelationFilter
    group?: XOR<ExpenseGroupNullableRelationFilter, ExpenseGroupWhereInput> | null
    paidBy?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type ExpenseOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    amount?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    groupId?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    currency?: SortOrderInput | SortOrder
    paidById?: SortOrderInput | SortOrder
    splitType?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: ExpenseCountOrderByAggregateInput
    _avg?: ExpenseAvgOrderByAggregateInput
    _max?: ExpenseMaxOrderByAggregateInput
    _min?: ExpenseMinOrderByAggregateInput
    _sum?: ExpenseSumOrderByAggregateInput
  }

  export type ExpenseScalarWhereWithAggregatesInput = {
    AND?: ExpenseScalarWhereWithAggregatesInput | ExpenseScalarWhereWithAggregatesInput[]
    OR?: ExpenseScalarWhereWithAggregatesInput[]
    NOT?: ExpenseScalarWhereWithAggregatesInput | ExpenseScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Expense"> | string
    title?: StringWithAggregatesFilter<"Expense"> | string
    amount?: DecimalWithAggregatesFilter<"Expense"> | Decimal | DecimalJsLike | number | string
    userId?: UuidWithAggregatesFilter<"Expense"> | string
    createdAt?: DateTimeNullableWithAggregatesFilter<"Expense"> | Date | string | null
    groupId?: UuidNullableWithAggregatesFilter<"Expense"> | string | null
    description?: StringNullableWithAggregatesFilter<"Expense"> | string | null
    currency?: StringNullableWithAggregatesFilter<"Expense"> | string | null
    paidById?: UuidNullableWithAggregatesFilter<"Expense"> | string | null
    splitType?: StringNullableWithAggregatesFilter<"Expense"> | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Expense"> | Date | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Expense"> | Date | string | null
  }

  export type ExpenseSplitWhereInput = {
    AND?: ExpenseSplitWhereInput | ExpenseSplitWhereInput[]
    OR?: ExpenseSplitWhereInput[]
    NOT?: ExpenseSplitWhereInput | ExpenseSplitWhereInput[]
    id?: UuidFilter<"ExpenseSplit"> | string
    expenseId?: UuidFilter<"ExpenseSplit"> | string
    userId?: UuidFilter<"ExpenseSplit"> | string
    shareAmount?: DecimalFilter<"ExpenseSplit"> | Decimal | DecimalJsLike | number | string
    expense?: XOR<ExpenseRelationFilter, ExpenseWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type ExpenseSplitOrderByWithRelationInput = {
    id?: SortOrder
    expenseId?: SortOrder
    userId?: SortOrder
    shareAmount?: SortOrder
    expense?: ExpenseOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type ExpenseSplitWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    uq_expense_split_user?: ExpenseSplitUq_expense_split_userCompoundUniqueInput
    AND?: ExpenseSplitWhereInput | ExpenseSplitWhereInput[]
    OR?: ExpenseSplitWhereInput[]
    NOT?: ExpenseSplitWhereInput | ExpenseSplitWhereInput[]
    expenseId?: UuidFilter<"ExpenseSplit"> | string
    userId?: UuidFilter<"ExpenseSplit"> | string
    shareAmount?: DecimalFilter<"ExpenseSplit"> | Decimal | DecimalJsLike | number | string
    expense?: XOR<ExpenseRelationFilter, ExpenseWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "uq_expense_split_user">

  export type ExpenseSplitOrderByWithAggregationInput = {
    id?: SortOrder
    expenseId?: SortOrder
    userId?: SortOrder
    shareAmount?: SortOrder
    _count?: ExpenseSplitCountOrderByAggregateInput
    _avg?: ExpenseSplitAvgOrderByAggregateInput
    _max?: ExpenseSplitMaxOrderByAggregateInput
    _min?: ExpenseSplitMinOrderByAggregateInput
    _sum?: ExpenseSplitSumOrderByAggregateInput
  }

  export type ExpenseSplitScalarWhereWithAggregatesInput = {
    AND?: ExpenseSplitScalarWhereWithAggregatesInput | ExpenseSplitScalarWhereWithAggregatesInput[]
    OR?: ExpenseSplitScalarWhereWithAggregatesInput[]
    NOT?: ExpenseSplitScalarWhereWithAggregatesInput | ExpenseSplitScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"ExpenseSplit"> | string
    expenseId?: UuidWithAggregatesFilter<"ExpenseSplit"> | string
    userId?: UuidWithAggregatesFilter<"ExpenseSplit"> | string
    shareAmount?: DecimalWithAggregatesFilter<"ExpenseSplit"> | Decimal | DecimalJsLike | number | string
  }

  export type SettlementWhereInput = {
    AND?: SettlementWhereInput | SettlementWhereInput[]
    OR?: SettlementWhereInput[]
    NOT?: SettlementWhereInput | SettlementWhereInput[]
    id?: UuidFilter<"Settlement"> | string
    groupId?: UuidFilter<"Settlement"> | string
    fromUserId?: UuidFilter<"Settlement"> | string
    toUserId?: UuidFilter<"Settlement"> | string
    amount?: DecimalFilter<"Settlement"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"Settlement"> | string
    paymentMethod?: StringFilter<"Settlement"> | string
    status?: StringFilter<"Settlement"> | string
    note?: StringNullableFilter<"Settlement"> | string | null
    idempotencyKey?: StringNullableFilter<"Settlement"> | string | null
    createdAt?: DateTimeFilter<"Settlement"> | Date | string
    confirmedAt?: DateTimeNullableFilter<"Settlement"> | Date | string | null
    fromUser?: XOR<UserRelationFilter, UserWhereInput>
    group?: XOR<ExpenseGroupRelationFilter, ExpenseGroupWhereInput>
    toUser?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type SettlementOrderByWithRelationInput = {
    id?: SortOrder
    groupId?: SortOrder
    fromUserId?: SortOrder
    toUserId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    paymentMethod?: SortOrder
    status?: SortOrder
    note?: SortOrderInput | SortOrder
    idempotencyKey?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    confirmedAt?: SortOrderInput | SortOrder
    fromUser?: UserOrderByWithRelationInput
    group?: ExpenseGroupOrderByWithRelationInput
    toUser?: UserOrderByWithRelationInput
  }

  export type SettlementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SettlementWhereInput | SettlementWhereInput[]
    OR?: SettlementWhereInput[]
    NOT?: SettlementWhereInput | SettlementWhereInput[]
    groupId?: UuidFilter<"Settlement"> | string
    fromUserId?: UuidFilter<"Settlement"> | string
    toUserId?: UuidFilter<"Settlement"> | string
    amount?: DecimalFilter<"Settlement"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"Settlement"> | string
    paymentMethod?: StringFilter<"Settlement"> | string
    status?: StringFilter<"Settlement"> | string
    note?: StringNullableFilter<"Settlement"> | string | null
    idempotencyKey?: StringNullableFilter<"Settlement"> | string | null
    createdAt?: DateTimeFilter<"Settlement"> | Date | string
    confirmedAt?: DateTimeNullableFilter<"Settlement"> | Date | string | null
    fromUser?: XOR<UserRelationFilter, UserWhereInput>
    group?: XOR<ExpenseGroupRelationFilter, ExpenseGroupWhereInput>
    toUser?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type SettlementOrderByWithAggregationInput = {
    id?: SortOrder
    groupId?: SortOrder
    fromUserId?: SortOrder
    toUserId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    paymentMethod?: SortOrder
    status?: SortOrder
    note?: SortOrderInput | SortOrder
    idempotencyKey?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    confirmedAt?: SortOrderInput | SortOrder
    _count?: SettlementCountOrderByAggregateInput
    _avg?: SettlementAvgOrderByAggregateInput
    _max?: SettlementMaxOrderByAggregateInput
    _min?: SettlementMinOrderByAggregateInput
    _sum?: SettlementSumOrderByAggregateInput
  }

  export type SettlementScalarWhereWithAggregatesInput = {
    AND?: SettlementScalarWhereWithAggregatesInput | SettlementScalarWhereWithAggregatesInput[]
    OR?: SettlementScalarWhereWithAggregatesInput[]
    NOT?: SettlementScalarWhereWithAggregatesInput | SettlementScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Settlement"> | string
    groupId?: UuidWithAggregatesFilter<"Settlement"> | string
    fromUserId?: UuidWithAggregatesFilter<"Settlement"> | string
    toUserId?: UuidWithAggregatesFilter<"Settlement"> | string
    amount?: DecimalWithAggregatesFilter<"Settlement"> | Decimal | DecimalJsLike | number | string
    currency?: StringWithAggregatesFilter<"Settlement"> | string
    paymentMethod?: StringWithAggregatesFilter<"Settlement"> | string
    status?: StringWithAggregatesFilter<"Settlement"> | string
    note?: StringNullableWithAggregatesFilter<"Settlement"> | string | null
    idempotencyKey?: StringNullableWithAggregatesFilter<"Settlement"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Settlement"> | Date | string
    confirmedAt?: DateTimeNullableWithAggregatesFilter<"Settlement"> | Date | string | null
  }

  export type flyway_schema_historyWhereInput = {
    AND?: flyway_schema_historyWhereInput | flyway_schema_historyWhereInput[]
    OR?: flyway_schema_historyWhereInput[]
    NOT?: flyway_schema_historyWhereInput | flyway_schema_historyWhereInput[]
    installed_rank?: IntFilter<"flyway_schema_history"> | number
    version?: StringNullableFilter<"flyway_schema_history"> | string | null
    description?: StringFilter<"flyway_schema_history"> | string
    type?: StringFilter<"flyway_schema_history"> | string
    script?: StringFilter<"flyway_schema_history"> | string
    checksum?: IntNullableFilter<"flyway_schema_history"> | number | null
    installed_by?: StringFilter<"flyway_schema_history"> | string
    installed_on?: DateTimeFilter<"flyway_schema_history"> | Date | string
    execution_time?: IntFilter<"flyway_schema_history"> | number
    success?: BoolFilter<"flyway_schema_history"> | boolean
  }

  export type flyway_schema_historyOrderByWithRelationInput = {
    installed_rank?: SortOrder
    version?: SortOrderInput | SortOrder
    description?: SortOrder
    type?: SortOrder
    script?: SortOrder
    checksum?: SortOrderInput | SortOrder
    installed_by?: SortOrder
    installed_on?: SortOrder
    execution_time?: SortOrder
    success?: SortOrder
  }

  export type flyway_schema_historyWhereUniqueInput = Prisma.AtLeast<{
    installed_rank?: number
    AND?: flyway_schema_historyWhereInput | flyway_schema_historyWhereInput[]
    OR?: flyway_schema_historyWhereInput[]
    NOT?: flyway_schema_historyWhereInput | flyway_schema_historyWhereInput[]
    version?: StringNullableFilter<"flyway_schema_history"> | string | null
    description?: StringFilter<"flyway_schema_history"> | string
    type?: StringFilter<"flyway_schema_history"> | string
    script?: StringFilter<"flyway_schema_history"> | string
    checksum?: IntNullableFilter<"flyway_schema_history"> | number | null
    installed_by?: StringFilter<"flyway_schema_history"> | string
    installed_on?: DateTimeFilter<"flyway_schema_history"> | Date | string
    execution_time?: IntFilter<"flyway_schema_history"> | number
    success?: BoolFilter<"flyway_schema_history"> | boolean
  }, "installed_rank">

  export type flyway_schema_historyOrderByWithAggregationInput = {
    installed_rank?: SortOrder
    version?: SortOrderInput | SortOrder
    description?: SortOrder
    type?: SortOrder
    script?: SortOrder
    checksum?: SortOrderInput | SortOrder
    installed_by?: SortOrder
    installed_on?: SortOrder
    execution_time?: SortOrder
    success?: SortOrder
    _count?: flyway_schema_historyCountOrderByAggregateInput
    _avg?: flyway_schema_historyAvgOrderByAggregateInput
    _max?: flyway_schema_historyMaxOrderByAggregateInput
    _min?: flyway_schema_historyMinOrderByAggregateInput
    _sum?: flyway_schema_historySumOrderByAggregateInput
  }

  export type flyway_schema_historyScalarWhereWithAggregatesInput = {
    AND?: flyway_schema_historyScalarWhereWithAggregatesInput | flyway_schema_historyScalarWhereWithAggregatesInput[]
    OR?: flyway_schema_historyScalarWhereWithAggregatesInput[]
    NOT?: flyway_schema_historyScalarWhereWithAggregatesInput | flyway_schema_historyScalarWhereWithAggregatesInput[]
    installed_rank?: IntWithAggregatesFilter<"flyway_schema_history"> | number
    version?: StringNullableWithAggregatesFilter<"flyway_schema_history"> | string | null
    description?: StringWithAggregatesFilter<"flyway_schema_history"> | string
    type?: StringWithAggregatesFilter<"flyway_schema_history"> | string
    script?: StringWithAggregatesFilter<"flyway_schema_history"> | string
    checksum?: IntNullableWithAggregatesFilter<"flyway_schema_history"> | number | null
    installed_by?: StringWithAggregatesFilter<"flyway_schema_history"> | string
    installed_on?: DateTimeWithAggregatesFilter<"flyway_schema_history"> | Date | string
    execution_time?: IntWithAggregatesFilter<"flyway_schema_history"> | number
    success?: BoolWithAggregatesFilter<"flyway_schema_history"> | boolean
  }

  export type UserCreateInput = {
    id?: string
    phoneNumber?: string | null
    createdAt?: Date | string | null
    otp?: string | null
    otpExpiryTime?: Date | string | null
    email?: string | null
    googleSubject?: string | null
    phoneVerified?: boolean | null
    emailVerified?: boolean | null
    otpHash?: string | null
    otpAttempts?: number | null
    otpLastSentAt?: Date | string | null
    name?: string | null
    profileImageUrl?: string | null
    createdGroups?: ExpenseGroupCreateNestedManyWithoutCreatedByInput
    splits?: ExpenseSplitCreateNestedManyWithoutUserInput
    expensesPaid?: ExpenseCreateNestedManyWithoutPaidByInput
    expensesCreated?: ExpenseCreateNestedManyWithoutUserInput
    sentInvitations?: GroupInvitationCreateNestedManyWithoutInvitedByInput
    receivedInvitations?: GroupInvitationCreateNestedManyWithoutInvitedUserInput
    groupMemberships?: GroupMemberCreateNestedManyWithoutUserInput
    settlementsSent?: SettlementCreateNestedManyWithoutFromUserInput
    settlementsReceived?: SettlementCreateNestedManyWithoutToUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    phoneNumber?: string | null
    createdAt?: Date | string | null
    otp?: string | null
    otpExpiryTime?: Date | string | null
    email?: string | null
    googleSubject?: string | null
    phoneVerified?: boolean | null
    emailVerified?: boolean | null
    otpHash?: string | null
    otpAttempts?: number | null
    otpLastSentAt?: Date | string | null
    name?: string | null
    profileImageUrl?: string | null
    createdGroups?: ExpenseGroupUncheckedCreateNestedManyWithoutCreatedByInput
    splits?: ExpenseSplitUncheckedCreateNestedManyWithoutUserInput
    expensesPaid?: ExpenseUncheckedCreateNestedManyWithoutPaidByInput
    expensesCreated?: ExpenseUncheckedCreateNestedManyWithoutUserInput
    sentInvitations?: GroupInvitationUncheckedCreateNestedManyWithoutInvitedByInput
    receivedInvitations?: GroupInvitationUncheckedCreateNestedManyWithoutInvitedUserInput
    groupMemberships?: GroupMemberUncheckedCreateNestedManyWithoutUserInput
    settlementsSent?: SettlementUncheckedCreateNestedManyWithoutFromUserInput
    settlementsReceived?: SettlementUncheckedCreateNestedManyWithoutToUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiryTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    googleSubject?: NullableStringFieldUpdateOperationsInput | string | null
    phoneVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    otpHash?: NullableStringFieldUpdateOperationsInput | string | null
    otpAttempts?: NullableIntFieldUpdateOperationsInput | number | null
    otpLastSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdGroups?: ExpenseGroupUpdateManyWithoutCreatedByNestedInput
    splits?: ExpenseSplitUpdateManyWithoutUserNestedInput
    expensesPaid?: ExpenseUpdateManyWithoutPaidByNestedInput
    expensesCreated?: ExpenseUpdateManyWithoutUserNestedInput
    sentInvitations?: GroupInvitationUpdateManyWithoutInvitedByNestedInput
    receivedInvitations?: GroupInvitationUpdateManyWithoutInvitedUserNestedInput
    groupMemberships?: GroupMemberUpdateManyWithoutUserNestedInput
    settlementsSent?: SettlementUpdateManyWithoutFromUserNestedInput
    settlementsReceived?: SettlementUpdateManyWithoutToUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiryTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    googleSubject?: NullableStringFieldUpdateOperationsInput | string | null
    phoneVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    otpHash?: NullableStringFieldUpdateOperationsInput | string | null
    otpAttempts?: NullableIntFieldUpdateOperationsInput | number | null
    otpLastSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdGroups?: ExpenseGroupUncheckedUpdateManyWithoutCreatedByNestedInput
    splits?: ExpenseSplitUncheckedUpdateManyWithoutUserNestedInput
    expensesPaid?: ExpenseUncheckedUpdateManyWithoutPaidByNestedInput
    expensesCreated?: ExpenseUncheckedUpdateManyWithoutUserNestedInput
    sentInvitations?: GroupInvitationUncheckedUpdateManyWithoutInvitedByNestedInput
    receivedInvitations?: GroupInvitationUncheckedUpdateManyWithoutInvitedUserNestedInput
    groupMemberships?: GroupMemberUncheckedUpdateManyWithoutUserNestedInput
    settlementsSent?: SettlementUncheckedUpdateManyWithoutFromUserNestedInput
    settlementsReceived?: SettlementUncheckedUpdateManyWithoutToUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    phoneNumber?: string | null
    createdAt?: Date | string | null
    otp?: string | null
    otpExpiryTime?: Date | string | null
    email?: string | null
    googleSubject?: string | null
    phoneVerified?: boolean | null
    emailVerified?: boolean | null
    otpHash?: string | null
    otpAttempts?: number | null
    otpLastSentAt?: Date | string | null
    name?: string | null
    profileImageUrl?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiryTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    googleSubject?: NullableStringFieldUpdateOperationsInput | string | null
    phoneVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    otpHash?: NullableStringFieldUpdateOperationsInput | string | null
    otpAttempts?: NullableIntFieldUpdateOperationsInput | number | null
    otpLastSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiryTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    googleSubject?: NullableStringFieldUpdateOperationsInput | string | null
    phoneVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    otpHash?: NullableStringFieldUpdateOperationsInput | string | null
    otpAttempts?: NullableIntFieldUpdateOperationsInput | number | null
    otpLastSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExpenseGroupCreateInput = {
    id?: string
    name: string
    description?: string | null
    currency?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    archivedAt?: Date | string | null
    createdBy: UserCreateNestedOneWithoutCreatedGroupsInput
    expenses?: ExpenseCreateNestedManyWithoutGroupInput
    invitations?: GroupInvitationCreateNestedManyWithoutGroupInput
    members?: GroupMemberCreateNestedManyWithoutGroupInput
    settlements?: SettlementCreateNestedManyWithoutGroupInput
  }

  export type ExpenseGroupUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    currency?: string
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    archivedAt?: Date | string | null
    expenses?: ExpenseUncheckedCreateNestedManyWithoutGroupInput
    invitations?: GroupInvitationUncheckedCreateNestedManyWithoutGroupInput
    members?: GroupMemberUncheckedCreateNestedManyWithoutGroupInput
    settlements?: SettlementUncheckedCreateNestedManyWithoutGroupInput
  }

  export type ExpenseGroupUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    archivedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: UserUpdateOneRequiredWithoutCreatedGroupsNestedInput
    expenses?: ExpenseUpdateManyWithoutGroupNestedInput
    invitations?: GroupInvitationUpdateManyWithoutGroupNestedInput
    members?: GroupMemberUpdateManyWithoutGroupNestedInput
    settlements?: SettlementUpdateManyWithoutGroupNestedInput
  }

  export type ExpenseGroupUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    archivedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expenses?: ExpenseUncheckedUpdateManyWithoutGroupNestedInput
    invitations?: GroupInvitationUncheckedUpdateManyWithoutGroupNestedInput
    members?: GroupMemberUncheckedUpdateManyWithoutGroupNestedInput
    settlements?: SettlementUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type ExpenseGroupCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    currency?: string
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    archivedAt?: Date | string | null
  }

  export type ExpenseGroupUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    archivedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ExpenseGroupUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    archivedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GroupMemberCreateInput = {
    id?: string
    role?: string
    status?: string
    joinedAt?: Date | string
    group: ExpenseGroupCreateNestedOneWithoutMembersInput
    user: UserCreateNestedOneWithoutGroupMembershipsInput
  }

  export type GroupMemberUncheckedCreateInput = {
    id?: string
    groupId: string
    userId: string
    role?: string
    status?: string
    joinedAt?: Date | string
  }

  export type GroupMemberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: ExpenseGroupUpdateOneRequiredWithoutMembersNestedInput
    user?: UserUpdateOneRequiredWithoutGroupMembershipsNestedInput
  }

  export type GroupMemberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupMemberCreateManyInput = {
    id?: string
    groupId: string
    userId: string
    role?: string
    status?: string
    joinedAt?: Date | string
  }

  export type GroupMemberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupMemberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupInvitationCreateInput = {
    id?: string
    invitedPhoneNumber: string
    status?: string
    createdAt?: Date | string
    expiresAt: Date | string
    group: ExpenseGroupCreateNestedOneWithoutInvitationsInput
    invitedBy: UserCreateNestedOneWithoutSentInvitationsInput
    invitedUser?: UserCreateNestedOneWithoutReceivedInvitationsInput
  }

  export type GroupInvitationUncheckedCreateInput = {
    id?: string
    groupId: string
    invitedPhoneNumber: string
    invitedUserId?: string | null
    invitedById: string
    status?: string
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type GroupInvitationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    invitedPhoneNumber?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: ExpenseGroupUpdateOneRequiredWithoutInvitationsNestedInput
    invitedBy?: UserUpdateOneRequiredWithoutSentInvitationsNestedInput
    invitedUser?: UserUpdateOneWithoutReceivedInvitationsNestedInput
  }

  export type GroupInvitationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    invitedPhoneNumber?: StringFieldUpdateOperationsInput | string
    invitedUserId?: NullableStringFieldUpdateOperationsInput | string | null
    invitedById?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupInvitationCreateManyInput = {
    id?: string
    groupId: string
    invitedPhoneNumber: string
    invitedUserId?: string | null
    invitedById: string
    status?: string
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type GroupInvitationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    invitedPhoneNumber?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupInvitationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    invitedPhoneNumber?: StringFieldUpdateOperationsInput | string
    invitedUserId?: NullableStringFieldUpdateOperationsInput | string | null
    invitedById?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseCreateInput = {
    id?: string
    title: string
    amount: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string | null
    description?: string | null
    currency?: string | null
    splitType?: string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    splits?: ExpenseSplitCreateNestedManyWithoutExpenseInput
    group?: ExpenseGroupCreateNestedOneWithoutExpensesInput
    paidBy?: UserCreateNestedOneWithoutExpensesPaidInput
    user: UserCreateNestedOneWithoutExpensesCreatedInput
  }

  export type ExpenseUncheckedCreateInput = {
    id?: string
    title: string
    amount: Decimal | DecimalJsLike | number | string
    userId: string
    createdAt?: Date | string | null
    groupId?: string | null
    description?: string | null
    currency?: string | null
    paidById?: string | null
    splitType?: string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    splits?: ExpenseSplitUncheckedCreateNestedManyWithoutExpenseInput
  }

  export type ExpenseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    splitType?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    splits?: ExpenseSplitUpdateManyWithoutExpenseNestedInput
    group?: ExpenseGroupUpdateOneWithoutExpensesNestedInput
    paidBy?: UserUpdateOneWithoutExpensesPaidNestedInput
    user?: UserUpdateOneRequiredWithoutExpensesCreatedNestedInput
  }

  export type ExpenseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    paidById?: NullableStringFieldUpdateOperationsInput | string | null
    splitType?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    splits?: ExpenseSplitUncheckedUpdateManyWithoutExpenseNestedInput
  }

  export type ExpenseCreateManyInput = {
    id?: string
    title: string
    amount: Decimal | DecimalJsLike | number | string
    userId: string
    createdAt?: Date | string | null
    groupId?: string | null
    description?: string | null
    currency?: string | null
    paidById?: string | null
    splitType?: string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type ExpenseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    splitType?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ExpenseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    paidById?: NullableStringFieldUpdateOperationsInput | string | null
    splitType?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ExpenseSplitCreateInput = {
    id?: string
    shareAmount: Decimal | DecimalJsLike | number | string
    expense: ExpenseCreateNestedOneWithoutSplitsInput
    user: UserCreateNestedOneWithoutSplitsInput
  }

  export type ExpenseSplitUncheckedCreateInput = {
    id?: string
    expenseId: string
    userId: string
    shareAmount: Decimal | DecimalJsLike | number | string
  }

  export type ExpenseSplitUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shareAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    expense?: ExpenseUpdateOneRequiredWithoutSplitsNestedInput
    user?: UserUpdateOneRequiredWithoutSplitsNestedInput
  }

  export type ExpenseSplitUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expenseId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    shareAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type ExpenseSplitCreateManyInput = {
    id?: string
    expenseId: string
    userId: string
    shareAmount: Decimal | DecimalJsLike | number | string
  }

  export type ExpenseSplitUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    shareAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type ExpenseSplitUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    expenseId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    shareAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type SettlementCreateInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    paymentMethod?: string
    status?: string
    note?: string | null
    idempotencyKey?: string | null
    createdAt?: Date | string
    confirmedAt?: Date | string | null
    fromUser: UserCreateNestedOneWithoutSettlementsSentInput
    group: ExpenseGroupCreateNestedOneWithoutSettlementsInput
    toUser: UserCreateNestedOneWithoutSettlementsReceivedInput
  }

  export type SettlementUncheckedCreateInput = {
    id?: string
    groupId: string
    fromUserId: string
    toUserId: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    paymentMethod?: string
    status?: string
    note?: string | null
    idempotencyKey?: string | null
    createdAt?: Date | string
    confirmedAt?: Date | string | null
  }

  export type SettlementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fromUser?: UserUpdateOneRequiredWithoutSettlementsSentNestedInput
    group?: ExpenseGroupUpdateOneRequiredWithoutSettlementsNestedInput
    toUser?: UserUpdateOneRequiredWithoutSettlementsReceivedNestedInput
  }

  export type SettlementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    fromUserId?: StringFieldUpdateOperationsInput | string
    toUserId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SettlementCreateManyInput = {
    id?: string
    groupId: string
    fromUserId: string
    toUserId: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    paymentMethod?: string
    status?: string
    note?: string | null
    idempotencyKey?: string | null
    createdAt?: Date | string
    confirmedAt?: Date | string | null
  }

  export type SettlementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SettlementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    fromUserId?: StringFieldUpdateOperationsInput | string
    toUserId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type flyway_schema_historyCreateInput = {
    installed_rank: number
    version?: string | null
    description: string
    type: string
    script: string
    checksum?: number | null
    installed_by: string
    installed_on?: Date | string
    execution_time: number
    success: boolean
  }

  export type flyway_schema_historyUncheckedCreateInput = {
    installed_rank: number
    version?: string | null
    description: string
    type: string
    script: string
    checksum?: number | null
    installed_by: string
    installed_on?: Date | string
    execution_time: number
    success: boolean
  }

  export type flyway_schema_historyUpdateInput = {
    installed_rank?: IntFieldUpdateOperationsInput | number
    version?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    script?: StringFieldUpdateOperationsInput | string
    checksum?: NullableIntFieldUpdateOperationsInput | number | null
    installed_by?: StringFieldUpdateOperationsInput | string
    installed_on?: DateTimeFieldUpdateOperationsInput | Date | string
    execution_time?: IntFieldUpdateOperationsInput | number
    success?: BoolFieldUpdateOperationsInput | boolean
  }

  export type flyway_schema_historyUncheckedUpdateInput = {
    installed_rank?: IntFieldUpdateOperationsInput | number
    version?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    script?: StringFieldUpdateOperationsInput | string
    checksum?: NullableIntFieldUpdateOperationsInput | number | null
    installed_by?: StringFieldUpdateOperationsInput | string
    installed_on?: DateTimeFieldUpdateOperationsInput | Date | string
    execution_time?: IntFieldUpdateOperationsInput | number
    success?: BoolFieldUpdateOperationsInput | boolean
  }

  export type flyway_schema_historyCreateManyInput = {
    installed_rank: number
    version?: string | null
    description: string
    type: string
    script: string
    checksum?: number | null
    installed_by: string
    installed_on?: Date | string
    execution_time: number
    success: boolean
  }

  export type flyway_schema_historyUpdateManyMutationInput = {
    installed_rank?: IntFieldUpdateOperationsInput | number
    version?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    script?: StringFieldUpdateOperationsInput | string
    checksum?: NullableIntFieldUpdateOperationsInput | number | null
    installed_by?: StringFieldUpdateOperationsInput | string
    installed_on?: DateTimeFieldUpdateOperationsInput | Date | string
    execution_time?: IntFieldUpdateOperationsInput | number
    success?: BoolFieldUpdateOperationsInput | boolean
  }

  export type flyway_schema_historyUncheckedUpdateManyInput = {
    installed_rank?: IntFieldUpdateOperationsInput | number
    version?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    script?: StringFieldUpdateOperationsInput | string
    checksum?: NullableIntFieldUpdateOperationsInput | number | null
    installed_by?: StringFieldUpdateOperationsInput | string
    installed_on?: DateTimeFieldUpdateOperationsInput | Date | string
    execution_time?: IntFieldUpdateOperationsInput | number
    success?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ExpenseGroupListRelationFilter = {
    every?: ExpenseGroupWhereInput
    some?: ExpenseGroupWhereInput
    none?: ExpenseGroupWhereInput
  }

  export type ExpenseSplitListRelationFilter = {
    every?: ExpenseSplitWhereInput
    some?: ExpenseSplitWhereInput
    none?: ExpenseSplitWhereInput
  }

  export type ExpenseListRelationFilter = {
    every?: ExpenseWhereInput
    some?: ExpenseWhereInput
    none?: ExpenseWhereInput
  }

  export type GroupInvitationListRelationFilter = {
    every?: GroupInvitationWhereInput
    some?: GroupInvitationWhereInput
    none?: GroupInvitationWhereInput
  }

  export type GroupMemberListRelationFilter = {
    every?: GroupMemberWhereInput
    some?: GroupMemberWhereInput
    none?: GroupMemberWhereInput
  }

  export type SettlementListRelationFilter = {
    every?: SettlementWhereInput
    some?: SettlementWhereInput
    none?: SettlementWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ExpenseGroupOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExpenseSplitOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExpenseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GroupInvitationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GroupMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SettlementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    phoneNumber?: SortOrder
    createdAt?: SortOrder
    otp?: SortOrder
    otpExpiryTime?: SortOrder
    email?: SortOrder
    googleSubject?: SortOrder
    phoneVerified?: SortOrder
    emailVerified?: SortOrder
    otpHash?: SortOrder
    otpAttempts?: SortOrder
    otpLastSentAt?: SortOrder
    name?: SortOrder
    profileImageUrl?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    otpAttempts?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    phoneNumber?: SortOrder
    createdAt?: SortOrder
    otp?: SortOrder
    otpExpiryTime?: SortOrder
    email?: SortOrder
    googleSubject?: SortOrder
    phoneVerified?: SortOrder
    emailVerified?: SortOrder
    otpHash?: SortOrder
    otpAttempts?: SortOrder
    otpLastSentAt?: SortOrder
    name?: SortOrder
    profileImageUrl?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    phoneNumber?: SortOrder
    createdAt?: SortOrder
    otp?: SortOrder
    otpExpiryTime?: SortOrder
    email?: SortOrder
    googleSubject?: SortOrder
    phoneVerified?: SortOrder
    emailVerified?: SortOrder
    otpHash?: SortOrder
    otpAttempts?: SortOrder
    otpLastSentAt?: SortOrder
    name?: SortOrder
    profileImageUrl?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    otpAttempts?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ExpenseGroupCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    currency?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    archivedAt?: SortOrder
  }

  export type ExpenseGroupMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    currency?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    archivedAt?: SortOrder
  }

  export type ExpenseGroupMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    currency?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    archivedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ExpenseGroupRelationFilter = {
    is?: ExpenseGroupWhereInput
    isNot?: ExpenseGroupWhereInput
  }

  export type GroupMemberUq_group_memberCompoundUniqueInput = {
    groupId: string
    userId: string
  }

  export type GroupMemberCountOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    status?: SortOrder
    joinedAt?: SortOrder
  }

  export type GroupMemberMaxOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    status?: SortOrder
    joinedAt?: SortOrder
  }

  export type GroupMemberMinOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    status?: SortOrder
    joinedAt?: SortOrder
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type GroupInvitationCountOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    invitedPhoneNumber?: SortOrder
    invitedUserId?: SortOrder
    invitedById?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type GroupInvitationMaxOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    invitedPhoneNumber?: SortOrder
    invitedUserId?: SortOrder
    invitedById?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type GroupInvitationMinOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    invitedPhoneNumber?: SortOrder
    invitedUserId?: SortOrder
    invitedById?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type ExpenseGroupNullableRelationFilter = {
    is?: ExpenseGroupWhereInput | null
    isNot?: ExpenseGroupWhereInput | null
  }

  export type ExpenseCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    amount?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    groupId?: SortOrder
    description?: SortOrder
    currency?: SortOrder
    paidById?: SortOrder
    splitType?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ExpenseAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type ExpenseMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    amount?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    groupId?: SortOrder
    description?: SortOrder
    currency?: SortOrder
    paidById?: SortOrder
    splitType?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ExpenseMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    amount?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    groupId?: SortOrder
    description?: SortOrder
    currency?: SortOrder
    paidById?: SortOrder
    splitType?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ExpenseSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type ExpenseRelationFilter = {
    is?: ExpenseWhereInput
    isNot?: ExpenseWhereInput
  }

  export type ExpenseSplitUq_expense_split_userCompoundUniqueInput = {
    expenseId: string
    userId: string
  }

  export type ExpenseSplitCountOrderByAggregateInput = {
    id?: SortOrder
    expenseId?: SortOrder
    userId?: SortOrder
    shareAmount?: SortOrder
  }

  export type ExpenseSplitAvgOrderByAggregateInput = {
    shareAmount?: SortOrder
  }

  export type ExpenseSplitMaxOrderByAggregateInput = {
    id?: SortOrder
    expenseId?: SortOrder
    userId?: SortOrder
    shareAmount?: SortOrder
  }

  export type ExpenseSplitMinOrderByAggregateInput = {
    id?: SortOrder
    expenseId?: SortOrder
    userId?: SortOrder
    shareAmount?: SortOrder
  }

  export type ExpenseSplitSumOrderByAggregateInput = {
    shareAmount?: SortOrder
  }

  export type SettlementCountOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    fromUserId?: SortOrder
    toUserId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    paymentMethod?: SortOrder
    status?: SortOrder
    note?: SortOrder
    idempotencyKey?: SortOrder
    createdAt?: SortOrder
    confirmedAt?: SortOrder
  }

  export type SettlementAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type SettlementMaxOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    fromUserId?: SortOrder
    toUserId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    paymentMethod?: SortOrder
    status?: SortOrder
    note?: SortOrder
    idempotencyKey?: SortOrder
    createdAt?: SortOrder
    confirmedAt?: SortOrder
  }

  export type SettlementMinOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    fromUserId?: SortOrder
    toUserId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    paymentMethod?: SortOrder
    status?: SortOrder
    note?: SortOrder
    idempotencyKey?: SortOrder
    createdAt?: SortOrder
    confirmedAt?: SortOrder
  }

  export type SettlementSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type flyway_schema_historyCountOrderByAggregateInput = {
    installed_rank?: SortOrder
    version?: SortOrder
    description?: SortOrder
    type?: SortOrder
    script?: SortOrder
    checksum?: SortOrder
    installed_by?: SortOrder
    installed_on?: SortOrder
    execution_time?: SortOrder
    success?: SortOrder
  }

  export type flyway_schema_historyAvgOrderByAggregateInput = {
    installed_rank?: SortOrder
    checksum?: SortOrder
    execution_time?: SortOrder
  }

  export type flyway_schema_historyMaxOrderByAggregateInput = {
    installed_rank?: SortOrder
    version?: SortOrder
    description?: SortOrder
    type?: SortOrder
    script?: SortOrder
    checksum?: SortOrder
    installed_by?: SortOrder
    installed_on?: SortOrder
    execution_time?: SortOrder
    success?: SortOrder
  }

  export type flyway_schema_historyMinOrderByAggregateInput = {
    installed_rank?: SortOrder
    version?: SortOrder
    description?: SortOrder
    type?: SortOrder
    script?: SortOrder
    checksum?: SortOrder
    installed_by?: SortOrder
    installed_on?: SortOrder
    execution_time?: SortOrder
    success?: SortOrder
  }

  export type flyway_schema_historySumOrderByAggregateInput = {
    installed_rank?: SortOrder
    checksum?: SortOrder
    execution_time?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ExpenseGroupCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<ExpenseGroupCreateWithoutCreatedByInput, ExpenseGroupUncheckedCreateWithoutCreatedByInput> | ExpenseGroupCreateWithoutCreatedByInput[] | ExpenseGroupUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ExpenseGroupCreateOrConnectWithoutCreatedByInput | ExpenseGroupCreateOrConnectWithoutCreatedByInput[]
    createMany?: ExpenseGroupCreateManyCreatedByInputEnvelope
    connect?: ExpenseGroupWhereUniqueInput | ExpenseGroupWhereUniqueInput[]
  }

  export type ExpenseSplitCreateNestedManyWithoutUserInput = {
    create?: XOR<ExpenseSplitCreateWithoutUserInput, ExpenseSplitUncheckedCreateWithoutUserInput> | ExpenseSplitCreateWithoutUserInput[] | ExpenseSplitUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExpenseSplitCreateOrConnectWithoutUserInput | ExpenseSplitCreateOrConnectWithoutUserInput[]
    createMany?: ExpenseSplitCreateManyUserInputEnvelope
    connect?: ExpenseSplitWhereUniqueInput | ExpenseSplitWhereUniqueInput[]
  }

  export type ExpenseCreateNestedManyWithoutPaidByInput = {
    create?: XOR<ExpenseCreateWithoutPaidByInput, ExpenseUncheckedCreateWithoutPaidByInput> | ExpenseCreateWithoutPaidByInput[] | ExpenseUncheckedCreateWithoutPaidByInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutPaidByInput | ExpenseCreateOrConnectWithoutPaidByInput[]
    createMany?: ExpenseCreateManyPaidByInputEnvelope
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
  }

  export type ExpenseCreateNestedManyWithoutUserInput = {
    create?: XOR<ExpenseCreateWithoutUserInput, ExpenseUncheckedCreateWithoutUserInput> | ExpenseCreateWithoutUserInput[] | ExpenseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutUserInput | ExpenseCreateOrConnectWithoutUserInput[]
    createMany?: ExpenseCreateManyUserInputEnvelope
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
  }

  export type GroupInvitationCreateNestedManyWithoutInvitedByInput = {
    create?: XOR<GroupInvitationCreateWithoutInvitedByInput, GroupInvitationUncheckedCreateWithoutInvitedByInput> | GroupInvitationCreateWithoutInvitedByInput[] | GroupInvitationUncheckedCreateWithoutInvitedByInput[]
    connectOrCreate?: GroupInvitationCreateOrConnectWithoutInvitedByInput | GroupInvitationCreateOrConnectWithoutInvitedByInput[]
    createMany?: GroupInvitationCreateManyInvitedByInputEnvelope
    connect?: GroupInvitationWhereUniqueInput | GroupInvitationWhereUniqueInput[]
  }

  export type GroupInvitationCreateNestedManyWithoutInvitedUserInput = {
    create?: XOR<GroupInvitationCreateWithoutInvitedUserInput, GroupInvitationUncheckedCreateWithoutInvitedUserInput> | GroupInvitationCreateWithoutInvitedUserInput[] | GroupInvitationUncheckedCreateWithoutInvitedUserInput[]
    connectOrCreate?: GroupInvitationCreateOrConnectWithoutInvitedUserInput | GroupInvitationCreateOrConnectWithoutInvitedUserInput[]
    createMany?: GroupInvitationCreateManyInvitedUserInputEnvelope
    connect?: GroupInvitationWhereUniqueInput | GroupInvitationWhereUniqueInput[]
  }

  export type GroupMemberCreateNestedManyWithoutUserInput = {
    create?: XOR<GroupMemberCreateWithoutUserInput, GroupMemberUncheckedCreateWithoutUserInput> | GroupMemberCreateWithoutUserInput[] | GroupMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutUserInput | GroupMemberCreateOrConnectWithoutUserInput[]
    createMany?: GroupMemberCreateManyUserInputEnvelope
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
  }

  export type SettlementCreateNestedManyWithoutFromUserInput = {
    create?: XOR<SettlementCreateWithoutFromUserInput, SettlementUncheckedCreateWithoutFromUserInput> | SettlementCreateWithoutFromUserInput[] | SettlementUncheckedCreateWithoutFromUserInput[]
    connectOrCreate?: SettlementCreateOrConnectWithoutFromUserInput | SettlementCreateOrConnectWithoutFromUserInput[]
    createMany?: SettlementCreateManyFromUserInputEnvelope
    connect?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
  }

  export type SettlementCreateNestedManyWithoutToUserInput = {
    create?: XOR<SettlementCreateWithoutToUserInput, SettlementUncheckedCreateWithoutToUserInput> | SettlementCreateWithoutToUserInput[] | SettlementUncheckedCreateWithoutToUserInput[]
    connectOrCreate?: SettlementCreateOrConnectWithoutToUserInput | SettlementCreateOrConnectWithoutToUserInput[]
    createMany?: SettlementCreateManyToUserInputEnvelope
    connect?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
  }

  export type ExpenseGroupUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<ExpenseGroupCreateWithoutCreatedByInput, ExpenseGroupUncheckedCreateWithoutCreatedByInput> | ExpenseGroupCreateWithoutCreatedByInput[] | ExpenseGroupUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ExpenseGroupCreateOrConnectWithoutCreatedByInput | ExpenseGroupCreateOrConnectWithoutCreatedByInput[]
    createMany?: ExpenseGroupCreateManyCreatedByInputEnvelope
    connect?: ExpenseGroupWhereUniqueInput | ExpenseGroupWhereUniqueInput[]
  }

  export type ExpenseSplitUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ExpenseSplitCreateWithoutUserInput, ExpenseSplitUncheckedCreateWithoutUserInput> | ExpenseSplitCreateWithoutUserInput[] | ExpenseSplitUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExpenseSplitCreateOrConnectWithoutUserInput | ExpenseSplitCreateOrConnectWithoutUserInput[]
    createMany?: ExpenseSplitCreateManyUserInputEnvelope
    connect?: ExpenseSplitWhereUniqueInput | ExpenseSplitWhereUniqueInput[]
  }

  export type ExpenseUncheckedCreateNestedManyWithoutPaidByInput = {
    create?: XOR<ExpenseCreateWithoutPaidByInput, ExpenseUncheckedCreateWithoutPaidByInput> | ExpenseCreateWithoutPaidByInput[] | ExpenseUncheckedCreateWithoutPaidByInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutPaidByInput | ExpenseCreateOrConnectWithoutPaidByInput[]
    createMany?: ExpenseCreateManyPaidByInputEnvelope
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
  }

  export type ExpenseUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ExpenseCreateWithoutUserInput, ExpenseUncheckedCreateWithoutUserInput> | ExpenseCreateWithoutUserInput[] | ExpenseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutUserInput | ExpenseCreateOrConnectWithoutUserInput[]
    createMany?: ExpenseCreateManyUserInputEnvelope
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
  }

  export type GroupInvitationUncheckedCreateNestedManyWithoutInvitedByInput = {
    create?: XOR<GroupInvitationCreateWithoutInvitedByInput, GroupInvitationUncheckedCreateWithoutInvitedByInput> | GroupInvitationCreateWithoutInvitedByInput[] | GroupInvitationUncheckedCreateWithoutInvitedByInput[]
    connectOrCreate?: GroupInvitationCreateOrConnectWithoutInvitedByInput | GroupInvitationCreateOrConnectWithoutInvitedByInput[]
    createMany?: GroupInvitationCreateManyInvitedByInputEnvelope
    connect?: GroupInvitationWhereUniqueInput | GroupInvitationWhereUniqueInput[]
  }

  export type GroupInvitationUncheckedCreateNestedManyWithoutInvitedUserInput = {
    create?: XOR<GroupInvitationCreateWithoutInvitedUserInput, GroupInvitationUncheckedCreateWithoutInvitedUserInput> | GroupInvitationCreateWithoutInvitedUserInput[] | GroupInvitationUncheckedCreateWithoutInvitedUserInput[]
    connectOrCreate?: GroupInvitationCreateOrConnectWithoutInvitedUserInput | GroupInvitationCreateOrConnectWithoutInvitedUserInput[]
    createMany?: GroupInvitationCreateManyInvitedUserInputEnvelope
    connect?: GroupInvitationWhereUniqueInput | GroupInvitationWhereUniqueInput[]
  }

  export type GroupMemberUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<GroupMemberCreateWithoutUserInput, GroupMemberUncheckedCreateWithoutUserInput> | GroupMemberCreateWithoutUserInput[] | GroupMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutUserInput | GroupMemberCreateOrConnectWithoutUserInput[]
    createMany?: GroupMemberCreateManyUserInputEnvelope
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
  }

  export type SettlementUncheckedCreateNestedManyWithoutFromUserInput = {
    create?: XOR<SettlementCreateWithoutFromUserInput, SettlementUncheckedCreateWithoutFromUserInput> | SettlementCreateWithoutFromUserInput[] | SettlementUncheckedCreateWithoutFromUserInput[]
    connectOrCreate?: SettlementCreateOrConnectWithoutFromUserInput | SettlementCreateOrConnectWithoutFromUserInput[]
    createMany?: SettlementCreateManyFromUserInputEnvelope
    connect?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
  }

  export type SettlementUncheckedCreateNestedManyWithoutToUserInput = {
    create?: XOR<SettlementCreateWithoutToUserInput, SettlementUncheckedCreateWithoutToUserInput> | SettlementCreateWithoutToUserInput[] | SettlementUncheckedCreateWithoutToUserInput[]
    connectOrCreate?: SettlementCreateOrConnectWithoutToUserInput | SettlementCreateOrConnectWithoutToUserInput[]
    createMany?: SettlementCreateManyToUserInputEnvelope
    connect?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ExpenseGroupUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<ExpenseGroupCreateWithoutCreatedByInput, ExpenseGroupUncheckedCreateWithoutCreatedByInput> | ExpenseGroupCreateWithoutCreatedByInput[] | ExpenseGroupUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ExpenseGroupCreateOrConnectWithoutCreatedByInput | ExpenseGroupCreateOrConnectWithoutCreatedByInput[]
    upsert?: ExpenseGroupUpsertWithWhereUniqueWithoutCreatedByInput | ExpenseGroupUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: ExpenseGroupCreateManyCreatedByInputEnvelope
    set?: ExpenseGroupWhereUniqueInput | ExpenseGroupWhereUniqueInput[]
    disconnect?: ExpenseGroupWhereUniqueInput | ExpenseGroupWhereUniqueInput[]
    delete?: ExpenseGroupWhereUniqueInput | ExpenseGroupWhereUniqueInput[]
    connect?: ExpenseGroupWhereUniqueInput | ExpenseGroupWhereUniqueInput[]
    update?: ExpenseGroupUpdateWithWhereUniqueWithoutCreatedByInput | ExpenseGroupUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: ExpenseGroupUpdateManyWithWhereWithoutCreatedByInput | ExpenseGroupUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: ExpenseGroupScalarWhereInput | ExpenseGroupScalarWhereInput[]
  }

  export type ExpenseSplitUpdateManyWithoutUserNestedInput = {
    create?: XOR<ExpenseSplitCreateWithoutUserInput, ExpenseSplitUncheckedCreateWithoutUserInput> | ExpenseSplitCreateWithoutUserInput[] | ExpenseSplitUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExpenseSplitCreateOrConnectWithoutUserInput | ExpenseSplitCreateOrConnectWithoutUserInput[]
    upsert?: ExpenseSplitUpsertWithWhereUniqueWithoutUserInput | ExpenseSplitUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ExpenseSplitCreateManyUserInputEnvelope
    set?: ExpenseSplitWhereUniqueInput | ExpenseSplitWhereUniqueInput[]
    disconnect?: ExpenseSplitWhereUniqueInput | ExpenseSplitWhereUniqueInput[]
    delete?: ExpenseSplitWhereUniqueInput | ExpenseSplitWhereUniqueInput[]
    connect?: ExpenseSplitWhereUniqueInput | ExpenseSplitWhereUniqueInput[]
    update?: ExpenseSplitUpdateWithWhereUniqueWithoutUserInput | ExpenseSplitUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ExpenseSplitUpdateManyWithWhereWithoutUserInput | ExpenseSplitUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ExpenseSplitScalarWhereInput | ExpenseSplitScalarWhereInput[]
  }

  export type ExpenseUpdateManyWithoutPaidByNestedInput = {
    create?: XOR<ExpenseCreateWithoutPaidByInput, ExpenseUncheckedCreateWithoutPaidByInput> | ExpenseCreateWithoutPaidByInput[] | ExpenseUncheckedCreateWithoutPaidByInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutPaidByInput | ExpenseCreateOrConnectWithoutPaidByInput[]
    upsert?: ExpenseUpsertWithWhereUniqueWithoutPaidByInput | ExpenseUpsertWithWhereUniqueWithoutPaidByInput[]
    createMany?: ExpenseCreateManyPaidByInputEnvelope
    set?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    disconnect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    delete?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    update?: ExpenseUpdateWithWhereUniqueWithoutPaidByInput | ExpenseUpdateWithWhereUniqueWithoutPaidByInput[]
    updateMany?: ExpenseUpdateManyWithWhereWithoutPaidByInput | ExpenseUpdateManyWithWhereWithoutPaidByInput[]
    deleteMany?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
  }

  export type ExpenseUpdateManyWithoutUserNestedInput = {
    create?: XOR<ExpenseCreateWithoutUserInput, ExpenseUncheckedCreateWithoutUserInput> | ExpenseCreateWithoutUserInput[] | ExpenseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutUserInput | ExpenseCreateOrConnectWithoutUserInput[]
    upsert?: ExpenseUpsertWithWhereUniqueWithoutUserInput | ExpenseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ExpenseCreateManyUserInputEnvelope
    set?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    disconnect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    delete?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    update?: ExpenseUpdateWithWhereUniqueWithoutUserInput | ExpenseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ExpenseUpdateManyWithWhereWithoutUserInput | ExpenseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
  }

  export type GroupInvitationUpdateManyWithoutInvitedByNestedInput = {
    create?: XOR<GroupInvitationCreateWithoutInvitedByInput, GroupInvitationUncheckedCreateWithoutInvitedByInput> | GroupInvitationCreateWithoutInvitedByInput[] | GroupInvitationUncheckedCreateWithoutInvitedByInput[]
    connectOrCreate?: GroupInvitationCreateOrConnectWithoutInvitedByInput | GroupInvitationCreateOrConnectWithoutInvitedByInput[]
    upsert?: GroupInvitationUpsertWithWhereUniqueWithoutInvitedByInput | GroupInvitationUpsertWithWhereUniqueWithoutInvitedByInput[]
    createMany?: GroupInvitationCreateManyInvitedByInputEnvelope
    set?: GroupInvitationWhereUniqueInput | GroupInvitationWhereUniqueInput[]
    disconnect?: GroupInvitationWhereUniqueInput | GroupInvitationWhereUniqueInput[]
    delete?: GroupInvitationWhereUniqueInput | GroupInvitationWhereUniqueInput[]
    connect?: GroupInvitationWhereUniqueInput | GroupInvitationWhereUniqueInput[]
    update?: GroupInvitationUpdateWithWhereUniqueWithoutInvitedByInput | GroupInvitationUpdateWithWhereUniqueWithoutInvitedByInput[]
    updateMany?: GroupInvitationUpdateManyWithWhereWithoutInvitedByInput | GroupInvitationUpdateManyWithWhereWithoutInvitedByInput[]
    deleteMany?: GroupInvitationScalarWhereInput | GroupInvitationScalarWhereInput[]
  }

  export type GroupInvitationUpdateManyWithoutInvitedUserNestedInput = {
    create?: XOR<GroupInvitationCreateWithoutInvitedUserInput, GroupInvitationUncheckedCreateWithoutInvitedUserInput> | GroupInvitationCreateWithoutInvitedUserInput[] | GroupInvitationUncheckedCreateWithoutInvitedUserInput[]
    connectOrCreate?: GroupInvitationCreateOrConnectWithoutInvitedUserInput | GroupInvitationCreateOrConnectWithoutInvitedUserInput[]
    upsert?: GroupInvitationUpsertWithWhereUniqueWithoutInvitedUserInput | GroupInvitationUpsertWithWhereUniqueWithoutInvitedUserInput[]
    createMany?: GroupInvitationCreateManyInvitedUserInputEnvelope
    set?: GroupInvitationWhereUniqueInput | GroupInvitationWhereUniqueInput[]
    disconnect?: GroupInvitationWhereUniqueInput | GroupInvitationWhereUniqueInput[]
    delete?: GroupInvitationWhereUniqueInput | GroupInvitationWhereUniqueInput[]
    connect?: GroupInvitationWhereUniqueInput | GroupInvitationWhereUniqueInput[]
    update?: GroupInvitationUpdateWithWhereUniqueWithoutInvitedUserInput | GroupInvitationUpdateWithWhereUniqueWithoutInvitedUserInput[]
    updateMany?: GroupInvitationUpdateManyWithWhereWithoutInvitedUserInput | GroupInvitationUpdateManyWithWhereWithoutInvitedUserInput[]
    deleteMany?: GroupInvitationScalarWhereInput | GroupInvitationScalarWhereInput[]
  }

  export type GroupMemberUpdateManyWithoutUserNestedInput = {
    create?: XOR<GroupMemberCreateWithoutUserInput, GroupMemberUncheckedCreateWithoutUserInput> | GroupMemberCreateWithoutUserInput[] | GroupMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutUserInput | GroupMemberCreateOrConnectWithoutUserInput[]
    upsert?: GroupMemberUpsertWithWhereUniqueWithoutUserInput | GroupMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GroupMemberCreateManyUserInputEnvelope
    set?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    disconnect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    delete?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    update?: GroupMemberUpdateWithWhereUniqueWithoutUserInput | GroupMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GroupMemberUpdateManyWithWhereWithoutUserInput | GroupMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GroupMemberScalarWhereInput | GroupMemberScalarWhereInput[]
  }

  export type SettlementUpdateManyWithoutFromUserNestedInput = {
    create?: XOR<SettlementCreateWithoutFromUserInput, SettlementUncheckedCreateWithoutFromUserInput> | SettlementCreateWithoutFromUserInput[] | SettlementUncheckedCreateWithoutFromUserInput[]
    connectOrCreate?: SettlementCreateOrConnectWithoutFromUserInput | SettlementCreateOrConnectWithoutFromUserInput[]
    upsert?: SettlementUpsertWithWhereUniqueWithoutFromUserInput | SettlementUpsertWithWhereUniqueWithoutFromUserInput[]
    createMany?: SettlementCreateManyFromUserInputEnvelope
    set?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
    disconnect?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
    delete?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
    connect?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
    update?: SettlementUpdateWithWhereUniqueWithoutFromUserInput | SettlementUpdateWithWhereUniqueWithoutFromUserInput[]
    updateMany?: SettlementUpdateManyWithWhereWithoutFromUserInput | SettlementUpdateManyWithWhereWithoutFromUserInput[]
    deleteMany?: SettlementScalarWhereInput | SettlementScalarWhereInput[]
  }

  export type SettlementUpdateManyWithoutToUserNestedInput = {
    create?: XOR<SettlementCreateWithoutToUserInput, SettlementUncheckedCreateWithoutToUserInput> | SettlementCreateWithoutToUserInput[] | SettlementUncheckedCreateWithoutToUserInput[]
    connectOrCreate?: SettlementCreateOrConnectWithoutToUserInput | SettlementCreateOrConnectWithoutToUserInput[]
    upsert?: SettlementUpsertWithWhereUniqueWithoutToUserInput | SettlementUpsertWithWhereUniqueWithoutToUserInput[]
    createMany?: SettlementCreateManyToUserInputEnvelope
    set?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
    disconnect?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
    delete?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
    connect?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
    update?: SettlementUpdateWithWhereUniqueWithoutToUserInput | SettlementUpdateWithWhereUniqueWithoutToUserInput[]
    updateMany?: SettlementUpdateManyWithWhereWithoutToUserInput | SettlementUpdateManyWithWhereWithoutToUserInput[]
    deleteMany?: SettlementScalarWhereInput | SettlementScalarWhereInput[]
  }

  export type ExpenseGroupUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<ExpenseGroupCreateWithoutCreatedByInput, ExpenseGroupUncheckedCreateWithoutCreatedByInput> | ExpenseGroupCreateWithoutCreatedByInput[] | ExpenseGroupUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ExpenseGroupCreateOrConnectWithoutCreatedByInput | ExpenseGroupCreateOrConnectWithoutCreatedByInput[]
    upsert?: ExpenseGroupUpsertWithWhereUniqueWithoutCreatedByInput | ExpenseGroupUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: ExpenseGroupCreateManyCreatedByInputEnvelope
    set?: ExpenseGroupWhereUniqueInput | ExpenseGroupWhereUniqueInput[]
    disconnect?: ExpenseGroupWhereUniqueInput | ExpenseGroupWhereUniqueInput[]
    delete?: ExpenseGroupWhereUniqueInput | ExpenseGroupWhereUniqueInput[]
    connect?: ExpenseGroupWhereUniqueInput | ExpenseGroupWhereUniqueInput[]
    update?: ExpenseGroupUpdateWithWhereUniqueWithoutCreatedByInput | ExpenseGroupUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: ExpenseGroupUpdateManyWithWhereWithoutCreatedByInput | ExpenseGroupUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: ExpenseGroupScalarWhereInput | ExpenseGroupScalarWhereInput[]
  }

  export type ExpenseSplitUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ExpenseSplitCreateWithoutUserInput, ExpenseSplitUncheckedCreateWithoutUserInput> | ExpenseSplitCreateWithoutUserInput[] | ExpenseSplitUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExpenseSplitCreateOrConnectWithoutUserInput | ExpenseSplitCreateOrConnectWithoutUserInput[]
    upsert?: ExpenseSplitUpsertWithWhereUniqueWithoutUserInput | ExpenseSplitUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ExpenseSplitCreateManyUserInputEnvelope
    set?: ExpenseSplitWhereUniqueInput | ExpenseSplitWhereUniqueInput[]
    disconnect?: ExpenseSplitWhereUniqueInput | ExpenseSplitWhereUniqueInput[]
    delete?: ExpenseSplitWhereUniqueInput | ExpenseSplitWhereUniqueInput[]
    connect?: ExpenseSplitWhereUniqueInput | ExpenseSplitWhereUniqueInput[]
    update?: ExpenseSplitUpdateWithWhereUniqueWithoutUserInput | ExpenseSplitUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ExpenseSplitUpdateManyWithWhereWithoutUserInput | ExpenseSplitUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ExpenseSplitScalarWhereInput | ExpenseSplitScalarWhereInput[]
  }

  export type ExpenseUncheckedUpdateManyWithoutPaidByNestedInput = {
    create?: XOR<ExpenseCreateWithoutPaidByInput, ExpenseUncheckedCreateWithoutPaidByInput> | ExpenseCreateWithoutPaidByInput[] | ExpenseUncheckedCreateWithoutPaidByInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutPaidByInput | ExpenseCreateOrConnectWithoutPaidByInput[]
    upsert?: ExpenseUpsertWithWhereUniqueWithoutPaidByInput | ExpenseUpsertWithWhereUniqueWithoutPaidByInput[]
    createMany?: ExpenseCreateManyPaidByInputEnvelope
    set?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    disconnect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    delete?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    update?: ExpenseUpdateWithWhereUniqueWithoutPaidByInput | ExpenseUpdateWithWhereUniqueWithoutPaidByInput[]
    updateMany?: ExpenseUpdateManyWithWhereWithoutPaidByInput | ExpenseUpdateManyWithWhereWithoutPaidByInput[]
    deleteMany?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
  }

  export type ExpenseUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ExpenseCreateWithoutUserInput, ExpenseUncheckedCreateWithoutUserInput> | ExpenseCreateWithoutUserInput[] | ExpenseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutUserInput | ExpenseCreateOrConnectWithoutUserInput[]
    upsert?: ExpenseUpsertWithWhereUniqueWithoutUserInput | ExpenseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ExpenseCreateManyUserInputEnvelope
    set?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    disconnect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    delete?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    update?: ExpenseUpdateWithWhereUniqueWithoutUserInput | ExpenseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ExpenseUpdateManyWithWhereWithoutUserInput | ExpenseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
  }

  export type GroupInvitationUncheckedUpdateManyWithoutInvitedByNestedInput = {
    create?: XOR<GroupInvitationCreateWithoutInvitedByInput, GroupInvitationUncheckedCreateWithoutInvitedByInput> | GroupInvitationCreateWithoutInvitedByInput[] | GroupInvitationUncheckedCreateWithoutInvitedByInput[]
    connectOrCreate?: GroupInvitationCreateOrConnectWithoutInvitedByInput | GroupInvitationCreateOrConnectWithoutInvitedByInput[]
    upsert?: GroupInvitationUpsertWithWhereUniqueWithoutInvitedByInput | GroupInvitationUpsertWithWhereUniqueWithoutInvitedByInput[]
    createMany?: GroupInvitationCreateManyInvitedByInputEnvelope
    set?: GroupInvitationWhereUniqueInput | GroupInvitationWhereUniqueInput[]
    disconnect?: GroupInvitationWhereUniqueInput | GroupInvitationWhereUniqueInput[]
    delete?: GroupInvitationWhereUniqueInput | GroupInvitationWhereUniqueInput[]
    connect?: GroupInvitationWhereUniqueInput | GroupInvitationWhereUniqueInput[]
    update?: GroupInvitationUpdateWithWhereUniqueWithoutInvitedByInput | GroupInvitationUpdateWithWhereUniqueWithoutInvitedByInput[]
    updateMany?: GroupInvitationUpdateManyWithWhereWithoutInvitedByInput | GroupInvitationUpdateManyWithWhereWithoutInvitedByInput[]
    deleteMany?: GroupInvitationScalarWhereInput | GroupInvitationScalarWhereInput[]
  }

  export type GroupInvitationUncheckedUpdateManyWithoutInvitedUserNestedInput = {
    create?: XOR<GroupInvitationCreateWithoutInvitedUserInput, GroupInvitationUncheckedCreateWithoutInvitedUserInput> | GroupInvitationCreateWithoutInvitedUserInput[] | GroupInvitationUncheckedCreateWithoutInvitedUserInput[]
    connectOrCreate?: GroupInvitationCreateOrConnectWithoutInvitedUserInput | GroupInvitationCreateOrConnectWithoutInvitedUserInput[]
    upsert?: GroupInvitationUpsertWithWhereUniqueWithoutInvitedUserInput | GroupInvitationUpsertWithWhereUniqueWithoutInvitedUserInput[]
    createMany?: GroupInvitationCreateManyInvitedUserInputEnvelope
    set?: GroupInvitationWhereUniqueInput | GroupInvitationWhereUniqueInput[]
    disconnect?: GroupInvitationWhereUniqueInput | GroupInvitationWhereUniqueInput[]
    delete?: GroupInvitationWhereUniqueInput | GroupInvitationWhereUniqueInput[]
    connect?: GroupInvitationWhereUniqueInput | GroupInvitationWhereUniqueInput[]
    update?: GroupInvitationUpdateWithWhereUniqueWithoutInvitedUserInput | GroupInvitationUpdateWithWhereUniqueWithoutInvitedUserInput[]
    updateMany?: GroupInvitationUpdateManyWithWhereWithoutInvitedUserInput | GroupInvitationUpdateManyWithWhereWithoutInvitedUserInput[]
    deleteMany?: GroupInvitationScalarWhereInput | GroupInvitationScalarWhereInput[]
  }

  export type GroupMemberUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<GroupMemberCreateWithoutUserInput, GroupMemberUncheckedCreateWithoutUserInput> | GroupMemberCreateWithoutUserInput[] | GroupMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutUserInput | GroupMemberCreateOrConnectWithoutUserInput[]
    upsert?: GroupMemberUpsertWithWhereUniqueWithoutUserInput | GroupMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GroupMemberCreateManyUserInputEnvelope
    set?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    disconnect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    delete?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    update?: GroupMemberUpdateWithWhereUniqueWithoutUserInput | GroupMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GroupMemberUpdateManyWithWhereWithoutUserInput | GroupMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GroupMemberScalarWhereInput | GroupMemberScalarWhereInput[]
  }

  export type SettlementUncheckedUpdateManyWithoutFromUserNestedInput = {
    create?: XOR<SettlementCreateWithoutFromUserInput, SettlementUncheckedCreateWithoutFromUserInput> | SettlementCreateWithoutFromUserInput[] | SettlementUncheckedCreateWithoutFromUserInput[]
    connectOrCreate?: SettlementCreateOrConnectWithoutFromUserInput | SettlementCreateOrConnectWithoutFromUserInput[]
    upsert?: SettlementUpsertWithWhereUniqueWithoutFromUserInput | SettlementUpsertWithWhereUniqueWithoutFromUserInput[]
    createMany?: SettlementCreateManyFromUserInputEnvelope
    set?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
    disconnect?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
    delete?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
    connect?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
    update?: SettlementUpdateWithWhereUniqueWithoutFromUserInput | SettlementUpdateWithWhereUniqueWithoutFromUserInput[]
    updateMany?: SettlementUpdateManyWithWhereWithoutFromUserInput | SettlementUpdateManyWithWhereWithoutFromUserInput[]
    deleteMany?: SettlementScalarWhereInput | SettlementScalarWhereInput[]
  }

  export type SettlementUncheckedUpdateManyWithoutToUserNestedInput = {
    create?: XOR<SettlementCreateWithoutToUserInput, SettlementUncheckedCreateWithoutToUserInput> | SettlementCreateWithoutToUserInput[] | SettlementUncheckedCreateWithoutToUserInput[]
    connectOrCreate?: SettlementCreateOrConnectWithoutToUserInput | SettlementCreateOrConnectWithoutToUserInput[]
    upsert?: SettlementUpsertWithWhereUniqueWithoutToUserInput | SettlementUpsertWithWhereUniqueWithoutToUserInput[]
    createMany?: SettlementCreateManyToUserInputEnvelope
    set?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
    disconnect?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
    delete?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
    connect?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
    update?: SettlementUpdateWithWhereUniqueWithoutToUserInput | SettlementUpdateWithWhereUniqueWithoutToUserInput[]
    updateMany?: SettlementUpdateManyWithWhereWithoutToUserInput | SettlementUpdateManyWithWhereWithoutToUserInput[]
    deleteMany?: SettlementScalarWhereInput | SettlementScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCreatedGroupsInput = {
    create?: XOR<UserCreateWithoutCreatedGroupsInput, UserUncheckedCreateWithoutCreatedGroupsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedGroupsInput
    connect?: UserWhereUniqueInput
  }

  export type ExpenseCreateNestedManyWithoutGroupInput = {
    create?: XOR<ExpenseCreateWithoutGroupInput, ExpenseUncheckedCreateWithoutGroupInput> | ExpenseCreateWithoutGroupInput[] | ExpenseUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutGroupInput | ExpenseCreateOrConnectWithoutGroupInput[]
    createMany?: ExpenseCreateManyGroupInputEnvelope
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
  }

  export type GroupInvitationCreateNestedManyWithoutGroupInput = {
    create?: XOR<GroupInvitationCreateWithoutGroupInput, GroupInvitationUncheckedCreateWithoutGroupInput> | GroupInvitationCreateWithoutGroupInput[] | GroupInvitationUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupInvitationCreateOrConnectWithoutGroupInput | GroupInvitationCreateOrConnectWithoutGroupInput[]
    createMany?: GroupInvitationCreateManyGroupInputEnvelope
    connect?: GroupInvitationWhereUniqueInput | GroupInvitationWhereUniqueInput[]
  }

  export type GroupMemberCreateNestedManyWithoutGroupInput = {
    create?: XOR<GroupMemberCreateWithoutGroupInput, GroupMemberUncheckedCreateWithoutGroupInput> | GroupMemberCreateWithoutGroupInput[] | GroupMemberUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutGroupInput | GroupMemberCreateOrConnectWithoutGroupInput[]
    createMany?: GroupMemberCreateManyGroupInputEnvelope
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
  }

  export type SettlementCreateNestedManyWithoutGroupInput = {
    create?: XOR<SettlementCreateWithoutGroupInput, SettlementUncheckedCreateWithoutGroupInput> | SettlementCreateWithoutGroupInput[] | SettlementUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: SettlementCreateOrConnectWithoutGroupInput | SettlementCreateOrConnectWithoutGroupInput[]
    createMany?: SettlementCreateManyGroupInputEnvelope
    connect?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
  }

  export type ExpenseUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<ExpenseCreateWithoutGroupInput, ExpenseUncheckedCreateWithoutGroupInput> | ExpenseCreateWithoutGroupInput[] | ExpenseUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutGroupInput | ExpenseCreateOrConnectWithoutGroupInput[]
    createMany?: ExpenseCreateManyGroupInputEnvelope
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
  }

  export type GroupInvitationUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<GroupInvitationCreateWithoutGroupInput, GroupInvitationUncheckedCreateWithoutGroupInput> | GroupInvitationCreateWithoutGroupInput[] | GroupInvitationUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupInvitationCreateOrConnectWithoutGroupInput | GroupInvitationCreateOrConnectWithoutGroupInput[]
    createMany?: GroupInvitationCreateManyGroupInputEnvelope
    connect?: GroupInvitationWhereUniqueInput | GroupInvitationWhereUniqueInput[]
  }

  export type GroupMemberUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<GroupMemberCreateWithoutGroupInput, GroupMemberUncheckedCreateWithoutGroupInput> | GroupMemberCreateWithoutGroupInput[] | GroupMemberUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutGroupInput | GroupMemberCreateOrConnectWithoutGroupInput[]
    createMany?: GroupMemberCreateManyGroupInputEnvelope
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
  }

  export type SettlementUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<SettlementCreateWithoutGroupInput, SettlementUncheckedCreateWithoutGroupInput> | SettlementCreateWithoutGroupInput[] | SettlementUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: SettlementCreateOrConnectWithoutGroupInput | SettlementCreateOrConnectWithoutGroupInput[]
    createMany?: SettlementCreateManyGroupInputEnvelope
    connect?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutCreatedGroupsNestedInput = {
    create?: XOR<UserCreateWithoutCreatedGroupsInput, UserUncheckedCreateWithoutCreatedGroupsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedGroupsInput
    upsert?: UserUpsertWithoutCreatedGroupsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedGroupsInput, UserUpdateWithoutCreatedGroupsInput>, UserUncheckedUpdateWithoutCreatedGroupsInput>
  }

  export type ExpenseUpdateManyWithoutGroupNestedInput = {
    create?: XOR<ExpenseCreateWithoutGroupInput, ExpenseUncheckedCreateWithoutGroupInput> | ExpenseCreateWithoutGroupInput[] | ExpenseUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutGroupInput | ExpenseCreateOrConnectWithoutGroupInput[]
    upsert?: ExpenseUpsertWithWhereUniqueWithoutGroupInput | ExpenseUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: ExpenseCreateManyGroupInputEnvelope
    set?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    disconnect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    delete?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    update?: ExpenseUpdateWithWhereUniqueWithoutGroupInput | ExpenseUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: ExpenseUpdateManyWithWhereWithoutGroupInput | ExpenseUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
  }

  export type GroupInvitationUpdateManyWithoutGroupNestedInput = {
    create?: XOR<GroupInvitationCreateWithoutGroupInput, GroupInvitationUncheckedCreateWithoutGroupInput> | GroupInvitationCreateWithoutGroupInput[] | GroupInvitationUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupInvitationCreateOrConnectWithoutGroupInput | GroupInvitationCreateOrConnectWithoutGroupInput[]
    upsert?: GroupInvitationUpsertWithWhereUniqueWithoutGroupInput | GroupInvitationUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: GroupInvitationCreateManyGroupInputEnvelope
    set?: GroupInvitationWhereUniqueInput | GroupInvitationWhereUniqueInput[]
    disconnect?: GroupInvitationWhereUniqueInput | GroupInvitationWhereUniqueInput[]
    delete?: GroupInvitationWhereUniqueInput | GroupInvitationWhereUniqueInput[]
    connect?: GroupInvitationWhereUniqueInput | GroupInvitationWhereUniqueInput[]
    update?: GroupInvitationUpdateWithWhereUniqueWithoutGroupInput | GroupInvitationUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: GroupInvitationUpdateManyWithWhereWithoutGroupInput | GroupInvitationUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: GroupInvitationScalarWhereInput | GroupInvitationScalarWhereInput[]
  }

  export type GroupMemberUpdateManyWithoutGroupNestedInput = {
    create?: XOR<GroupMemberCreateWithoutGroupInput, GroupMemberUncheckedCreateWithoutGroupInput> | GroupMemberCreateWithoutGroupInput[] | GroupMemberUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutGroupInput | GroupMemberCreateOrConnectWithoutGroupInput[]
    upsert?: GroupMemberUpsertWithWhereUniqueWithoutGroupInput | GroupMemberUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: GroupMemberCreateManyGroupInputEnvelope
    set?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    disconnect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    delete?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    update?: GroupMemberUpdateWithWhereUniqueWithoutGroupInput | GroupMemberUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: GroupMemberUpdateManyWithWhereWithoutGroupInput | GroupMemberUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: GroupMemberScalarWhereInput | GroupMemberScalarWhereInput[]
  }

  export type SettlementUpdateManyWithoutGroupNestedInput = {
    create?: XOR<SettlementCreateWithoutGroupInput, SettlementUncheckedCreateWithoutGroupInput> | SettlementCreateWithoutGroupInput[] | SettlementUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: SettlementCreateOrConnectWithoutGroupInput | SettlementCreateOrConnectWithoutGroupInput[]
    upsert?: SettlementUpsertWithWhereUniqueWithoutGroupInput | SettlementUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: SettlementCreateManyGroupInputEnvelope
    set?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
    disconnect?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
    delete?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
    connect?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
    update?: SettlementUpdateWithWhereUniqueWithoutGroupInput | SettlementUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: SettlementUpdateManyWithWhereWithoutGroupInput | SettlementUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: SettlementScalarWhereInput | SettlementScalarWhereInput[]
  }

  export type ExpenseUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<ExpenseCreateWithoutGroupInput, ExpenseUncheckedCreateWithoutGroupInput> | ExpenseCreateWithoutGroupInput[] | ExpenseUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutGroupInput | ExpenseCreateOrConnectWithoutGroupInput[]
    upsert?: ExpenseUpsertWithWhereUniqueWithoutGroupInput | ExpenseUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: ExpenseCreateManyGroupInputEnvelope
    set?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    disconnect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    delete?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    update?: ExpenseUpdateWithWhereUniqueWithoutGroupInput | ExpenseUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: ExpenseUpdateManyWithWhereWithoutGroupInput | ExpenseUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
  }

  export type GroupInvitationUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<GroupInvitationCreateWithoutGroupInput, GroupInvitationUncheckedCreateWithoutGroupInput> | GroupInvitationCreateWithoutGroupInput[] | GroupInvitationUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupInvitationCreateOrConnectWithoutGroupInput | GroupInvitationCreateOrConnectWithoutGroupInput[]
    upsert?: GroupInvitationUpsertWithWhereUniqueWithoutGroupInput | GroupInvitationUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: GroupInvitationCreateManyGroupInputEnvelope
    set?: GroupInvitationWhereUniqueInput | GroupInvitationWhereUniqueInput[]
    disconnect?: GroupInvitationWhereUniqueInput | GroupInvitationWhereUniqueInput[]
    delete?: GroupInvitationWhereUniqueInput | GroupInvitationWhereUniqueInput[]
    connect?: GroupInvitationWhereUniqueInput | GroupInvitationWhereUniqueInput[]
    update?: GroupInvitationUpdateWithWhereUniqueWithoutGroupInput | GroupInvitationUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: GroupInvitationUpdateManyWithWhereWithoutGroupInput | GroupInvitationUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: GroupInvitationScalarWhereInput | GroupInvitationScalarWhereInput[]
  }

  export type GroupMemberUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<GroupMemberCreateWithoutGroupInput, GroupMemberUncheckedCreateWithoutGroupInput> | GroupMemberCreateWithoutGroupInput[] | GroupMemberUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutGroupInput | GroupMemberCreateOrConnectWithoutGroupInput[]
    upsert?: GroupMemberUpsertWithWhereUniqueWithoutGroupInput | GroupMemberUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: GroupMemberCreateManyGroupInputEnvelope
    set?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    disconnect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    delete?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    update?: GroupMemberUpdateWithWhereUniqueWithoutGroupInput | GroupMemberUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: GroupMemberUpdateManyWithWhereWithoutGroupInput | GroupMemberUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: GroupMemberScalarWhereInput | GroupMemberScalarWhereInput[]
  }

  export type SettlementUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<SettlementCreateWithoutGroupInput, SettlementUncheckedCreateWithoutGroupInput> | SettlementCreateWithoutGroupInput[] | SettlementUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: SettlementCreateOrConnectWithoutGroupInput | SettlementCreateOrConnectWithoutGroupInput[]
    upsert?: SettlementUpsertWithWhereUniqueWithoutGroupInput | SettlementUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: SettlementCreateManyGroupInputEnvelope
    set?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
    disconnect?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
    delete?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
    connect?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
    update?: SettlementUpdateWithWhereUniqueWithoutGroupInput | SettlementUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: SettlementUpdateManyWithWhereWithoutGroupInput | SettlementUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: SettlementScalarWhereInput | SettlementScalarWhereInput[]
  }

  export type ExpenseGroupCreateNestedOneWithoutMembersInput = {
    create?: XOR<ExpenseGroupCreateWithoutMembersInput, ExpenseGroupUncheckedCreateWithoutMembersInput>
    connectOrCreate?: ExpenseGroupCreateOrConnectWithoutMembersInput
    connect?: ExpenseGroupWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutGroupMembershipsInput = {
    create?: XOR<UserCreateWithoutGroupMembershipsInput, UserUncheckedCreateWithoutGroupMembershipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGroupMembershipsInput
    connect?: UserWhereUniqueInput
  }

  export type ExpenseGroupUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<ExpenseGroupCreateWithoutMembersInput, ExpenseGroupUncheckedCreateWithoutMembersInput>
    connectOrCreate?: ExpenseGroupCreateOrConnectWithoutMembersInput
    upsert?: ExpenseGroupUpsertWithoutMembersInput
    connect?: ExpenseGroupWhereUniqueInput
    update?: XOR<XOR<ExpenseGroupUpdateToOneWithWhereWithoutMembersInput, ExpenseGroupUpdateWithoutMembersInput>, ExpenseGroupUncheckedUpdateWithoutMembersInput>
  }

  export type UserUpdateOneRequiredWithoutGroupMembershipsNestedInput = {
    create?: XOR<UserCreateWithoutGroupMembershipsInput, UserUncheckedCreateWithoutGroupMembershipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGroupMembershipsInput
    upsert?: UserUpsertWithoutGroupMembershipsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGroupMembershipsInput, UserUpdateWithoutGroupMembershipsInput>, UserUncheckedUpdateWithoutGroupMembershipsInput>
  }

  export type ExpenseGroupCreateNestedOneWithoutInvitationsInput = {
    create?: XOR<ExpenseGroupCreateWithoutInvitationsInput, ExpenseGroupUncheckedCreateWithoutInvitationsInput>
    connectOrCreate?: ExpenseGroupCreateOrConnectWithoutInvitationsInput
    connect?: ExpenseGroupWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSentInvitationsInput = {
    create?: XOR<UserCreateWithoutSentInvitationsInput, UserUncheckedCreateWithoutSentInvitationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentInvitationsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReceivedInvitationsInput = {
    create?: XOR<UserCreateWithoutReceivedInvitationsInput, UserUncheckedCreateWithoutReceivedInvitationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedInvitationsInput
    connect?: UserWhereUniqueInput
  }

  export type ExpenseGroupUpdateOneRequiredWithoutInvitationsNestedInput = {
    create?: XOR<ExpenseGroupCreateWithoutInvitationsInput, ExpenseGroupUncheckedCreateWithoutInvitationsInput>
    connectOrCreate?: ExpenseGroupCreateOrConnectWithoutInvitationsInput
    upsert?: ExpenseGroupUpsertWithoutInvitationsInput
    connect?: ExpenseGroupWhereUniqueInput
    update?: XOR<XOR<ExpenseGroupUpdateToOneWithWhereWithoutInvitationsInput, ExpenseGroupUpdateWithoutInvitationsInput>, ExpenseGroupUncheckedUpdateWithoutInvitationsInput>
  }

  export type UserUpdateOneRequiredWithoutSentInvitationsNestedInput = {
    create?: XOR<UserCreateWithoutSentInvitationsInput, UserUncheckedCreateWithoutSentInvitationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentInvitationsInput
    upsert?: UserUpsertWithoutSentInvitationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSentInvitationsInput, UserUpdateWithoutSentInvitationsInput>, UserUncheckedUpdateWithoutSentInvitationsInput>
  }

  export type UserUpdateOneWithoutReceivedInvitationsNestedInput = {
    create?: XOR<UserCreateWithoutReceivedInvitationsInput, UserUncheckedCreateWithoutReceivedInvitationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedInvitationsInput
    upsert?: UserUpsertWithoutReceivedInvitationsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReceivedInvitationsInput, UserUpdateWithoutReceivedInvitationsInput>, UserUncheckedUpdateWithoutReceivedInvitationsInput>
  }

  export type ExpenseSplitCreateNestedManyWithoutExpenseInput = {
    create?: XOR<ExpenseSplitCreateWithoutExpenseInput, ExpenseSplitUncheckedCreateWithoutExpenseInput> | ExpenseSplitCreateWithoutExpenseInput[] | ExpenseSplitUncheckedCreateWithoutExpenseInput[]
    connectOrCreate?: ExpenseSplitCreateOrConnectWithoutExpenseInput | ExpenseSplitCreateOrConnectWithoutExpenseInput[]
    createMany?: ExpenseSplitCreateManyExpenseInputEnvelope
    connect?: ExpenseSplitWhereUniqueInput | ExpenseSplitWhereUniqueInput[]
  }

  export type ExpenseGroupCreateNestedOneWithoutExpensesInput = {
    create?: XOR<ExpenseGroupCreateWithoutExpensesInput, ExpenseGroupUncheckedCreateWithoutExpensesInput>
    connectOrCreate?: ExpenseGroupCreateOrConnectWithoutExpensesInput
    connect?: ExpenseGroupWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutExpensesPaidInput = {
    create?: XOR<UserCreateWithoutExpensesPaidInput, UserUncheckedCreateWithoutExpensesPaidInput>
    connectOrCreate?: UserCreateOrConnectWithoutExpensesPaidInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutExpensesCreatedInput = {
    create?: XOR<UserCreateWithoutExpensesCreatedInput, UserUncheckedCreateWithoutExpensesCreatedInput>
    connectOrCreate?: UserCreateOrConnectWithoutExpensesCreatedInput
    connect?: UserWhereUniqueInput
  }

  export type ExpenseSplitUncheckedCreateNestedManyWithoutExpenseInput = {
    create?: XOR<ExpenseSplitCreateWithoutExpenseInput, ExpenseSplitUncheckedCreateWithoutExpenseInput> | ExpenseSplitCreateWithoutExpenseInput[] | ExpenseSplitUncheckedCreateWithoutExpenseInput[]
    connectOrCreate?: ExpenseSplitCreateOrConnectWithoutExpenseInput | ExpenseSplitCreateOrConnectWithoutExpenseInput[]
    createMany?: ExpenseSplitCreateManyExpenseInputEnvelope
    connect?: ExpenseSplitWhereUniqueInput | ExpenseSplitWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type ExpenseSplitUpdateManyWithoutExpenseNestedInput = {
    create?: XOR<ExpenseSplitCreateWithoutExpenseInput, ExpenseSplitUncheckedCreateWithoutExpenseInput> | ExpenseSplitCreateWithoutExpenseInput[] | ExpenseSplitUncheckedCreateWithoutExpenseInput[]
    connectOrCreate?: ExpenseSplitCreateOrConnectWithoutExpenseInput | ExpenseSplitCreateOrConnectWithoutExpenseInput[]
    upsert?: ExpenseSplitUpsertWithWhereUniqueWithoutExpenseInput | ExpenseSplitUpsertWithWhereUniqueWithoutExpenseInput[]
    createMany?: ExpenseSplitCreateManyExpenseInputEnvelope
    set?: ExpenseSplitWhereUniqueInput | ExpenseSplitWhereUniqueInput[]
    disconnect?: ExpenseSplitWhereUniqueInput | ExpenseSplitWhereUniqueInput[]
    delete?: ExpenseSplitWhereUniqueInput | ExpenseSplitWhereUniqueInput[]
    connect?: ExpenseSplitWhereUniqueInput | ExpenseSplitWhereUniqueInput[]
    update?: ExpenseSplitUpdateWithWhereUniqueWithoutExpenseInput | ExpenseSplitUpdateWithWhereUniqueWithoutExpenseInput[]
    updateMany?: ExpenseSplitUpdateManyWithWhereWithoutExpenseInput | ExpenseSplitUpdateManyWithWhereWithoutExpenseInput[]
    deleteMany?: ExpenseSplitScalarWhereInput | ExpenseSplitScalarWhereInput[]
  }

  export type ExpenseGroupUpdateOneWithoutExpensesNestedInput = {
    create?: XOR<ExpenseGroupCreateWithoutExpensesInput, ExpenseGroupUncheckedCreateWithoutExpensesInput>
    connectOrCreate?: ExpenseGroupCreateOrConnectWithoutExpensesInput
    upsert?: ExpenseGroupUpsertWithoutExpensesInput
    disconnect?: ExpenseGroupWhereInput | boolean
    delete?: ExpenseGroupWhereInput | boolean
    connect?: ExpenseGroupWhereUniqueInput
    update?: XOR<XOR<ExpenseGroupUpdateToOneWithWhereWithoutExpensesInput, ExpenseGroupUpdateWithoutExpensesInput>, ExpenseGroupUncheckedUpdateWithoutExpensesInput>
  }

  export type UserUpdateOneWithoutExpensesPaidNestedInput = {
    create?: XOR<UserCreateWithoutExpensesPaidInput, UserUncheckedCreateWithoutExpensesPaidInput>
    connectOrCreate?: UserCreateOrConnectWithoutExpensesPaidInput
    upsert?: UserUpsertWithoutExpensesPaidInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutExpensesPaidInput, UserUpdateWithoutExpensesPaidInput>, UserUncheckedUpdateWithoutExpensesPaidInput>
  }

  export type UserUpdateOneRequiredWithoutExpensesCreatedNestedInput = {
    create?: XOR<UserCreateWithoutExpensesCreatedInput, UserUncheckedCreateWithoutExpensesCreatedInput>
    connectOrCreate?: UserCreateOrConnectWithoutExpensesCreatedInput
    upsert?: UserUpsertWithoutExpensesCreatedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutExpensesCreatedInput, UserUpdateWithoutExpensesCreatedInput>, UserUncheckedUpdateWithoutExpensesCreatedInput>
  }

  export type ExpenseSplitUncheckedUpdateManyWithoutExpenseNestedInput = {
    create?: XOR<ExpenseSplitCreateWithoutExpenseInput, ExpenseSplitUncheckedCreateWithoutExpenseInput> | ExpenseSplitCreateWithoutExpenseInput[] | ExpenseSplitUncheckedCreateWithoutExpenseInput[]
    connectOrCreate?: ExpenseSplitCreateOrConnectWithoutExpenseInput | ExpenseSplitCreateOrConnectWithoutExpenseInput[]
    upsert?: ExpenseSplitUpsertWithWhereUniqueWithoutExpenseInput | ExpenseSplitUpsertWithWhereUniqueWithoutExpenseInput[]
    createMany?: ExpenseSplitCreateManyExpenseInputEnvelope
    set?: ExpenseSplitWhereUniqueInput | ExpenseSplitWhereUniqueInput[]
    disconnect?: ExpenseSplitWhereUniqueInput | ExpenseSplitWhereUniqueInput[]
    delete?: ExpenseSplitWhereUniqueInput | ExpenseSplitWhereUniqueInput[]
    connect?: ExpenseSplitWhereUniqueInput | ExpenseSplitWhereUniqueInput[]
    update?: ExpenseSplitUpdateWithWhereUniqueWithoutExpenseInput | ExpenseSplitUpdateWithWhereUniqueWithoutExpenseInput[]
    updateMany?: ExpenseSplitUpdateManyWithWhereWithoutExpenseInput | ExpenseSplitUpdateManyWithWhereWithoutExpenseInput[]
    deleteMany?: ExpenseSplitScalarWhereInput | ExpenseSplitScalarWhereInput[]
  }

  export type ExpenseCreateNestedOneWithoutSplitsInput = {
    create?: XOR<ExpenseCreateWithoutSplitsInput, ExpenseUncheckedCreateWithoutSplitsInput>
    connectOrCreate?: ExpenseCreateOrConnectWithoutSplitsInput
    connect?: ExpenseWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSplitsInput = {
    create?: XOR<UserCreateWithoutSplitsInput, UserUncheckedCreateWithoutSplitsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSplitsInput
    connect?: UserWhereUniqueInput
  }

  export type ExpenseUpdateOneRequiredWithoutSplitsNestedInput = {
    create?: XOR<ExpenseCreateWithoutSplitsInput, ExpenseUncheckedCreateWithoutSplitsInput>
    connectOrCreate?: ExpenseCreateOrConnectWithoutSplitsInput
    upsert?: ExpenseUpsertWithoutSplitsInput
    connect?: ExpenseWhereUniqueInput
    update?: XOR<XOR<ExpenseUpdateToOneWithWhereWithoutSplitsInput, ExpenseUpdateWithoutSplitsInput>, ExpenseUncheckedUpdateWithoutSplitsInput>
  }

  export type UserUpdateOneRequiredWithoutSplitsNestedInput = {
    create?: XOR<UserCreateWithoutSplitsInput, UserUncheckedCreateWithoutSplitsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSplitsInput
    upsert?: UserUpsertWithoutSplitsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSplitsInput, UserUpdateWithoutSplitsInput>, UserUncheckedUpdateWithoutSplitsInput>
  }

  export type UserCreateNestedOneWithoutSettlementsSentInput = {
    create?: XOR<UserCreateWithoutSettlementsSentInput, UserUncheckedCreateWithoutSettlementsSentInput>
    connectOrCreate?: UserCreateOrConnectWithoutSettlementsSentInput
    connect?: UserWhereUniqueInput
  }

  export type ExpenseGroupCreateNestedOneWithoutSettlementsInput = {
    create?: XOR<ExpenseGroupCreateWithoutSettlementsInput, ExpenseGroupUncheckedCreateWithoutSettlementsInput>
    connectOrCreate?: ExpenseGroupCreateOrConnectWithoutSettlementsInput
    connect?: ExpenseGroupWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSettlementsReceivedInput = {
    create?: XOR<UserCreateWithoutSettlementsReceivedInput, UserUncheckedCreateWithoutSettlementsReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutSettlementsReceivedInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSettlementsSentNestedInput = {
    create?: XOR<UserCreateWithoutSettlementsSentInput, UserUncheckedCreateWithoutSettlementsSentInput>
    connectOrCreate?: UserCreateOrConnectWithoutSettlementsSentInput
    upsert?: UserUpsertWithoutSettlementsSentInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSettlementsSentInput, UserUpdateWithoutSettlementsSentInput>, UserUncheckedUpdateWithoutSettlementsSentInput>
  }

  export type ExpenseGroupUpdateOneRequiredWithoutSettlementsNestedInput = {
    create?: XOR<ExpenseGroupCreateWithoutSettlementsInput, ExpenseGroupUncheckedCreateWithoutSettlementsInput>
    connectOrCreate?: ExpenseGroupCreateOrConnectWithoutSettlementsInput
    upsert?: ExpenseGroupUpsertWithoutSettlementsInput
    connect?: ExpenseGroupWhereUniqueInput
    update?: XOR<XOR<ExpenseGroupUpdateToOneWithWhereWithoutSettlementsInput, ExpenseGroupUpdateWithoutSettlementsInput>, ExpenseGroupUncheckedUpdateWithoutSettlementsInput>
  }

  export type UserUpdateOneRequiredWithoutSettlementsReceivedNestedInput = {
    create?: XOR<UserCreateWithoutSettlementsReceivedInput, UserUncheckedCreateWithoutSettlementsReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutSettlementsReceivedInput
    upsert?: UserUpsertWithoutSettlementsReceivedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSettlementsReceivedInput, UserUpdateWithoutSettlementsReceivedInput>, UserUncheckedUpdateWithoutSettlementsReceivedInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ExpenseGroupCreateWithoutCreatedByInput = {
    id?: string
    name: string
    description?: string | null
    currency?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    archivedAt?: Date | string | null
    expenses?: ExpenseCreateNestedManyWithoutGroupInput
    invitations?: GroupInvitationCreateNestedManyWithoutGroupInput
    members?: GroupMemberCreateNestedManyWithoutGroupInput
    settlements?: SettlementCreateNestedManyWithoutGroupInput
  }

  export type ExpenseGroupUncheckedCreateWithoutCreatedByInput = {
    id?: string
    name: string
    description?: string | null
    currency?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    archivedAt?: Date | string | null
    expenses?: ExpenseUncheckedCreateNestedManyWithoutGroupInput
    invitations?: GroupInvitationUncheckedCreateNestedManyWithoutGroupInput
    members?: GroupMemberUncheckedCreateNestedManyWithoutGroupInput
    settlements?: SettlementUncheckedCreateNestedManyWithoutGroupInput
  }

  export type ExpenseGroupCreateOrConnectWithoutCreatedByInput = {
    where: ExpenseGroupWhereUniqueInput
    create: XOR<ExpenseGroupCreateWithoutCreatedByInput, ExpenseGroupUncheckedCreateWithoutCreatedByInput>
  }

  export type ExpenseGroupCreateManyCreatedByInputEnvelope = {
    data: ExpenseGroupCreateManyCreatedByInput | ExpenseGroupCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type ExpenseSplitCreateWithoutUserInput = {
    id?: string
    shareAmount: Decimal | DecimalJsLike | number | string
    expense: ExpenseCreateNestedOneWithoutSplitsInput
  }

  export type ExpenseSplitUncheckedCreateWithoutUserInput = {
    id?: string
    expenseId: string
    shareAmount: Decimal | DecimalJsLike | number | string
  }

  export type ExpenseSplitCreateOrConnectWithoutUserInput = {
    where: ExpenseSplitWhereUniqueInput
    create: XOR<ExpenseSplitCreateWithoutUserInput, ExpenseSplitUncheckedCreateWithoutUserInput>
  }

  export type ExpenseSplitCreateManyUserInputEnvelope = {
    data: ExpenseSplitCreateManyUserInput | ExpenseSplitCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ExpenseCreateWithoutPaidByInput = {
    id?: string
    title: string
    amount: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string | null
    description?: string | null
    currency?: string | null
    splitType?: string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    splits?: ExpenseSplitCreateNestedManyWithoutExpenseInput
    group?: ExpenseGroupCreateNestedOneWithoutExpensesInput
    user: UserCreateNestedOneWithoutExpensesCreatedInput
  }

  export type ExpenseUncheckedCreateWithoutPaidByInput = {
    id?: string
    title: string
    amount: Decimal | DecimalJsLike | number | string
    userId: string
    createdAt?: Date | string | null
    groupId?: string | null
    description?: string | null
    currency?: string | null
    splitType?: string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    splits?: ExpenseSplitUncheckedCreateNestedManyWithoutExpenseInput
  }

  export type ExpenseCreateOrConnectWithoutPaidByInput = {
    where: ExpenseWhereUniqueInput
    create: XOR<ExpenseCreateWithoutPaidByInput, ExpenseUncheckedCreateWithoutPaidByInput>
  }

  export type ExpenseCreateManyPaidByInputEnvelope = {
    data: ExpenseCreateManyPaidByInput | ExpenseCreateManyPaidByInput[]
    skipDuplicates?: boolean
  }

  export type ExpenseCreateWithoutUserInput = {
    id?: string
    title: string
    amount: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string | null
    description?: string | null
    currency?: string | null
    splitType?: string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    splits?: ExpenseSplitCreateNestedManyWithoutExpenseInput
    group?: ExpenseGroupCreateNestedOneWithoutExpensesInput
    paidBy?: UserCreateNestedOneWithoutExpensesPaidInput
  }

  export type ExpenseUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    amount: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string | null
    groupId?: string | null
    description?: string | null
    currency?: string | null
    paidById?: string | null
    splitType?: string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    splits?: ExpenseSplitUncheckedCreateNestedManyWithoutExpenseInput
  }

  export type ExpenseCreateOrConnectWithoutUserInput = {
    where: ExpenseWhereUniqueInput
    create: XOR<ExpenseCreateWithoutUserInput, ExpenseUncheckedCreateWithoutUserInput>
  }

  export type ExpenseCreateManyUserInputEnvelope = {
    data: ExpenseCreateManyUserInput | ExpenseCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type GroupInvitationCreateWithoutInvitedByInput = {
    id?: string
    invitedPhoneNumber: string
    status?: string
    createdAt?: Date | string
    expiresAt: Date | string
    group: ExpenseGroupCreateNestedOneWithoutInvitationsInput
    invitedUser?: UserCreateNestedOneWithoutReceivedInvitationsInput
  }

  export type GroupInvitationUncheckedCreateWithoutInvitedByInput = {
    id?: string
    groupId: string
    invitedPhoneNumber: string
    invitedUserId?: string | null
    status?: string
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type GroupInvitationCreateOrConnectWithoutInvitedByInput = {
    where: GroupInvitationWhereUniqueInput
    create: XOR<GroupInvitationCreateWithoutInvitedByInput, GroupInvitationUncheckedCreateWithoutInvitedByInput>
  }

  export type GroupInvitationCreateManyInvitedByInputEnvelope = {
    data: GroupInvitationCreateManyInvitedByInput | GroupInvitationCreateManyInvitedByInput[]
    skipDuplicates?: boolean
  }

  export type GroupInvitationCreateWithoutInvitedUserInput = {
    id?: string
    invitedPhoneNumber: string
    status?: string
    createdAt?: Date | string
    expiresAt: Date | string
    group: ExpenseGroupCreateNestedOneWithoutInvitationsInput
    invitedBy: UserCreateNestedOneWithoutSentInvitationsInput
  }

  export type GroupInvitationUncheckedCreateWithoutInvitedUserInput = {
    id?: string
    groupId: string
    invitedPhoneNumber: string
    invitedById: string
    status?: string
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type GroupInvitationCreateOrConnectWithoutInvitedUserInput = {
    where: GroupInvitationWhereUniqueInput
    create: XOR<GroupInvitationCreateWithoutInvitedUserInput, GroupInvitationUncheckedCreateWithoutInvitedUserInput>
  }

  export type GroupInvitationCreateManyInvitedUserInputEnvelope = {
    data: GroupInvitationCreateManyInvitedUserInput | GroupInvitationCreateManyInvitedUserInput[]
    skipDuplicates?: boolean
  }

  export type GroupMemberCreateWithoutUserInput = {
    id?: string
    role?: string
    status?: string
    joinedAt?: Date | string
    group: ExpenseGroupCreateNestedOneWithoutMembersInput
  }

  export type GroupMemberUncheckedCreateWithoutUserInput = {
    id?: string
    groupId: string
    role?: string
    status?: string
    joinedAt?: Date | string
  }

  export type GroupMemberCreateOrConnectWithoutUserInput = {
    where: GroupMemberWhereUniqueInput
    create: XOR<GroupMemberCreateWithoutUserInput, GroupMemberUncheckedCreateWithoutUserInput>
  }

  export type GroupMemberCreateManyUserInputEnvelope = {
    data: GroupMemberCreateManyUserInput | GroupMemberCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SettlementCreateWithoutFromUserInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    paymentMethod?: string
    status?: string
    note?: string | null
    idempotencyKey?: string | null
    createdAt?: Date | string
    confirmedAt?: Date | string | null
    group: ExpenseGroupCreateNestedOneWithoutSettlementsInput
    toUser: UserCreateNestedOneWithoutSettlementsReceivedInput
  }

  export type SettlementUncheckedCreateWithoutFromUserInput = {
    id?: string
    groupId: string
    toUserId: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    paymentMethod?: string
    status?: string
    note?: string | null
    idempotencyKey?: string | null
    createdAt?: Date | string
    confirmedAt?: Date | string | null
  }

  export type SettlementCreateOrConnectWithoutFromUserInput = {
    where: SettlementWhereUniqueInput
    create: XOR<SettlementCreateWithoutFromUserInput, SettlementUncheckedCreateWithoutFromUserInput>
  }

  export type SettlementCreateManyFromUserInputEnvelope = {
    data: SettlementCreateManyFromUserInput | SettlementCreateManyFromUserInput[]
    skipDuplicates?: boolean
  }

  export type SettlementCreateWithoutToUserInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    paymentMethod?: string
    status?: string
    note?: string | null
    idempotencyKey?: string | null
    createdAt?: Date | string
    confirmedAt?: Date | string | null
    fromUser: UserCreateNestedOneWithoutSettlementsSentInput
    group: ExpenseGroupCreateNestedOneWithoutSettlementsInput
  }

  export type SettlementUncheckedCreateWithoutToUserInput = {
    id?: string
    groupId: string
    fromUserId: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    paymentMethod?: string
    status?: string
    note?: string | null
    idempotencyKey?: string | null
    createdAt?: Date | string
    confirmedAt?: Date | string | null
  }

  export type SettlementCreateOrConnectWithoutToUserInput = {
    where: SettlementWhereUniqueInput
    create: XOR<SettlementCreateWithoutToUserInput, SettlementUncheckedCreateWithoutToUserInput>
  }

  export type SettlementCreateManyToUserInputEnvelope = {
    data: SettlementCreateManyToUserInput | SettlementCreateManyToUserInput[]
    skipDuplicates?: boolean
  }

  export type ExpenseGroupUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: ExpenseGroupWhereUniqueInput
    update: XOR<ExpenseGroupUpdateWithoutCreatedByInput, ExpenseGroupUncheckedUpdateWithoutCreatedByInput>
    create: XOR<ExpenseGroupCreateWithoutCreatedByInput, ExpenseGroupUncheckedCreateWithoutCreatedByInput>
  }

  export type ExpenseGroupUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: ExpenseGroupWhereUniqueInput
    data: XOR<ExpenseGroupUpdateWithoutCreatedByInput, ExpenseGroupUncheckedUpdateWithoutCreatedByInput>
  }

  export type ExpenseGroupUpdateManyWithWhereWithoutCreatedByInput = {
    where: ExpenseGroupScalarWhereInput
    data: XOR<ExpenseGroupUpdateManyMutationInput, ExpenseGroupUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type ExpenseGroupScalarWhereInput = {
    AND?: ExpenseGroupScalarWhereInput | ExpenseGroupScalarWhereInput[]
    OR?: ExpenseGroupScalarWhereInput[]
    NOT?: ExpenseGroupScalarWhereInput | ExpenseGroupScalarWhereInput[]
    id?: UuidFilter<"ExpenseGroup"> | string
    name?: StringFilter<"ExpenseGroup"> | string
    description?: StringNullableFilter<"ExpenseGroup"> | string | null
    currency?: StringFilter<"ExpenseGroup"> | string
    createdById?: UuidFilter<"ExpenseGroup"> | string
    createdAt?: DateTimeFilter<"ExpenseGroup"> | Date | string
    updatedAt?: DateTimeFilter<"ExpenseGroup"> | Date | string
    archivedAt?: DateTimeNullableFilter<"ExpenseGroup"> | Date | string | null
  }

  export type ExpenseSplitUpsertWithWhereUniqueWithoutUserInput = {
    where: ExpenseSplitWhereUniqueInput
    update: XOR<ExpenseSplitUpdateWithoutUserInput, ExpenseSplitUncheckedUpdateWithoutUserInput>
    create: XOR<ExpenseSplitCreateWithoutUserInput, ExpenseSplitUncheckedCreateWithoutUserInput>
  }

  export type ExpenseSplitUpdateWithWhereUniqueWithoutUserInput = {
    where: ExpenseSplitWhereUniqueInput
    data: XOR<ExpenseSplitUpdateWithoutUserInput, ExpenseSplitUncheckedUpdateWithoutUserInput>
  }

  export type ExpenseSplitUpdateManyWithWhereWithoutUserInput = {
    where: ExpenseSplitScalarWhereInput
    data: XOR<ExpenseSplitUpdateManyMutationInput, ExpenseSplitUncheckedUpdateManyWithoutUserInput>
  }

  export type ExpenseSplitScalarWhereInput = {
    AND?: ExpenseSplitScalarWhereInput | ExpenseSplitScalarWhereInput[]
    OR?: ExpenseSplitScalarWhereInput[]
    NOT?: ExpenseSplitScalarWhereInput | ExpenseSplitScalarWhereInput[]
    id?: UuidFilter<"ExpenseSplit"> | string
    expenseId?: UuidFilter<"ExpenseSplit"> | string
    userId?: UuidFilter<"ExpenseSplit"> | string
    shareAmount?: DecimalFilter<"ExpenseSplit"> | Decimal | DecimalJsLike | number | string
  }

  export type ExpenseUpsertWithWhereUniqueWithoutPaidByInput = {
    where: ExpenseWhereUniqueInput
    update: XOR<ExpenseUpdateWithoutPaidByInput, ExpenseUncheckedUpdateWithoutPaidByInput>
    create: XOR<ExpenseCreateWithoutPaidByInput, ExpenseUncheckedCreateWithoutPaidByInput>
  }

  export type ExpenseUpdateWithWhereUniqueWithoutPaidByInput = {
    where: ExpenseWhereUniqueInput
    data: XOR<ExpenseUpdateWithoutPaidByInput, ExpenseUncheckedUpdateWithoutPaidByInput>
  }

  export type ExpenseUpdateManyWithWhereWithoutPaidByInput = {
    where: ExpenseScalarWhereInput
    data: XOR<ExpenseUpdateManyMutationInput, ExpenseUncheckedUpdateManyWithoutPaidByInput>
  }

  export type ExpenseScalarWhereInput = {
    AND?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
    OR?: ExpenseScalarWhereInput[]
    NOT?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
    id?: UuidFilter<"Expense"> | string
    title?: StringFilter<"Expense"> | string
    amount?: DecimalFilter<"Expense"> | Decimal | DecimalJsLike | number | string
    userId?: UuidFilter<"Expense"> | string
    createdAt?: DateTimeNullableFilter<"Expense"> | Date | string | null
    groupId?: UuidNullableFilter<"Expense"> | string | null
    description?: StringNullableFilter<"Expense"> | string | null
    currency?: StringNullableFilter<"Expense"> | string | null
    paidById?: UuidNullableFilter<"Expense"> | string | null
    splitType?: StringNullableFilter<"Expense"> | string | null
    updatedAt?: DateTimeNullableFilter<"Expense"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Expense"> | Date | string | null
  }

  export type ExpenseUpsertWithWhereUniqueWithoutUserInput = {
    where: ExpenseWhereUniqueInput
    update: XOR<ExpenseUpdateWithoutUserInput, ExpenseUncheckedUpdateWithoutUserInput>
    create: XOR<ExpenseCreateWithoutUserInput, ExpenseUncheckedCreateWithoutUserInput>
  }

  export type ExpenseUpdateWithWhereUniqueWithoutUserInput = {
    where: ExpenseWhereUniqueInput
    data: XOR<ExpenseUpdateWithoutUserInput, ExpenseUncheckedUpdateWithoutUserInput>
  }

  export type ExpenseUpdateManyWithWhereWithoutUserInput = {
    where: ExpenseScalarWhereInput
    data: XOR<ExpenseUpdateManyMutationInput, ExpenseUncheckedUpdateManyWithoutUserInput>
  }

  export type GroupInvitationUpsertWithWhereUniqueWithoutInvitedByInput = {
    where: GroupInvitationWhereUniqueInput
    update: XOR<GroupInvitationUpdateWithoutInvitedByInput, GroupInvitationUncheckedUpdateWithoutInvitedByInput>
    create: XOR<GroupInvitationCreateWithoutInvitedByInput, GroupInvitationUncheckedCreateWithoutInvitedByInput>
  }

  export type GroupInvitationUpdateWithWhereUniqueWithoutInvitedByInput = {
    where: GroupInvitationWhereUniqueInput
    data: XOR<GroupInvitationUpdateWithoutInvitedByInput, GroupInvitationUncheckedUpdateWithoutInvitedByInput>
  }

  export type GroupInvitationUpdateManyWithWhereWithoutInvitedByInput = {
    where: GroupInvitationScalarWhereInput
    data: XOR<GroupInvitationUpdateManyMutationInput, GroupInvitationUncheckedUpdateManyWithoutInvitedByInput>
  }

  export type GroupInvitationScalarWhereInput = {
    AND?: GroupInvitationScalarWhereInput | GroupInvitationScalarWhereInput[]
    OR?: GroupInvitationScalarWhereInput[]
    NOT?: GroupInvitationScalarWhereInput | GroupInvitationScalarWhereInput[]
    id?: UuidFilter<"GroupInvitation"> | string
    groupId?: UuidFilter<"GroupInvitation"> | string
    invitedPhoneNumber?: StringFilter<"GroupInvitation"> | string
    invitedUserId?: UuidNullableFilter<"GroupInvitation"> | string | null
    invitedById?: UuidFilter<"GroupInvitation"> | string
    status?: StringFilter<"GroupInvitation"> | string
    createdAt?: DateTimeFilter<"GroupInvitation"> | Date | string
    expiresAt?: DateTimeFilter<"GroupInvitation"> | Date | string
  }

  export type GroupInvitationUpsertWithWhereUniqueWithoutInvitedUserInput = {
    where: GroupInvitationWhereUniqueInput
    update: XOR<GroupInvitationUpdateWithoutInvitedUserInput, GroupInvitationUncheckedUpdateWithoutInvitedUserInput>
    create: XOR<GroupInvitationCreateWithoutInvitedUserInput, GroupInvitationUncheckedCreateWithoutInvitedUserInput>
  }

  export type GroupInvitationUpdateWithWhereUniqueWithoutInvitedUserInput = {
    where: GroupInvitationWhereUniqueInput
    data: XOR<GroupInvitationUpdateWithoutInvitedUserInput, GroupInvitationUncheckedUpdateWithoutInvitedUserInput>
  }

  export type GroupInvitationUpdateManyWithWhereWithoutInvitedUserInput = {
    where: GroupInvitationScalarWhereInput
    data: XOR<GroupInvitationUpdateManyMutationInput, GroupInvitationUncheckedUpdateManyWithoutInvitedUserInput>
  }

  export type GroupMemberUpsertWithWhereUniqueWithoutUserInput = {
    where: GroupMemberWhereUniqueInput
    update: XOR<GroupMemberUpdateWithoutUserInput, GroupMemberUncheckedUpdateWithoutUserInput>
    create: XOR<GroupMemberCreateWithoutUserInput, GroupMemberUncheckedCreateWithoutUserInput>
  }

  export type GroupMemberUpdateWithWhereUniqueWithoutUserInput = {
    where: GroupMemberWhereUniqueInput
    data: XOR<GroupMemberUpdateWithoutUserInput, GroupMemberUncheckedUpdateWithoutUserInput>
  }

  export type GroupMemberUpdateManyWithWhereWithoutUserInput = {
    where: GroupMemberScalarWhereInput
    data: XOR<GroupMemberUpdateManyMutationInput, GroupMemberUncheckedUpdateManyWithoutUserInput>
  }

  export type GroupMemberScalarWhereInput = {
    AND?: GroupMemberScalarWhereInput | GroupMemberScalarWhereInput[]
    OR?: GroupMemberScalarWhereInput[]
    NOT?: GroupMemberScalarWhereInput | GroupMemberScalarWhereInput[]
    id?: UuidFilter<"GroupMember"> | string
    groupId?: UuidFilter<"GroupMember"> | string
    userId?: UuidFilter<"GroupMember"> | string
    role?: StringFilter<"GroupMember"> | string
    status?: StringFilter<"GroupMember"> | string
    joinedAt?: DateTimeFilter<"GroupMember"> | Date | string
  }

  export type SettlementUpsertWithWhereUniqueWithoutFromUserInput = {
    where: SettlementWhereUniqueInput
    update: XOR<SettlementUpdateWithoutFromUserInput, SettlementUncheckedUpdateWithoutFromUserInput>
    create: XOR<SettlementCreateWithoutFromUserInput, SettlementUncheckedCreateWithoutFromUserInput>
  }

  export type SettlementUpdateWithWhereUniqueWithoutFromUserInput = {
    where: SettlementWhereUniqueInput
    data: XOR<SettlementUpdateWithoutFromUserInput, SettlementUncheckedUpdateWithoutFromUserInput>
  }

  export type SettlementUpdateManyWithWhereWithoutFromUserInput = {
    where: SettlementScalarWhereInput
    data: XOR<SettlementUpdateManyMutationInput, SettlementUncheckedUpdateManyWithoutFromUserInput>
  }

  export type SettlementScalarWhereInput = {
    AND?: SettlementScalarWhereInput | SettlementScalarWhereInput[]
    OR?: SettlementScalarWhereInput[]
    NOT?: SettlementScalarWhereInput | SettlementScalarWhereInput[]
    id?: UuidFilter<"Settlement"> | string
    groupId?: UuidFilter<"Settlement"> | string
    fromUserId?: UuidFilter<"Settlement"> | string
    toUserId?: UuidFilter<"Settlement"> | string
    amount?: DecimalFilter<"Settlement"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"Settlement"> | string
    paymentMethod?: StringFilter<"Settlement"> | string
    status?: StringFilter<"Settlement"> | string
    note?: StringNullableFilter<"Settlement"> | string | null
    idempotencyKey?: StringNullableFilter<"Settlement"> | string | null
    createdAt?: DateTimeFilter<"Settlement"> | Date | string
    confirmedAt?: DateTimeNullableFilter<"Settlement"> | Date | string | null
  }

  export type SettlementUpsertWithWhereUniqueWithoutToUserInput = {
    where: SettlementWhereUniqueInput
    update: XOR<SettlementUpdateWithoutToUserInput, SettlementUncheckedUpdateWithoutToUserInput>
    create: XOR<SettlementCreateWithoutToUserInput, SettlementUncheckedCreateWithoutToUserInput>
  }

  export type SettlementUpdateWithWhereUniqueWithoutToUserInput = {
    where: SettlementWhereUniqueInput
    data: XOR<SettlementUpdateWithoutToUserInput, SettlementUncheckedUpdateWithoutToUserInput>
  }

  export type SettlementUpdateManyWithWhereWithoutToUserInput = {
    where: SettlementScalarWhereInput
    data: XOR<SettlementUpdateManyMutationInput, SettlementUncheckedUpdateManyWithoutToUserInput>
  }

  export type UserCreateWithoutCreatedGroupsInput = {
    id?: string
    phoneNumber?: string | null
    createdAt?: Date | string | null
    otp?: string | null
    otpExpiryTime?: Date | string | null
    email?: string | null
    googleSubject?: string | null
    phoneVerified?: boolean | null
    emailVerified?: boolean | null
    otpHash?: string | null
    otpAttempts?: number | null
    otpLastSentAt?: Date | string | null
    name?: string | null
    profileImageUrl?: string | null
    splits?: ExpenseSplitCreateNestedManyWithoutUserInput
    expensesPaid?: ExpenseCreateNestedManyWithoutPaidByInput
    expensesCreated?: ExpenseCreateNestedManyWithoutUserInput
    sentInvitations?: GroupInvitationCreateNestedManyWithoutInvitedByInput
    receivedInvitations?: GroupInvitationCreateNestedManyWithoutInvitedUserInput
    groupMemberships?: GroupMemberCreateNestedManyWithoutUserInput
    settlementsSent?: SettlementCreateNestedManyWithoutFromUserInput
    settlementsReceived?: SettlementCreateNestedManyWithoutToUserInput
  }

  export type UserUncheckedCreateWithoutCreatedGroupsInput = {
    id?: string
    phoneNumber?: string | null
    createdAt?: Date | string | null
    otp?: string | null
    otpExpiryTime?: Date | string | null
    email?: string | null
    googleSubject?: string | null
    phoneVerified?: boolean | null
    emailVerified?: boolean | null
    otpHash?: string | null
    otpAttempts?: number | null
    otpLastSentAt?: Date | string | null
    name?: string | null
    profileImageUrl?: string | null
    splits?: ExpenseSplitUncheckedCreateNestedManyWithoutUserInput
    expensesPaid?: ExpenseUncheckedCreateNestedManyWithoutPaidByInput
    expensesCreated?: ExpenseUncheckedCreateNestedManyWithoutUserInput
    sentInvitations?: GroupInvitationUncheckedCreateNestedManyWithoutInvitedByInput
    receivedInvitations?: GroupInvitationUncheckedCreateNestedManyWithoutInvitedUserInput
    groupMemberships?: GroupMemberUncheckedCreateNestedManyWithoutUserInput
    settlementsSent?: SettlementUncheckedCreateNestedManyWithoutFromUserInput
    settlementsReceived?: SettlementUncheckedCreateNestedManyWithoutToUserInput
  }

  export type UserCreateOrConnectWithoutCreatedGroupsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedGroupsInput, UserUncheckedCreateWithoutCreatedGroupsInput>
  }

  export type ExpenseCreateWithoutGroupInput = {
    id?: string
    title: string
    amount: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string | null
    description?: string | null
    currency?: string | null
    splitType?: string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    splits?: ExpenseSplitCreateNestedManyWithoutExpenseInput
    paidBy?: UserCreateNestedOneWithoutExpensesPaidInput
    user: UserCreateNestedOneWithoutExpensesCreatedInput
  }

  export type ExpenseUncheckedCreateWithoutGroupInput = {
    id?: string
    title: string
    amount: Decimal | DecimalJsLike | number | string
    userId: string
    createdAt?: Date | string | null
    description?: string | null
    currency?: string | null
    paidById?: string | null
    splitType?: string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    splits?: ExpenseSplitUncheckedCreateNestedManyWithoutExpenseInput
  }

  export type ExpenseCreateOrConnectWithoutGroupInput = {
    where: ExpenseWhereUniqueInput
    create: XOR<ExpenseCreateWithoutGroupInput, ExpenseUncheckedCreateWithoutGroupInput>
  }

  export type ExpenseCreateManyGroupInputEnvelope = {
    data: ExpenseCreateManyGroupInput | ExpenseCreateManyGroupInput[]
    skipDuplicates?: boolean
  }

  export type GroupInvitationCreateWithoutGroupInput = {
    id?: string
    invitedPhoneNumber: string
    status?: string
    createdAt?: Date | string
    expiresAt: Date | string
    invitedBy: UserCreateNestedOneWithoutSentInvitationsInput
    invitedUser?: UserCreateNestedOneWithoutReceivedInvitationsInput
  }

  export type GroupInvitationUncheckedCreateWithoutGroupInput = {
    id?: string
    invitedPhoneNumber: string
    invitedUserId?: string | null
    invitedById: string
    status?: string
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type GroupInvitationCreateOrConnectWithoutGroupInput = {
    where: GroupInvitationWhereUniqueInput
    create: XOR<GroupInvitationCreateWithoutGroupInput, GroupInvitationUncheckedCreateWithoutGroupInput>
  }

  export type GroupInvitationCreateManyGroupInputEnvelope = {
    data: GroupInvitationCreateManyGroupInput | GroupInvitationCreateManyGroupInput[]
    skipDuplicates?: boolean
  }

  export type GroupMemberCreateWithoutGroupInput = {
    id?: string
    role?: string
    status?: string
    joinedAt?: Date | string
    user: UserCreateNestedOneWithoutGroupMembershipsInput
  }

  export type GroupMemberUncheckedCreateWithoutGroupInput = {
    id?: string
    userId: string
    role?: string
    status?: string
    joinedAt?: Date | string
  }

  export type GroupMemberCreateOrConnectWithoutGroupInput = {
    where: GroupMemberWhereUniqueInput
    create: XOR<GroupMemberCreateWithoutGroupInput, GroupMemberUncheckedCreateWithoutGroupInput>
  }

  export type GroupMemberCreateManyGroupInputEnvelope = {
    data: GroupMemberCreateManyGroupInput | GroupMemberCreateManyGroupInput[]
    skipDuplicates?: boolean
  }

  export type SettlementCreateWithoutGroupInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    paymentMethod?: string
    status?: string
    note?: string | null
    idempotencyKey?: string | null
    createdAt?: Date | string
    confirmedAt?: Date | string | null
    fromUser: UserCreateNestedOneWithoutSettlementsSentInput
    toUser: UserCreateNestedOneWithoutSettlementsReceivedInput
  }

  export type SettlementUncheckedCreateWithoutGroupInput = {
    id?: string
    fromUserId: string
    toUserId: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    paymentMethod?: string
    status?: string
    note?: string | null
    idempotencyKey?: string | null
    createdAt?: Date | string
    confirmedAt?: Date | string | null
  }

  export type SettlementCreateOrConnectWithoutGroupInput = {
    where: SettlementWhereUniqueInput
    create: XOR<SettlementCreateWithoutGroupInput, SettlementUncheckedCreateWithoutGroupInput>
  }

  export type SettlementCreateManyGroupInputEnvelope = {
    data: SettlementCreateManyGroupInput | SettlementCreateManyGroupInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCreatedGroupsInput = {
    update: XOR<UserUpdateWithoutCreatedGroupsInput, UserUncheckedUpdateWithoutCreatedGroupsInput>
    create: XOR<UserCreateWithoutCreatedGroupsInput, UserUncheckedCreateWithoutCreatedGroupsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedGroupsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedGroupsInput, UserUncheckedUpdateWithoutCreatedGroupsInput>
  }

  export type UserUpdateWithoutCreatedGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiryTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    googleSubject?: NullableStringFieldUpdateOperationsInput | string | null
    phoneVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    otpHash?: NullableStringFieldUpdateOperationsInput | string | null
    otpAttempts?: NullableIntFieldUpdateOperationsInput | number | null
    otpLastSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    splits?: ExpenseSplitUpdateManyWithoutUserNestedInput
    expensesPaid?: ExpenseUpdateManyWithoutPaidByNestedInput
    expensesCreated?: ExpenseUpdateManyWithoutUserNestedInput
    sentInvitations?: GroupInvitationUpdateManyWithoutInvitedByNestedInput
    receivedInvitations?: GroupInvitationUpdateManyWithoutInvitedUserNestedInput
    groupMemberships?: GroupMemberUpdateManyWithoutUserNestedInput
    settlementsSent?: SettlementUpdateManyWithoutFromUserNestedInput
    settlementsReceived?: SettlementUpdateManyWithoutToUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiryTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    googleSubject?: NullableStringFieldUpdateOperationsInput | string | null
    phoneVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    otpHash?: NullableStringFieldUpdateOperationsInput | string | null
    otpAttempts?: NullableIntFieldUpdateOperationsInput | number | null
    otpLastSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    splits?: ExpenseSplitUncheckedUpdateManyWithoutUserNestedInput
    expensesPaid?: ExpenseUncheckedUpdateManyWithoutPaidByNestedInput
    expensesCreated?: ExpenseUncheckedUpdateManyWithoutUserNestedInput
    sentInvitations?: GroupInvitationUncheckedUpdateManyWithoutInvitedByNestedInput
    receivedInvitations?: GroupInvitationUncheckedUpdateManyWithoutInvitedUserNestedInput
    groupMemberships?: GroupMemberUncheckedUpdateManyWithoutUserNestedInput
    settlementsSent?: SettlementUncheckedUpdateManyWithoutFromUserNestedInput
    settlementsReceived?: SettlementUncheckedUpdateManyWithoutToUserNestedInput
  }

  export type ExpenseUpsertWithWhereUniqueWithoutGroupInput = {
    where: ExpenseWhereUniqueInput
    update: XOR<ExpenseUpdateWithoutGroupInput, ExpenseUncheckedUpdateWithoutGroupInput>
    create: XOR<ExpenseCreateWithoutGroupInput, ExpenseUncheckedCreateWithoutGroupInput>
  }

  export type ExpenseUpdateWithWhereUniqueWithoutGroupInput = {
    where: ExpenseWhereUniqueInput
    data: XOR<ExpenseUpdateWithoutGroupInput, ExpenseUncheckedUpdateWithoutGroupInput>
  }

  export type ExpenseUpdateManyWithWhereWithoutGroupInput = {
    where: ExpenseScalarWhereInput
    data: XOR<ExpenseUpdateManyMutationInput, ExpenseUncheckedUpdateManyWithoutGroupInput>
  }

  export type GroupInvitationUpsertWithWhereUniqueWithoutGroupInput = {
    where: GroupInvitationWhereUniqueInput
    update: XOR<GroupInvitationUpdateWithoutGroupInput, GroupInvitationUncheckedUpdateWithoutGroupInput>
    create: XOR<GroupInvitationCreateWithoutGroupInput, GroupInvitationUncheckedCreateWithoutGroupInput>
  }

  export type GroupInvitationUpdateWithWhereUniqueWithoutGroupInput = {
    where: GroupInvitationWhereUniqueInput
    data: XOR<GroupInvitationUpdateWithoutGroupInput, GroupInvitationUncheckedUpdateWithoutGroupInput>
  }

  export type GroupInvitationUpdateManyWithWhereWithoutGroupInput = {
    where: GroupInvitationScalarWhereInput
    data: XOR<GroupInvitationUpdateManyMutationInput, GroupInvitationUncheckedUpdateManyWithoutGroupInput>
  }

  export type GroupMemberUpsertWithWhereUniqueWithoutGroupInput = {
    where: GroupMemberWhereUniqueInput
    update: XOR<GroupMemberUpdateWithoutGroupInput, GroupMemberUncheckedUpdateWithoutGroupInput>
    create: XOR<GroupMemberCreateWithoutGroupInput, GroupMemberUncheckedCreateWithoutGroupInput>
  }

  export type GroupMemberUpdateWithWhereUniqueWithoutGroupInput = {
    where: GroupMemberWhereUniqueInput
    data: XOR<GroupMemberUpdateWithoutGroupInput, GroupMemberUncheckedUpdateWithoutGroupInput>
  }

  export type GroupMemberUpdateManyWithWhereWithoutGroupInput = {
    where: GroupMemberScalarWhereInput
    data: XOR<GroupMemberUpdateManyMutationInput, GroupMemberUncheckedUpdateManyWithoutGroupInput>
  }

  export type SettlementUpsertWithWhereUniqueWithoutGroupInput = {
    where: SettlementWhereUniqueInput
    update: XOR<SettlementUpdateWithoutGroupInput, SettlementUncheckedUpdateWithoutGroupInput>
    create: XOR<SettlementCreateWithoutGroupInput, SettlementUncheckedCreateWithoutGroupInput>
  }

  export type SettlementUpdateWithWhereUniqueWithoutGroupInput = {
    where: SettlementWhereUniqueInput
    data: XOR<SettlementUpdateWithoutGroupInput, SettlementUncheckedUpdateWithoutGroupInput>
  }

  export type SettlementUpdateManyWithWhereWithoutGroupInput = {
    where: SettlementScalarWhereInput
    data: XOR<SettlementUpdateManyMutationInput, SettlementUncheckedUpdateManyWithoutGroupInput>
  }

  export type ExpenseGroupCreateWithoutMembersInput = {
    id?: string
    name: string
    description?: string | null
    currency?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    archivedAt?: Date | string | null
    createdBy: UserCreateNestedOneWithoutCreatedGroupsInput
    expenses?: ExpenseCreateNestedManyWithoutGroupInput
    invitations?: GroupInvitationCreateNestedManyWithoutGroupInput
    settlements?: SettlementCreateNestedManyWithoutGroupInput
  }

  export type ExpenseGroupUncheckedCreateWithoutMembersInput = {
    id?: string
    name: string
    description?: string | null
    currency?: string
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    archivedAt?: Date | string | null
    expenses?: ExpenseUncheckedCreateNestedManyWithoutGroupInput
    invitations?: GroupInvitationUncheckedCreateNestedManyWithoutGroupInput
    settlements?: SettlementUncheckedCreateNestedManyWithoutGroupInput
  }

  export type ExpenseGroupCreateOrConnectWithoutMembersInput = {
    where: ExpenseGroupWhereUniqueInput
    create: XOR<ExpenseGroupCreateWithoutMembersInput, ExpenseGroupUncheckedCreateWithoutMembersInput>
  }

  export type UserCreateWithoutGroupMembershipsInput = {
    id?: string
    phoneNumber?: string | null
    createdAt?: Date | string | null
    otp?: string | null
    otpExpiryTime?: Date | string | null
    email?: string | null
    googleSubject?: string | null
    phoneVerified?: boolean | null
    emailVerified?: boolean | null
    otpHash?: string | null
    otpAttempts?: number | null
    otpLastSentAt?: Date | string | null
    name?: string | null
    profileImageUrl?: string | null
    createdGroups?: ExpenseGroupCreateNestedManyWithoutCreatedByInput
    splits?: ExpenseSplitCreateNestedManyWithoutUserInput
    expensesPaid?: ExpenseCreateNestedManyWithoutPaidByInput
    expensesCreated?: ExpenseCreateNestedManyWithoutUserInput
    sentInvitations?: GroupInvitationCreateNestedManyWithoutInvitedByInput
    receivedInvitations?: GroupInvitationCreateNestedManyWithoutInvitedUserInput
    settlementsSent?: SettlementCreateNestedManyWithoutFromUserInput
    settlementsReceived?: SettlementCreateNestedManyWithoutToUserInput
  }

  export type UserUncheckedCreateWithoutGroupMembershipsInput = {
    id?: string
    phoneNumber?: string | null
    createdAt?: Date | string | null
    otp?: string | null
    otpExpiryTime?: Date | string | null
    email?: string | null
    googleSubject?: string | null
    phoneVerified?: boolean | null
    emailVerified?: boolean | null
    otpHash?: string | null
    otpAttempts?: number | null
    otpLastSentAt?: Date | string | null
    name?: string | null
    profileImageUrl?: string | null
    createdGroups?: ExpenseGroupUncheckedCreateNestedManyWithoutCreatedByInput
    splits?: ExpenseSplitUncheckedCreateNestedManyWithoutUserInput
    expensesPaid?: ExpenseUncheckedCreateNestedManyWithoutPaidByInput
    expensesCreated?: ExpenseUncheckedCreateNestedManyWithoutUserInput
    sentInvitations?: GroupInvitationUncheckedCreateNestedManyWithoutInvitedByInput
    receivedInvitations?: GroupInvitationUncheckedCreateNestedManyWithoutInvitedUserInput
    settlementsSent?: SettlementUncheckedCreateNestedManyWithoutFromUserInput
    settlementsReceived?: SettlementUncheckedCreateNestedManyWithoutToUserInput
  }

  export type UserCreateOrConnectWithoutGroupMembershipsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGroupMembershipsInput, UserUncheckedCreateWithoutGroupMembershipsInput>
  }

  export type ExpenseGroupUpsertWithoutMembersInput = {
    update: XOR<ExpenseGroupUpdateWithoutMembersInput, ExpenseGroupUncheckedUpdateWithoutMembersInput>
    create: XOR<ExpenseGroupCreateWithoutMembersInput, ExpenseGroupUncheckedCreateWithoutMembersInput>
    where?: ExpenseGroupWhereInput
  }

  export type ExpenseGroupUpdateToOneWithWhereWithoutMembersInput = {
    where?: ExpenseGroupWhereInput
    data: XOR<ExpenseGroupUpdateWithoutMembersInput, ExpenseGroupUncheckedUpdateWithoutMembersInput>
  }

  export type ExpenseGroupUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    archivedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: UserUpdateOneRequiredWithoutCreatedGroupsNestedInput
    expenses?: ExpenseUpdateManyWithoutGroupNestedInput
    invitations?: GroupInvitationUpdateManyWithoutGroupNestedInput
    settlements?: SettlementUpdateManyWithoutGroupNestedInput
  }

  export type ExpenseGroupUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    archivedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expenses?: ExpenseUncheckedUpdateManyWithoutGroupNestedInput
    invitations?: GroupInvitationUncheckedUpdateManyWithoutGroupNestedInput
    settlements?: SettlementUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type UserUpsertWithoutGroupMembershipsInput = {
    update: XOR<UserUpdateWithoutGroupMembershipsInput, UserUncheckedUpdateWithoutGroupMembershipsInput>
    create: XOR<UserCreateWithoutGroupMembershipsInput, UserUncheckedCreateWithoutGroupMembershipsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGroupMembershipsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGroupMembershipsInput, UserUncheckedUpdateWithoutGroupMembershipsInput>
  }

  export type UserUpdateWithoutGroupMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiryTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    googleSubject?: NullableStringFieldUpdateOperationsInput | string | null
    phoneVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    otpHash?: NullableStringFieldUpdateOperationsInput | string | null
    otpAttempts?: NullableIntFieldUpdateOperationsInput | number | null
    otpLastSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdGroups?: ExpenseGroupUpdateManyWithoutCreatedByNestedInput
    splits?: ExpenseSplitUpdateManyWithoutUserNestedInput
    expensesPaid?: ExpenseUpdateManyWithoutPaidByNestedInput
    expensesCreated?: ExpenseUpdateManyWithoutUserNestedInput
    sentInvitations?: GroupInvitationUpdateManyWithoutInvitedByNestedInput
    receivedInvitations?: GroupInvitationUpdateManyWithoutInvitedUserNestedInput
    settlementsSent?: SettlementUpdateManyWithoutFromUserNestedInput
    settlementsReceived?: SettlementUpdateManyWithoutToUserNestedInput
  }

  export type UserUncheckedUpdateWithoutGroupMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiryTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    googleSubject?: NullableStringFieldUpdateOperationsInput | string | null
    phoneVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    otpHash?: NullableStringFieldUpdateOperationsInput | string | null
    otpAttempts?: NullableIntFieldUpdateOperationsInput | number | null
    otpLastSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdGroups?: ExpenseGroupUncheckedUpdateManyWithoutCreatedByNestedInput
    splits?: ExpenseSplitUncheckedUpdateManyWithoutUserNestedInput
    expensesPaid?: ExpenseUncheckedUpdateManyWithoutPaidByNestedInput
    expensesCreated?: ExpenseUncheckedUpdateManyWithoutUserNestedInput
    sentInvitations?: GroupInvitationUncheckedUpdateManyWithoutInvitedByNestedInput
    receivedInvitations?: GroupInvitationUncheckedUpdateManyWithoutInvitedUserNestedInput
    settlementsSent?: SettlementUncheckedUpdateManyWithoutFromUserNestedInput
    settlementsReceived?: SettlementUncheckedUpdateManyWithoutToUserNestedInput
  }

  export type ExpenseGroupCreateWithoutInvitationsInput = {
    id?: string
    name: string
    description?: string | null
    currency?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    archivedAt?: Date | string | null
    createdBy: UserCreateNestedOneWithoutCreatedGroupsInput
    expenses?: ExpenseCreateNestedManyWithoutGroupInput
    members?: GroupMemberCreateNestedManyWithoutGroupInput
    settlements?: SettlementCreateNestedManyWithoutGroupInput
  }

  export type ExpenseGroupUncheckedCreateWithoutInvitationsInput = {
    id?: string
    name: string
    description?: string | null
    currency?: string
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    archivedAt?: Date | string | null
    expenses?: ExpenseUncheckedCreateNestedManyWithoutGroupInput
    members?: GroupMemberUncheckedCreateNestedManyWithoutGroupInput
    settlements?: SettlementUncheckedCreateNestedManyWithoutGroupInput
  }

  export type ExpenseGroupCreateOrConnectWithoutInvitationsInput = {
    where: ExpenseGroupWhereUniqueInput
    create: XOR<ExpenseGroupCreateWithoutInvitationsInput, ExpenseGroupUncheckedCreateWithoutInvitationsInput>
  }

  export type UserCreateWithoutSentInvitationsInput = {
    id?: string
    phoneNumber?: string | null
    createdAt?: Date | string | null
    otp?: string | null
    otpExpiryTime?: Date | string | null
    email?: string | null
    googleSubject?: string | null
    phoneVerified?: boolean | null
    emailVerified?: boolean | null
    otpHash?: string | null
    otpAttempts?: number | null
    otpLastSentAt?: Date | string | null
    name?: string | null
    profileImageUrl?: string | null
    createdGroups?: ExpenseGroupCreateNestedManyWithoutCreatedByInput
    splits?: ExpenseSplitCreateNestedManyWithoutUserInput
    expensesPaid?: ExpenseCreateNestedManyWithoutPaidByInput
    expensesCreated?: ExpenseCreateNestedManyWithoutUserInput
    receivedInvitations?: GroupInvitationCreateNestedManyWithoutInvitedUserInput
    groupMemberships?: GroupMemberCreateNestedManyWithoutUserInput
    settlementsSent?: SettlementCreateNestedManyWithoutFromUserInput
    settlementsReceived?: SettlementCreateNestedManyWithoutToUserInput
  }

  export type UserUncheckedCreateWithoutSentInvitationsInput = {
    id?: string
    phoneNumber?: string | null
    createdAt?: Date | string | null
    otp?: string | null
    otpExpiryTime?: Date | string | null
    email?: string | null
    googleSubject?: string | null
    phoneVerified?: boolean | null
    emailVerified?: boolean | null
    otpHash?: string | null
    otpAttempts?: number | null
    otpLastSentAt?: Date | string | null
    name?: string | null
    profileImageUrl?: string | null
    createdGroups?: ExpenseGroupUncheckedCreateNestedManyWithoutCreatedByInput
    splits?: ExpenseSplitUncheckedCreateNestedManyWithoutUserInput
    expensesPaid?: ExpenseUncheckedCreateNestedManyWithoutPaidByInput
    expensesCreated?: ExpenseUncheckedCreateNestedManyWithoutUserInput
    receivedInvitations?: GroupInvitationUncheckedCreateNestedManyWithoutInvitedUserInput
    groupMemberships?: GroupMemberUncheckedCreateNestedManyWithoutUserInput
    settlementsSent?: SettlementUncheckedCreateNestedManyWithoutFromUserInput
    settlementsReceived?: SettlementUncheckedCreateNestedManyWithoutToUserInput
  }

  export type UserCreateOrConnectWithoutSentInvitationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSentInvitationsInput, UserUncheckedCreateWithoutSentInvitationsInput>
  }

  export type UserCreateWithoutReceivedInvitationsInput = {
    id?: string
    phoneNumber?: string | null
    createdAt?: Date | string | null
    otp?: string | null
    otpExpiryTime?: Date | string | null
    email?: string | null
    googleSubject?: string | null
    phoneVerified?: boolean | null
    emailVerified?: boolean | null
    otpHash?: string | null
    otpAttempts?: number | null
    otpLastSentAt?: Date | string | null
    name?: string | null
    profileImageUrl?: string | null
    createdGroups?: ExpenseGroupCreateNestedManyWithoutCreatedByInput
    splits?: ExpenseSplitCreateNestedManyWithoutUserInput
    expensesPaid?: ExpenseCreateNestedManyWithoutPaidByInput
    expensesCreated?: ExpenseCreateNestedManyWithoutUserInput
    sentInvitations?: GroupInvitationCreateNestedManyWithoutInvitedByInput
    groupMemberships?: GroupMemberCreateNestedManyWithoutUserInput
    settlementsSent?: SettlementCreateNestedManyWithoutFromUserInput
    settlementsReceived?: SettlementCreateNestedManyWithoutToUserInput
  }

  export type UserUncheckedCreateWithoutReceivedInvitationsInput = {
    id?: string
    phoneNumber?: string | null
    createdAt?: Date | string | null
    otp?: string | null
    otpExpiryTime?: Date | string | null
    email?: string | null
    googleSubject?: string | null
    phoneVerified?: boolean | null
    emailVerified?: boolean | null
    otpHash?: string | null
    otpAttempts?: number | null
    otpLastSentAt?: Date | string | null
    name?: string | null
    profileImageUrl?: string | null
    createdGroups?: ExpenseGroupUncheckedCreateNestedManyWithoutCreatedByInput
    splits?: ExpenseSplitUncheckedCreateNestedManyWithoutUserInput
    expensesPaid?: ExpenseUncheckedCreateNestedManyWithoutPaidByInput
    expensesCreated?: ExpenseUncheckedCreateNestedManyWithoutUserInput
    sentInvitations?: GroupInvitationUncheckedCreateNestedManyWithoutInvitedByInput
    groupMemberships?: GroupMemberUncheckedCreateNestedManyWithoutUserInput
    settlementsSent?: SettlementUncheckedCreateNestedManyWithoutFromUserInput
    settlementsReceived?: SettlementUncheckedCreateNestedManyWithoutToUserInput
  }

  export type UserCreateOrConnectWithoutReceivedInvitationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReceivedInvitationsInput, UserUncheckedCreateWithoutReceivedInvitationsInput>
  }

  export type ExpenseGroupUpsertWithoutInvitationsInput = {
    update: XOR<ExpenseGroupUpdateWithoutInvitationsInput, ExpenseGroupUncheckedUpdateWithoutInvitationsInput>
    create: XOR<ExpenseGroupCreateWithoutInvitationsInput, ExpenseGroupUncheckedCreateWithoutInvitationsInput>
    where?: ExpenseGroupWhereInput
  }

  export type ExpenseGroupUpdateToOneWithWhereWithoutInvitationsInput = {
    where?: ExpenseGroupWhereInput
    data: XOR<ExpenseGroupUpdateWithoutInvitationsInput, ExpenseGroupUncheckedUpdateWithoutInvitationsInput>
  }

  export type ExpenseGroupUpdateWithoutInvitationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    archivedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: UserUpdateOneRequiredWithoutCreatedGroupsNestedInput
    expenses?: ExpenseUpdateManyWithoutGroupNestedInput
    members?: GroupMemberUpdateManyWithoutGroupNestedInput
    settlements?: SettlementUpdateManyWithoutGroupNestedInput
  }

  export type ExpenseGroupUncheckedUpdateWithoutInvitationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    archivedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expenses?: ExpenseUncheckedUpdateManyWithoutGroupNestedInput
    members?: GroupMemberUncheckedUpdateManyWithoutGroupNestedInput
    settlements?: SettlementUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type UserUpsertWithoutSentInvitationsInput = {
    update: XOR<UserUpdateWithoutSentInvitationsInput, UserUncheckedUpdateWithoutSentInvitationsInput>
    create: XOR<UserCreateWithoutSentInvitationsInput, UserUncheckedCreateWithoutSentInvitationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSentInvitationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSentInvitationsInput, UserUncheckedUpdateWithoutSentInvitationsInput>
  }

  export type UserUpdateWithoutSentInvitationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiryTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    googleSubject?: NullableStringFieldUpdateOperationsInput | string | null
    phoneVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    otpHash?: NullableStringFieldUpdateOperationsInput | string | null
    otpAttempts?: NullableIntFieldUpdateOperationsInput | number | null
    otpLastSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdGroups?: ExpenseGroupUpdateManyWithoutCreatedByNestedInput
    splits?: ExpenseSplitUpdateManyWithoutUserNestedInput
    expensesPaid?: ExpenseUpdateManyWithoutPaidByNestedInput
    expensesCreated?: ExpenseUpdateManyWithoutUserNestedInput
    receivedInvitations?: GroupInvitationUpdateManyWithoutInvitedUserNestedInput
    groupMemberships?: GroupMemberUpdateManyWithoutUserNestedInput
    settlementsSent?: SettlementUpdateManyWithoutFromUserNestedInput
    settlementsReceived?: SettlementUpdateManyWithoutToUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSentInvitationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiryTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    googleSubject?: NullableStringFieldUpdateOperationsInput | string | null
    phoneVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    otpHash?: NullableStringFieldUpdateOperationsInput | string | null
    otpAttempts?: NullableIntFieldUpdateOperationsInput | number | null
    otpLastSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdGroups?: ExpenseGroupUncheckedUpdateManyWithoutCreatedByNestedInput
    splits?: ExpenseSplitUncheckedUpdateManyWithoutUserNestedInput
    expensesPaid?: ExpenseUncheckedUpdateManyWithoutPaidByNestedInput
    expensesCreated?: ExpenseUncheckedUpdateManyWithoutUserNestedInput
    receivedInvitations?: GroupInvitationUncheckedUpdateManyWithoutInvitedUserNestedInput
    groupMemberships?: GroupMemberUncheckedUpdateManyWithoutUserNestedInput
    settlementsSent?: SettlementUncheckedUpdateManyWithoutFromUserNestedInput
    settlementsReceived?: SettlementUncheckedUpdateManyWithoutToUserNestedInput
  }

  export type UserUpsertWithoutReceivedInvitationsInput = {
    update: XOR<UserUpdateWithoutReceivedInvitationsInput, UserUncheckedUpdateWithoutReceivedInvitationsInput>
    create: XOR<UserCreateWithoutReceivedInvitationsInput, UserUncheckedCreateWithoutReceivedInvitationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReceivedInvitationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReceivedInvitationsInput, UserUncheckedUpdateWithoutReceivedInvitationsInput>
  }

  export type UserUpdateWithoutReceivedInvitationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiryTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    googleSubject?: NullableStringFieldUpdateOperationsInput | string | null
    phoneVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    otpHash?: NullableStringFieldUpdateOperationsInput | string | null
    otpAttempts?: NullableIntFieldUpdateOperationsInput | number | null
    otpLastSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdGroups?: ExpenseGroupUpdateManyWithoutCreatedByNestedInput
    splits?: ExpenseSplitUpdateManyWithoutUserNestedInput
    expensesPaid?: ExpenseUpdateManyWithoutPaidByNestedInput
    expensesCreated?: ExpenseUpdateManyWithoutUserNestedInput
    sentInvitations?: GroupInvitationUpdateManyWithoutInvitedByNestedInput
    groupMemberships?: GroupMemberUpdateManyWithoutUserNestedInput
    settlementsSent?: SettlementUpdateManyWithoutFromUserNestedInput
    settlementsReceived?: SettlementUpdateManyWithoutToUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReceivedInvitationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiryTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    googleSubject?: NullableStringFieldUpdateOperationsInput | string | null
    phoneVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    otpHash?: NullableStringFieldUpdateOperationsInput | string | null
    otpAttempts?: NullableIntFieldUpdateOperationsInput | number | null
    otpLastSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdGroups?: ExpenseGroupUncheckedUpdateManyWithoutCreatedByNestedInput
    splits?: ExpenseSplitUncheckedUpdateManyWithoutUserNestedInput
    expensesPaid?: ExpenseUncheckedUpdateManyWithoutPaidByNestedInput
    expensesCreated?: ExpenseUncheckedUpdateManyWithoutUserNestedInput
    sentInvitations?: GroupInvitationUncheckedUpdateManyWithoutInvitedByNestedInput
    groupMemberships?: GroupMemberUncheckedUpdateManyWithoutUserNestedInput
    settlementsSent?: SettlementUncheckedUpdateManyWithoutFromUserNestedInput
    settlementsReceived?: SettlementUncheckedUpdateManyWithoutToUserNestedInput
  }

  export type ExpenseSplitCreateWithoutExpenseInput = {
    id?: string
    shareAmount: Decimal | DecimalJsLike | number | string
    user: UserCreateNestedOneWithoutSplitsInput
  }

  export type ExpenseSplitUncheckedCreateWithoutExpenseInput = {
    id?: string
    userId: string
    shareAmount: Decimal | DecimalJsLike | number | string
  }

  export type ExpenseSplitCreateOrConnectWithoutExpenseInput = {
    where: ExpenseSplitWhereUniqueInput
    create: XOR<ExpenseSplitCreateWithoutExpenseInput, ExpenseSplitUncheckedCreateWithoutExpenseInput>
  }

  export type ExpenseSplitCreateManyExpenseInputEnvelope = {
    data: ExpenseSplitCreateManyExpenseInput | ExpenseSplitCreateManyExpenseInput[]
    skipDuplicates?: boolean
  }

  export type ExpenseGroupCreateWithoutExpensesInput = {
    id?: string
    name: string
    description?: string | null
    currency?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    archivedAt?: Date | string | null
    createdBy: UserCreateNestedOneWithoutCreatedGroupsInput
    invitations?: GroupInvitationCreateNestedManyWithoutGroupInput
    members?: GroupMemberCreateNestedManyWithoutGroupInput
    settlements?: SettlementCreateNestedManyWithoutGroupInput
  }

  export type ExpenseGroupUncheckedCreateWithoutExpensesInput = {
    id?: string
    name: string
    description?: string | null
    currency?: string
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    archivedAt?: Date | string | null
    invitations?: GroupInvitationUncheckedCreateNestedManyWithoutGroupInput
    members?: GroupMemberUncheckedCreateNestedManyWithoutGroupInput
    settlements?: SettlementUncheckedCreateNestedManyWithoutGroupInput
  }

  export type ExpenseGroupCreateOrConnectWithoutExpensesInput = {
    where: ExpenseGroupWhereUniqueInput
    create: XOR<ExpenseGroupCreateWithoutExpensesInput, ExpenseGroupUncheckedCreateWithoutExpensesInput>
  }

  export type UserCreateWithoutExpensesPaidInput = {
    id?: string
    phoneNumber?: string | null
    createdAt?: Date | string | null
    otp?: string | null
    otpExpiryTime?: Date | string | null
    email?: string | null
    googleSubject?: string | null
    phoneVerified?: boolean | null
    emailVerified?: boolean | null
    otpHash?: string | null
    otpAttempts?: number | null
    otpLastSentAt?: Date | string | null
    name?: string | null
    profileImageUrl?: string | null
    createdGroups?: ExpenseGroupCreateNestedManyWithoutCreatedByInput
    splits?: ExpenseSplitCreateNestedManyWithoutUserInput
    expensesCreated?: ExpenseCreateNestedManyWithoutUserInput
    sentInvitations?: GroupInvitationCreateNestedManyWithoutInvitedByInput
    receivedInvitations?: GroupInvitationCreateNestedManyWithoutInvitedUserInput
    groupMemberships?: GroupMemberCreateNestedManyWithoutUserInput
    settlementsSent?: SettlementCreateNestedManyWithoutFromUserInput
    settlementsReceived?: SettlementCreateNestedManyWithoutToUserInput
  }

  export type UserUncheckedCreateWithoutExpensesPaidInput = {
    id?: string
    phoneNumber?: string | null
    createdAt?: Date | string | null
    otp?: string | null
    otpExpiryTime?: Date | string | null
    email?: string | null
    googleSubject?: string | null
    phoneVerified?: boolean | null
    emailVerified?: boolean | null
    otpHash?: string | null
    otpAttempts?: number | null
    otpLastSentAt?: Date | string | null
    name?: string | null
    profileImageUrl?: string | null
    createdGroups?: ExpenseGroupUncheckedCreateNestedManyWithoutCreatedByInput
    splits?: ExpenseSplitUncheckedCreateNestedManyWithoutUserInput
    expensesCreated?: ExpenseUncheckedCreateNestedManyWithoutUserInput
    sentInvitations?: GroupInvitationUncheckedCreateNestedManyWithoutInvitedByInput
    receivedInvitations?: GroupInvitationUncheckedCreateNestedManyWithoutInvitedUserInput
    groupMemberships?: GroupMemberUncheckedCreateNestedManyWithoutUserInput
    settlementsSent?: SettlementUncheckedCreateNestedManyWithoutFromUserInput
    settlementsReceived?: SettlementUncheckedCreateNestedManyWithoutToUserInput
  }

  export type UserCreateOrConnectWithoutExpensesPaidInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutExpensesPaidInput, UserUncheckedCreateWithoutExpensesPaidInput>
  }

  export type UserCreateWithoutExpensesCreatedInput = {
    id?: string
    phoneNumber?: string | null
    createdAt?: Date | string | null
    otp?: string | null
    otpExpiryTime?: Date | string | null
    email?: string | null
    googleSubject?: string | null
    phoneVerified?: boolean | null
    emailVerified?: boolean | null
    otpHash?: string | null
    otpAttempts?: number | null
    otpLastSentAt?: Date | string | null
    name?: string | null
    profileImageUrl?: string | null
    createdGroups?: ExpenseGroupCreateNestedManyWithoutCreatedByInput
    splits?: ExpenseSplitCreateNestedManyWithoutUserInput
    expensesPaid?: ExpenseCreateNestedManyWithoutPaidByInput
    sentInvitations?: GroupInvitationCreateNestedManyWithoutInvitedByInput
    receivedInvitations?: GroupInvitationCreateNestedManyWithoutInvitedUserInput
    groupMemberships?: GroupMemberCreateNestedManyWithoutUserInput
    settlementsSent?: SettlementCreateNestedManyWithoutFromUserInput
    settlementsReceived?: SettlementCreateNestedManyWithoutToUserInput
  }

  export type UserUncheckedCreateWithoutExpensesCreatedInput = {
    id?: string
    phoneNumber?: string | null
    createdAt?: Date | string | null
    otp?: string | null
    otpExpiryTime?: Date | string | null
    email?: string | null
    googleSubject?: string | null
    phoneVerified?: boolean | null
    emailVerified?: boolean | null
    otpHash?: string | null
    otpAttempts?: number | null
    otpLastSentAt?: Date | string | null
    name?: string | null
    profileImageUrl?: string | null
    createdGroups?: ExpenseGroupUncheckedCreateNestedManyWithoutCreatedByInput
    splits?: ExpenseSplitUncheckedCreateNestedManyWithoutUserInput
    expensesPaid?: ExpenseUncheckedCreateNestedManyWithoutPaidByInput
    sentInvitations?: GroupInvitationUncheckedCreateNestedManyWithoutInvitedByInput
    receivedInvitations?: GroupInvitationUncheckedCreateNestedManyWithoutInvitedUserInput
    groupMemberships?: GroupMemberUncheckedCreateNestedManyWithoutUserInput
    settlementsSent?: SettlementUncheckedCreateNestedManyWithoutFromUserInput
    settlementsReceived?: SettlementUncheckedCreateNestedManyWithoutToUserInput
  }

  export type UserCreateOrConnectWithoutExpensesCreatedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutExpensesCreatedInput, UserUncheckedCreateWithoutExpensesCreatedInput>
  }

  export type ExpenseSplitUpsertWithWhereUniqueWithoutExpenseInput = {
    where: ExpenseSplitWhereUniqueInput
    update: XOR<ExpenseSplitUpdateWithoutExpenseInput, ExpenseSplitUncheckedUpdateWithoutExpenseInput>
    create: XOR<ExpenseSplitCreateWithoutExpenseInput, ExpenseSplitUncheckedCreateWithoutExpenseInput>
  }

  export type ExpenseSplitUpdateWithWhereUniqueWithoutExpenseInput = {
    where: ExpenseSplitWhereUniqueInput
    data: XOR<ExpenseSplitUpdateWithoutExpenseInput, ExpenseSplitUncheckedUpdateWithoutExpenseInput>
  }

  export type ExpenseSplitUpdateManyWithWhereWithoutExpenseInput = {
    where: ExpenseSplitScalarWhereInput
    data: XOR<ExpenseSplitUpdateManyMutationInput, ExpenseSplitUncheckedUpdateManyWithoutExpenseInput>
  }

  export type ExpenseGroupUpsertWithoutExpensesInput = {
    update: XOR<ExpenseGroupUpdateWithoutExpensesInput, ExpenseGroupUncheckedUpdateWithoutExpensesInput>
    create: XOR<ExpenseGroupCreateWithoutExpensesInput, ExpenseGroupUncheckedCreateWithoutExpensesInput>
    where?: ExpenseGroupWhereInput
  }

  export type ExpenseGroupUpdateToOneWithWhereWithoutExpensesInput = {
    where?: ExpenseGroupWhereInput
    data: XOR<ExpenseGroupUpdateWithoutExpensesInput, ExpenseGroupUncheckedUpdateWithoutExpensesInput>
  }

  export type ExpenseGroupUpdateWithoutExpensesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    archivedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: UserUpdateOneRequiredWithoutCreatedGroupsNestedInput
    invitations?: GroupInvitationUpdateManyWithoutGroupNestedInput
    members?: GroupMemberUpdateManyWithoutGroupNestedInput
    settlements?: SettlementUpdateManyWithoutGroupNestedInput
  }

  export type ExpenseGroupUncheckedUpdateWithoutExpensesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    archivedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    invitations?: GroupInvitationUncheckedUpdateManyWithoutGroupNestedInput
    members?: GroupMemberUncheckedUpdateManyWithoutGroupNestedInput
    settlements?: SettlementUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type UserUpsertWithoutExpensesPaidInput = {
    update: XOR<UserUpdateWithoutExpensesPaidInput, UserUncheckedUpdateWithoutExpensesPaidInput>
    create: XOR<UserCreateWithoutExpensesPaidInput, UserUncheckedCreateWithoutExpensesPaidInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutExpensesPaidInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutExpensesPaidInput, UserUncheckedUpdateWithoutExpensesPaidInput>
  }

  export type UserUpdateWithoutExpensesPaidInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiryTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    googleSubject?: NullableStringFieldUpdateOperationsInput | string | null
    phoneVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    otpHash?: NullableStringFieldUpdateOperationsInput | string | null
    otpAttempts?: NullableIntFieldUpdateOperationsInput | number | null
    otpLastSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdGroups?: ExpenseGroupUpdateManyWithoutCreatedByNestedInput
    splits?: ExpenseSplitUpdateManyWithoutUserNestedInput
    expensesCreated?: ExpenseUpdateManyWithoutUserNestedInput
    sentInvitations?: GroupInvitationUpdateManyWithoutInvitedByNestedInput
    receivedInvitations?: GroupInvitationUpdateManyWithoutInvitedUserNestedInput
    groupMemberships?: GroupMemberUpdateManyWithoutUserNestedInput
    settlementsSent?: SettlementUpdateManyWithoutFromUserNestedInput
    settlementsReceived?: SettlementUpdateManyWithoutToUserNestedInput
  }

  export type UserUncheckedUpdateWithoutExpensesPaidInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiryTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    googleSubject?: NullableStringFieldUpdateOperationsInput | string | null
    phoneVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    otpHash?: NullableStringFieldUpdateOperationsInput | string | null
    otpAttempts?: NullableIntFieldUpdateOperationsInput | number | null
    otpLastSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdGroups?: ExpenseGroupUncheckedUpdateManyWithoutCreatedByNestedInput
    splits?: ExpenseSplitUncheckedUpdateManyWithoutUserNestedInput
    expensesCreated?: ExpenseUncheckedUpdateManyWithoutUserNestedInput
    sentInvitations?: GroupInvitationUncheckedUpdateManyWithoutInvitedByNestedInput
    receivedInvitations?: GroupInvitationUncheckedUpdateManyWithoutInvitedUserNestedInput
    groupMemberships?: GroupMemberUncheckedUpdateManyWithoutUserNestedInput
    settlementsSent?: SettlementUncheckedUpdateManyWithoutFromUserNestedInput
    settlementsReceived?: SettlementUncheckedUpdateManyWithoutToUserNestedInput
  }

  export type UserUpsertWithoutExpensesCreatedInput = {
    update: XOR<UserUpdateWithoutExpensesCreatedInput, UserUncheckedUpdateWithoutExpensesCreatedInput>
    create: XOR<UserCreateWithoutExpensesCreatedInput, UserUncheckedCreateWithoutExpensesCreatedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutExpensesCreatedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutExpensesCreatedInput, UserUncheckedUpdateWithoutExpensesCreatedInput>
  }

  export type UserUpdateWithoutExpensesCreatedInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiryTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    googleSubject?: NullableStringFieldUpdateOperationsInput | string | null
    phoneVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    otpHash?: NullableStringFieldUpdateOperationsInput | string | null
    otpAttempts?: NullableIntFieldUpdateOperationsInput | number | null
    otpLastSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdGroups?: ExpenseGroupUpdateManyWithoutCreatedByNestedInput
    splits?: ExpenseSplitUpdateManyWithoutUserNestedInput
    expensesPaid?: ExpenseUpdateManyWithoutPaidByNestedInput
    sentInvitations?: GroupInvitationUpdateManyWithoutInvitedByNestedInput
    receivedInvitations?: GroupInvitationUpdateManyWithoutInvitedUserNestedInput
    groupMemberships?: GroupMemberUpdateManyWithoutUserNestedInput
    settlementsSent?: SettlementUpdateManyWithoutFromUserNestedInput
    settlementsReceived?: SettlementUpdateManyWithoutToUserNestedInput
  }

  export type UserUncheckedUpdateWithoutExpensesCreatedInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiryTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    googleSubject?: NullableStringFieldUpdateOperationsInput | string | null
    phoneVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    otpHash?: NullableStringFieldUpdateOperationsInput | string | null
    otpAttempts?: NullableIntFieldUpdateOperationsInput | number | null
    otpLastSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdGroups?: ExpenseGroupUncheckedUpdateManyWithoutCreatedByNestedInput
    splits?: ExpenseSplitUncheckedUpdateManyWithoutUserNestedInput
    expensesPaid?: ExpenseUncheckedUpdateManyWithoutPaidByNestedInput
    sentInvitations?: GroupInvitationUncheckedUpdateManyWithoutInvitedByNestedInput
    receivedInvitations?: GroupInvitationUncheckedUpdateManyWithoutInvitedUserNestedInput
    groupMemberships?: GroupMemberUncheckedUpdateManyWithoutUserNestedInput
    settlementsSent?: SettlementUncheckedUpdateManyWithoutFromUserNestedInput
    settlementsReceived?: SettlementUncheckedUpdateManyWithoutToUserNestedInput
  }

  export type ExpenseCreateWithoutSplitsInput = {
    id?: string
    title: string
    amount: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string | null
    description?: string | null
    currency?: string | null
    splitType?: string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    group?: ExpenseGroupCreateNestedOneWithoutExpensesInput
    paidBy?: UserCreateNestedOneWithoutExpensesPaidInput
    user: UserCreateNestedOneWithoutExpensesCreatedInput
  }

  export type ExpenseUncheckedCreateWithoutSplitsInput = {
    id?: string
    title: string
    amount: Decimal | DecimalJsLike | number | string
    userId: string
    createdAt?: Date | string | null
    groupId?: string | null
    description?: string | null
    currency?: string | null
    paidById?: string | null
    splitType?: string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type ExpenseCreateOrConnectWithoutSplitsInput = {
    where: ExpenseWhereUniqueInput
    create: XOR<ExpenseCreateWithoutSplitsInput, ExpenseUncheckedCreateWithoutSplitsInput>
  }

  export type UserCreateWithoutSplitsInput = {
    id?: string
    phoneNumber?: string | null
    createdAt?: Date | string | null
    otp?: string | null
    otpExpiryTime?: Date | string | null
    email?: string | null
    googleSubject?: string | null
    phoneVerified?: boolean | null
    emailVerified?: boolean | null
    otpHash?: string | null
    otpAttempts?: number | null
    otpLastSentAt?: Date | string | null
    name?: string | null
    profileImageUrl?: string | null
    createdGroups?: ExpenseGroupCreateNestedManyWithoutCreatedByInput
    expensesPaid?: ExpenseCreateNestedManyWithoutPaidByInput
    expensesCreated?: ExpenseCreateNestedManyWithoutUserInput
    sentInvitations?: GroupInvitationCreateNestedManyWithoutInvitedByInput
    receivedInvitations?: GroupInvitationCreateNestedManyWithoutInvitedUserInput
    groupMemberships?: GroupMemberCreateNestedManyWithoutUserInput
    settlementsSent?: SettlementCreateNestedManyWithoutFromUserInput
    settlementsReceived?: SettlementCreateNestedManyWithoutToUserInput
  }

  export type UserUncheckedCreateWithoutSplitsInput = {
    id?: string
    phoneNumber?: string | null
    createdAt?: Date | string | null
    otp?: string | null
    otpExpiryTime?: Date | string | null
    email?: string | null
    googleSubject?: string | null
    phoneVerified?: boolean | null
    emailVerified?: boolean | null
    otpHash?: string | null
    otpAttempts?: number | null
    otpLastSentAt?: Date | string | null
    name?: string | null
    profileImageUrl?: string | null
    createdGroups?: ExpenseGroupUncheckedCreateNestedManyWithoutCreatedByInput
    expensesPaid?: ExpenseUncheckedCreateNestedManyWithoutPaidByInput
    expensesCreated?: ExpenseUncheckedCreateNestedManyWithoutUserInput
    sentInvitations?: GroupInvitationUncheckedCreateNestedManyWithoutInvitedByInput
    receivedInvitations?: GroupInvitationUncheckedCreateNestedManyWithoutInvitedUserInput
    groupMemberships?: GroupMemberUncheckedCreateNestedManyWithoutUserInput
    settlementsSent?: SettlementUncheckedCreateNestedManyWithoutFromUserInput
    settlementsReceived?: SettlementUncheckedCreateNestedManyWithoutToUserInput
  }

  export type UserCreateOrConnectWithoutSplitsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSplitsInput, UserUncheckedCreateWithoutSplitsInput>
  }

  export type ExpenseUpsertWithoutSplitsInput = {
    update: XOR<ExpenseUpdateWithoutSplitsInput, ExpenseUncheckedUpdateWithoutSplitsInput>
    create: XOR<ExpenseCreateWithoutSplitsInput, ExpenseUncheckedCreateWithoutSplitsInput>
    where?: ExpenseWhereInput
  }

  export type ExpenseUpdateToOneWithWhereWithoutSplitsInput = {
    where?: ExpenseWhereInput
    data: XOR<ExpenseUpdateWithoutSplitsInput, ExpenseUncheckedUpdateWithoutSplitsInput>
  }

  export type ExpenseUpdateWithoutSplitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    splitType?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    group?: ExpenseGroupUpdateOneWithoutExpensesNestedInput
    paidBy?: UserUpdateOneWithoutExpensesPaidNestedInput
    user?: UserUpdateOneRequiredWithoutExpensesCreatedNestedInput
  }

  export type ExpenseUncheckedUpdateWithoutSplitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    paidById?: NullableStringFieldUpdateOperationsInput | string | null
    splitType?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUpsertWithoutSplitsInput = {
    update: XOR<UserUpdateWithoutSplitsInput, UserUncheckedUpdateWithoutSplitsInput>
    create: XOR<UserCreateWithoutSplitsInput, UserUncheckedCreateWithoutSplitsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSplitsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSplitsInput, UserUncheckedUpdateWithoutSplitsInput>
  }

  export type UserUpdateWithoutSplitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiryTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    googleSubject?: NullableStringFieldUpdateOperationsInput | string | null
    phoneVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    otpHash?: NullableStringFieldUpdateOperationsInput | string | null
    otpAttempts?: NullableIntFieldUpdateOperationsInput | number | null
    otpLastSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdGroups?: ExpenseGroupUpdateManyWithoutCreatedByNestedInput
    expensesPaid?: ExpenseUpdateManyWithoutPaidByNestedInput
    expensesCreated?: ExpenseUpdateManyWithoutUserNestedInput
    sentInvitations?: GroupInvitationUpdateManyWithoutInvitedByNestedInput
    receivedInvitations?: GroupInvitationUpdateManyWithoutInvitedUserNestedInput
    groupMemberships?: GroupMemberUpdateManyWithoutUserNestedInput
    settlementsSent?: SettlementUpdateManyWithoutFromUserNestedInput
    settlementsReceived?: SettlementUpdateManyWithoutToUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSplitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiryTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    googleSubject?: NullableStringFieldUpdateOperationsInput | string | null
    phoneVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    otpHash?: NullableStringFieldUpdateOperationsInput | string | null
    otpAttempts?: NullableIntFieldUpdateOperationsInput | number | null
    otpLastSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdGroups?: ExpenseGroupUncheckedUpdateManyWithoutCreatedByNestedInput
    expensesPaid?: ExpenseUncheckedUpdateManyWithoutPaidByNestedInput
    expensesCreated?: ExpenseUncheckedUpdateManyWithoutUserNestedInput
    sentInvitations?: GroupInvitationUncheckedUpdateManyWithoutInvitedByNestedInput
    receivedInvitations?: GroupInvitationUncheckedUpdateManyWithoutInvitedUserNestedInput
    groupMemberships?: GroupMemberUncheckedUpdateManyWithoutUserNestedInput
    settlementsSent?: SettlementUncheckedUpdateManyWithoutFromUserNestedInput
    settlementsReceived?: SettlementUncheckedUpdateManyWithoutToUserNestedInput
  }

  export type UserCreateWithoutSettlementsSentInput = {
    id?: string
    phoneNumber?: string | null
    createdAt?: Date | string | null
    otp?: string | null
    otpExpiryTime?: Date | string | null
    email?: string | null
    googleSubject?: string | null
    phoneVerified?: boolean | null
    emailVerified?: boolean | null
    otpHash?: string | null
    otpAttempts?: number | null
    otpLastSentAt?: Date | string | null
    name?: string | null
    profileImageUrl?: string | null
    createdGroups?: ExpenseGroupCreateNestedManyWithoutCreatedByInput
    splits?: ExpenseSplitCreateNestedManyWithoutUserInput
    expensesPaid?: ExpenseCreateNestedManyWithoutPaidByInput
    expensesCreated?: ExpenseCreateNestedManyWithoutUserInput
    sentInvitations?: GroupInvitationCreateNestedManyWithoutInvitedByInput
    receivedInvitations?: GroupInvitationCreateNestedManyWithoutInvitedUserInput
    groupMemberships?: GroupMemberCreateNestedManyWithoutUserInput
    settlementsReceived?: SettlementCreateNestedManyWithoutToUserInput
  }

  export type UserUncheckedCreateWithoutSettlementsSentInput = {
    id?: string
    phoneNumber?: string | null
    createdAt?: Date | string | null
    otp?: string | null
    otpExpiryTime?: Date | string | null
    email?: string | null
    googleSubject?: string | null
    phoneVerified?: boolean | null
    emailVerified?: boolean | null
    otpHash?: string | null
    otpAttempts?: number | null
    otpLastSentAt?: Date | string | null
    name?: string | null
    profileImageUrl?: string | null
    createdGroups?: ExpenseGroupUncheckedCreateNestedManyWithoutCreatedByInput
    splits?: ExpenseSplitUncheckedCreateNestedManyWithoutUserInput
    expensesPaid?: ExpenseUncheckedCreateNestedManyWithoutPaidByInput
    expensesCreated?: ExpenseUncheckedCreateNestedManyWithoutUserInput
    sentInvitations?: GroupInvitationUncheckedCreateNestedManyWithoutInvitedByInput
    receivedInvitations?: GroupInvitationUncheckedCreateNestedManyWithoutInvitedUserInput
    groupMemberships?: GroupMemberUncheckedCreateNestedManyWithoutUserInput
    settlementsReceived?: SettlementUncheckedCreateNestedManyWithoutToUserInput
  }

  export type UserCreateOrConnectWithoutSettlementsSentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSettlementsSentInput, UserUncheckedCreateWithoutSettlementsSentInput>
  }

  export type ExpenseGroupCreateWithoutSettlementsInput = {
    id?: string
    name: string
    description?: string | null
    currency?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    archivedAt?: Date | string | null
    createdBy: UserCreateNestedOneWithoutCreatedGroupsInput
    expenses?: ExpenseCreateNestedManyWithoutGroupInput
    invitations?: GroupInvitationCreateNestedManyWithoutGroupInput
    members?: GroupMemberCreateNestedManyWithoutGroupInput
  }

  export type ExpenseGroupUncheckedCreateWithoutSettlementsInput = {
    id?: string
    name: string
    description?: string | null
    currency?: string
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    archivedAt?: Date | string | null
    expenses?: ExpenseUncheckedCreateNestedManyWithoutGroupInput
    invitations?: GroupInvitationUncheckedCreateNestedManyWithoutGroupInput
    members?: GroupMemberUncheckedCreateNestedManyWithoutGroupInput
  }

  export type ExpenseGroupCreateOrConnectWithoutSettlementsInput = {
    where: ExpenseGroupWhereUniqueInput
    create: XOR<ExpenseGroupCreateWithoutSettlementsInput, ExpenseGroupUncheckedCreateWithoutSettlementsInput>
  }

  export type UserCreateWithoutSettlementsReceivedInput = {
    id?: string
    phoneNumber?: string | null
    createdAt?: Date | string | null
    otp?: string | null
    otpExpiryTime?: Date | string | null
    email?: string | null
    googleSubject?: string | null
    phoneVerified?: boolean | null
    emailVerified?: boolean | null
    otpHash?: string | null
    otpAttempts?: number | null
    otpLastSentAt?: Date | string | null
    name?: string | null
    profileImageUrl?: string | null
    createdGroups?: ExpenseGroupCreateNestedManyWithoutCreatedByInput
    splits?: ExpenseSplitCreateNestedManyWithoutUserInput
    expensesPaid?: ExpenseCreateNestedManyWithoutPaidByInput
    expensesCreated?: ExpenseCreateNestedManyWithoutUserInput
    sentInvitations?: GroupInvitationCreateNestedManyWithoutInvitedByInput
    receivedInvitations?: GroupInvitationCreateNestedManyWithoutInvitedUserInput
    groupMemberships?: GroupMemberCreateNestedManyWithoutUserInput
    settlementsSent?: SettlementCreateNestedManyWithoutFromUserInput
  }

  export type UserUncheckedCreateWithoutSettlementsReceivedInput = {
    id?: string
    phoneNumber?: string | null
    createdAt?: Date | string | null
    otp?: string | null
    otpExpiryTime?: Date | string | null
    email?: string | null
    googleSubject?: string | null
    phoneVerified?: boolean | null
    emailVerified?: boolean | null
    otpHash?: string | null
    otpAttempts?: number | null
    otpLastSentAt?: Date | string | null
    name?: string | null
    profileImageUrl?: string | null
    createdGroups?: ExpenseGroupUncheckedCreateNestedManyWithoutCreatedByInput
    splits?: ExpenseSplitUncheckedCreateNestedManyWithoutUserInput
    expensesPaid?: ExpenseUncheckedCreateNestedManyWithoutPaidByInput
    expensesCreated?: ExpenseUncheckedCreateNestedManyWithoutUserInput
    sentInvitations?: GroupInvitationUncheckedCreateNestedManyWithoutInvitedByInput
    receivedInvitations?: GroupInvitationUncheckedCreateNestedManyWithoutInvitedUserInput
    groupMemberships?: GroupMemberUncheckedCreateNestedManyWithoutUserInput
    settlementsSent?: SettlementUncheckedCreateNestedManyWithoutFromUserInput
  }

  export type UserCreateOrConnectWithoutSettlementsReceivedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSettlementsReceivedInput, UserUncheckedCreateWithoutSettlementsReceivedInput>
  }

  export type UserUpsertWithoutSettlementsSentInput = {
    update: XOR<UserUpdateWithoutSettlementsSentInput, UserUncheckedUpdateWithoutSettlementsSentInput>
    create: XOR<UserCreateWithoutSettlementsSentInput, UserUncheckedCreateWithoutSettlementsSentInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSettlementsSentInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSettlementsSentInput, UserUncheckedUpdateWithoutSettlementsSentInput>
  }

  export type UserUpdateWithoutSettlementsSentInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiryTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    googleSubject?: NullableStringFieldUpdateOperationsInput | string | null
    phoneVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    otpHash?: NullableStringFieldUpdateOperationsInput | string | null
    otpAttempts?: NullableIntFieldUpdateOperationsInput | number | null
    otpLastSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdGroups?: ExpenseGroupUpdateManyWithoutCreatedByNestedInput
    splits?: ExpenseSplitUpdateManyWithoutUserNestedInput
    expensesPaid?: ExpenseUpdateManyWithoutPaidByNestedInput
    expensesCreated?: ExpenseUpdateManyWithoutUserNestedInput
    sentInvitations?: GroupInvitationUpdateManyWithoutInvitedByNestedInput
    receivedInvitations?: GroupInvitationUpdateManyWithoutInvitedUserNestedInput
    groupMemberships?: GroupMemberUpdateManyWithoutUserNestedInput
    settlementsReceived?: SettlementUpdateManyWithoutToUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSettlementsSentInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiryTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    googleSubject?: NullableStringFieldUpdateOperationsInput | string | null
    phoneVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    otpHash?: NullableStringFieldUpdateOperationsInput | string | null
    otpAttempts?: NullableIntFieldUpdateOperationsInput | number | null
    otpLastSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdGroups?: ExpenseGroupUncheckedUpdateManyWithoutCreatedByNestedInput
    splits?: ExpenseSplitUncheckedUpdateManyWithoutUserNestedInput
    expensesPaid?: ExpenseUncheckedUpdateManyWithoutPaidByNestedInput
    expensesCreated?: ExpenseUncheckedUpdateManyWithoutUserNestedInput
    sentInvitations?: GroupInvitationUncheckedUpdateManyWithoutInvitedByNestedInput
    receivedInvitations?: GroupInvitationUncheckedUpdateManyWithoutInvitedUserNestedInput
    groupMemberships?: GroupMemberUncheckedUpdateManyWithoutUserNestedInput
    settlementsReceived?: SettlementUncheckedUpdateManyWithoutToUserNestedInput
  }

  export type ExpenseGroupUpsertWithoutSettlementsInput = {
    update: XOR<ExpenseGroupUpdateWithoutSettlementsInput, ExpenseGroupUncheckedUpdateWithoutSettlementsInput>
    create: XOR<ExpenseGroupCreateWithoutSettlementsInput, ExpenseGroupUncheckedCreateWithoutSettlementsInput>
    where?: ExpenseGroupWhereInput
  }

  export type ExpenseGroupUpdateToOneWithWhereWithoutSettlementsInput = {
    where?: ExpenseGroupWhereInput
    data: XOR<ExpenseGroupUpdateWithoutSettlementsInput, ExpenseGroupUncheckedUpdateWithoutSettlementsInput>
  }

  export type ExpenseGroupUpdateWithoutSettlementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    archivedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: UserUpdateOneRequiredWithoutCreatedGroupsNestedInput
    expenses?: ExpenseUpdateManyWithoutGroupNestedInput
    invitations?: GroupInvitationUpdateManyWithoutGroupNestedInput
    members?: GroupMemberUpdateManyWithoutGroupNestedInput
  }

  export type ExpenseGroupUncheckedUpdateWithoutSettlementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    archivedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expenses?: ExpenseUncheckedUpdateManyWithoutGroupNestedInput
    invitations?: GroupInvitationUncheckedUpdateManyWithoutGroupNestedInput
    members?: GroupMemberUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type UserUpsertWithoutSettlementsReceivedInput = {
    update: XOR<UserUpdateWithoutSettlementsReceivedInput, UserUncheckedUpdateWithoutSettlementsReceivedInput>
    create: XOR<UserCreateWithoutSettlementsReceivedInput, UserUncheckedCreateWithoutSettlementsReceivedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSettlementsReceivedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSettlementsReceivedInput, UserUncheckedUpdateWithoutSettlementsReceivedInput>
  }

  export type UserUpdateWithoutSettlementsReceivedInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiryTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    googleSubject?: NullableStringFieldUpdateOperationsInput | string | null
    phoneVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    otpHash?: NullableStringFieldUpdateOperationsInput | string | null
    otpAttempts?: NullableIntFieldUpdateOperationsInput | number | null
    otpLastSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdGroups?: ExpenseGroupUpdateManyWithoutCreatedByNestedInput
    splits?: ExpenseSplitUpdateManyWithoutUserNestedInput
    expensesPaid?: ExpenseUpdateManyWithoutPaidByNestedInput
    expensesCreated?: ExpenseUpdateManyWithoutUserNestedInput
    sentInvitations?: GroupInvitationUpdateManyWithoutInvitedByNestedInput
    receivedInvitations?: GroupInvitationUpdateManyWithoutInvitedUserNestedInput
    groupMemberships?: GroupMemberUpdateManyWithoutUserNestedInput
    settlementsSent?: SettlementUpdateManyWithoutFromUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSettlementsReceivedInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiryTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    googleSubject?: NullableStringFieldUpdateOperationsInput | string | null
    phoneVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    otpHash?: NullableStringFieldUpdateOperationsInput | string | null
    otpAttempts?: NullableIntFieldUpdateOperationsInput | number | null
    otpLastSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdGroups?: ExpenseGroupUncheckedUpdateManyWithoutCreatedByNestedInput
    splits?: ExpenseSplitUncheckedUpdateManyWithoutUserNestedInput
    expensesPaid?: ExpenseUncheckedUpdateManyWithoutPaidByNestedInput
    expensesCreated?: ExpenseUncheckedUpdateManyWithoutUserNestedInput
    sentInvitations?: GroupInvitationUncheckedUpdateManyWithoutInvitedByNestedInput
    receivedInvitations?: GroupInvitationUncheckedUpdateManyWithoutInvitedUserNestedInput
    groupMemberships?: GroupMemberUncheckedUpdateManyWithoutUserNestedInput
    settlementsSent?: SettlementUncheckedUpdateManyWithoutFromUserNestedInput
  }

  export type ExpenseGroupCreateManyCreatedByInput = {
    id?: string
    name: string
    description?: string | null
    currency?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    archivedAt?: Date | string | null
  }

  export type ExpenseSplitCreateManyUserInput = {
    id?: string
    expenseId: string
    shareAmount: Decimal | DecimalJsLike | number | string
  }

  export type ExpenseCreateManyPaidByInput = {
    id?: string
    title: string
    amount: Decimal | DecimalJsLike | number | string
    userId: string
    createdAt?: Date | string | null
    groupId?: string | null
    description?: string | null
    currency?: string | null
    splitType?: string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type ExpenseCreateManyUserInput = {
    id?: string
    title: string
    amount: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string | null
    groupId?: string | null
    description?: string | null
    currency?: string | null
    paidById?: string | null
    splitType?: string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type GroupInvitationCreateManyInvitedByInput = {
    id?: string
    groupId: string
    invitedPhoneNumber: string
    invitedUserId?: string | null
    status?: string
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type GroupInvitationCreateManyInvitedUserInput = {
    id?: string
    groupId: string
    invitedPhoneNumber: string
    invitedById: string
    status?: string
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type GroupMemberCreateManyUserInput = {
    id?: string
    groupId: string
    role?: string
    status?: string
    joinedAt?: Date | string
  }

  export type SettlementCreateManyFromUserInput = {
    id?: string
    groupId: string
    toUserId: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    paymentMethod?: string
    status?: string
    note?: string | null
    idempotencyKey?: string | null
    createdAt?: Date | string
    confirmedAt?: Date | string | null
  }

  export type SettlementCreateManyToUserInput = {
    id?: string
    groupId: string
    fromUserId: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    paymentMethod?: string
    status?: string
    note?: string | null
    idempotencyKey?: string | null
    createdAt?: Date | string
    confirmedAt?: Date | string | null
  }

  export type ExpenseGroupUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    archivedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expenses?: ExpenseUpdateManyWithoutGroupNestedInput
    invitations?: GroupInvitationUpdateManyWithoutGroupNestedInput
    members?: GroupMemberUpdateManyWithoutGroupNestedInput
    settlements?: SettlementUpdateManyWithoutGroupNestedInput
  }

  export type ExpenseGroupUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    archivedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expenses?: ExpenseUncheckedUpdateManyWithoutGroupNestedInput
    invitations?: GroupInvitationUncheckedUpdateManyWithoutGroupNestedInput
    members?: GroupMemberUncheckedUpdateManyWithoutGroupNestedInput
    settlements?: SettlementUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type ExpenseGroupUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    archivedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ExpenseSplitUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    shareAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    expense?: ExpenseUpdateOneRequiredWithoutSplitsNestedInput
  }

  export type ExpenseSplitUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expenseId?: StringFieldUpdateOperationsInput | string
    shareAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type ExpenseSplitUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expenseId?: StringFieldUpdateOperationsInput | string
    shareAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type ExpenseUpdateWithoutPaidByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    splitType?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    splits?: ExpenseSplitUpdateManyWithoutExpenseNestedInput
    group?: ExpenseGroupUpdateOneWithoutExpensesNestedInput
    user?: UserUpdateOneRequiredWithoutExpensesCreatedNestedInput
  }

  export type ExpenseUncheckedUpdateWithoutPaidByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    splitType?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    splits?: ExpenseSplitUncheckedUpdateManyWithoutExpenseNestedInput
  }

  export type ExpenseUncheckedUpdateManyWithoutPaidByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    splitType?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ExpenseUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    splitType?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    splits?: ExpenseSplitUpdateManyWithoutExpenseNestedInput
    group?: ExpenseGroupUpdateOneWithoutExpensesNestedInput
    paidBy?: UserUpdateOneWithoutExpensesPaidNestedInput
  }

  export type ExpenseUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    paidById?: NullableStringFieldUpdateOperationsInput | string | null
    splitType?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    splits?: ExpenseSplitUncheckedUpdateManyWithoutExpenseNestedInput
  }

  export type ExpenseUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    paidById?: NullableStringFieldUpdateOperationsInput | string | null
    splitType?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GroupInvitationUpdateWithoutInvitedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    invitedPhoneNumber?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: ExpenseGroupUpdateOneRequiredWithoutInvitationsNestedInput
    invitedUser?: UserUpdateOneWithoutReceivedInvitationsNestedInput
  }

  export type GroupInvitationUncheckedUpdateWithoutInvitedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    invitedPhoneNumber?: StringFieldUpdateOperationsInput | string
    invitedUserId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupInvitationUncheckedUpdateManyWithoutInvitedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    invitedPhoneNumber?: StringFieldUpdateOperationsInput | string
    invitedUserId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupInvitationUpdateWithoutInvitedUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    invitedPhoneNumber?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: ExpenseGroupUpdateOneRequiredWithoutInvitationsNestedInput
    invitedBy?: UserUpdateOneRequiredWithoutSentInvitationsNestedInput
  }

  export type GroupInvitationUncheckedUpdateWithoutInvitedUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    invitedPhoneNumber?: StringFieldUpdateOperationsInput | string
    invitedById?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupInvitationUncheckedUpdateManyWithoutInvitedUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    invitedPhoneNumber?: StringFieldUpdateOperationsInput | string
    invitedById?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupMemberUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: ExpenseGroupUpdateOneRequiredWithoutMembersNestedInput
  }

  export type GroupMemberUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupMemberUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SettlementUpdateWithoutFromUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    group?: ExpenseGroupUpdateOneRequiredWithoutSettlementsNestedInput
    toUser?: UserUpdateOneRequiredWithoutSettlementsReceivedNestedInput
  }

  export type SettlementUncheckedUpdateWithoutFromUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    toUserId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SettlementUncheckedUpdateManyWithoutFromUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    toUserId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SettlementUpdateWithoutToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fromUser?: UserUpdateOneRequiredWithoutSettlementsSentNestedInput
    group?: ExpenseGroupUpdateOneRequiredWithoutSettlementsNestedInput
  }

  export type SettlementUncheckedUpdateWithoutToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    fromUserId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SettlementUncheckedUpdateManyWithoutToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    fromUserId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ExpenseCreateManyGroupInput = {
    id?: string
    title: string
    amount: Decimal | DecimalJsLike | number | string
    userId: string
    createdAt?: Date | string | null
    description?: string | null
    currency?: string | null
    paidById?: string | null
    splitType?: string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type GroupInvitationCreateManyGroupInput = {
    id?: string
    invitedPhoneNumber: string
    invitedUserId?: string | null
    invitedById: string
    status?: string
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type GroupMemberCreateManyGroupInput = {
    id?: string
    userId: string
    role?: string
    status?: string
    joinedAt?: Date | string
  }

  export type SettlementCreateManyGroupInput = {
    id?: string
    fromUserId: string
    toUserId: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    paymentMethod?: string
    status?: string
    note?: string | null
    idempotencyKey?: string | null
    createdAt?: Date | string
    confirmedAt?: Date | string | null
  }

  export type ExpenseUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    splitType?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    splits?: ExpenseSplitUpdateManyWithoutExpenseNestedInput
    paidBy?: UserUpdateOneWithoutExpensesPaidNestedInput
    user?: UserUpdateOneRequiredWithoutExpensesCreatedNestedInput
  }

  export type ExpenseUncheckedUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    paidById?: NullableStringFieldUpdateOperationsInput | string | null
    splitType?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    splits?: ExpenseSplitUncheckedUpdateManyWithoutExpenseNestedInput
  }

  export type ExpenseUncheckedUpdateManyWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    paidById?: NullableStringFieldUpdateOperationsInput | string | null
    splitType?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GroupInvitationUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    invitedPhoneNumber?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invitedBy?: UserUpdateOneRequiredWithoutSentInvitationsNestedInput
    invitedUser?: UserUpdateOneWithoutReceivedInvitationsNestedInput
  }

  export type GroupInvitationUncheckedUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    invitedPhoneNumber?: StringFieldUpdateOperationsInput | string
    invitedUserId?: NullableStringFieldUpdateOperationsInput | string | null
    invitedById?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupInvitationUncheckedUpdateManyWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    invitedPhoneNumber?: StringFieldUpdateOperationsInput | string
    invitedUserId?: NullableStringFieldUpdateOperationsInput | string | null
    invitedById?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupMemberUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutGroupMembershipsNestedInput
  }

  export type GroupMemberUncheckedUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupMemberUncheckedUpdateManyWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SettlementUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fromUser?: UserUpdateOneRequiredWithoutSettlementsSentNestedInput
    toUser?: UserUpdateOneRequiredWithoutSettlementsReceivedNestedInput
  }

  export type SettlementUncheckedUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromUserId?: StringFieldUpdateOperationsInput | string
    toUserId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SettlementUncheckedUpdateManyWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromUserId?: StringFieldUpdateOperationsInput | string
    toUserId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ExpenseSplitCreateManyExpenseInput = {
    id?: string
    userId: string
    shareAmount: Decimal | DecimalJsLike | number | string
  }

  export type ExpenseSplitUpdateWithoutExpenseInput = {
    id?: StringFieldUpdateOperationsInput | string
    shareAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    user?: UserUpdateOneRequiredWithoutSplitsNestedInput
  }

  export type ExpenseSplitUncheckedUpdateWithoutExpenseInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    shareAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type ExpenseSplitUncheckedUpdateManyWithoutExpenseInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    shareAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ExpenseGroupCountOutputTypeDefaultArgs instead
     */
    export type ExpenseGroupCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ExpenseGroupCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ExpenseCountOutputTypeDefaultArgs instead
     */
    export type ExpenseCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ExpenseCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ExpenseGroupDefaultArgs instead
     */
    export type ExpenseGroupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ExpenseGroupDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GroupMemberDefaultArgs instead
     */
    export type GroupMemberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GroupMemberDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GroupInvitationDefaultArgs instead
     */
    export type GroupInvitationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GroupInvitationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ExpenseDefaultArgs instead
     */
    export type ExpenseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ExpenseDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ExpenseSplitDefaultArgs instead
     */
    export type ExpenseSplitArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ExpenseSplitDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SettlementDefaultArgs instead
     */
    export type SettlementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SettlementDefaultArgs<ExtArgs>
    /**
     * @deprecated Use flyway_schema_historyDefaultArgs instead
     */
    export type flyway_schema_historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = flyway_schema_historyDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}