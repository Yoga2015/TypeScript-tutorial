// 当 一个对象类型 被 多次使用 时，一般会使用 接口（interface） 来描述 对象的类型，达到 复用 的目的。

let person2: { name: string; age: number; sayHi(): void; greet(name: string): void } = {
  name: 'Amy',
  age: 18,
  sayHi() { },
  greet(name) { }
}

let person3: { name: string; age: number; sayHi(): void; greet(name: string): void } = {
  name: 'Amy',
  age: 18,
  sayHi() { },
  greet(name) { }
}



// 一个对象类型 被 多次使用 , 改造上面

// 接口：支持声明合并，即当 多个接口 具有相同的名称 时，它们会被合并成一个接口。
// TS 底层偷偷帮你合并了.

interface IPerson {
  name: string
  age: number
  sayHi(): void
  greet(name: string): void
}

interface IPerson {
  sex: string
}

let person4: IPerson = {
  name: 'Walking',
  age: 18,
  sayHi() { },
  greet(name) { },
  sex: '男'
}