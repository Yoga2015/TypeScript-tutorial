// 元组 （Tuple）/ˈtʌpəl /

// 元组类型 是 另一种类型 的 数组，它 确切地知道 包含多少个元素，以及 特定索引 对应的类型。

// 1、使用 数值类型的数组  number[]

let position1: number[] = [56.467, 169.75, 8, 13, 2]


// 2、使用 更严谨的 元组类型 改造上面：

let position2: [number, number] = [56.467, 169.75]

// let position2: [number, number] = [56.467, 169.75, 8, 13, 2]

//超出元组元素个数代报错 Type '[number, number, number, number, number]' is not assignable to type '[number, number]'.
// Source has 5 element(s) but target allows only 2.


let position3: [number, string] = [47.239, '二十']


// 为什么要用 元组？
// 当你 明确知道  创建的 数组 中 应该有 多少个 元素，以及 每个元素 的 类型 的时候，这种情况下就要用 元组了。