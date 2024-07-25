type IPerson2 = {
  name: string
  age: number
}


interface Point9D extends IPerson2 {
  sayHa(): void
}

let OBJ: Point9D = {
  name: 'walking',
  age: 18,
  sayHa() {
    console.log('AAA');
  },
}

console.log(OBJ.age);
console.log(OBJ.name);
console.log(OBJ.sayHa());


