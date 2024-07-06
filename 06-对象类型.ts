// TS 中 对象的类型 就是在 描述对象的结构 （对象中有什么类型的属性和方法）

// 对象类型的写法：

let person: { name: string; age: number; sayHi(): void; greet(name: string): void } = {
  name: 'Amy',
  age: 18,
  sayHi() { },
  greet(name) { }
}

// 同上

let person1: {
  name: string
  age: number
  // sayHi(): void
  sayHi: () => void
  greet(name: string): void
} = {
  name: 'Amy',
  age: 18,
  sayHi() { },
  greet(name) { }
}