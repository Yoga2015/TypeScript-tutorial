
// 1、映射类型 ：根据 一个已有的对象类型 来创建 另外一个对象类型

type Type4 = { a: number; b: boolean; c: string }

// 使用 keyof 操作符 来 配合 映射类型  来实现 根据一个对象类型 来创建 一个新的对象类型
type Type5 = { [Key in keyof Type4]: number }

// 分析：

// (1)、首先，先 执行 keyof Type4 获取到  对象类型Type4 中 所有键 的 联合类型 ，即： 'a' | 'b' | 'c'

// (2)、然后 ， Key in ... 就表示 Key 可以是 Props 中 所有的 键名称 中的任意一个。




// 2、泛型工具类型(比如：Partial<Type>) 都是基于 映射类型 实现的。

// 分析 泛型工具类型 Partial < Type > 的实现
type MyPartial<T> = {
  [P in keyof T]?: T[P]
}

type Type6 = { a: number; b: boolean; c: string }

type PartialProps = MyPartial<Type6>

// 分析：
// （1）、keyof T 即 keyof Type6 表示获取 Type6 的 所有键，也就是：‘a’ | ‘b’ | ‘c’

// （3）、在[] 后面 添加 ？ (问号), 表示 将这些属性 变为 可选的，以此来实现  Partial 的 功能

// （3）、冒号 后面的 T[P]  表示 T 中 每个键对应的类型。 比如 ： 如果是 ‘a’ 则类型是 number； 如果是 ‘b’ 则类型是 string；

// （4）、新类型 PartialProp 和 旧类型Type6 结构 完全相同，只是 让 所有类型 都变为 可选了。



// 3、索引查询（索引访问）类型

// 上面 T[P]  语法，在 TS 中 叫做 索引查询（索引访问）类型 , 它 用于 查询 属性的类型

type Type7 = { a: number; b: boolean; c: string }

type Type8 = Type7['b']    // type Type8 = boolean

type Type9 = Type7['a']    // type Type9 = number

type TypeA = Type7['c']    // type TypeA = string

// type TypeB = Type7['c1']    // Property 'c1' does not exist on type 'Type7'.

// 分析：

// （1）、Type7['b'] 表示 查询类型 Type7 中 属性 ‘b’ 对应的类型 boolean 。所以 ， Type7 的 类型 为  boolean

// （2）、注意 ：[] 中的属性 必须存在与于 被查询的Type6中，否则报错！



// 3.1、同时 查询多个 索引的类型

type TypeC = { a: string; b: number; c: string; d: number }

// （1）使用 字符串字面量的联合类型 获取 属性 c 和 d 对应的 类型，结果为  string | number
type TypeD = TypeC['c' | 'd']    // type TypeD = string | number

// (2) 使用 keyof 操作符 获取 TypeC 中 所有键对应的类型，结果为：string | number
type TypeE = TypeC[keyof TypeC]    // type TypeE =  string | number

