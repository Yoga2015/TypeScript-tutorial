// 1、参数个数 : 参数少的 可以赋值给 参数多的  (“和对象、接口 反过来了”)

type F1 = (a: number) => void

type F2 = (a: number, b: number) => void

let f1: F1

let f2: F2 = f1


// 错误演示
// f1 = f2

// 为什么 参数少的 可以赋值给 参数多的？

// 因为 在 JS 中 省略用不到的函数参数 实际上是 很常见的，这样的使用方式，促成了 TS中函数类型之间的兼容性。



// 2、参数类型：相同位置的参数类型 要相同（原始类型） 或兼容（对象类型：数组、函数、对象等）

// 原始类型
type F3 = (a: number) => void
type F4 = (a: number) => void

let f3: F3
let f4: F4

f4 = f3
f3 = f4

// 对象类型
interface Point7D {
  x: number
  y: number
}

interface Point8D {
  x: number
  y: number
  z: number
}

type F5 = (p: Point7D) => void   // 相当于有 2个参数
type F6 = (p: Point8D) => void   // 相当于有 3个参数

let f5: F5
let f6: F6

f6 = f5

// 错误演示
// f5 = f6

//  注意：此处与 接口兼容性 冲突。
//  技巧： 将 对象拆开，把 每一个属性 看做 一个个参数，则，参数少的 f5 可以 赋值给 参数多的 f6




// 3、返回值类型，只关注 返回值类型 本身即可

// 原始类型
type F7 = () => string
type F8 = () => string

let f7: F7
let f8: F8

// 如果 返回值类型 是 原始类型，此时 两个类型 要相同
// f8 = f7
// f7 = f8


// 对象类型
type F9 = () => { name: string }
type F10 = () => { name: string; age: number }

let f9: F9
let f10: F10

f9 = f10

// 错误演示
// f10 = f9

// 如果 返回值类型 是 对象类型，此时 成员多的  可以赋值给  成员少的