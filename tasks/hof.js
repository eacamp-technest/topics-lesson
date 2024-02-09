
// simple map task
// const numbers = [1, 2, 3, 4, 5];

// const doubled = numbers.map(element => element * 2);

// console.log({
//     numbers,
//     doubled
// })


const users = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 35 },
    { name: "Diana", age: 28 },
    { name: "Ethan", age: 40 },
    { name: "Fiona", age: 22 },
    { name: "George", age: 32 },
    { name: "Hannah", age: 27 },
    { name: "Ian", age: 30 },
    { name: "Julia", age: 24 },
];

// users.map(user => console.log(`${user.name} is ${user.age} old`))


const products = [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Book", price: 20 },
    { id: 3, name: "Smartphone", price: 500 },
    { id: 4, name: "Tablet", price: 300 },
    { id: 5, name: "Headphones", price: 150 },
    { id: 6, name: "Keyboard", price: 50 },
    { id: 7, name: "Mouse", price: 25 },
    { id: 8, name: "Monitor", price: 200 },
    { id: 9, name: "Camera", price: 400 },
    { id: 10, name: "Charger", price: 30 }
];





const productsWithTax = products.map(product => {
    const tax = product.price * 1.10;
    const updatedProductName = `${product.name} (${product.id})`

    return {
        ...product,
        name: updatedProductName,
        tax,
    }
})







// const productsWithTax = products.map(product => {
//     const priceWithTax = product.price * 1.10; // Calculate price with a 10% tax
//     const newName = `${product.name} (${product.id})`; // Format name to include the product ID
//     return {
//         ...product, // Spread operator to copy properties from the original product
//         name: newName,
//         priceWithTax: priceWithTax
//     };
// });

// console.log(productsWithTax);