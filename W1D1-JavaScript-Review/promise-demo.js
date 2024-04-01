// console.log('start');
// new Promise(function (resolve, reject) {
//     console.log('inside promise - start');

//     resolve('Success');

//     console.log('inside promise - end');
// }).then(console.log)
// .catch(err => console.log('Whoops!', err));
// console.log('end');


console.log('start');

const promise = new Promise((resolve, reject) => {
    console.log('inside promise- start');
    resolve('success');
    console.log('inside promise -end');
});

console.log(promise);

console.log('end');