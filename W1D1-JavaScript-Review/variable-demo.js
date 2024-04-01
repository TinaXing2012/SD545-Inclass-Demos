if(true){ //block-scope
    var coursename = 'MSD';
    // console.log(coursename);
}
console.log(coursename);

// const username = 'Jack';
// username = 'John';

const person = {
    name: 'Jack'
}
person.name = 'John';
console.log(person);

const arr = [1,2,3];
arr[2]= 9;
console.log(arr);

console.log(typeof arr);
