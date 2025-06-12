function add(a){
    return function(b){
        return a+b;
    }
}
const addition = add(12);
console.log(addition(2));

function greet(name){
    return function(msg){
        return msg + name;
    }
}

const morning = greet("preeti");
console.log(morning("Good Morning "));