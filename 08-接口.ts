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

interface IPerson {
  name: string
  age: number
  sayHi(): void
  greet(name: string): void
}

let person4: IPerson = {
  name: 'Walking',
  age: 18,
  sayHi() { },
  greet(name) { }
}