const Con = function (username,login,logOut){
    this.username = username;
    this.login = login;
    this.logOut = logOut
    // return this
}
const userOne = new Con("ruchi",true,false)
console.log(userOne);
const userTwo = new Con("priya",true,false);
console.log(userTwo)