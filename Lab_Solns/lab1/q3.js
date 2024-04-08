/**
 * concat('hi', [1,2,3], ['Hello','world']) -> 
 * return result: ['h', 'i', 1,2,3, 'Hello','world']
 */

function concat(str, arr1, arr2){
    return [...str, ...arr1, ...arr2];
}

console.log(concat('hi', [1,2,3], ['Hello','world']));