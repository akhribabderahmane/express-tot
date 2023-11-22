const a=255;
const num=128;

const archiOperation=()=>{
    const result = (a % 128)-(a % 2);
    console.log('the operation if we take a=2^8-1 is :',result);
}


archiOperation();