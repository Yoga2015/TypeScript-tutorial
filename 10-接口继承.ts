// 当 两个接口之间 有相同的 属性 和 方法，可以 将 公共的 属性 或 方法 抽离出来，通过 继承 来实现 复用。

// 比如： 下面这两个接口都有  x 、y 两个属性，重复写两次，可以，但很繁琐。

interface Point2D { x: number, y: number }

// interface Point3D { x: number, y: number, z: number }

// 改造上面行, 使用 继承 实现 复用，同时 Point3D 在增加了一个 z 属性 并指定了 number类型 

interface Point3D extends Point2D {
  z: number
}

let p3: Point3D = {
  x: 5,
  y: 10,
  z: 6
}

console.log(p3);
