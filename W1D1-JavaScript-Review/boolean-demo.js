// const condition = undefined || null || false || 0 || 0.0 || '' || NaN;
const condition = 2 && "abc" && [] && {};
if(condition){
    console.log('truthy...');
} else {
    console.log('falsy!!!');
}
 
console.log('IE6' > 0); //NaN > 0
console.log('IE6' == 0);
console.log('IE6' < 0);
