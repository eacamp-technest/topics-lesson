const x = { a: 1, b: 2 };
const y = { b: 4, c: 5 };


const a = { ...y, ...x };
Object.assign(x, y);



console.log('x: ', x)
console.log('y: ', y)
// console.log('z: ', z)
