const myLibrary = ["Billy Summers"];

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

    });
}

// Display Books test
console.log(displayBooks(myLibrary))

