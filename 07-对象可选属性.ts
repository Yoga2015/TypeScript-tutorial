// 对象可选属性
// 创建 myAxios 函数，然后它有一个 config参数，而且是一个对象类型的

function myAxios(config: { url: string; method?: string }) {

  console.log(config);

}

myAxios({
  url: ''
})