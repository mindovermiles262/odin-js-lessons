const submitBookButton = document.getElementById('submit')
const booksTable = document.getElementById('table-books')
const addBookForm = document.getElementById('form-new-book')

let myLibrary = []

function Book(title, author, pages, read) {
	this.title = title
	this.author = author
	this.pages = pages
	this.read = read
}

function newBook(library) {
	let title = document.getElementById('new-title').value;
	let author = document.getElementById('new-author').value;
	let pages = document.getElementById('new-pages').value;
	let read = document.getElementById('new-read').checked;
	addBookToLibrary(new Book(title, author, pages, read))
	render(library)
}

function clearForm() {
	addBookForm[0].value = ''
	addBookForm[1].value = ''
	addBookForm[2].value = ''
	addBookForm[3].checked = false;
}

submitBookButton.addEventListener('click', function() {
	newBook(myLibrary)
	clearForm()
})

function addBookToLibrary(book) {
	myLibrary.push(book)
}

function addBookToTable(book) {
	var newRow = booksTable.insertRow(-1);
	var newTitle = newRow.insertCell(0).innerText = book.title;
	var newAuthor = newRow.insertCell(1).innerText = book.author;
	var newPages = newRow.insertCell(2).innerText = book.pages;
	var newReadStatus = newRow.insertCell(3).innerText = book.read;
}

function render(library) {
	booksTable.innerHTML = ''
	library.forEach(function(book) {
		addBookToTable(book);
	})
}

addBookToLibrary(new Book('The Hobbit', 'J.R.R. Tolkien', 371, false))
addBookToLibrary(new Book('Harry Potter #1', 'J.K. Rowling', 383, true))
render(myLibrary)