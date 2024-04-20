// DOM Elements
const newBtn = document.querySelector('#newBtn');
const dialog = document.querySelector('dialog');
const form = document.querySelector('form');
const cancelBtn = document.querySelector('#cancelBtn');

// Books array with sample books
const myLibrary = [
    {
        title: 'La María',
        author: 'Jorge Isaacs',
        year: 1867,
        read: 'Yes',
    },
    {
        title: 'El túnel',
        author: 'Ernesto Sábato',
        year: 1948,
        read: 'Yes',
    },
    {
        title: 'Lord of the Flies',
        author: 'William Golding',
        year: 1954,
        read: 'Yes',
    },
    {
        title: 'Cien años de soledad',
        author: 'Gabriel García Márquez',
        year: 1967,
        read: 'No',
    },
];

// Book constructor
function Book(title, author, year, read) {    
    this.title = title;
    this.author = author;
    this.year = year;
    this.read = read;
}

function addBookToLibrary() {
    // Get values from form to add a new book
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const year = document.getElementById('year').value;
    const read = document.querySelector('input[name="read"]:checked').value;
    
    if (title && author && year && read) {
        const book = new Book(title, author, year, read);
        myLibrary.push(book);
    }
}

function addBooksToDOM() {
    const books = document.querySelector('.books');
    books.innerHTML = '';
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

function closeModal() {
    dialog.close();
    form.reset();
}

function handleSubmit(event) {
    event.preventDefault();
    addBookToLibrary();
    addBooksToDOM();
    closeModal();
}

// Event listeners
window.addEventListener('DOMContentLoaded', addBooksToDOM);
newBtn.addEventListener('click', () => dialog.showModal());
form.addEventListener('submit', handleSubmit);
cancelBtn.addEventListener('click', closeModal);
