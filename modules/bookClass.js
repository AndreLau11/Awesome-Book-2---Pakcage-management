export class Book {
    constructor(title, author) {
      this.title = title;
      this.author = author;
    }  
    static addBook = () => {
      const booksList = document.querySelector('.books-container');
      let booksCode = '';
      booksArray.forEach((element, index) => {
        const { title, author } = element;
        if (index % 2 === 0) {
          booksCode += `
          <div class="book changeColor">
            <div class="sub-book">
                <p>${title}</p>
                <p>${author}</p>
            </div>
            <button type="submit" class="delete" onclick='removeBook("${title}")'>Remove</button>
        </div>
              `;
        } else {
          booksCode += `
          <div class="book">
            <div class="sub-book">
              <p>${title}</p>
              <p>${author}</p>
            </div>
            <button type="submit" class="delete" onclick='removeBook("${title}")'>Remove</button>
          </div>
              `;
        }
      });
      booksList.innerHTML = booksCode;
      localStorage.setItem('booksData', JSON.stringify(booksArray));
    };
  
    static deleteBook = (el) => {
      if (el.classList.contains('delete')) {
        el.parentElement.remove();
      }
    };
  }