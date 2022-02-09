// // Classes

// class Car {
//     constructor(tahun = "2000", merek, warna) {
//         this.year = year;
//         this.brand = brand;
//         this.color = color;
//         this.price = 0 

//     }
// }

// // const mobilBaru = new Car ("2000", "Toyota", "White");
// // const mobilLama = new Car ("1990", "Ford", "Red")

// // console.log(mobilBaru);
// // console.log(mobilLama);

// const cars = [
//     {
//         year : "2020"
//         brand : "Toyota"
//         color : "white"
//     },
//     new Car(undefined, "Ford", "Red"),
// ];


// ================================================

// class Fruit {
//     constructor (fruitName, price) {
//         this.fruitName = fruitName;
//         this.price = price;
//         this.quantity = 5;
//         this.bought = 0
//     }
// }

// const Fruits = [
//     new Fruit("Semangka", 5000),
//     new Fruit("Jeruk", 1000),
// ]

// console.log(Fruits)


// class Fruit {
//     constructor (product, price) {
//         this.product = product;
//         this.price = price;
//         this.quantity = 5;
//         this.bought = 0
//     }
// }

// calculateTotalPrice = () => {
//     return this.price *this.quantity;
// };

// toString = () => {
//     // Semangka || Rp. 5000 x 5 = Rp. 25000
//     return `${this.product} || Rp. ${this.price.toLocaleString()} x 
//     ${this.quantity} = 
//     ${this.calculateTotalPrice().toLocaleString()}`;
// };


class Fruits {
    constructor (fruits, price, quantity, bought) {
        this.fruits = fruits;
        this.price = price;
        this.quantity = 0;
    }
}

calculateTotalPrice = () => {
    return this.price *this.quantity;
};

toString = () => {
    return `${this.fruits} || Rp. ${this.price.toLocaleString()} x 
    ${this.quantity} = 
    ${this.calculateTotalPrice().toLocaleString()}`;
};    

conts Fruits = [
    new fruit ("Semangka", 5000),
    new fruit ("Apel", 13000),
    new fruit ("Jeruk", 10000)
]

console.log(Fruits)