// 函数的类型 指的是 ： 函数 参数 和 返回值 的 类型。

// 给函数 加 类型 其实 是给 ：
//   给 函数 的 参数 加 类型
//   给 函数 的 返回值 加 类型

// 1、单独指定参数  、返回值 的 类型   
// ES5 的 函数的声明 的 普通方式
function add(num1: number, num2: number): number {
  // return ccc + bbb  报错：指定 返回值 的类型 为 number 后，只能返回 number类型的 返回值
  return num1 + num2
}

// add()  这里调用 并没有传入指定类型的实参 就报错 Expected 2 arguments, but got 0.ts(2554)
// add('bb',2)  Argument of type 'string' is not assignable to parameter of type 'number'.
console.log(add(1, 2));


// 1、单独指定参数  、返回值 的 类型  
// ES6 的 函数的声明 方式 ：函数表达式 
const add2 = (num1: number, num2: number): number => {
  return num1 + num2
}

console.log(add2(4, 4));


// 2、同时 指定 参数、返回值 类型：    （功能作用同上） 下面这种形式 只适用于 函数表达式

const add3: (num1: number, num2: number) => number = (num1, num2) => {
  return num1 + num2
}

console.log(add3(4, 4));
