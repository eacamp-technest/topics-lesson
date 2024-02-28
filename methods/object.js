// const x = { a: 1, b: 2 };
// const y = { b: 4, c: 5 };


// const a = { ...y, ...x };
// Object.assign(x, y);



// console.log('x: ', x)
// console.log('y: ', y)
// // console.log('z: ', z)


// const person = {
//     name: undefined,
//     age: 10,
//     phoneNumber: '',
//     isHuman: true,
//     callUser: function () {
//         console.log('call to user: ', this.phoneNumber)
//     },
//     printUser: function () {
//         console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
//     },
// };

// const xeyyam = {
//     ...person,
//     name: 'Xeyyam',
//     age: 24,
//     phoneNumber: '+994 55 xxxxxxx'
// }

// // console.log(xeyyam)
// xeyyam.callUser()
// xeyyam.printUser()

// // const me = Object.create(person);
// const me = Object.create(person);
// console.log('me: ', me)

// // me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
// // me.isHuman = true; // Inherited properties can be overwritten

// me.printUser();
// // Expected output: "My name is Matthew. Am I human? true"


// const fullname = 'xeyyam'

// console.log(fullname.toUpperCase())



// user['phone'] = '+994 55 xxxxxxxx'
// user['info'] = {
//     count: 'aze',
//     kg: 79
// }

// user['hobbies'] = ['asjdnasd', 'asd', 'asdwed']

// Object.defineProperties(user, {
//     property1: {
//         value: {
//             name: 'asdasd',
//             asdasd: "asdasd"
//         },
//         writable: true,
//     },
// })

// const object1 = {};



// Object.defineProperty(object1, 'property1', {
//     value: 42,
//     writable: false,
// });


// console.log(user)
// console.log(object1.property1);
// // Expected output: 42

// for (const [key, value] of Object.entries(user)) {
//     console.log(`${key}: ${value}`);
// }

// const userArr = Object.entries(user)

// for (let index = 0; index < userArr.length; index++) {
//     const [key, value] = userArr[index];
//     console.log('key: ', key, " ", 'value: ', value)
// }


// console.log(Object.entries(user))
// const userName = Object.entries(user)[0][1];
// const phone = Object.entries(user)[2][1]

// console.log(phone)
// console.log(userArr)
// console.log(userName)

// Object.defineProperties(user, {
//     property1: {
//         value: 42,
//         writable: true,
//     },
//     property2: {},
// });

// console.log(Object.getOwnPropertyNames(user))
// console.log(Object.keys(user))
// console.log(Object.values(user))

// Object.freeze(user);

// user = {
//     ...user,
//     name: 'asdasd'
// }

// user.name = 'hikmet'
// delete user.age

// console.log(user)

// const object1 = {
//     a: 1,
//     b: 2,
//     c: 3,
// };




// const fr = ['alma', 'armud', 'nar'];
// console.log(!!fr[1])
// console.log(!!user['age'])
// if (user['count']) {
//     console.log('+')
// } else {
//     console.log('-')
// }


// if (fr[5]) {
//     console.log('have')
// } else {
//     console.log('no');
// }
// console.log(Object.hasOwn(user, 'name'))

// user['aze'] = 'asdasd'
// Object.seal(user);

// console.log('is frozen: ', Object.isFrozen(user))
// console.log('isSealed: ', Object.isSealed(user))



// console.log(Object.isFrozen(user))
// console.log(x);

// console.log(Object.keys(user))

// console.log(Object.values('asdasd'))

const user = {
    name: 'xeyyam',
    age: 34,
    phone: '+90 xxxxx'
}


// const user2 = { ...user }

// const x = [];
// const y = []

// console.log(user === user2)
console.log(0 / 0);