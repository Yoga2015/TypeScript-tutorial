// 对象类型  object （包括：数组、对象、函数 等 对象）

// 在 TS 中 对于 对象类型 来说的话，那么 每个类型做了更加细化的处理，就是 每个 具体 的 对象 都有自己 的 类型语法。


//  数组类型 的 两种写法 （ 推荐 使用 number[] 写法 ）     array type

let number1: number[] = [1, 3, 25]

let string1: string[] = ['lisi', '小红', 'KK']

// let string2: Array<string> = ['a', 'bb', '小河']

let d: boolean[] = [true, false, false]


// 联合类型  union type

// 需求： 数组中 既有 number 类型，又有 string 类型，这个数组的类型应该如何写？

// 添加 小括号 ，表示：首先是数组，然后，这个数组中 能够出现 number 或 string 类型的元素
let arr1: (number | string)[] = [1, 'aa', 5]



let arr2: (number | string)[] = [1, 'aa', 5, 'cc', true]


// 不添加小括号 ，表示：arr3 既可以是 number类型，又可以是 string[]
// let arr3: number | string[] = ['a', 'c']
// let arr4: number | string[] = 123


let arr5: (string | number | boolean)[] = [16, '小河', 'lisi', true, false, 'Amy']

// 解释： | （竖线）在 TS 中 叫做 联合类型 （由两个 或 多个其他类型 组成的类型，表示可以是这些类型中的任意一种）。
