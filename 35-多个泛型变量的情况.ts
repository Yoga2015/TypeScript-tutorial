// 多个泛型变量的情况

// 泛型 的 类型变量 是可以有多个的，并且 类型变量之间 还可以 约束 （比如，第二个类型变量 受  第一个类型变量 约束 ）

// 比如：创建 一个 函数 , 然后 用来 获取 对象中属性的值 ：

function getProp<Type, PropKey extends keyof Type>(obj: Type, key: PropKey) {

  return obj[key]

}

getProp({ name: 'walking', age: 23 }, 'age')     // 23

getProp({ name: 'walking', age: 23 }, 'name')    // walking

// 错误演示
// getProp({ name: 'walking', age: 23 }, 'name1') Argument of type '"name1"' is not assignable to parameter of type '"age" | "name"'

// 补充：了解
getProp(18, 'toFixed')     // Number包装对象  的 实例方法

getProp('abc', 'split')

getProp('abc', 1)  // 此处 1 表示 索引

getProp(['a'], 'length')

getProp(['a'], 999)



// 解释:      unknown 不知道、未知的、不确定     never 不可能

// 1、添加了 第两个类型变量 分别是：Type、 Key，这 两个类型变量之间 使用(,) 逗号 分隔。

// 2、keyof 关键字 接收 一个对象类型，生成 其键名称(可能是字符串或数字) 的 联合类型。

// 3、本示例中 keyof Type 实际上获取的是 person 对象所有键的联合类型，也就是: 'name' | 'age'。

// 4、类型变量 Key 受 Type 约束，可以理解为: Key 只能是 Type 所有键 中 的 任意一个，或者说 只能访问 对象中 存在的属性。





