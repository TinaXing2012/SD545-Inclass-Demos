/**
 * Create a function using function expression named getNewArray with one parameter of String
Array, return a new array which contains all string, length is greater than and equal to 5, and
contains letter ‘a’.
 */

const getNewArray = (arr) => {

    return arr
            .filter(str => str.length >= 5)
            .filter(str => str.includes('a'));
}