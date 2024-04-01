// const person = {
//     firstname: 'John',
//     lastname: 'Smith',
//     age: 20,
//     'my gender': 'F',
//     '0': 'Hi',
//     setFirstname(){ //method

//     },
//     setLastname: function() {
        
//     },
//     getLastname: () => {

//     }
// }

// function setFirstname(){ //function

// }

// console.log(person.firstname);
// console.log(person['my gender']);
// console.log(person['0']);

// const coursename = 'SD555';

// person[coursename] = 90;
// console.log(person);

//arrow function is not suitable for methods
const obj = {
    x: 1,
    y: 2,
    add(){
        return this.x + this.y;
    },
    substract: function() {
        return this.x - this.y;
    },
    multi: () => { //doesn't have this keyword
        console.log(this);
        console.log(this.x, this.y);
        return this.x * this.y;
    }
}

console.log(obj.add());
console.log(obj.substract());
console.log(obj.multi());





