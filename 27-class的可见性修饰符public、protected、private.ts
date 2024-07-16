class Animal2 {

  // 这个方法 是 公有的 ，可以省略 public 
  move() {
    console.log('跑几步');
    this._run_()
  }

  // 这个方法 是 受保护的
  protected run() {
    console.log('跑几步');
    this._run_()
  }

  // 这个方法 是 私有的
  private _run_() {
    console.log('Animal2内部辅助函数');
  }

}

const animal2 = new Animal2()

// animal2.run()     // Property 'run' is protected and only accessible within class 'Animal2' and its subclasses.

animal2._run_()   // Property '_run_' is private and only accessible within class 'Animal2'.

class Dog2 extends Animal2 {
  bark() {
    console.log('汪汪');
    this.move()
  }
}

const dog2 = new Dog2()

dog2.bark()

// dog2.run()    // Property 'run' is protected and only accessible within class 'Animal2' and its subclasses.

dog2._run_    // Property '_run_' is private and only accessible within class 'Animal2'.


// 在 类的 属性 或 方法 前面添加 private 关键字， 来修饰 该 属性 或 方法 是 私有的。

// 私有的 属性 或 方法 只在 当前类中 可见，在 子类 和 实例对象 也都是 不可见的！
