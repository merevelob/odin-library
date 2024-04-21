// DOM Elements
const books = document.querySelector('.books');
const newBtn = document.querySelector('#newBtn');
const dialog = document.querySelector('dialog');
const form = document.querySelector('form');
const cancelBtn = document.querySelector('#cancelBtn');

// Books array
const myLibrary = [];

// Book constructor
function Book(title, author, year, read) {    
    this.title = title;
    this.author = author;
    this.year = year;
    this.read = read;
}

function addBookToLibrary(title, author, year, read) {
    const book = new Book(title, author, year, read);
    myLibrary.push(book);
}

function addBooksToDOM() {
    books.innerHTML = '';
    myLibrary.map((obj, index) => {
        const book = document.createElement('div');
        book.classList.add('book');
        book.setAttribute('data-index', index);
        book.innerHTML = `
            <ul>
                <li class='title'>${obj.title}</li>
                <li>${obj.author}</li>
                <li>${obj.year}</li>
                <li>Read: ${obj.read}</li>
            </ul>
            <img src="./assets/close.svg" class="btn close" alt="">
            <img src="./assets/read.svg" class="btn read" alt="">
        `;
        books.appendChild(book)
    });
}

function addSampleBooks() {
    addBookToLibrary('María', 'Jorge Isaacs', 1867, 'Yes');
    addBookToLibrary('El túnel', 'Ernesto Sábato', 1948, 'Yes');
    addBookToLibrary('Lord of the Flies', 'William Golding', 1954, 'Yes');
    addBookToLibrary('Cien años de soledad', 'Gabriel García Márquez', 1967, 'No');
}

function closeModal() {
    dialog.close();
    form.reset();
}

function handleSubmit(event) {
    event.preventDefault();

    // Get values from form to add a new book
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const year = document.getElementById('year').value;
    const read = document.querySelector('input[name="read"]:checked').value;

    addBookToLibrary(title, author, year, read);
    addBooksToDOM();
    closeModal();
}

function removeBook(index) {
    myLibrary.splice(index, 1);
    addBooksToDOM();
}

// Toggle read status
Book.prototype.toggleRead = function() {
    if (this.read === 'Yes') {
        this.read = 'No';
    } else {
        this.read = 'Yes';
    }
    addBooksToDOM();
};

function handleClick(event) {
    // Event delegation to the close and read buttons
    if (event.target.classList.contains('btn')) {
        const bookIndex = event.target.parentElement.dataset.index;
        if (event.target.classList.contains('close')) {
            removeBook(bookIndex);
        } else if (event.target.classList.contains('read')) {
            myLibrary[bookIndex].toggleRead();
        }
    }
}


function init() {
    // Add event listeners
    newBtn.addEventListener('click', () => dialog.showModal());
    form.addEventListener('submit', handleSubmit);
    cancelBtn.addEventListener('click', closeModal);
    books.addEventListener('click', handleClick);
    
    // Add hardcoded books
    addSampleBooks();

    // Render books
    addBooksToDOM();
}

// Initialize
document.addEventListener('DOMContentLoaded', init);