class Person {
  age: number;
  gender = '男'
  // gender: string = '男'
}

const p = new Person()

p.age

p.gender


/**
 * 上面进行 对象属性 实例化：
 * 1、声明成员 age, 类型为number（没有初始值）
 * 2、声明成员 gender, 并设置 初始值，此时，可省略 类型注解 （TS 类型推论 为 string类型）
 */