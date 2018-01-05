const newBookButton = document.getElementById('new-book')
const booksTable = document.getElementById('table-books')

let myLibrary = []

function Book(title, author, pages) {
	// book constructor
	this.title = title
	this.author = author
	this.pages = pages
}

function addBookToLibrary(book) {
	myLibrary.push(book)
}

newBookButton.addEventListener("click", function() {
	console.log("clicked")
	var newRow = booksTable.insertRow(1);
	var newTitle = newRow.insertCell(0);
	var newAuthor = newRow.insertCell(1);
	var newPages = newRow.insertCell(2);
	var newReadStatus = newRow.insertCell(3);
	newTitle.innerHTML = "1Q84";
	newAuthor.innerHTML = "Murikami";
	newPages.innerHTML = 892;
	newReadStatus.innerHTML = "Yes"
})
