// 字符串字面量类型 用来约束 取值 只能是 某几个字符串中的 一个。
type EventNames = 'click' | 'scroll' | 'mousemove';

function handleEvent(ele: Element, event: EventNames) {
  // do something
}

handleEvent(document.getElementById('hello'), 'scroll');  // 报错
handleEvent(document.getElementById('world'), 'dblclick'); // 报错

// Argument of type '"dblclick"' is not assignable to parameter of type 'EventNames'.
// Type 'null' is not assignable to type 'Element'