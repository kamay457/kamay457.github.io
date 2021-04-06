  
/* globals require */
console.log("Hello, Airtable");


// load the airtable library, call it "Airtable"
var Airtable = require("airtable");
console.log(Airtable);

// use the airtable library to get a variable that represents one of our bases
var base = new Airtable({ apiKey: "keycg1GTfNi5JyiP0" }).base(
  "appKTUMSmQk2NSRGR"
);

//get the "books" table from the base, select ALL the records, and specify the functions that will receive the data
base("books").select({}).eachPage(gotPageOfBooks, gotAllBooks);

// an empty array to hold our book data
const books = [];

// callback function that receives our data
function gotPageOfBooks(records, fetchNextPage) {
  console.log("gotPageOfBooks()");
  // add the records from this page to our books array
  books.push(...records);
  // request more pages
  fetchNextPage();
}

// call back function that is called when all pages are loaded
function gotAllBooks(err) {
  console.log("gotAllBooks()");

  // report an error, you'd want to do something better than this in production
  if (err) {
    console.log("error loading books");
    console.error(err);
    return;
  }

  // call function to show the books
  showBooks();
}

/////////////////////////////////////////////////////////////////////////////////



// create the book-spines on the shelf
function showBooks() {
  console.log("showBooks()");

  // find the shelf element
  // const shelf = document.getElementById("shelf");

  // loop through the books loaded from the Airtable API
  books.forEach((book) => {

    var bookContainer = document.createElement("div");
    bookContainer.classList.add("book-container");
    document.querySelector(".container").append(bookContainer)


    // add book title
    var bookTitle = document.createElement("h2")
    bookTitle.classList.add("book-title")
    bookTitle.innerText = book.fields.title;
    bookContainer.append(bookTitle);


    var bookDescription = document.createElement("p");
    bookDescription.classList.add("book-description");
     bookDescription.innerText = book.
     fields.description;
     bookContainer.append(bookDescription);

     var bookImage = document.createElement("img");
     bookImage.classList.add("cover_image");
     bookImage.src = book.fields.cover_image[0].url;
     bookContainer.append(bookImage);


     bookContainer.addEventListener("click", function(){
        bookDescription.classList.toggle("active");
        bookImage.classList.toggle("active");
     })
    // create the div, set its text and class
    // const div = document.createElement("div");
    // div.innerText = book.fields.title;
    // div.classList.add("book-spine");
    // // when the user clicks this book spine, call showBook and send the book data and this spine element
    // div.addEventListener("click", () => {
    //   showBook(book, div);
    // });
    // // put the newly created book spine on the shelf
    // shelf.appendChild(div);
  });
}

// show the detail info for a book, and highlight the active book-spine
// function showBook(book, div) {
//   console.log("showBook()", book);

//   // find the book detail element
//   const bookDetail = document.getElementById("book-detail");

//   // populate the template with the data in the provided book
//   bookDetail.getElementsByClassName("title")[0].innerText = book.fields.title; //
//   bookDetail.getElementsByClassName("description")[0].innerText =
//     book.fields.description;
//   bookDetail.getElementsByClassName("more")[0].href = book.fields.more;
//   bookDetail.getElementsByClassName("cover_image")[0].src =
//     book.fields.cover_image[0].url;
//   console.log(book.fields.cover_image);



  

//   // remove the .active class from any book spines that have it...
//   const shelf = document.getElementById("shelf");
//   const bookSpines = shelf.getElementsByClassName("active");
//   for (const bookSpine of bookSpines) {
//     bookSpine.classList.remove("active");
//   }
//   // ...and set it on the one just clicked
//   div.classList.add("active");

//   // reveal the detail element, we only really need this the first time
//   // but its not hurting to do it more than once
//   bookDetail.classList.remove("hidden");
// }