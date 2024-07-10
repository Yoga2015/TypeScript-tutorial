// 1、定义枚举 , 使用 enum 关键字  enum DirectionT { }
enum DirectionT {
  Up,
  Down,
  Left,
  Right
}

// 2、使用枚举 : 形参 direction 的类型 为 枚举 DirectionT，那 实参的值 就应该是 枚举 DirectionT成员的任意一个。
function changeDirection(direction: DirectionT) {

  console.log(direction);

}

changeDirection(DirectionT.Up)

// 问题：我们把枚举成员作为了函数的实参，那 DirectionT.Up 的值是什么？


changeDirection(DirectionT.Left)

// 注意：枚举成员 是 有值的，默认为：从 0 开始自增的数值。

// 我们把，枚举成员的值 为 数字的枚举，称为：数字枚举。

// 当然，也可以给 枚举中的成员 初始化值

