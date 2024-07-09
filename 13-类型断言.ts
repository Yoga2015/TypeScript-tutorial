// const aLink = document.getElementById('link')
// aLink.herf


// 使用 类型断言
const aLink1 = document.getElementById('link') as HTMLAnchorElement
aLink1.href

// 使用 as 关键字 实现 类型断言。
// 关键字 as 后面的类型 是 一个更加具体的类型 ( HTMLAnchorElement 是 HTMLElement 的 子类型 )
// 通过 类型断言 ，aLink 的 类型 变得 更加具体，这样就可以访问 a 标签 特有的属性 和 方法了。

// 类型断言 解决了 TS 中 获取类型 不准确的问题。


// 类型断言 另一种语法： (一般不用)
const aLink2 = <HTMLAnchorElement>document.getElementById('link')
aLink2.href