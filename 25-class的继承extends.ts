// 类的继承：通过 extends 关键字 实现 继承。  （继承父类）

class Animal {
  public move() {
    console.log('跑几步');
  }
}

// 通过 extends 实现继承， Dog作为子类 继承 父类Animal
class Dog extends Animal {
  name = '旺财'
  bark() {
    console.log(this.name);
  }
}

// 先实例化 子类
const dog = new Dog()

dog.move()

dog.bark()

// 子类 Dog 继承 父类 Animal , 则 Dog 的 实例对象 dog 就同时 具有了 父类 Animal 和 子类 Dog 的 所有属性和方法 