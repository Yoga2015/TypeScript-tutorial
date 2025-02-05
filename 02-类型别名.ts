// 类型别名（又叫：自定义类型） 一般是指 通过添加  多种类型 来创建 自定义类型。 

// 类型别名  主要用来给  任意种类型的集合  起个新名字。

//    语法规则：

//       1、使用 type 关键字  来创建  类型别名 ，类型别名 用在 类型注解 处（以优化 从前的 类型注解重复多次写 的 问题）

//       2、类型别名 （比如上面 的 CustomArray）, 可以是 任意合法 的 变量名称

//       3、创建 类型别名 后，直接 使用 该 类型别名 作为 变量的类型注解 即可。


// 联合类型 | 语法：

let arr: (number | string)[] = ['a', 1, 5, 'b']

// let arr6: (number | string)[] = ['c', 4, 6, 'h']

// let arr7: (number | string)[] = ['v', 2, 7, 'k']    同上的 类型注解 重复多次写


// 类型别名 type（自定义类型）语法：

type CustomArray = (number | string | boolean)[]

let arr8: CustomArray = ['c', 4, 6, 'h']

let arr9: CustomArray = ['v', 2, true, 7, 'k']     // 赋值时，不要求 必须一致对应 类型 的 前后顺序


// 类型别名 的 使用场景：当 同一类型（复杂）被多次使用时，可以通过 类型别名， 简化  复杂的联合类型  书写多次 的 繁琐问题