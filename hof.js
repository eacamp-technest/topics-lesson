// map()
// filter()
// forEach
// find
// funcIndex;




// for (let index = 0; index < nums.length; index++) {

//     if (isNaN(nums[index])) {
//         console.log(nums[index])
//     }
// }

// const filtered = nums.filter((element) => {

//     if (typeof element === 'number' && !isNaN(element)) {
//         return element
//     } else {
//         return 0
//     }

// })

// console.log(filtered)


// if (a === 5 && b === 4)

// console.log(nums.filter((xeyyam) => {
//     if (typeof xeyyam === 'number') {
//         return xeyyam
//     }
// }))

// const f = (arr) => {
//     let filtered = [];

//     for (let i = 0; i < arr.length; i++) {

//         if (typeof arr[i] === 'number') {
//             filtered = [...filtered, 5];
//         }


//     }

//     return filtered
// }

// console.log('f', f(nums))

// function x(e) {
//     let adil = [];

//     for (let index = 0; index < e.length; index++) {
//         const element = e[index];
//         // console.log('run:', element);


//         if (element % 2 === 0) {
//             adil = [...adil, element]
//         }

//         if (adil.length === 2) {
//             return adil
//         }
//     }

//     // return adil
// }

const nums = [3, 6, 4, false, null, NaN, 5, 'asdasd', 6];

const users = [
    {
        name: 'Xeyyam',
        surname: 'Karimov',
        age: 10,
    },
    {
        name: 'Akif',
        surname: 'asdasdas',
        age: 22,
    },
    {
        name: 'Namik',
        surname: 'Hesenov',
        age: 18,
    },
    {
        name: 'Namik',
        surname: 'Esgerov',
        age: 18,
    },
    {
        name: 'Gulnaz',
        surname: 'Asdasdasd',
    },
    {
        name: 'Gulnar',
        surname: 'Asdasdasd',
    },
    {
        name: 'Qoca',
        surname: 'asdasd',
        age: 30,
    },
]

const findUser = users.find((user) => user.name === 'Gulnar')
const findIndex = users.findIndex((user) => user.name === 'Gulnar')
console.log('findUser: ', findUser)
console.log('findIndex: ', findIndex)

// setInterval(() => {

//     setTimeout(() => {
//         console.log('Helo akif')
//     }, 0)

//     console.log('men isliyoirem')
// }, 1000);

// clearInterval(interval)
// clearTimeout(x)
// console.log(nums.find(x))
