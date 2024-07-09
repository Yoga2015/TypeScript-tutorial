// 字面量类型 是指 JS 中 任意的一个字面值 （如：字符串、数字、布尔值 等）。使用 字面值 作为 类型注解的类型。

// 字面量类型 一般用于 定义一组有限的值，比如 ：
//     在 定义变量 或 函数 时，作为 具体值 使用，也可以作为 类型的一部分 限定 变量 或 函数 的 取值范围。

// 字面量类型 使得代码 更加明确 和 类型安全。


let str1 = 'hello TS'

const str2: 'hello TS' = 'hello TS'

// 上面使用 字符串 确实可以作为 类型 出现，且不报错。

// 除了 字符串, 数值、boolean、null、undefined 等等的 都可以作为 一个类型 出现, 且不报错。


// let Sage:19 = 18   // Type '18' is not assignable to type '19'.

let Sage: 18 = 18

// 把 Sage 的 类型 设置为 18，那么这个时候 变量 Sage 的 值 就只能是 18，否则报错！

// 上面直接使用了 一种 数值类型的字面量 来作为了 变量 Sage 的 类型



// 1、定义 字面量类型
type Status = "success" | "error" | "warning" | "danger";

// 2、使用 字面量类型
function changeStatus(promptStatus: Status) { }

changeStatus('success')



function changeDirection(direction: 'up' | 'down' | 'left' | 'right') { }

changeDirection('left')