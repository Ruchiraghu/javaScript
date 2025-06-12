let hero = ["salman","sahid"];
let movies = {
    salman:"veer",
    sahid : "raaz",
    getheroMovies: function(){
        console.log(`salman says my movie is ${this.salman}`);
    }
}
// Object.prototype.sayHero = function(){
//     // console.log( `name of movie`);
//     // if(typeof this.getheroMovies==="function"){
//     //     this.getheroMovies();
//     // }
//     return this.getheroMovies?this.getheroMovies():"No hero method";
// }

Object.prototype.sayHero = function () {
    if (typeof this.getheroMovies === "function") {
        this.getheroMovies(); // call it
    } else {
        console.log("No hero method");
    }
    return " ";
};

// console.log(hero.sayHero())
console.log(movies.sayHero())