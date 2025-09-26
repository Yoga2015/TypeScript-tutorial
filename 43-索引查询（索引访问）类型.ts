// 索引查询（索引访问）类型

// 上面 T[P]  语法，在 TS 中 叫做 索引查询（索引访问）类型 , 它 用于 查询 属性的类型

type TypeF = { a: number; b: boolean; c: string }

type TypeG = TypeF['b']    // type TypeG = boolean

type TypeH = TypeF['a']    // type TypeH = number

type TypeI = TypeF['c']    // type TypeI = string

// type TypeB = TypeF['c1']    // Property 'c1' does not exist on type 'TypeF'.

// 分析：

// （1）、TypeF['b'] 表示 查询类型 TypeF 中 属性 ‘b’ 对应的类型 boolean 。所以 ， TypeF 的 类型 为  boolean

// （2）、注意 ：[] 中的属性 必须存在与于 被查询的 TypeF 中，否则报错！


// 同时 查询多个 索引的类型

type TypeJ = { a: string; b: number; c: string; d: number }

// （1）使用 字符串字面量的联合类型 获取 属性 c 和 d 对应的 类型，结果为  string | number
type TypeK = TypeJ['c' | 'd']    // type TypeK = string | number

// (2) 使用 keyof 操作符 获取 TypeC 中 所有键对应的类型，结果为：string | number
type TypeL = TypeF[keyof TypeF]    // type TypeE =  string | number