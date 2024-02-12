


// const isExists = products.some((product) => product.price === 43)


// const f = products.find(product => product.price === 200)
// const i = products.findIndex(product => product.price === 200);
// console.log({ res, f, i })
// const x = (itemName) => {
//     console.log(itemName);
// }

const name = 'XasfIhuMaisd';




// products.forEach((product, index) => {
//     // product.name = `${product.name} (${index})`
//     product['id'] = index;

//     // console.log(product.id)
//     // return {
//     //     ...product,
//     //     name: `${product.name} (${index})`,
//     //     id: index
//     // }

// });

// console.log('original: ', products)
// console.log('updated: ', updated)


// const names = ['xeyyam', 'Ariz', 'melik', 'namik', 'firuze', 'arif'];

const products = [
    { name: "Laptop", price: 1000 },
    { name: "Book", price: 20 },
    { name: "Smartphone", price: 500 },
    { name: "Tablet", price: 300 },
    { name: "Headphones", price: 150 },
    { name: "Keyboard", price: 50 },
    { name: "Mouse", price: 25 },
    { name: "Monitor", price: 200 },
    { name: "Camera", price: 400 },
    { name: "Charger", price: 30 }
];



// products.sort((a, b) => a.price - b.price);
const sortedProducts = products.reduce((sortedArray, currentProduct) => {
    let inserted = false;
    for (let i = 0; i < sortedArray.length; i++) {
        if (currentProduct.price < sortedArray[i].price) {
            sortedArray.splice(i, 0, currentProduct);
            inserted = true;
            break;
        }
    }
    if (!inserted) {
        sortedArray.push(currentProduct);
    }
    return sortedArray;
}, []);

console.log(sortedProducts);


// console.log(products)


// console.log('original: ', nums)
// console.log('sorted: ', sorted)
