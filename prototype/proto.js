

// function  person(name) {
//         this.name = name;
//     }
    
// person.prototype.sayHello = function(){
//     return `HI ${this.name}`;
//     };


// const p1 = new person("riya");
// console.log(p1.sayHello());
// const obj ={};
// console.log(obj.toString());

const parent = {
  greet() {
    return "Hello!";
  },
};

// const child = Object.create(parent);
const child = new parent();
console.log(child.greet()); // Hello!
