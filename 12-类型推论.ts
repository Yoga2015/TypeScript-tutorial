// 类型推论 又叫 类型推断

// 声明 变量 并立即赋 初始化值，此时，可以省略 类型注解


let weight = 150

// weight = ''



// 注意：如果声明变量，但没有立即赋 初始化值，此时，还必须手动添加类型注解

let aa: number

aa = 19
// aa = ''


function add(num1: number, num2: number) {
  return num1 + num2
}


console.log('object');
