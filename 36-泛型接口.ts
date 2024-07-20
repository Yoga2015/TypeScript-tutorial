// 定义 泛型接口

interface IdFunc<Type> {
  id: (value: Type) => Type
  ids: () => Type[]
}

// 使用 泛型接口

let obj: IdFunc<number> = {
  id(value) {
    return value
  },
  ids() {
    return [1, 3, 5]
  }
}


// 解释:

// 1、在 接口名称 的 后面 添加<类型变量>，那么，这个接口 就变成了 泛型接口。

// 2、接口 的 类型变量，对接口中 所有其他成员可见，也就是 接口中 所有成员 都可以使用 类型变量

// 3、使用 泛型接口 时，需要显式指定 具体的类型(比如，此处的 ldFunc<nunber>)。

// 4、此处，id方法的参数 和 返回值类型 都是 number; ids方法的返回值类型 是 number。

const strs = ['a', 'b', 'c', 10]

strs.forEach(item => { })

const nums = [1, 5, 9, false]

nums.forEach(item => { })