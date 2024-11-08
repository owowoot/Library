const myLibrary = [
    { title: "Billy Summers", author: "Stephen King" },
    { title: "It", author: "Stephen King" },
    { title: "Atomic Habits", author: "James Clear" }
];

class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
}

// Test Book
const billySummers = new Book('Billy Summers', 'Stephen King');
console.log(billySummers);

function addBookToLibrary(book) {

}
const body = document.body;
const bookContainer = document.createElement('div');
bookContainer.classList.add('book-container')
document.body.append(bookContainer)

function displayBooks(library) {

    myLibrary.forEach((book, index) => { // loop through the library
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');

        const title = document.createElement('h3');
        title.textContent = book.title;
        bookCard.append(title);

        const author = document.createElement('p');
        author.textContent = `By ${book.author}`
        bookCard.append(author);

        bookContainer.append(bookCard);
    });
}

// Display Books test
displayBooks(myLibrary)

