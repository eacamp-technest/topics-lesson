
let store = {}; // Real Dom

const calc = (x, y) => {
    // x = 1, y = 2
    console.log(store)

    const key = `${x}${y}_key` // 12_key


    if (store[key]) { // {12_key: 300} // Virtual DOM
        console.log('from store')
        return store[key] // {12_key: 300}[12_key] -> 300
    }

    console.log('new calc');
    const result = (x + y) * 100; // 300
    store[key] = result; // {} -> {12_key: 300}
    return result;
}

setInterval(() => {
    const x = Math.floor(Math.random() * 10);
    const y = Math.floor(Math.random() * 10);
    console.log('result:', calc(x, y));
}, 1000)
