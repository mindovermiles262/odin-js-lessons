const newBookButton = document.getElementById('new-book')

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
})
