import { Book } from "../modules/bookClass";

const title = document.querySelector('#title');
const author = document.querySelector('#author');
const formSubmit = document.querySelector('.book-form');

let booksArray = [];



window.removeBook = (title) => {
  document.querySelector('.books-container').addEventListener('click', (e) => {
    Book.deleteBook(e.target);
  });
  booksArray = booksArray.filter((elem) => elem.title !== title);
  Book.addBook();
};

window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('booksData') === null) {
    booksArray = [
      {
        title: 'Book one',
        author: 'Kait',
      },
      {
        title: 'Book two',
        author: 'Cham',
      },
    ];
  } else {
    booksArray = JSON.parse(localStorage.getItem('booksData'));
  }
  Book.addBook();
});

formSubmit.addEventListener('submit', (event) => {
  if (title.value === '' || author.value === '') {
    event.preventDefault();
  } else {
    event.preventDefault();
    const bookTitle = title.value;
    const bookAuthor = author.value;
    const book = new Book(bookTitle, bookAuthor);
    booksArray.push(book);
    localStorage.setItem('booksData', JSON.stringify(booksArray));
    title.value = '';
    author.value = '';
  }
});
