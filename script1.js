const myLibrary = [];

function Book(author, title, chapters, read) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  };
  this.author = author;
  this.title = title;
  this.chapters = chapters;
  this.read = read;
  this.id = crypto.randomUUID();
};

function addBookToLibrary(author, title, chapters, read) {
  let newBook = new Book(author, title, chapters, read);
  myLibrary.push(newBook)
};

addBookToLibrary("Brandon Sanderson", "The Way of Kings", 75, true);
addBookToLibrary("Brandon Sanderson", "Words of Radiance", 89, true);
addBookToLibrary("Brandon Sanderson", "Oathbringer", 122, true);
addBookToLibrary("Brandon Sanderson", "Rhythm of War", 117, true);
addBookToLibrary("Brandon Sanderson", "Wind and Truth", 147, true);

//console.log(myLibrary);

function renderTable() {
  for (let book of myLibrary) { //loops through myLibrary - Value of 'book' is the book object
    let libraryTable = document.querySelector(".library");
    let newRow = document.createElement("tr");

    for (let prop in book) {
      let newData = document.createElement("td");
      newData.innerHTML = book[prop];
      newRow.appendChild(newData);
    }

    
    let removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.dataset.id = book.id;
    removeBtn.addEventListener("click", removeBook);
    newRow.appendChild(removeBtn);
    
    libraryTable.appendChild(newRow);
  }
}

renderTable();

function removeBook(event) {
  let parent = document.querySelector(".library");
  let ident = event.target;
  let child = ident.parentNode;
  parent.removeChild(child);
};