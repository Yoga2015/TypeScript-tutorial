// 类型注解 用于给 变量 设置  类型，使得 变量 只能存储 某种类型 的 值.

// 类型注解的作用 ： 为 变量 添加 类型约束，约定了什么类型，就只能给 变量 赋值该类型的值，否则，就会报错！

// 为 变量 指定 类型 后，当 为 变量 赋值时，TS编译器 会自动检查 值 是否符合 类型声明，符合 则赋值，否则报错！


// 1、原始数据类型（基本数据类型）

let Sname: string = 'lisi'

let isLoading: boolean = false

let weight: number = 120

let null2: null = null

let undefined2: undefined = undefined

let symbol2: symbol = Symbol()


// 2、对象类型  object （包括：数组、对象、函数 等 对象）

// 在 TS 中 对于 对象类型 来说的话，那么 每个类型 做了更加细化的处理，就是 每个 具体 的 对象 都有自己 的 类型语法。


//  比如：数组类型 的 两种写法 （ 推荐 使用 number[] 写法 ）

// Array < number > 写法， 不推荐
// let d: Array<number> = [6, 19, 12];
// let string2: Array<string> = ['a', 'bb', '小河']

// number[] 写法  推荐
let e: number[] = [6, 19, 12];      //  变量e 的类型 是 number类型的数组, 赋值时只能赋值 number类型

let number1: number[] = [1, 3, 25]

let string1: string[] = ['lisi', '小红', 'KK']

let boolean1: boolean[] = [true, false, false]

let null3: null[] = [null, null, null]

let undefined3: undefined[] = [undefined, undefined]


//  Void 空值 ，首先 JavaScript 没有空值（Void）的概念，在 TypeScript 中，可以用 void 表示 没有任何返回值 的 函数：
function alertName(): void {

  alert('My name is Tom');

}

// 声明一个变量 Sage, 同时指定它的类型 为 number ,并赋值20
let age: number = 20

// Sage 的 类型 上面设置了 number, 在以后 使用过程中 Sage 的值 只能是 数字
// age = '二十';    // 这行代码会报错，不能将类型“string" 分配给类型“number"； 如果此处还没报错，tsc去编译时也会报错！

console.log(age);

console.log(Sname);

// 以上代码，如果报错，tsc去编译时，但还是能 生成出 对应的js文件，需要在编译工具里进行配置，可做到让有错的时候，就不编译不生成 对应的js文件



