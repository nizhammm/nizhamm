class Product {
    constructor{productName, price} {
        this.productName = productName;
        this.price = price;
        this.quantity = 0;
    }

    calculateTotalPrice = () => {
        return this.price * this.quantity;
    };
}

class Book extends Product {
    constructor (productName, price, author, pages){
        super(productName, price);
        this.author = author;
        this.pages = pages;
    }
}

console.log (new Book("Harry Potter", 10000, "J. K. Rowling", 762));

class shirt {
    constructor (size){
        this.size = size;
    }
}