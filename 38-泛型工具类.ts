// 1、Partial<Type>  用来 创建 （构造）一个类型， 将 Type 的 所有属性 设置为 可选

// 下面 将 Props 接口 中 的 属性 从 必写的 变成 可选的

interface Props {
  id: string
  children: number[]
}

// 将 Props 接口 中 所有的属性 赋值给 刚创建 的 PartialProps，同时 把 所有的属性 从 必写的 变成 可选的
type PartialProps = Partial<Props>

let P1: Props = {
  id: '',
  children: [1, 2, 3]
}

let P2: PartialProps = {
  children: [1, 2, 3]
}

// 解释： 创建 出来 的 新类型PartialProps 结构 和 Props接口 相同，但 所以属性 都变为 可选的。



// 2、 Readonly<Type>  用来 创建 （构造）一个类型， 将 Type 的 所有属性 设置为 只读

// 下面 将 Props2 接口 中 的 属性  变为 只读的， 不可修改的

interface Props2 {
  id: string
  children: number[]
  sayHello(): void
}

// 创建 新类型 ReadonlyProps
type ReadonlyProps = Readonly<Props2>

let P3: ReadonlyProps = {
  id: '2',
  children: [4, 5, 6],
  sayHello() {
    console.log(999);
  },
}

// P3.id = '3'       // Cannot assign to 'children' because it is a read-only property.

// P3.children = [4, 5, 6]   // Cannot assign to 'children' because it is a read-only property.


// 解释：
// 创建 出来 的 新类型ReadonlyProps 结构 和 Props2接口 相同，但 所以属性 都变为 只读的。
// 当我们 重新给 id 属性赋值时，就会报错：无法分配到 'id',因为它是只读属性


// 3、 Pick<Type，Keys> 从 Type 中 选择一组属性 来构造 新类型。
interface Props3 {
  id: string,
  title: string,
  children: number[],
  sayHello(): void
}

// 从Props3 接口中 选择一组属性 出来，并赋值给 刚创建 的 新类型 PickProps
type PickProps = Pick<Props3, 'id' | 'title' | 'sayHello'>

let P4: PickProps = {
  id: '4',
  title: 'good job! super star',
  sayHello() {
    console.log(999);
  },
}

// 解释:
// 1、Pick 工具类型有两个类型变量:
//  （1）表示选择谁的属性   （2）表示选择哪几个属性。
// 2、其中第二个类型变量，如果只选择一个则 只传入 该属性名 即可。
// 3、第二个类型变量 传入的属性，只能是  第一个类型变量中 存在的属性
// 4、此处 构造出来的新类型 PickProps，只有 id 和 title 两个属性类型



// 4、Record < Keys, Type > 用来 构造 一个 对象类型，属性键为 Keys，属性类型为 Type

// 没使用  Record<Keys, Type> 工具类
type RecordObj = {
  a: string[],
  b: string[],
  c: string[],
}

// 上下对比

// 创建 新对象类型 RecordObj2 , 同时 为其 添加 属性 ，并 给 属性 设置 类型
type RecordObj2 = Record<'a' | 'b' | 'c', string[]>

let obj: RecordObj2 = {
  a: ['1'],
  b: ['2'],
  c: ['3'],
}

type RecordObj3 = Record<'a' | 18 | 'c', number[] | string[] | boolean[]>

let obj2: RecordObj3 = {
  a: [22],
  18: ['a'],
  c: [24]
}


// 解释：

// 1、Record 工具类型 有 两个类型变量: (1) 表示 对象（新构建的） 应有哪些属性  （2）表示 对象属性 的 类型

// 2、构建 的 新对象类型  RecordObj2 表示：这个对象有三个属性 分别为a / b / c, 属性值 的 类型 都是 number[]