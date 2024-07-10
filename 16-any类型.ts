// 如果是一个普通类型，在赋值过程中改变类型是不被允许的

let myLikeNumber: string = 'sit';

// myLikeNumber = 6;     // Type 'number' is not assignable to type 'string'.



// 但 如果 是 any类型 ，则 允许被赋值 为 任意类型

let myFavoriteNumber: any = 'sit';      // 使用 any 关键字 来声明 一个变量 为 任意值类型

myFavoriteNumber = 6;



// 当你将 一个变量 声明为 any类型 时，你可以在 该变量上 执行任何操作，包括访问其属性、调用其方法，
// 而TypeScript编译器不会对这些操作进行类型检查。



let anyThing: any = 'hello';

// 允许访问任何属性：
console.log(anyThing.myName);
console.log(anyThing.myName.firstName);

// 也允许调用任何方法：
anyThing.setName('Jerry');
anyThing.setName('Jerry').sayHello();
anyThing.myName.setFirstName('Cat');


// 可以认为，声明一个变量为任意值之后，对它的任何操作，返回的内容的类型都是任意值。


// 变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型：

let something;
something = 'seven';
something = 7;

something.setName('Tom');

// 等价于

let something: any;
something = 'seven';
something = 7;

something.setName('Tom');

