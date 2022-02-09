const buku = {
    title :  "Harry Potter",
    author : {
        name : "J. K. Rowling",
        age : 50,
        nationality : "inggris"
    },
    pages: 658,
    yearsReleased: "2001",
    alternativeTitles: ["Sang Penyihir", "The Wizard"],
    sequels : [
        {
            title: "Harry Potter2",
            yearsReleased: "2003"
        },
        {
            title: "Harry Potter 3",
            yearsReleased: "2005"
        },
        {
            title: "Harry Potter 4",
            yearsReleased: "2007"

        },
    ]
}

// object destructutring
let { yearsReleased, title, pages } = buku;
console.log(yearsReleased)
console.log(title)
console.log(pages)

console.log(buku.title)

// console.log(buku.sequel[1].yearReleased)
buku.publisher = "Purwadhika"

// Hapus property
buku.judul = buku.title
delete buku.title
console.buku

console.log(buku.sequels[1].yearsReleased)

// dot notation
// // console.log (buku.title)
// console.log(buku.author.age)
// console.log(buku.author.name)

// bracket notation
const title = "pages"
// console.log (buku ["title"])
console.log (buku[title])



