const endpoints = {
    'bored': 'http://www.boredapi.com/api'
}

const fetcher = async (endpoint) => {
    // const res = fetch(endpoint, {
    //     method: 'GET'
    // })
    //     .then((response) => response.json())
    //     .then((data) => data)

    // console.log('----')

    const response = await fetch(endpoint)
    const data = await response.json();

    console.log('----')

    return data
}


const x = async () => {
    const a = await fetcher('https://restcountries.com/v3.1/currency/aze')
    const b = await fetcher(endpoints.bored);

    console.log('a: ', a)
    console.log('b: ', b)
}

x()
// fetcher(`${endpoints.bored}/activity`)

// const url = 'xx.com/notifications/notifications';

// const createNotification = async (url) => {

//     const body = JSON.stringify({
//         "page": 1,
//         "pageSize": 20,
//         "search": "",
//         "isSeen": false
//     })

//     const response = await fetch(url, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             "Authorization": 'Bearer xxxxxxxxxx'
//         },
//         body: body
//     })

//     const data = await response.json();

//     console.log(data)

// }