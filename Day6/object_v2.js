// const products = [
//     {
//         productName : "Leci",
//         price : 2000
//     },
//     {
//         productName : "Mangga",
//         price : 7000
//     },
//     {
//         productName : "Apel",
//         price : 5000,
//     },
// ]

// for (let i = 0; i < products.length; i++){
//     console.log(
//         `Nama: ${products[i].productName} || Harga: Rp. ${products[i
//         ].price.toLocaleString()}`
//     );
// }

// ================================================

const cars = [
    {
        brand: "Toyota",
        year: "2010",
        Colors:["Red,", "Black"],
    },
    {
        brand: "Honda",
        year: "2007",
        Colors:["Grey,", "Black", "White"],
    },
];

for (let i =0; i < cars.length; i++) {
    let car = cars[i]
    let row = `${i+1}. Brand: ${car.brand} || Year: ${car.year} || Colors:`

    // looping colors
    for (let j = 0; j < cars[i].Colors.length; j++){
        row += `${car.Colors[j]}`
    }
    console.log(row)
}

