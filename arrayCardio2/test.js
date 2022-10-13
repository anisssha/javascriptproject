//ES6 features
//let and const
let a = 5;
const name = 'anisha';

//arrow function
const multiOfTwoNumber = (a, b) => a * b;
console.log(multiOfTwoNumber(12, 5));

//template literals
const person = {
    firstName:'anisha',
    lastName: 'stha',
    
};
const { firstName, lastName } = person;
console.log(`my name is ${firstName} ${lastName}`);


//multiline strings
console.log(`my 
name 
is 
anisha
stha`)

    
function getMobile(manufacutring, model, year) {
    return {
        manufacutring,
        model,
        year
    }
}
getMobile(apple, iphonex, 2020);

    