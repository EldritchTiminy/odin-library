// Library array. Holds all of our book objects.
let myLibrary = [];


// Object constructor. Creates a new book object when called.
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

// This function uses the object constructor above (function Book) to create a new book and push it
// to the myLibrary array.
function addBookToLibrary(author, title, chapters, read) {
  let newBook = new Book(author, title, chapters, read);
  myLibrary.push(newBook)
};


// Some sample books for our array.
addBookToLibrary("Brandon Sanderson", "The Way of Kings", 75, true);
addBookToLibrary("Brandon Sanderson", "Words of Radiance", 89, true);
addBookToLibrary("Brandon Sanderson", "Oathbringer", 122, true);
addBookToLibrary("Brandon Sanderson", "Rhythm of War", 117, true);
addBookToLibrary("Brandon Sanderson", "Wind and Truth", 147, true);


//This function loops through all of the book objects in the 'myLibrary' array and adds them to the
//table (<table class="library">) in index.html.
function renderTable() {
  let libraryTable = document.querySelector(".library tbody");
  libraryTable.innerHTML = "";
  for (let book of myLibrary) { //loops through myLibrary - Value of 'book' is the book object.
    let newRow = document.createElement("tr"); // Creating a floating row. (not in dom yet)

    // Loops through the properties in each book object, adding each to a new table data elem.
    for (let prop in book) {
      let newData = document.createElement("td");
      newData.innerHTML = book[prop];
      newRow.appendChild(newData); // Adding the table data element to the row.
    }

    // Adds the remove button to each row.
    let removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.dataset.id = book.id;
    removeBtn.addEventListener("click", removeBook);
    newRow.appendChild(removeBtn);
    
    // Adds floating row to dom as a child of our table element.
    libraryTable.appendChild(newRow);
  }
}

renderTable();

// This function removes a row from our table element when the "Remove" button is clicked and
// Re-renders the table.
function removeBook(event) {
  let ident = event.target;
  let idToRmv = ident.getAttribute("data-id");
  console.log(idToRmv);
  ident.parentNode.remove();
  myLibrary = myLibrary.filter((book) => book.id != idToRmv);
  renderTable();
};

// Form for adding new books
let newBtn = document.querySelector(".newBtn"); // Selects and stores "New Book" button.
let newBkFm = document.getElementById("newBkFm"); // Selects and stores form element.
let newBkAuth = document.getElementById("author"); // Selects text field for new author.
let newBkTitle = document.getElementById("title"); // Selects text field for new title.
let newBkChpt = document.getElementById("chapters"); // Selects field for new book chapter count.
let newBkRd = document.getElementById("read"); // Selects input for new book read status.
let cancelBtn = document.getElementById("cl"); // Selects cancel button.
let submitBtn = document.getElementById("newBkSub"); // Selects submit button.

newBtn.addEventListener("click", () => { // Displays form when "New Book" is pressed.
  newBkFm.style.display = "block";
});

cancelBtn.addEventListener("click", formClose);

function formClose() { // Resets and hides form.
  newBkFm.reset();
  newBkFm.style.display = "none";
}

submitBtn.addEventListener("click", submitNewBook);

function submitNewBook() {
  addBookToLibrary(newBkAuth.value, newBkTitle.value, newBkChpt.value, newBkRd.value);
  renderTable();
  formClose();
};