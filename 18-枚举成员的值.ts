// 1、定义枚举 , 使用 enum 关键字  定义  DirectionT  枚举
// enum DirectionT {
//   Up,
//   Down,
//   Left,
//   Right
// }

// 枚举成员 是 有值的，默认为：从 0 开始自增的数值。
// 如果只给 枚举的第一个成员 设置 初始值 ，那枚举的第二个成员的值 就是 枚举的第一个成员的值的自增
// enum DirectionT {
//   Up = 10,
//   Down,
//   Left,
//   Right
// }

// 也可以是给 枚举 的 所有成员 都设置  初始值，设置的没有规律也行。 
enum DirectionT {
  Up = 3,
  Down = 6,
  Left = 9,
  Right = 12
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



// 字符串枚举

// 枚举成员的值 不仅可以是  数字 ，也可以是 字符串。

enum Light {
  red = 'red',
  // green,     // Enum member must have initializer. 
  // yellow,
  green = 'green',
  yellow = 'yellow'

}

// 定义 字符串枚举 时，需要同时给 枚举的所有成员 都设置 初始值。

function changeLight(light: Light) {
  console.log(light);
}

changeLight(Light.green)

// 因为 字符串枚举没有自增行为，因此，字符串枚举的每个成员必须有初始值。