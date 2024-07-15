// class 的 构造函数 的 作用 是 一般用来去为 class 的 实例属性 设置 初始值 的

// 类 的 构造函数 的 基本使用

class TPerson {
  age: number;
  gender: string

  constructor(age: number, gender: string) {
    this.age = age
    this.gender = gender
  }

}


// 构造函数 的 参数，在我们 实例化 TPerson 类 时 就用到了    
const tp = new TPerson(18, '男')

console.log(tp.age, tp.gender);

// 注意：不要手动 给 构造函数 指定 返回值类型 
