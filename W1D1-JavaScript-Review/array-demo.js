let countries = ['US', 'Canada', 'China', 'Mexico'];

// countries = countries.filter((country, index, arr) => {
//     // console.log(country, index,  arr);
//     return country.length > 5
// }).map((country, index, arr) => {
//     console.log(country, index, arr);
//     return ({countryid: index, name: country})
// })

countries = countries.filter(country => country.length > 5)
    .map((country, i) => ({ countryid: i, name: country }))


// console.log(countries);


const grades = [88, 98, 100, 90];

const newGrades = grades.filter(grade => grade > 90);
const sum = newGrades.reduce((accum, current, index, array) => {
    console.log(accum, current, index, array);
    return current + accum;
}, 0);
console.log(sum / newGrades.length);
console.log('----------------');
// [98, 100]
const average = grades.filter(grade => grade > 90)
    .reduce((accum, current, index, array) => {
        console.log(accum, current, index, array);
        return accum + current / array.length;
    }, 0);
    console.log('----------------');
/**
 * 1st loop: accum:98, current: 100, index: 0, accum=98+100/2 = 98+ 50 = 148
 */

/**
 * 1st loop: accum: 0, current: 99, index: 0 , accum = 0 +99
 * 2nd loop: accum: 99, current: 100, index: 1, accum = 100+ 99
 * 3rd loop: accum: 199, current: 95, index: 2, accum = 199 + 95
 * 
 */

console.log(average);

//compute average: 2 ways

/**
 *  1,2,3
 *  (1+2+3)/3
 * 1/3 + 2/3 + 3/3
 * 
 */