// 泛型工具类型(比如：Partial<Type>) 都是基于 映射类型 实现的。

// 分析 泛型工具类型 Partial < Type > 的实现
type MyPartials<T> = {
  [P in keyof T]?: T[P]
}

type TypeM = { a: number; b: boolean; c: string }

type PartialProps2 = MyPartials<TypeM>

// 分析：
// （1）、keyof T 即 keyof TypeM 表示获取 TypeM 的 所有键，也就是：‘a’ | ‘b’ | ‘c’

// （3）、在[] 后面 添加 ？ (问号), 表示 将这些属性 变为 可选的，以此来实现  Partial 的 功能

// （3）、冒号 后面的 T[P]  表示 T 中 每个键对应的类型。 比如 ： 如果是 ‘a’ 则类型是 number； 如果是 ‘b’ 则类型是 string；

// （4）、新类型 PartialProps2 和 旧类型TypeM 结构 完全相同，只是 让 所有类型 都变为 可选了。