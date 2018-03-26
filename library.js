const submitBookButton = document.getElementById('submit')
const booksTable = document.getElementById('table-books')
const addBookForm = document.getElementById('form-new-book')

let myLibrary = []

function Book(title, author, pages, read) {
	this.title = title
	this.author = author
	this.pages = pages
	this.read = read
  this.slug = `${title.split(' ').join('_')}-${pages}`
}

function addBookToLibrary(book, library) {
  library.push(book)
}

const hobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 351, true)
const harryPotter = new Book('Harry Potter', 'J.K. Rowling', 385, true)
const codingInterview = new Book('Cracking the Coding Interview', 'Gayle McDowell', 692, false)

addBookToLibrary(hobbit, myLibrary)
addBookToLibrary(harryPotter, myLibrary)
addBookToLibrary(codingInterview, myLibrary)

function render(library) {
  // Delete all books from table
  while(booksTable.firstChild) {
    booksTable.removeChild(booksTable.firstChild);
  }

  // Add books in library to table
  myLibrary.forEach( book => {
    const newRow = booksTable.insertRow(-1);
    newRow.id = `${book.slug}`
    newRow.insertCell(0).innerText = book.title;
    newRow.insertCell(1).innerText = book.author;
    newRow.insertCell(2).innerText = book.pages;
    newRow.insertCell(3).innerHTML = `<button class="toggle">${book.read}</button>`;
    newRow.insertCell(4).innerHTML = "<button class='remove'>Remove</button>"
  })

  // Toggle Book Read
  let toggleReadButtons = document.getElementsByClassName('toggle');
  toggleReadButtons = Array.from(toggleReadButtons)
  toggleReadButtons.forEach(function(button) {
    button.addEventListener('click', function(book) {
      bookId = book.target.parentNode.parentNode.id
      toggleReadStatus(bookId)
      render(myLibrary)
    })
  })

  // Remove books from library
  let removeBookButtons = document.getElementsByClassName('remove');
  removeBookButtons = Array.from(removeBookButtons);
  removeBookButtons.forEach(function(button) {
    button.addEventListener('click', function(book) {
      bookId = book.target.parentNode.parentNode.id
      removeBook(bookId)
      render(myLibrary)
    })
  })
}

function toggleReadStatus(bookId) {
  myLibrary.forEach(function(book) {
    if (book.slug === bookId) {
      let currentStatus = book.read
      book.read = !currentStatus
    }
  })
}

function removeBook(bookId) {
  myLibrary.forEach(function(book) {
    if (book.slug === bookId) {
      let index = myLibrary.indexOf(book)
      if (index >=0) {
        myLibrary.splice(index, 1);
      }
    }
  })
}

submitBookButton.addEventListener('click', function() {
  const title = document.getElementById('new-title').value;
  const author = document.getElementById('new-author').value;
  const pages = document.getElementById('new-pages').value;
  const read = document.getElementById('new-read').checked;
  const addedBook = new Book(title, author, pages, read)
  addBookToLibrary(addedBook, myLibrary)
  render(myLibrary)
})

render(myLibrary)

