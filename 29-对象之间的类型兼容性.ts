// 演示 类型兼容性:

let arr = ['a', 'b', 'c'];

// arr.forEach(item => { })
// arr.forEach((item, index) => { })
// arr.forEach((item, index, array) => { })

// 两个类的兼容性：
class Point {
  x: number
  y: number
}

class Point2D {
  x: number
  y: number
}

const p: Point = new Point2D()

// Point2D的实例对象 之所以能赋值 给 Point类型 的 变量 ，是因为两个类发生了类型兼容性



// 对象之间的类型兼容性

// 注意： 在结构化类型系统中，如果两个对象具有相同的形状，则认为它们属于同一类型，这种说法不准确。

// 更准确的说法：对于对象类型来说，y 的 成员 至少 与 x 相同，则 x 兼容 y （成员多的 可以赋值给 成员少的）


class Point3D {
  w: number
  x: number
  y: number
  z: number
}

const p1: Point = new Point3D()

// Point3D 的 成员 至少与 Point 相同，则 Point 兼容 Point3D

// 所以 ，成员多的Point3D 可以赋值给 成员少的Point


// 错误演示 ：Type 'Point' is missing the following properties from type 'Point3D': w, z
const p2: Point3D = new Point()