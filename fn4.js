// function name(params) {

// }

// name()

// name

const showFullName = () => 'Xeyyam Kerimov';


const concatUsers = (user, cb) => {
    return `${user} ${cb()}`
}

// const res = concatUsers('Ayaz Karimov', showFullName);
// console.log(res);

// const kv = (k) => k * k;

// const test = (x, y) => {
//     const sum = x + y;
//     return kv(sum);
// }


// console.log(test(2, 5))


const user = {
    'name': 'Azer',
    surname: 'Karimov',
    age: 45,
    isHaveCar: false,
    idInfo: {
        serialNumber: '2374374',
        country: 'AZE',
    },
    hobbies: ['tennis', 'coffee'],
    showUserName: () => {
        console.log('arrow function: ', user.age)
        // user.showUserName2()
    },
    showUserName2: function () {
        // console.log('normal function', this.age)
        // console.log(this.age)
        this.showUserName();
    }
}



// const name2 = (param) => param

// function name(params) {
//     return params
// }


const numbers = {
    sum: (x, y = 0) => x + y,
    mult: (num) => num * 2,
    sumAll: (...rest) => {
        let sum = 0;
        for (let index = 0; index < rest.length; index++) {
            sum += rest[index];
        }
        return sum;
    },
    factorial: (n) => {
        // console.log('inside', this.factorial(2))
        if (n <= 1) {
            return 1;
        }

        return n * numbers.factorial(n - 1)
        // return n <= 1 ? 1 : n * numbers.factorial(n - 1)
        // console.log('--', n)
    },
    mix: function (num, cb, cb2) {
        const mult = this.mult(num);
        const res = cb(mult);

        // console.log('cb2: ', cb2)

        // if (!cb2) {
        //     cb2 = this.factorial(res);
        // }

        return cb2(res);
    }
}


// console.log('sum all func:', numbers.sumAll(1, 2, 3, 5, 6))
// console.log('sum func:', numbers.sum(1, 2))
// console.log('mult func:', numbers.mult(30))
// console.log('factorial func:', numbers.factorial(5))


const result = numbers.mix(10, numbers.sum, numbers.factorial)

// 1 ->   mix
// 2 ->  mult
// 3 ->  sum
// 4 -> factorial
//... ->  factorial



// console.log(numbers.factorial(5))