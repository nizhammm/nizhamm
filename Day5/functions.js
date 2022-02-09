// ===== Pembuatan function ======
// function displayMenu () {
//     console.log("Hello World!")
// }

// displayMenu()
// ======================================

// ====== Parameter Function =====
// function displayMenu (username = "Naruto", greetinh) {
//     console.log(`Hello ${username}`)
// }

// displayMenu("Doraemon")

// function displayUsername (username = "Naruto", greeting) {
//     console.log(`${greeting} ${username}`)
// }

// let username = "Doraemon"
// let greeting = "Good Morning"

// displayUsername (greeting, username)


let items = ["Leci", "Apel", "Jeruk", "Mangga", "Semangka"];
let itemPrices = [7000, 5000, 3000, 10000, 20000];

function displayMenu (itemsName = [], itemPrices = []) {
    for (let i = 0; i < items.length; i++) {
        console.log(`${i + 1}. ${items[i]} || Harga = Rp. ${itemPrices[i].toLocaleString()}\n`);
    }
}

// console.log("===== Books =====")
// displayMenu (items, itemPrices)
// console.log("")


function sumTwoNumbers (a = 0, b = 0){
    // if (typeof a)
    if (typeof a !== "number" || typeof b !== "number"){
        return "Gunakan tipe data yang benar"
    }

    if (isNan(a) || isNaN(b)) {
        return "Pastikan number anda sesuai"
    }
    
    let hasil = a + b;
    
    return hasil
    // if (hasil > 10){
    //     return "Angka anda lebih dari 10";
    // }

    // return "Angka anda 10 atau lebih kecil";
}

// let result = sumTwoNumbers (7, "1")
// console.log(result)

// // console.log(typeof(7))
// console.log("number")
// console.log(typeof NaN)

// ===== anonymous function =====


// ===================================

// ===== arrow function =====
const b = (z, y) => z + y
console.log(b(3, 2))