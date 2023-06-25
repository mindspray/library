let myLibrary = [];
const userInputTitle = document.querySelector('#userInputTitle');
const userInputAuthor = document.querySelector('#userInputAuthor');
const userInputRead = document.querySelector('#isRead');
const submitInput = document.querySelector('.submitInput');
const cardArea = document.querySelector('.bookDisplay');

submitInput.addEventListener("click", () => {
  if (userInputAuthor.value || userInputTitle.value){
    addToLibrary();
  }
  userInputTitle.value = "";
  userInputAuthor.value = "";
  userInputRead.checked = false;
});

class Book {
  constructor(title, author, isRead){
    this.title = title;
    this.author = author;
    this.isRead = isRead;
  }
}

function addToLibrary(){
  let title = userInputTitle.value;
  let author = userInputAuthor.value;
  let isRead = userInputRead.checked;
  myLibrary.push(new Book(title, author, isRead));
  displayBookCard(myLibrary[myLibrary.length-1]);
}

function displayBookCard(userObj){
  let card = document.createElement("div");
  let cardTitle = document.createElement("h2");
  let cardAuthor = document.createElement("h3");
  let readDiv = document.createElement("div");
  let closeDiv = document.createElement("div");

  card.classList.add("card");
  readDiv.classList.add("read");
  if(userObj.isRead === true){
    readDiv.textContent = "read";
    userObj.isRead = true;
  } else if (userObj.isRead === false){
    readDiv.textContent = " not read";
    userObj.isRead = false;
  }
  readDiv.addEventListener("click", ()=> {
    if(userObj.isRead === true){
      userObj.isRead = false;
      readDiv.textContent = "Not read";
    } else if (userObj.isRead === false){
      userObj.isRead = true;
      readDiv.textContent = "read";
    }
  })
  closeDiv.classList.add("close");
  closeDiv.addEventListener("click", ()=> {
    card.remove();
  })
  cardTitle.textContent = userObj.title;
  cardAuthor.textContent = userObj.author;
  card.append(cardTitle, cardAuthor, closeDiv);
  card.append(readDiv);
  cardArea.append(card);
  
  console.log(userObj);
}
