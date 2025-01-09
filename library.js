const myLibrary = [];

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
  this.getInfo = function() {
    return `"${this.title}" by ${this.author}, ${this.pages} pages, ${this.isRead ? "read" : "not read"}`
  }
}

function addBookToLibrary() {
  // do stuff here
}

book1 = new Book("Piranesi", "Susanna Clark", 398, true);
book2 = new Book("The Starless Sea", "Erin Morgenstern", 512, false);
book3 = new Book("The Night Circus", "Erin Morgenstern", 510, true);
book4 = new Book("Jonathan Strange & Mr Norrell", "Susanna Clark", 1006, true);
book5 = new Book("Neverwhere", "Neil Gaiman", 370, false);
book5 = new Book("The Buried Giant", "Kazuo Ishiguro", 317, false);

myLibrary.push(book1, book2, book3)

console.log(myLibrary)

const bookList = document.getElementById("book-list");
const btnNewBook = document.getElementById("new-book");
const dialog = document.getElementById('new-book-dialog');

myLibrary.forEach(book => {
  const listItem = document.createElement("li")
  listItem.innerText = book.title
  bookList.append(listItem)
})

btnNewBook.addEventListener('click', () => {
  dialog.showModal()
})
