// // program to count down numbers to 1
// function countDown(number) {

//     // display the number
//     console.log(number);

//     // decrease the number value
//     const newNumber = number - 1;

//     // base case
//     if (newNumber > 0) {
//         countDown(newNumber);
//     }
// }

// countDown(4);

// const obj = {
//     0: 'agsgsd',
//     'name': 'Xeyyam',
//     surname: 'Karimov'
// }

// const { name } = obj

// function multCalc(sum, mult) {
//     let additional = mult + (mult * 2);

//     if (additional > 100) {
//         additional = 100;
//     }

//     return sum * additional
// }

// function sumCalc(x, y = 0, ...others) {

//     const lastItemIndex = others.length - 1;
//     let lastItem = others[lastItemIndex];

//     if (typeof others[lastItemIndex] !== 'number') {
//         lastItem = 0;
//     }

//     const sum = x + y
//     return multCalc(sum, lastItem)
// }

// const result = sumCalc(2, 10, 73, 47);

// console.log(result)

// function f1() {
//     console.log('-> f1!');
// }

// function f2() {
//     f2();
//     console.log('-> f2!');
// }

// f2();

// function countDown(num) {
//     const count = num + 1
//     console.log('count : ', count);

//     if (count >= 10) {
//         return;
//     }
//     countDown(count)

// }

// dec   name (parms) {}





// function x() {
//     console.log('x function')
// }

// const x = (params) => console.log('-=-=---')

// function showFn(cb) {
//     console.log(cb);
//     cb();
// }

// showFn(x)
// // const a = 2 ? 'it is 2' : 'is not 2';

// s();


// const test = (x) => {
//     if (x <= 1) {
//         return 1;
//     }

//     return x * test(x - 1);
// }

// const factorial = n => n === 0 ? 1 : n * factorial(n - 1);

// console.log(test(5))

// const name = 'Xeyyam';
// const surname = 'Karimov';

// const fullname = name + " " + surname


// const test = (name, surname = 'Karimov') => {
//     return `namske${}`
// }

const surname = 'Karimov';
const age = 40;

const name = `name : ${age < 30 ? 'young' : 'adult'}`;
const name2 = "name : " + age < 30 ? 'young' : 'adult';

const baseUrl = 'https://fb.com'
const usersUrl = 'users';

const sendReq = (id) => `${baseUrl}/${usersUrl}/${id}`

const str2 = 'oiasdjaoisdjoasjdoasjodjaisod \n aoisdjaios'
const str = `xeryyam
${name2}      
karimov
`

console.log(str)