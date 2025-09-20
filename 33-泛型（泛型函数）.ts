// 创建 泛型函数

function identity<Type>(input: Type): Type {
  return input
}

// 泛型函数 的 调用方式

// 以 number 类型 调用 泛型函数
const numberOutput = identity<number>(10)    // 显式指定类型

// 以 string 类型 调用 泛型函数
const strOutput = identity<string>('kk')    // 显式指定类型

const stringOutput = identity("Hello")   // 自动类型推断

// const ret = identity<boolean>(false)



// 简化 调用 泛型函数  

const num1 = identity(10)     // 自动类型推断
const str1 = identity('cc')   // 自动类型推断

const str2 = identity<number>(26)

// 注意： 当编 译器 无法推断类型 或 推断的类型不准确 时，就需要 显式地传入 类型参数。


// 1. 泛型函数 - 处理数组
function getFirstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}

// 2. 泛型函数 - 多参数类型
function mergeObjects<T, U>(obj1: T, obj2: U): T & U {
  return {...obj1, ...obj2};
}

// 3. 泛型约束 - 确保参数有特定属性
interface HasLength {
  length: number;
}

function logLength<T extends HasLength>(item: T): void {
  console.log(`长度: ${item.length}`);
}

// 使用示例
const firstNum = getFirstElement([1, 2, 3]); // 推断为 number
const merged = mergeObjects({name: "Alice"}, {age: 25}); // 合并两个对象
logLength("TypeScript"); // 字符串有length属性
logLength([1, 2, 3]);    // 数组有length属性
// logLength(42);        // 错误 - 数字没有length属性



// function createArray(length: number, value: any): Array<any> {
//   let result: any = [];
//   for (let i = 0; i < length; i++) {
//     result[i] = value
//   };
//   return result;
// }

// const c1 = createArray(6, 'y');   // [ 'y', 'y', 'y', 'y', 'y', 'y' ]

// console.log(c1);