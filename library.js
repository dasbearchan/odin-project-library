const archive = [];

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
  this.getInfo = function() {
    return `"${this.title}" by ${this.author}, ${this.pages} pages, ${this.isRead ? "read" : "not read"}`
  }
}

book1 = new Book("Piranesi", "Susanna Clark", 398, true);
book2 = new Book("The Starless Sea", "Erin Morgenstern", 512, false);
book3 = new Book("The Night Circus", "Erin Morgenstern", 510, true);
book4 = new Book("Jonathan Strange & Mr Norrell", "Susanna Clark", 1006, true);
book5 = new Book("Neverwhere", "Neil Gaiman", 370, false);
book6 = new Book("The Buried Giant", "Kazuo Ishiguro", 317, false);

archive.push(book1, book2, book3, book4, book5, book6)

const bookList = document.getElementById("book-list");
const btnNewBook = document.getElementById("new-book");
const dialog = document.getElementById('new-book-dialog');
const form = dialog.querySelector('form')
const btnCloseDialog = document.getElementById('close-dialog');
const btnSubmitDialog = document.getElementById('close-dialog');

function updateLibrary() {
  bookList.innerHTML = ""
  archive.forEach((book, index) => {
    const card = document.createElement("div")
    const buttonDiv = document.createElement("div")
    const cardTitle = document.createElement("p")
    const cardAuthor = document.createElement("p")
    const cardPages = document.createElement("p")
    const btnX = document.createElement("button")
    const btnRead = document.createElement("button")

    card.className = "card"
    buttonDiv.className = "buttonDiv"
    cardTitle.innerText = book.title
    cardAuthor.innerText = `by ${book.author}`
    cardPages.innerText = book.pages
    btnX.innerText = "Remove"
    btnRead.innerText = book.isRead

    btnX.addEventListener('click', () => {
      archive.splice(index, 1)
      updateLibrary()
    })
    btnRead.addEventListener('click', () => {
      book.isRead = !book.isRead
      updateLibrary()
    })

    buttonDiv.append(btnRead, btnX)
    card.append(cardTitle, cardAuthor, cardPages, buttonDiv)
    bookList.append(card)
  
  })
  console.log(archive)
}

updateLibrary()

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(form)

  const title = formData.get('title')
  const author = formData.get('author');
  const pages = formData.get('pages')
  const read = document.getElementById("read").checked

  const newBook = new Book(title, author, pages, read)
  archive.push(newBook)
  updateLibrary()
  dialog.close();
})

btnNewBook.addEventListener('click', () => {
  dialog.showModal();
})

btnCloseDialog.addEventListener('click', () => {
  dialog.close();
})

