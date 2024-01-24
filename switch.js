// const num = 12;

// switch (true) {
//     case num > 15:
//         console.log('num is bigger than 15');
//         break;

//     case num < 15:
//         console.log('num is smaller than 15');
//         break;

//     default:
//         console.log('num is exactly 15');
//         break;
// }

// console.log('-----');

// const n = 100;
// let sum = 0;



// let sum = 0;
// let n = 10;

// for (let index = 0; index < n; index++) {
//     sum++
// }


// do {
//     console.log('- rune: ', n);
//     n++
// } while (n < 100);

// console.log('x: ', x);
// console.log('y: ', y)

// const y = 5;

// // if (y == 5) {
// //     console.log('ok');
// // } else {
// //     console.log('no');
// // }

// if (y == 5) {
//     console.log('oke');
// }
// else if (y == 10) {
//     console.log('10')
// }
// else if (y == 15) {
//     console.log('15')
// }
// else {
//     console.log('no')
// }


//                      true / false


// let human;
// if (user === 'xeyyam') {
//     human = true;
//     console.log(human)
//     return
// }
// else {
//     human = false;
//     console.log(human)
//     return
// }


const y = 14



// switch (y) {
//     case 5: // else if
//         console.log('oke');
//         break;
//     case 10: // else if
//         console.log('10')
//         break;
//     case 15: // else if
//         console.log('15');
//         break

//     default: // esle
//         console.log('no')
// }

// program using switch statement
// let a = 2;

// switch (a) {

//     case 1:
//         a = 'one';
//         return
//     case 2:
//         a = 'two';
//         return
//     default:
//         a = 'not found';

// }


// multiple case switch program

// switch (fruit) {
//     case 'apple':
//     case 'mango':
//     case 'pineapple':
//         console.log(`${fruit} is a fruit.`);
//         break;
//     default:
//         console.log(`${fruit} is not a fruit.`);
//         break;
// }

// let fruit = 'apple';
// if (fruit === 'apple' || fruit === 'mango' || fruit === 'pineapple') {
//     console.log(`${fruit} is a fruit.`);
// }
// else {
//     console.log(`${fruit} is not a fruit.`);
// }


const users = {
    name: 'Xeyyam',
    surname: 'Karimov',
    age: 12,
    phone: '+99455xxxxxxx',
    count: '555',
    jjj: 'asodaisudjo'
}

const objKey = 'jjj';

// const result = users[objKey] !== undefined ? users[objKey] : 'not found';
// console.log(result);
// if (objKey === 'name') {
//     console.log(users.name)
// }
// else if (objKey === 'surname') {
//     console.log(users.surname)
// }
// else if (objKey === 'age') {
//     console.log(users.age)
// }
// else if (objKey === 'phone') {
//     console.log(users.phone)
// } else {
//     console.log('not found');
// }
// console.log(result);



// for (initialExpression; condition; updateExpression) {
//     // for loop body
// }
// looping from i = 1 to 5

const arr = [
    {
        name: 'xeyyam',
        surname: 'karimov',
    },
    {
        name: 'araz',
        surname: 'karimov',
    },
    {
        name: 'nail',
        surname: 'karimov',
    },
]


// for (let i = 0; i <= arr.length - 1; i++) {
//     console.log(`i -> `, arr[i].name);
// }

// let sum = 0;
// let x = 5;

// for (let i = 0; i < x; i++) {
//     console.log('i: ', i, ' sum: ', sum);
//     sum = sum + i;
//     console.log('-> ', sum)
// }

const message = 'salam';
let secretMessage = '';


for (let i = 0; i < message.length; i++) {
    secretMessage = secretMessage + message[i] + 'x'
}

console.log(secretMessage);
