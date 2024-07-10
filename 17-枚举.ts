// 枚举 的 功能 类似于 字面量类型 + 联合类型组合 的功能，也可以表示一组明确的可选值。

// 枚举  可以看作是  字面量类型 + 联合类型组合 的 功能  的 替代品。

// 枚举：定义一组命名常量。 它描述一个值，该值可以是 这些命名常量中的一个。


// 1、定义 枚举 , 使用 enum 关键字  enum Direction { }
enum Direction {
  Up,
  Down,
  Left,
  Right
}

// 2、使用 枚举 : 形参 direction 的类型 为 枚举 Direction，那 实参的值 就应该是 枚举 Direction成员的任意一个。
function changeDirection1(direction: Direction) {

  console.log(direction);

}

changeDirection1(Direction.Up)    // 类似于 JS 中 对象，直接通过 点 （.）语法 访问 枚举的成员。


// 1、使用 enum 关键字 定义枚举

// 2、约定 枚举 名称、枚举中的值 以大写字母开头。

// 3、枚举中的多个值之间 通过 ,（逗号） 分隔。

// 4、定义好 枚举 后，直接使用 枚举名称 作为 类型注解。