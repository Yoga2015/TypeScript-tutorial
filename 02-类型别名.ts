let arr: (number | string)[] = ['a', 1, 5, 'b']

// let arr6: (number | string)[] = ['c', 4, 6, 'h']

// let arr7: (number | string)[] = ['v', 2, 7, 'k']    同上的类型注解重复多次写

// 改造上面：

type CustomArray = (number | string)[]

let arr6: CustomArray = ['c', 4, 6, 'h']

let arr7: CustomArray = ['v', 2, 7, 'k', true]     // 根据 类型注解 约束 所存储的 值 的 类型

// 类型别名 （又叫：自定义类型），它的作用是 为 任意类型 起 别名。    type alias

// 1、使用 type 关键字 来创建  类型别名，类型别名 用在 类型注解 处
// 2、类型别名 （比如上面 的 CustomArray）, 可以是 任意合法 的 变量名称
// 3、创建 类型别名 后，直接 使用该类型别名 作为 变量的类型注解 即可。

// 类型别名 的 使用场景：
//    当 同一类型（复杂）被多次使用时，可以通过 类型别名， 简化 这个 复杂类型 书写多次 的 这样的问题