function factory(){
    return (a, b) => a + b; //functions are objects
}

const sum1 = factory();
const sum2 = factory();

console.log(sum1(1,2) === sum2(1,2));
console.log(sum1 === sum2);