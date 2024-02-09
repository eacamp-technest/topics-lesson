
const users = [
    { name: "Alice", age: 30, interests: ["coding", "hiking"], email: "alice@example.com" },
    { name: "Bob", age: 25, interests: ["gaming", "reading"], email: "bob@example.com" },
    { name: "Charlie", age: 35, interests: ["coding", "cooking", "reading"], email: "charlie@example.com" },
    { name: "Diana", age: 28, interests: ["yoga", "reading", "gardening"], email: "diana@example.com" },
    { name: "Ethan", age: 40, interests: ["hiking", "photography"], email: "ethan@example.com" },
    { name: "Fiona", age: 22, interests: ["music", "gaming"], email: "fiona@example.com" },
    { name: "George", age: 32, interests: ["coding", "gaming", "reading"], email: "george@example.com" },
    { name: "Hannah", age: 27, interests: ["writing", "yoga"], email: "hannah@example.com" },
    { name: "Ian", age: 30, interests: ["photography", "cooking"], email: "ian@example.com" },
    { name: "Julia", age: 24, interests: ["coding", "yoga"], email: "julia@example.com" },
];

// function sendMail(user) {
//     console.log(`Email sent to: ${user.email}`);
// }

// let count = 0;

// const intervalId = setInterval(() => {
//     if (count > 5) {
//         clearInterval(intervalId);
//     }
//     users.forEach(user => {
//         if (user.age >= 18) {
//             sendMail(user);
//         }   
//     });
//     console.log(`Iteration ${count + 1}`);
//     count++;
// }, 1000);


// function sendEmail(users) {
//     users.forEach(function (user) {
//         if (user.age > 18) {
//             console.log(`mail sent to ${user.name} , who has mail address ${user.email}`);
//         }
//     });
// }


// let counter = 0;

// const interval = setInterval(function () {
//     sendEmail(users);
//     counter++;
//     console.log('work', counter);
//     if (counter === 5) {
//         clearInterval(interval);
//     }
// }, 1000);


sendEmail

function sendEmail(arr) {
    let count = 0
    const interval = setInterval(() => {
        arr.forEach(user => {
            if (user.age > 18) {
                console.log("Welcome " + user.name)
            }
        });
        count++
        if (count === 5) {
            clearInterval(interval)
        }
    }, 500)
}

sendEmail(users)