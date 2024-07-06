// 如果 一个函数 ，它没有返回值，那么 这个函数 的 返回值类型 为 void 类型
// void 单词的意思是 空 的意思，就是 没有返回值

function greet(name: string): void {
  console.log('hey', name);
}

// 什么使用 void 类型 ？

// 当 一个函数 没有返回值 的 时候，就应该 使用 void 作为 函数返回值的类型
// void 类型 是 Typescript 里 新增的类型