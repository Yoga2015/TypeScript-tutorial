// 创建 泛型类

// class GenericNumber<NumType> {

//   defaultValue: NumType

//   add: (x: NumType, y: NumType) => NumType

//   constructor(value: NumType) {
//     this.defaultValue = value
//   }

// }

// 使用 泛型类

// const myNum = new GenericNumber(100)   因 constructor 此处 可以省略 <类型> 不写

// myNum.defaultValue = 22


// 创建 泛型类

class GenericNumber<NumType> {

  defaultValue: NumType

  add: (x: NumType, y: NumType) => NumType
}

// 使用 泛型类

const myNum = new GenericNumber<number>()

myNum.defaultValue = 22
