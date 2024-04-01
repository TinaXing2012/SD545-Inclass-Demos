// ...: Rest parameter, spread operator

// rest parameter
function max(a, ...rest){
    console.log(a, rest);
}

max(1, 2);
max(1, 2, 3);

const str = 'Hii';

const arr = [1,2,3];

function concat(a, b){
    return [...str, ...arr];
}

console.log(concat(str, arr));
//['H', 'i', 'i', 1,2,3]


const person = {
    id: 123,
    username: 'John',
    gender: 'F',
    age: 20 //21
}

const newPerson = {...person, age: 21}; 
// {...person} => create a new object with properites and values exactly same as person
// {id: 123, username: 'John', gender: 'F',  age: 21}
console.log(newPerson);

