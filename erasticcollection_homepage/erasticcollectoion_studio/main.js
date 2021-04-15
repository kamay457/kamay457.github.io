/* globals require */
console.log("Hello, Airtable");


// load the airtable library, call it "Airtable"
var Airtable = require("airtable");
console.log(Airtable);

// use the airtable library to get a variable that represents one of our bases
var base = new Airtable({ apiKey: "keycg1GTfNi5JyiP0" }).base(
  "app0gHqSASvhbS9Xf"
);

//get the "books" table from the base, select ALL the records, and specify the functions that will receive the data
base("message").select({view: 'Grid view'}).eachPage(gotPageOfDms, gotAllDms);

// an empty array to hold our book data
const dms = [];

// callback function that receives our data
function gotPageOfDms(records, fetchNextPage) {
  console.log("gotPageOfDms()");
  // add the records from this page to our array
  dms.push(...records);
  // request more pages
  fetchNextPage();
}

// call back function that is called when all pages are loaded
function gotAllDms(err) {
  console.log("gotAllDms()");

  // report an error, you'd want to do something better than this in production
  if (err) {
    console.log("error loading dms");
    console.error(err);
    return;
  }

  // call function to show the books
  consoleLogDms();
  try{
    showDms();
} catch (e) {
  console.log(e);
}
}
// /////////////////////////////////////////////////////////////////////////////////




function consoleLogDms() {
  console.log("consoleLogDms()");
  dms.forEach((dm) => {
    console.log("Dm:", dm);
  });
}


function showDms() {
  console.log("showDms()");
  dms.forEach((dm) => {


       // creating a new div container

      var dmContainer = document.createElement("div");
      dmContainer.classList.add("dm-container");
      document.querySelector(".container").append(dmContainer);


      // creating a new div box
       // this is where our cards go on
      var dmBox = document.createElement("div");
      dmBox.classList.add("dm-box");
      document.getElementById("box").append(dmBox);



    
     //add image to box
     var dmMeaning = document.createElement("p");
     dmMeaning.classList.add("dm_meaning");
     dmMeaning.innerText = dm.fields.meaning;
     dmBox.append(dmMeaning);


     // add place to box

     var dmPlace = document.createElement("p");
     dmPlace.classList.add("dm_place");
     dmPlace.innerText = dm.fields.place;
     dmBox.append(dmPlace);

     // add image to box
    var dmImage = document.createElement("img");
    dmImage.classList.add("dm_image");
    dmImage.src = dm.fields.image[0].url;
    // dmImage.setAttribute('data-description', dm.fields.image);
    // document.body.appendChild(dmImage);
    dmBox.append(dmImage);



    var dmGenre = document.createElement("div");
    var dmGenre = dm.fields.genre;

    //get genre from airtable
    // var  dmGenre = dm.fields.genre;
    // dmGenre.forEach(function(genre){
    //  dmContainer.classList.add(genre) 
    // })



    var circle_One = document.querySelector(".circle_one");
    var circle_Two = document.querySelector(".circle_two");
    var circle_Three = document.querySelector(".circle_three");
    var circle_Four = document.querySelector(".circle_four");
    var circle_Five = document.querySelector(".circle_five");
    var circle_Six = document.querySelector(".circle_six");
    var circle_Seven = document.querySelector(".circle_seven");




   circle_One.addEventListener("click", function(){
      if (dmGenre === "emotion_one") {
        dmBox.style.display = "";
        // dmImage.src = dm.fields.image[0].url;
        // dmImage.classList.add("dm_image");
        // dmMeaning.classList.add("dm_meaning");
        // dmMeaning.innerText = dm.fields.meaning;
        // dmPlace.classList.add("dm_place");
        // dmPlace.innerText = dm.fields.place;

        // dmImage.style.display = "inline-block";
        // dmMeaning.style.display = "inline-block";
        // dmPlace.style.display = "inline-block";
        // document.getElementById("box").appendChild(dmGenre);
      }
      else {
        dmBox.style.display = "none";
        // dmImage.style.display = "none";
        // dmMeaning.style.display = "none";
        // dmPlace.style.display = "none"
      }
    })


  circle_Two.addEventListener("click", function(){
      if (dmGenre === "emotion_two") {
         dmBox.style.display = "";
     //    dmImage.src = dm.fields.image[0].url;
     //    dmImage.classList.add("dm_image");
     //    dmMeaning.classList.add("dm_meaning");
     //    dmMeaning.innerText = dm.fields.meaning;
     //    dmPlace.classList.add("dm_place");
     // dmPlace.innerText = dm.fields.place;

     //    dmImage.style.display = "inline-block";
     //    dmMeaning.style.display = "inline-block";
     //    dmPlace.style.display = "inline-block";
        // document.getElementById("box").appendChild(dmGenre);
      }
      else {
             dmBox.style.display = "none";
        // dmImage.style.display = "none";
        // dmMeaning.style.display = "none";
        //  dmPlace.style.display = "none"
      }
    })

    circle_Three.addEventListener("click", function(){
      if (dmGenre === "emotion_three") {
        dmBox.style.display = "";
     //    dmImage.src = dm.fields.image[0].url;
     //    dmImage.classList.add("dm_image");
     //    dmMeaning.classList.add("dm_meaning");
     //    dmMeaning.innerText = dm.fields.meaning;
     //    dmPlace.classList.add("dm_place");
     // dmPlace.innerText = dm.fields.place;

     //    dmImage.style.display = "inline-block";
     //    dmMeaning.style.display = "inline-block";
     //    dmPlace.style.display = "inline-block";

        // document.getElementById("box").appendChild(dmGenre);
      }
      else {
         dmBox.style.display = "none";
        // dmImage.style.display = "none";
        // dmMeaning.style.display = "none";
        //  dmPlace.style.display = "none"
      }
    })

    circle_Four.addEventListener("click", function(){
      if (dmGenre === "emotion_four") {
        dmBox.style.display = "";
     //    dmImage.src = dm.fields.image[0].url;
     //    dmImage.classList.add("dm_image");
     //    dmMeaning.classList.add("dm_meaning");
     //    dmMeaning.innerText = dm.fields.meaning;
     //    dmPlace.classList.add("dm_place");
     // dmPlace.innerText = dm.fields.place;

     //    dmImage.style.display = "inline-block";
     //    dmMeaning.style.display = "inline-block";
     //    dmPlace.style.display = "inline-block";
     //    document.getElementById("box").appendChild(dmGenre);
      }
      else {
        dmBox.style.display = "none";
        // dmImage.style.display = "none";
        // dmMeaning.style.display = "none";
        //  dmPlace.style.display = "none"
      }
    })

    circle_Five.addEventListener("click", function(){
      if (dmGenre === "emotion_five") {
        dmBox.style.display = "";
     //    dmImage.src = dm.fields.image[0].url;
     //    dmImage.classList.add("dm_image");
     //    dmMeaning.classList.add("dm_meaning");
     //    dmMeaning.innerText = dm.fields.meaning;
     //    dmPlace.classList.add("dm_place");
     // dmPlace.innerText = dm.fields.place;

     //    dmImage.style.display = "inline-block";
     //    dmMeaning.style.display = "inline-block";
     //    dmPlace.style.display = "inline-block";
     //    document.getElementById("box").appendChild(dmGenre);
      }
      else {
         dmBox.style.display = "none"; 
        // dmImage.style.display = "none";
        // dmMeaning.style.display = "none";
        //  dmPlace.style.display = "none"
      }
    })

  circle_Six.addEventListener("click", function(){
      if (dmGenre === "emotion_six") {
        dmBox.style.display = "";
     //    dmImage.src = dm.fields.image[0].url;
     //    dmImage.classList.add("dm_image");
     //    dmMeaning.classList.add("dm_meaning");
     //    dmMeaning.innerText = dm.fields.meaning;
     //    dmPlace.classList.add("dm_place");
     // dmPlace.innerText = dm.fields.place;

     //    dmImage.style.display = "inline-block";
     //    dmMeaning.style.display = "inline-block";
     //    dmPlace.style.display = "inline-block";
     //    document.getElementById("box").appendChild(dmGenre);
      }
      else {
           dmBox.style.display = "none"; 
        // dmImage.style.display = "none";
        // dmMeaning.style.display = "none";
        //  dmPlace.style.display = "none"
      }
    })

circle_Seven.addEventListener("click", function(){
      if (dmGenre === "others") {
          dmBox.style.display = "";
     //    dmImage.src = dm.fields.image[0].url;
     //    dmImage.classList.add("dm_image");
     //    dmMeaning.classList.add("dm_meaning");
     //    dmMeaning.innerText = dm.fields.meaning;
     //    dmPlace.classList.add("dm_place");
     // dmPlace.innerText = dm.fields.place;

     //    dmImage.style.display = "inline-block";
     //    dmMeaning.style.display = "inline-block";
     //    dmPlace.style.display = "inline-block";
     //    document.getElementById("box").appendChild(dmGenre);
      }
      else {
         dmBox.style.display = "none"; 
        // dmImage.style.display = "none";
        // dmMeaning.style.display = "none";
        // dmPlace.style.display = "none";

      }
    })



  


    
    
   
    });

    // var filterEm_1 =  document.querySelector(".em_1");
    // filterEm_1.addEventListener("click", (function(){
    //   if (dmContainer.classList.contains("emotion1")) {
    //     dmImage.style.display = "grid";
    //   } else{
    //     dmImage.style.display = "none";
    //   }
    // })


  // });
}
// let image = document.querySelector("img");

// image.addEventListener("mouseover", function( event ) {
  
//   event.target.style.color = "orange";


// };


// document.addEventListener('mouseover', function(event){
//   if (event.target.tagName == "IMG"){
//     var dmImage = event.target.getAttribute('data-description');
//     var dmBox = document.createElement("div");
//     dmBox.classList.add("dm-box");
//     document.getElementById("box").append(dmBox);

//     //add, meaning to box

//     var dmMeaning = document.createElement("p");
//      dmMeaning.classList.add("dm_meaning");
//      dmMeaning.innerText = dm.fields.meaning;
//      dmBox.append(dmMeaning);


//      // add place to box

//      var dmPlace = document.createElement("p");
//      dmPlace.classList.add("dm_place");
//      dmPlace.innerText = dm.fields.place;
//      dmBox.append(dmPlace);

//     dmMeaning.style.display = "block";
//   }console.log('img');

// })
// document.addEventListener('mouseover', function(event){
// if (event.target.tagName === "IMG") {
//   var currentDm = dms[Array.from(event.target.parentNode.parentNode.children).indexOf(event.target.parentNode)];

//   var dmImage = event.target.getAttribute('data-description');
//   var dmBox = document.createElement("div");
//   dmBox.classList.add("dm-box");
//   document.getElementById("box").append(dmBox);
//   var dmMeaning = document.createElement("p");
//   dmMeaning.classList.add("dm_meaning");
//   dmMeaning.innerText = currentDm.fields.meaning;
//   dmBox.append(dmMeaning); 


//   // add place to box

//   var dmPlace = document.createElement("p");
//   dmPlace.classList.add("dm_place");
//   dmPlace.innerText = currentDm.fields.place;
//   dmBox.append(dmPlace);
// }
  
// })


let colorRed = document.querySelector(".circle_one");
let colorDark = document.querySelector(".circle_two");
let colorLight = document.querySelector(".circle_three");
let colorMedium = document.querySelector(".circle_four");
let colorWhite = document.querySelector(".circle_five");
let colorOrange = document.querySelector(".circle_six"); 
let colorOthers = document.querySelector(".circle_seven"); 


colorRed.addEventListener("click", function(event){
    document.body.style.backgroundColor = "#ff0000"; 
});

colorDark.addEventListener("click", function(event){
    document.body.style.backgroundColor = '#db2a27'; 
});

colorLight.addEventListener("click", function(event){
    document.body.style.backgroundColor = '#ff2f00'; 
});
colorMedium.addEventListener("click", function(event){
    document.body.style.backgroundColor = '#801a18'; 
});
colorWhite.addEventListener("click", function(event){
    document.body.style.backgroundColor = '#ff7885'; 
});
colorOrange.addEventListener("click", function(event){
    document.body.style.backgroundColor = '#7d4545'; 
});
colorOthers.addEventListener("click", function(event){
    document.body.style.backgroundColor = '#e0b1b9'; 
});
  // // find the shelf element
  // const message = document.getElementById("message");

  // loop through the books loaded from the Airtable API
//   dms.forEach((dm) => {

//     var dmContainer = document.createElement("div");
//     dmContainer.classList.add("dm-container");
//     document.querySelector(".container").append(dmContainer)


//     // add title
//     var dmMeaning = document.createElement("h2")
//     dmMeaning.classList.add("dm-title")
//     dmMeaning.innerText = dm.fields.meaning;
//     dmContainer.append(dmMeaning);
// });

    // var bookDescription = document.createElement("p");
    // bookDescription.classList.add("book-description");
    //  bookDescription.innerText = book.
    //  fields.description;
    //  bookContainer.append(bookDescription);

    //  var bookImage = document.createElement("img");
    //  bookImage.classList.add("cover_image");
    //  bookImage.src = book.fields.cover_image[0].url;
    //  bookContainer.append(bookImage);


    //  bookContainer.addEventListener("click", function(){
    //     bookDescription.classList.toggle("active");
    //     bookImage.classList.toggle("active");
     // })

    // create the div, set its text and class
    // const div = document.createElement("div");
    // div.innerText = book.fields.title;
    // div.classList.add("book-spine");
    // // when the user clicks this book spine, call showBook and send the book data and this spine element
    // div.addEventListener("click", () => {
    //   showBook(book, div);
    // });
    // // put the newly created book spine on the shelf
//     // shelf.appendChild(div);
//   });
// }