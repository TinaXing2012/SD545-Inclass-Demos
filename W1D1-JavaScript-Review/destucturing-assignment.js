const arr = [33, 'John', 6, 9, 99];

// const a = arr[0];
// const b = arr[1];

const [a, , b] = arr;
console.log(a, b);

const person = {
    firstname: 'John',
    lastname: 'Smith',
    age: 20
}

console.log('-------------');
// const fname = person.firstname;
// const lname = person.lastname;
// console.log(fname, lname);

const {firstname: fname, age: myage} = person;


console.log(fname, myage);
