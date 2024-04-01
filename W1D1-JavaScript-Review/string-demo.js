const coursename = 'MSD';

const str1 = 'This is a'+coursename+' str1';
const str2 = "This is str 2";
const str3 = `this is ${coursename} Str 3 `; 
const str4 = `${1+2}`;
console.log(str4);

function foo(){
    return 'Hello';
}

const str5 = `${foo()} World`;
console.log(str5);

// const str6 = `${const i = 10}`;