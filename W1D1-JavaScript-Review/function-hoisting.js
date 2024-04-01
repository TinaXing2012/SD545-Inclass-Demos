"use strict";
// foo();

// function foo(){
//     console.log('foo...');
// }

// (1 + 3) * 8

// () - grouping, function call

console.log(bar); //undefined
bar();

bar = function(){  //implied global
    console.log('bar...');
    return 'hello';
}

var bar;



// var f = undefined;
// console.log(typeof f);
// console.log(f())
