// Books array
// const myLibrary = [];

// Sample books
const myLibrary = [
    {
        title: 'La María',
        author: 'Jorge Isaacs',
        year: 1867,
        read: true,
    },
    {
        title: 'El túnel',
        author: 'Ernesto Sábato',
        year: 1948,
        read: true,
    },
    {
        title: 'Lord of the Flies',
        author: 'William Golding',
        year: 1954,
        read: true,
    },
    {
        title: 'Cien años de soledad',
        author: 'Gabriel García Márquez',
        year: 1967,
        read: false,
    },
];

// Book constructor
function Book(title, author, year, read) {    
    this.title = title;
    this.author = author;
    this.year = year;
    this.read = read;
}

/* Book.prototype.info = function() {
    return `${this.title} by ${this.author}, year ${this.year}, ${(this.read) ? 'read' : 'not read yet'}`;
}; */
  
function addBookToLibrary() {
    const title = prompt('Enter book title');
    const author = prompt('Enter book author');
    const year = prompt('Enter book year');
    const read = prompt('Have you read it? y/n', 'y');

    if (title && author && year && read) {
        const book = new Book(title, author, year, read === 'y');
    
        myLibrary.push(book);
    } else {
        alert('All fields must be completed.');
    }
}

function addBooksToDOM() {
    const books = document.querySelector('.books');
    myLibrary.map((obj) => {
        const book = document.createElement('div');
        book.classList.add('book');
        book.innerHTML = `
            <ul>
                <li class='title'>${obj.title}</li>
                <li>${obj.author}</li>
                <li>${obj.year}</li>
                <li>Read: ${obj.read}</li>
            </ul>
        `;
        books.appendChild(book)
    });
}

// addBookToLibrary();
addBooksToDOM();
console.log(myLibrary);