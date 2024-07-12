// 定义 any 类型
let car: any = { x: 0 }

// 访问不存在的 属性 或者 赋值
car.light
car.light = 'yellow'

// 当作函数调用
car()

// 赋值 给 其他类型 的 变量 
const n: number = car


// 解释：以上操作 都不会有 任意类型错误 提示，即使可能存在错误！

// 因为当 值 的类型为 any 时，可以对 该值 进行任意操作，并且不会有代码提示。

// 所以尽可能 的 避免使用 any类型，除非 临时使用any 来 "避免" 书写很长、很复杂的类型！


// 当 声明变量不提供类型也不提供默认值 时 ，这时这个 变量 就会隐式具有 any类型。

let a   // let a: any

a = 1
a = 'walking'

// 当 函数参数 不加类型 时，这时 函数参数 就会隐式具有 any类型。

function add(num1, num2) { }   // num1: any ;  num2: any

add(3, 4)
add(6, 'walking')