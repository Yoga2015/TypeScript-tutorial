// 接口
// interface Person5 {
//   name: string
//   age: number
//   sayHi(): void
// }

// 类型别名
type Person5 = {
  name: string
  age: number
  sayHi(): void
}

let IPerson: Person5 = {
  name: 'walking',
  age: 19,
  sayHi() { }
}

// 接口：只能为 对象 指定类型。

// 类型别名：不仅可以为 对象 指定 类型，实际上 可以为 任意类型 指定 别名。