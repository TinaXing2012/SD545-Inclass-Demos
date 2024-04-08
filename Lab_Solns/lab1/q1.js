/**
 * 1.Create a function using function declaration named sum with one parameter of Array type, the
returned result is the sum of all elements which are greater than 20.
 */
// functional programming: declarative
// function sum(arr) {
//     const total = arr.filter(elem => elem > 20)
//         .reduce((accu, current) => accu + current, 0);
//     return total;
// }

function sum(arr) {
    return arr.filter(elem => elem > 20) //1 loop
        .reduce((accu, current) => accu + current, 0); //2 loop
}