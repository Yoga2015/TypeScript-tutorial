// 接口之间的兼容性，类似于class。并且，class 与 interface 之间也可以兼容。

interface Point4D {
  x: number
  y: number
}

interface Point5D {
  x: number
  y: number
}

interface Point6D {
  x: number
  y: number
  z: number
}

let p4: Point4D
let p5: Point5D
let p6: Point6D

// 正确演示
// p4 = p5
// p5 = p4
// p5 = p6

// 错误演示
// p6 = p4


// 类 和 接口 之间 也是兼容的
class Point7D {
  x: number
  y: number
  z: number
}

p5 = new Point7D()

// 由于 接口之间的兼容性，类似于class ，还是 成员多的 可以赋值给 成员少的 