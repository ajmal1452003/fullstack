async function fn1(){
    setTimeout(()=>{
        console.log("hello")
},1000)
    console.log("Messad=ge1");
}
arrowfn=async()=>{
    setTimeout(()=>{
        console.log("Hallo")
},2000)
    console.log("Messad=ge2");
}
fn1()
arrowfn()