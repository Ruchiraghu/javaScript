const myFun = function(){
    name = "yuvi",
     birth = "2-10-2023"
    console.log(this.name);

}
const ch = ()=>{
    let name = "pooja",
    class_ = 12
    console.log(this);
}

myFun();
ch();