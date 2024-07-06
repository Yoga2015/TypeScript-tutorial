// 1、创建 接口
interface Person7 {
  name: string
  age: number
  sayHi(): void
}

interface Person7 {
  sex: string
}

// 接口：支持声明合并，即当 多个接口 具有相同的名称 时，它们会被合并成一个接口。
// TS 底层偷偷帮你合并了.

let IPerson2: Person7 = {
  name: 'walking',
  age: 19,
  sayHi() { },
  sex: '女'
}


// 2、创建 类型别名
type Person5 = {
  name: string
  age: number
  sayHi(): void
}

// type Person5 = {
//   sex: string
// }

// 类型别名：不支持声明合并。如果尝试为同一个类型别名声明多个类型，TypeScript 会报错。

let IPerson3: Person5 = {
  name: 'walking',
  age: 19,
  sayHi() { }
}



// 接口：只能为 对象 指定类型。

// 类型别名：不仅可以为 对象 指定 类型，实际上 可以为 任意类型 指定 别名。