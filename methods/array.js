

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

const items = [
    {
        name: 'blue - x',
        price: 21,
        size: 'm'
    },
    {
        name: 'blue - z',
        price: 10,
        size: 'l'
    },
    {
        name: 'blue - z',
        price: 19,
        size: 'xl'
    },
    {
        name: 'green - m',
        price: 30,
        size: 's'
    }
]

// const finded = items.find((item) => item.name === 'blue - z');

// console.log(finded)

const array1 = [50, 44, [3, 2], [[0]]];

console.log(array1.flat(Infinity))

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


