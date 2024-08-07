// 类型注解 用于给 变量 设置  类型，使得 变量 只能存储 某种类型的值.

// 类型注解的作用 ： 为 变量 添加 类型约束，约定了什么类型，就只能给 变量 赋值该类型的值，否则，就会报错！


// 原始数据类型 在 TypeScript 中的应用:

let Sname: string = 'lisi'

let isLoading: boolean = false

let weight: number = 120

let a: null = null

let b: undefined = undefined

let c: symbol = Symbol()


// 空值
// JavaScript 没有空值（Void）的概念，在 TypeScript 中，可以用 void 表示没有任何返回值的函数：
function alertName(): void {

  alert('My name is Tom');

}

// 声明一个变量 Sage, 同时指定它的类型 为 number ,并赋值
let age: number = 20

// Sage 的 类型 上面设置了 number, 在以后 使用过程中 Sage 的值 只能是 数字
age = '二十';    // 此行代码会报错，因为 变量 Sage 的类型是 number, 不能赋值字符串；如果此处还没报错，tsc去编译时也会报错！

console.log(age);

console.log(Sname);

// 以上代码，如果报错，tsc去编译时，但还是能 生成出 对应的js文件，需要在编译工具里进行配置，可做到让有错的时候，就不编译不生成 对应的js文件



