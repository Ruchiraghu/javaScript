class person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    greet(){
        return `i am ${this.name} and age is ${this.age}`;
    }

    }
    const obj = new person("ruchi",23);
    console.log(obj.greet());
    
