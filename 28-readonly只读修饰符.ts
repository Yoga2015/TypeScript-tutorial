// readonly: 表示 只读，用来 防止 在构造函数之外 对 属性 进行赋值。

class Person6 {

  readonly age: number = 18

  constructor(age: number) {
    this.age = age
  }

  setAge() {
    this.age = 33    // Cannot assign to 'age' because it is a read-only property.
  }

  // 错误演示
  readonly setSex() {       // 'readonly' modifier can only appear on a property declaration or index signature.
    console.log('男');

  }

}

const p1 = new Person6(20)

console.log(p1.age)   // 20

p1.age = 44    // Cannot assign to 'age' because it is a read-only property.


// 使用 readonly 关键字 修饰 该属性 是 只读的，注意 只能修饰 属性，不能修饰 方法。

// 注意 ： 属性 age 后面 的 类型注解（比如：此处的number）如果不加，则 age 的 类型 为 18 （数字字面量类型）

// 只要 是 readonly 来修饰 的 属性， 必须手动提供 明确 的 类型


// readonly 也可以使用在  接口 或 {} 表示的对象类型 中

// interface Iperson {
//   readonly name: string
// }

// let obj: Iperson = {
//   name: 'jack'
// }

// obj.name = 'walking'

let obj: { readonly name: string } = {
  name: 'jack'
}

obj.name = 'walking'