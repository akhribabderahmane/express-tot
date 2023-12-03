console.log("first task");
setTimeout(()=>{
    console.log("second task");
},0);
console.log("next task");
// we are excuting everything than after that we excute the callback functions

console.log("first task");
console.time();
for (let i = 0; i < 10000000; i++) {
    const h3=1+2;
    h3.textContent="Hey evryone is waiting on me !!";  
}
console.timeEnd();
console.log("next task");