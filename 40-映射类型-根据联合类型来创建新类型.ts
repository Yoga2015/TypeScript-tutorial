// 映射类型 是指 基于一个旧类型 创建一个新类型(对象类型)，通过使用 映射类型 达到减少重复、提升开发效率。

type PropKeys = 'a' | 'b' | 'c' | 'x' | 'y' | 'z'     // 当 联合类型的属性 更多时，使用 映射类型 更简化书写

// 不使用 映射类型，当 PropKeys 里 增加 一个，这里 就要继续 写上一个，太麻烦了
type Type1 = { a: number; b: number; c: number; x: number; y: number; z: number }

// 使用 映射类型
type Type2 = { [Key in PropKeys]: number }


// 映射类型 只能在 类型别名 中 使用，不能在 接口中 使用，会报错！
// interface Type3 {
//   [Key in PropKeys]: number
// }