const dogs = [{
    'name': 'Zulie',
    age: 3
     

},{
    name: 'coco',
    age: 2
}
];
//styling
console.log('%c Stop!', 'color:red;font-size:50px');

//regular
console.log('hello prem');


function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '20px';
    p.style.fontFamily = 'apple';

    
}

//Interpolated
console.log('prem is a %s string', '🐭');
console.log(`prem always talk nonosense${'💩'}`);

//warning
console.log('warning!');

//Error
console.log('error!');

//table
console.table(dogs);

//testing
const p = document.querySelector('p');
console.assert(p.classList.contains('ok'), 'that is wrong');

//viewing DOM Elements
console.log(p);
console.dir(p);

//counting
console.count('hii');
console.count('bbbbbbbbbbbbbbbb');

//Grouping Together
dogs.forEach(dog => {
    console.group(`${dog.name}`);
    console.log(`this is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age}years old`);
    console.log(`${dog.name} is${dog.age * 7}years old`);
    console.groupEnd(`${dog.name}`);
})

//Timing
console.time('plz wait!');
fetch('https://api.github.com/users/anisssha')
    .then(data => data.json())
    .then(data => {
        console.timeEnd('plz wait!');
})
