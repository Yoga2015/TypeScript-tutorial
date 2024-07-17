// 类的继承： 通过 implements 关键字 让 class 实现 接口。 （实现接口）

interface Singable {
  // name: string
  sing(): void
  // call():void
}

class Person implements Singable {
  sing() {
    console.log('皇后大道东转皇后大道中');
  }
}

// Person类 实现接口 Singable 意味着，Person类中 必须提供 Singable接口中 指定的 所有属性 和 方法，否则报错：
//  Class 'Person' incorrectly implements interface 'Singable'.
// Property 'name' is missing in type 'Person' but required in type 'Singable'.


// 实现一个接口，意味着，必须要让 这个类 去实现 这个接口中 提供的 所有属性 和 方法，

// 因此，可以把 实现一个接口，看做是 为 类 添加了 一个约束，约束的内容 就是 接口中 定义的 所有属性 和 方法