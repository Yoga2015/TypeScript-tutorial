// 交叉类型（&）的 功能 类似于  接口继承 （extends）。
// 交叉类型（&） 用于 组合 多个类型 为 一个类型 （常用于 对象类型 ）

interface Person {
  name: string
  say(): number
}

interface Contact {
  phone: string
}

type PersonDetail = Person & Contact

let obj: PersonDetail = {
  name: 'walking',
  phone: '183.....',
  say() {
    return 6
  }
}

// 使用 交叉类型 后，新的类型 PersonDetail 就同时具备了 Person 和 Contact 的 所有属性类型

// 相当于：   type PersonDetail = { name: string, phone: string }

// 使用 交叉类型 后，一般会赋值给 自定义类型（即：类型别名）



// 交叉类型 & 和 接口继承 extends 的 区别

// 相同点： 都可以 实现 对象类型 的 组合

// 不同点：两种方式 实现 类型组合 时，对于 同名属性之间 ，处理 类型冲突 的方式 不同



// 接口继承：
interface A {
  fn: (value: number) => string
}

interface B extends A {
  fn: (value: string) => string
}

// 接口继承 会 报错 ，因为 类型不兼容 ：Interface 'B' incorrectly extends interface 'A'.


// 交叉类型：

interface C {
  fn: (value: number) => string
}

interface D {
  fn: (value: string) => string
}

type E = C & D

// 交叉类型 没有报错，可以简单的理解为：  fn:(value: string | number) => string

let e: E = {
  fn(value: number | string) {
    return ''
  }
}

e.fn('walking')
e.fn(99)