
const fullname = 'Xeyyam Karimov Ramin';
const birthday = '29.01.2000';

const [name, surname] = fullname.split(' ');
// const year = birthday.split('.')[2];
const year = 2000;

const userObj = {
    name: 'xas',
    age: 12,
}

const user = `${name} ${surname} ${year}`;


const userArr = ['xeyyam', 'azer', {
    number: 222,
}];

// console.log(typeof year.toString())

// console.log(userObj.toString())
// console.log(userArr.toString())

// console.log(null.toString())
// console.log(typeof NaN.toString())
// console.log(typeof true.toString())


// console.log(userObj.age.toString().split(''));



// const greeting = '   Hello w o r l d!   ';

// console.log(greeting.length);

// console.log(greeting.trimStart().length);


const str = 'Mozilla';


const groupName = 'Azerbaij';
const username = 'Xeyyam ';


console.log(username.substring(0, username.length - groupName.length));



