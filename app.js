let myLibrary = [];
const userInputTitle = document.querySelector('#userInputTitle');
const userInputAuthor = document.querySelector('#userInputAuthor');
const submitInput = document.querySelector('.submitInput');
const cardArea = document.querySelector('.bookDisplay');

submitInput.addEventListener("click", () => {
  addToLibrary();
  console.log("Clicked ran");
});

function Book({title: title, author: author}){
  this.title = title;
  this.author = author;
}

function addToLibrary(){
  let title = userInputTitle.value;
  let author = userInputAuthor.value;
  console.log(title);
  console.log(author);
  /**
   * @type Array<string>
   */
  // let splitInput = title.join(" ");
  myLibrary.push(new Book({title: title, author: author}));
  console.log(`Added "${title}" by ${author}`);
  console.log(myLibrary);
  displayBookCard(myLibrary[myLibrary.length-1]);
  // myLibrary.forEach((book)=>{
  //   displayBookCard(book);
  // })
}

function displayBookCard(userObj){
  let card = document.createElement("div");
  let cardTitle = document.createElement("h2");
  let cardAuthor = document.createElement("h3");

  card.classList.add("card");
  cardTitle.textContent = userObj.title;
  cardAuthor.textContent = userObj.author;
  card.append(cardTitle, cardAuthor);
  cardArea.append(card);
  
  console.log(userObj);
}
