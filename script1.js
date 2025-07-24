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
console.log(myLibrary);
console.log(myLibrary.length);

for (let counter = 0; counter < myLibrary.length; counter++) {
  let newRow = document.createElement('tr');
  let table = document.querySelector(".library");
  table.appendChild(newRow);
  let currentObject = myLibrary[counter];

  let currentObjAuthor = document.createElement('td');
  currentObjAuthor.innerHTML = currentObject.author;
  newRow.appendChild(currentObjAuthor);

  let currentObjTitle = document.createElement('td');
  currentObjTitle.innerHTML = currentObject.title;
  newRow.appendChild(currentObjTitle);

  let currentObjChap = document.createElement('td');
  currentObjChap.innerHTML = currentObject.chapters;
  newRow.appendChild(currentObjChap);

  let currentObjRead = document.createElement('td');
  if (currentObject.read === true) {
    currentObjRead.innerHTML = "Read";
  } else {
    currentObjRead.innerHTML = "Unread";
  };
  newRow.appendChild(currentObjRead);

  let currentObjId = document.createElement('td');
  currentObjId.innerHTML = currentObject.id;
  newRow.appendChild(currentObjId);
}