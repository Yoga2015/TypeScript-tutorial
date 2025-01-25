// 什么是 联合类型
// 联合类型 是一种  允许你 把 两种 或 多种类型 组合在一起，形成一个新的类型   的  数据类型。

// 语法:
// | （竖线）在 TS 中 叫做 联合类型 （由 两种 或 多种其他类型 组成的类型，表示可以是 这些类型中 的 任意一种）。
// 注意： 这个 TS 中 联合类型 的 语法，只有一根竖线，不要与 JS 中 或（||） 混淆了。

// 作用:
// 使用 联合类型，能让  一个数组arr  既可存储 number 类型的数据，
// 又可以存储 string 类型 的数据, 又或者存储 其他种类型 的 数据 ......


// 需求： 数组中 既有 number 类型，又有 string 类型，这个数组的类型应该如何写？

// 1、添加 小括号 ，表示：首先是数组，然后，这个数组中 能够出现 number 或 string 类型的元素

let arr1: (number | string)[] = [1, 'aa', 5]

let arr2: (number | string | boolean)[] = [1, 'aa', 5, 'cc', true]

// let arr3: (number | string | boolean)[] = [1, 'aa', 5, 'cc', 89, 15, 1000, null]    // 会报错

arr2.push(999);


// 2、不添加 小括号 ，表示：arr4 既可以是 number类型，又可以是 string[]
let arr4: number | string[] = ['a', 'c']

let arr5: number | string[] = 123

let arr6: (string | number | boolean)[] = [16, '小河', 'lisi', true, false, 'Amy']



