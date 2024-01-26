// function name(params) {

// }

// function seyHello(name) {
//     console.log('say hello:', name)
// }

function login(name, surname, age, count) {
    console.log('name: ', name)
    console.log('surname: ', surname)
    console.log('age: ', age)
    console.log('count: ', count)
}


function loginV2({ name, surname, age, count }) {
    console.log('name: ', name)
    console.log('surname: ', surname)
    console.log('age: ', age)
    console.log('count: ', count)
}


// login('xeyyam', undefined, 12,);
// console.log('-------')
// loginV2({
//     count: 'aze',
// });

function calc(x, y, mult) {
    if (typeof x !== 'number' || x < 0) {
        x = 0
    }

    if (typeof y !== 'number' || y < 0) {
        y = 0;
    }

    // if (x < 0) {
    //     x = 0
    // }

    // if (y < 0) {
    //     y = 0
    // }

    if (mult === true) {
        return (x + y) * 2;
    }

    return x + y

}
const sum = calc(-2, 3, true)
//  false / null / undefined / NaN / ""


console.log(sum)

// * 2