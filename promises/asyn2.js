async function wait() {
    return new Promise((resolve)=>
        setTimeout(()=>resolve("done"),2000));
}

async function  runner() {
    console.log("running");
    const run = await wait();
    console.log(run)
    console.log("stopp i am done")
}
runner();