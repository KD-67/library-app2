// DOM:
const titleInput = document.querySelector("#title-input");
const authorInput = document.querySelector("#author-input");
const readInput = document.querySelector("#read-input");
const bookshelf = document.querySelector(".bookshelf");
const addNewBookBtn = document.querySelector("#add-new-book-btn");
const card = document.querySelector(".card");

let myLibrary = [];

// creates new card on bookshelf, populates it with the proper divs,

const createNewCard = (book) => {
  const newCard = document.createElement("div");
  const newBookInfo1 = document.createElement("div");
  const newBookInfo2 = document.createElement("div");
  const newBookInfo3 = document.createElement("div");
  const newBookInfo4 = document.createElement("div");
  const newRmBtn = document.createElement("button");
  const newTitle = document.createElement("h3");
  const newAuthor = document.createElement("h4");
  const newRead = document.createElement("h4");

  newCard.className = "card";
  newBookInfo1.className = "book-info";
  newBookInfo2.className = "book-info";
  newBookInfo3.className = "book-info";
  newBookInfo4.className = "book-info";

  newRmBtn.innerText = "Remove";
  newTitle.innerText = book.title;
  newAuthor.innerText = book.author;
  newRead.innerText = book.readStatus;

  bookshelf.appendChild(newCard);
  newCard.appendChild(newBookInfo1);
  newCard.appendChild(newBookInfo2);
  newCard.appendChild(newBookInfo3);
  newCard.appendChild(newBookInfo4);
  newBookInfo1.appendChild(newTitle);
  newBookInfo2.appendChild(newAuthor);
  newBookInfo3.appendChild(newRead);
  newBookInfo4.appendChild(newRmBtn);
};

// new Book object constructor

function Book(title, author, readStatus) {
  this.title = title;
  this.author = author;
  this.readStatus = readStatus;
}

// adds new Book obj to myLibrary array

const addBookToLibrary = (newBook) => {
  myLibrary.push(newBook);
};

// displays updated myLibrary on page, each obj in its own card
// calls createNewCard, and populates it with the object properties

const displayMyLibrary = () => {
  console.log(myLibrary);

  bookshelf.innerHTML = "";
  myLibrary.forEach((book) => {
    createNewCard(book);
  });
};

// calls all prev functions when the 'Add New Book' button is clicked

addNewBookBtn.addEventListener("click", function (event) {
  event.preventDefault();

  const newBook = new Book(
    titleInput.value,
    authorInput.value,
    readInput.value
  );

  addBookToLibrary(newBook);

  displayMyLibrary();
});
