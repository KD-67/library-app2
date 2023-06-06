// DOM:
const titleInput = document.querySelector("#title-input");
const authorInput = document.querySelector("#author-input");
const readInput = document.querySelector("#read-input");
const bookshelf = document.querySelector(".bookshelf");
const addNewBookBtn = document.querySelector("#add-new-book-btn");
const card = document.querySelector(".card");

let myLibrary = [];

// creates new card on bookshelf, populates it with the proper divs,

const createNewCard = (book, index) => {
  const newCard = document.createElement("div");
  const newBookInfo1 = document.createElement("div");
  const newBookInfo2 = document.createElement("div");
  const newBookInfo3 = document.createElement("div");
  const newBookInfo4 = document.createElement("div");
  const newRmBtn = document.createElement("button");
  const newTogBtn = document.createElement("button");
  const newTitle = document.createElement("h3");
  const newAuthor = document.createElement("h4");
  const newRead = document.createElement("h4");

  newCard.className = "card";
  newBookInfo1.className = "book-info";
  newBookInfo2.className = "book-info";
  newBookInfo3.className = "book-info";
  newBookInfo4.className = "book-info card-btns";

  newRmBtn.innerText = "Remove";
  newRmBtn.setAttribute("data-index", index);
  newRmBtn.addEventListener("click", () => {
    const bookIndex = parseInt(newRmBtn.getAttribute("data-index"));
    removeBook(bookIndex);
  });

  newTogBtn.innerText = "Toggle Read";
  newTogBtn.setAttribute("data-index", index);
  newTogBtn.addEventListener("click", () => {
    const bookIndex = parseInt(newTogBtn.getAttribute("data-index"));
    const book = myLibrary[bookIndex];
    toggleRead(book);
    newRead.innerText = book.readStatus;
  });

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
  newBookInfo4.appendChild(newTogBtn);
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
  bookshelf.innerHTML = "";
  myLibrary.forEach((book, index) => {
    createNewCard(book, index);
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

  titleInput.value = null;
  authorInput.value = null;
  readInput.value = "Finished";
});

// remove book from library

const removeBook = (index) => {
  myLibrary.splice(index, 1);
  displayMyLibrary();
};

// toggle the readStatus on the Book's instance

const toggleRead = (book) => {
  if (book.readStatus === "Finished") {
    book.readStatus = "Not Finished Yet";
  } else if (book.readStatus === "Not Finished Yet") {
    book.readStatus = "Finished";
  }
};
