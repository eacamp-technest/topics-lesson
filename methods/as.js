// // const x = (a, b) => a * b;

// // const name = 'adxsxad';
// // console.log(name)

// // const x = 5;
// // const y = 2;

// // console.log(x * y);


// const imagePicker = () => {
//     console.log('user pick')
// }

// const sendImage = () => {
//     console.log('sending')
// }

const uploadUserImage = () => {
    const pickImage = imagePicker();
    sendImage(pickImage)
}

// const login = (email, password) => {

// }

// let promise = new Promise(function (resolve, reject) {
//     //do something
// });

// new Promise() 

const count = true;

//  function (resolve, reject) {
//     if (count) {
//         resolve("There is a count value.");
//     } else {
//         reject("There is no count value");
//     }
// }

// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("foo");
//     }, 300);
//   });


const promiseCb = (resolve, reject) => {
    setTimeout(() => {
        const x = Math.random()
        return resolve(x)
    }, 1000)
}

// let loading = false;

// let picker = new Promise(promiseCb);

// console.log(timePromise);

// loading = true;
// picker
//     .then((value) => console.log('send value to api:', value))
//     .catch(error => console.log('error: ', error))
//     .finally(() => loading = false)
