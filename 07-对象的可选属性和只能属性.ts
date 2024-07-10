// 可选属性的含义 是 该属性 可以不存在。

interface Person {
  name: string;
  age?: number;
}

let tom1: Person = {
  name: 'Tom'
};

let tom2: Person = {
  name: 'Tom',
  age: 25
};


// 创建 myAxios 函数，然后它有一个 config参数，而且是一个对象类型的

function myAxios(config: { url: string; method?: string }) {

  console.log(config);

}



myAxios({

  url: 'www.baidu.com'

})



// 只读属性:

// 有时，我们希望对象中 的 一些字段，只能在 创建的时候 被赋值，那么可以用 readonly 定义 只读属性：
interface Person2 {
  readonly id: number;
  name: string;
  age?: number;
}

let tom3: Person2 = {
  id: 9527,
  name: 'Walking',
  age: 18
}

// tom3.id = 20    Cannot assign to 'id' because it is a read-only property.