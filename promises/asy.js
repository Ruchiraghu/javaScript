
async function delay(){
    return new Promise((resolve)=>
        setTimeout(()=>resolve("Done"),2000));
}

async function run() {
    console.log("start");
    const result = await delay();
    console.log(result)
    console.log("end");
}
run();