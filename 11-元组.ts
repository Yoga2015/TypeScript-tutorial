// 元组 （Tuple）/ˈtʌpəl /

// 元组类型 是 另一种类型 的 数组，

// 元组 里 也可以储存 多个不同类型 的 元素，但是这些元素的类型，在初始化时，就已经 确定 并且 位置固定。

// 1、使用 数值类型的数组  number[]

let position1: number[] = [56.467, 169.75, 8, 13, 2]


// 2、使用 更严谨的 元组类型 改造上面：

let position2: [number, number] = [56.467, 169.75]

// let position2: [number, number] = [56.467, 169.75, 8, 13, 2]

//超出元组元素个数代报错 Type '[number, number, number, number, number]' is not assignable to type '[number, number]'.
// Source has 5 element(s) but target allows only 2.


let position3: [number, string] = [47.239, '二十']


// 元组 允许你 表达一个 已知 元素类型 和 数量 的 数组，这比在使用该数组时，提供了更多的类型安全性和更清晰的代码意图。

/**
 * 例子 ，现在要存储 一个用户的信息，此时你可能需要 一种 能够表示 用户信息 的 数据结构。

  如果你使用 number [ ] 数值类型的数组 来存储，首先 这个数组里 存储的所有元素 都必须是 number 类型，
  同时 它 还不限制 数组内 元素的个数、 特定位置上的元素类型 或者 元素的顺序。
  这意味着 不严谨，会导致 该类型的数组 表示的信息 就不明确了。

  如果 你 使用  元组类型的数组 来存储，元组 里 每个位置 都有 特定的意义。
  如：第一个位置 是 用户名 （string 类型），第二个位置 是 年龄 （number类型），第三个位置 是 身高 （string 类型）... 等。
  在这种情况下，使用 元组 比 使用 number[ ] 或 any[ ]  更能 准确表达 你的意图。
 * 
 */