// 在 js 中 typeof 操作符 被用来 获取 数据(值) 的类型

console.log(typeof 'hello');   //  string

let p = { x: 8, y: 6 }

console.log(typeof p);     // object

// function formatPoint(point: { x: number, y: number }) { }

// 同上

function formatPoint(point: typeof p) { }

formatPoint(p)

/**
 *  1、使用 typeof 操作符 来获取 变量p 的类型
 *  2、typeof 出现在 类型注解的位置 （参数名称的冒号后面） 所处的环境就在类型上下文 （区别于JS代码）
 *  3、注意：typeof 只能用来查询 变量 或 属性 的类型，无法查询其他形式的类型 （比如：函数调用的类型）
 */

