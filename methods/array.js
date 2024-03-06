

// const res = arr2.concat(arr1);

// console.log(res)

// const nums = [1, 2, 3, 11, 4, 5, 6, 7, 8];

// const out = nums.every((num, index) => {
//     console.log('index: ', index);
//     return num < 10
// })

// console.log(out)

// let arr1 = ['a', 'v', 'x'];
// let arr2 = ['t', 'm'];



// const arr = [1, 2, 3, 4, 5];
// arr.fill('x', 2, 3);
// console.log(arr.fill('x', 2))
// console.log(arr)

// const isArraysEqual = (left, right) => {

//     if (left.length === right.length) {
//         return left.every((value, index) => value === right[index]);
//     }

//     return false;

//     // return (
//     //     left.length === right.length &&
//     //     left.every(function (value, index) {
//     //         return value === right[index];
//     //     })
//     // );
// };



// const finded = items.find((item) => item.name === 'blue - z');

// console.log(finded)

// const array1 = [50, 44, [3, 2], [[0]]];

// console.log(array1.flat(Infinity))

// array1.map(num => {
//     if (Array.isArray(num)) {
//         console.log('before: ', num)
//         console.log('sepreted: ', ...num);
//     }
//     else {
//         console.log('normal: ', num)
//     }
// })
// const x = ['ayaz', 'xeyyam', 'ayesl', 'xeyyam', 'ilkin']

// const found = x.findLastIndex((element) => {
//     // console.log("index: ", index);
//     return element === 'xeyyam'
// });

// console.log(found);



// const obj = {
//     name: 'x',
//     surname: 'y'
// }

// const nested = Object.entries(obj);

// const x = nested.flatMap();
// console.log(x)

// const arr = [];


// console.log(Array.isArray(arr))


// console.log('1: ', arr.indexOf('xeyyam')) // 0
// console.log(arr.reverse())
// console.log('2: ', arr.indexOf('xeyyam')) // 2

// isArray()
// lastIndexOf()
// flatMap()
// reverse()


// const array1 = [1, 2, 'xeyyam', 3, 'zaur', { name: 'sd' }];

// console.log(array1.includes('xeyyam'));

// const x = 'niyametdmin';
// const splited = x.split("m");
// console.log('splited: ', splited)
// const a = splited.join()
// console.log(a)

// const arr = ['good', 'yes', 'no']

// function firstArticleUpper(article) {
//     // article.map(item => console.log(item.slice(1).join("")))
// }


// console.log(firstArticleUpper(arr))
// console.log(firstArticleUpper(arr))

// const arr = [2, 3, 5, 6, '33'];
// arr.pop();

// const x = arr.shift()
// arr.unshift('994')
// console.log(x)
// console.log(arr)
// const count = arr.pop()
// // arr.push('hikmet')
// console.log(count);

// const x = arr.every(num => typeof num === 'number');
// const y = arr.some(num => typeof num === 'number');

// console.log(x)
// console.log(y)



// console.log(username.slice(1))

// const months = ['Jan', 'March', 'April', 'June', 'Dec', ''];

// months.slice(1);

// console.log(months) 
// const username = 'akif';

// console.log(username.split(""))
// console.log(Array.from(username))
// console.log(Array.from('xfs'));
// Expected output: Array ["f", "o", "o"]



// const obj = {
//     "name": 'Xeyyam',
//     "surname": 'Karimvo',
// }

// const user = {
//     "name": 'Xeyyam',
//     "surname": 'Karimvo',
//     hoobies: [
//         'asd',
//         'adasd', 'asd', 'asd'
//     ]
// }

// const s = JSON.stringify(user);

// const fromAPI = JSON.parse(s);

// console.log(fromAPI.name)

// const calc = (x, y, o) => {
//     if (o === '+') {
//         return x + y
//     }
// }

// calc(2, 5, '+')
// const xeyyam = 'var x = 5; const y=2; console.log(x + y)'
// eval(xeyyam)

// const res = require('./file.json');

// console.log(res)