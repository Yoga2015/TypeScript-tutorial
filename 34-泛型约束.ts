// function People<Type>(value: Type): Type {

//   console.log(value.length);

// }
   
// 添加 泛型约束 收缩类型，主要有以下两种方式： 1、指定更加具体的类型 2、添加约束

// 1、指定更加具体的类型      (这里的 需求是： 接收什么数据 就返回 什么数据本身 )
function People<Type>(value: Type[]): Type[] {

  console.log(value.length);    // 2

  return value

}

const p9 = People<number>([200, 300])


// 比如： 将 类型 修改为 Type[]（Type类型的数组），因为只要是 数组 就 一定存在 length 属性，因此就可以访问了。


// 2、添加约束
interface ILength {
  length: number
}

function Id<Type extends ILength>(value: Type): Type {
  value.length
  return value
}

Id(['a', 'k'])
Id('abc')
Id({ name: 'walking', length: 23 })

//  extends 在此的含义不是 继承， 而是变成了 类型变量Type 必须要满足 extends 后面 这个ILength类型的一个约束: 必须具有 length 属性 .

// 错误演示
// Id(123)    // Argument of type 'number' is not assignable to parameter of type 'ILength'.