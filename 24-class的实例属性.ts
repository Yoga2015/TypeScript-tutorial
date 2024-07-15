class Point {
  x = 10
  y = 8

  scale(n: number): void {
    this.x *= n               // 等同于 this.x = this.x * n
    this.y *= n
  }
}

const p = new Point()    // 由于 Point类 中 没有设置 构造函数，所以可以直接 默认省略掉 参数

p.scale(10)

console.log(p.x, p.y);   // 100   80


//  class 中的 方法 的 类型注解 （参数 和 返回值） 与  对象中的方法 用法相同。