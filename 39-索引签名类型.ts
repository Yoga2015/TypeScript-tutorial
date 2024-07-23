// 索引签名类型

interface AnyObject {

  [key: string]: number

}

let obj3: AnyObject = {
  a: 1,
  abc: 12,
  abcd: 15,
  'age': 18,
  33: 23,
  false: 99,
  null: 101
}

const arrObj = [1, 66, 23]

arrObj.forEach


// 模拟去实现 一个数组

interface MyArray<Type> {

  [index: number]: Type

}

let arr1: MyArray<number> = [1, 7, 9]

arr1[2]   // 9


