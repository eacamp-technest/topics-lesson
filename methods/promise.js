// const delay = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('bad request')
//     }, 1000)
// })


// const handler = async () => {
//     console.log('before');
//     const result = await delay
//     console.log('after');
//     console.log('end', result)
// }
// before
// susses
// after
// end success


// before
// after
// susses
// end success
// const handler2 = async () => {
//     delay.then((result) => { })
//         .catch((error) => { })
//         .finally(() => { })
//     // try {
//     //     const result = await delay
//     //     console.log('susses', result);
//     // } catch (error) {
//     //     console.log('error', error);
//     // } finally {
//     //     console.log('after');
//     // }
// }

// handler()
// handler2()



// const handler = async () => {
//     console.log('before');
//     const result = await delay
//     console.log('after');
//     console.log('end', result)
// }


// GET -> read
// POST -> create
// PUT -> update
// DELETE -> delete
// PATCH -> update

const callAPI = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1', {
        method: 'put',
    });
    const data = await response.json();
    console.log(data)
    // console.log(response.json())
    // console.log(response.status)
    // console.log(response.statusText)
    // console.log(response.json())

    // fetch('https://jsonplaceholder.typicode.com/todos/3')
    //     .then(response => response.json())
    //     .then(result => console.log('result', result))
    //     .catch(error => console.log('error', error))
}

// callAPI()

// const pictures = async () => {
//     const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=REPLACE_ME', {
//         method: 'get'
//     })

//     const data = await response.json();
//     console.log(data)
// }
