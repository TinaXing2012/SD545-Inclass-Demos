console.log('start');

async function foo(){
    console.log('inside foo');
    return 'MSD';
}

async function bar() {
    console.log('inside bar - start');
    const result = await foo();
    console.log(result);
    console.log('inside bar - end');
}

bar();

console.log('end');


