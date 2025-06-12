
const arr = {name:"riya",salary:20000}
function Employee(name,salary){
    this.name = name;
    this.salary = salary;
}
Object.prototype.details  = function(){
    return `i am ${this.name} and my salary is ${this.salary}`
}
const emp1 = new Employee("ritu",230000);
let e = emp1.details();
console.log(e)
console.log(arr.details());