const myLibrary = [
    { title: "Billy Summers", author: "Stephen King", readStatus: true },
    { title: "It", author: "Stephen King", readStatus: false },
    { title: "Atomic Habits", author: "James Clear", readStatus: true },
    { title: "Bonechiller", author: "Graham McNamee", readStatus: true }
];

class Book {
    constructor(title, author, readStatus) {
        this.title = title;
        this.author = author;
        this.readStatus = readStatus;
    }
}

// // Test Book
// const billySummers = new Book('Billy Summers', 'Stephen King');
// console.log(billySummers);

function addBookToLibrary(title, author) {

}
const body = document.body;
const bookContainer = document.createElement('div');
bookContainer.classList.add('book-container')
document.body.append(bookContainer)

// @param takes in an array
// loops through array and puts each book onto a card
function displayBooks(library) {

    myLibrary.forEach((book, index) => { // loop through the library
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');

        const title = document.createElement('h3');
        title.textContent = book.title;
        bookCard.append(title);

        const author = document.createElement('p');
        author.textContent = `By ${book.author}`;
        bookCard.append(author);

        const readStatus = document.createElement('p');
        readStatus.textContent = `Read: ${book.readStatus ? "Yes" : "No"}`;
        bookCard.append(readStatus);

        bookContainer.append(bookCard);
    });
}

// Display Books test
displayBooks(myLibrary)

