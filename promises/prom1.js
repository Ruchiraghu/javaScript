const prom = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task is completed');
        resolve();
    },1000);
})
prom.then(function(){
    console.log("promise complete");
    
})