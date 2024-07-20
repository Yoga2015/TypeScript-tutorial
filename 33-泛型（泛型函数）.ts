// 使用 泛型 来 创建一个函数

function id<Type>(value: Type): Type {
  return value
}

// 调用 泛型函数

// 1、以 number 类型 调用 泛型函数
const num = id<number>(10)

// 2、以 string 类型 调用 泛型函数
const str = id<string>('kk')

// const ret = id<boolean>(false)



// 简化 调用 泛型函数  

const num1 = id(10)
const str1 = id('cc')

const str2 = id<number>(26)

// 注意： 当编 译器 无法推断类型 或 推断的类型不准确 时，就需要 显式地传入 类型参数。



// function createArray(length: number, value: any): Array<any> {
//   let result: any = [];
//   for (let i = 0; i < length; i++) {
//     result[i] = value
//   };
//   return result;
// }

// const c1 = createArray(6, 'y');   // [ 'y', 'y', 'y', 'y', 'y', 'y' ]

// console.log(c1);