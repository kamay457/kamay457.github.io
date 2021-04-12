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
base("message").select({}).eachPage(gotPageOfDms, gotAllDms);

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

      var dmContainer = document.createElement("div");
      dmContainer.classList.add("dm-container");
      document.querySelector(".container").append(dmContainer);

      var dmBox = document.createElement("box");
      dmContainer.classList.add("dm-box");
      document.querySelector(".box").append(dmBox);

    
     var dmMeaning = document.createElement("p");
     dmMeaning.classList.add("dm_meaning");
      dmMeaning.innerText = dm.fields.meaning;
     dmBox.append(dmMeaning);


    var dmImage = document.createElement("img");
    dmImage.classList.add("dm_image");
    dmImage.src = dm.fields.image[0].url;
    dmImage.setAttribute('data-description', dm.fields.image);
    document.body.appendChild(dmImage);


    //get genre from airtable
    // var  dmGenre = dm.fields.genre;
    // dmGenre.forEach(function(genre){
    //  dmContainer.classList.add(genre) 
    // })



    // var circle_One = document.querySelector(".circle_one");
  //   var circle_Two = document.querySelector(".circle_two");
  //   var circle_Three = document.querySelector(".circle_three");
  //   var circle_Four = document.querySelector(".circle_four");
  //   var circle_Five = document.querySelector(".circle_five");
  //   var circle_Six = document.querySelector(".circle_six");




  //  circle_One.addEvemtListener("click", function(){
  //     if (dmGenre === "emotion_one") {
  //       dmImage.src = dm.fields.image[0].url;
  //       dmImage.classList.add("dm_image");
  //       dmImage.style.display = "block";
  //       document.querySelector(".filter").appendChild(dmGenre);
  //     }
  //     else {
  //       dmImage.style.display = "none";
  //     }
  //   })


  // circle_Two.addEvemtListener("click", function(){
  //     if (dmGenre === "emotion_two") {
  //       dmImage.src = dm.fields.image[0].url;
  //       dmImage.classList.add("dm_image");
  //       dmImage.style.display = "block";
  //       document.querySelector(".filter").appendChild(dmGenre);
  //     }
  //     else {
  //       dmImage.style.display = "none";
  //     }
  //   })

  //   circle_Three.addEvemtListener("click", function(){
  //     if (dmGenre === "emotion_three") {
  //       dmImage.src = dm.fields.image[0].url;
  //       dmImage.classList.add("dm_image");
  //       dmImage.style.display = "block";
  //       document.querySelector(".filter").appendChild(dmGenre);
  //     }
  //     else {
  //       dmImage.style.display = "none";
  //     }
  //   })


  //   circle_Four.addEvemtListener("click", function(){
  //     if (dmGenre === "emotion_four") {
  //       dmImage.src = dm.fields.image[0].url;
  //       dmImage.classList.add("dm_image");
  //       dmImage.style.display = "block";
  //       document.querySelector(".filter").appendChild(dmGenre);
  //     }
  //     else {
  //       dmImage.style.display = "none";
  //     }
  //   })
//     if (dmGenre  === "emotion_1") {
//     // adding size genre as a class to the container
//     var dmImage = document.createElement("img");
//         dmImage.classList.add(".circle_one");
//     dmImage.src = dm.fields.image[0].url;
//     document.querySelector(".span").appendChild(dmImage);
// }


    
    
   
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

document.addEventListener('mouseover', function(event){
  if (event.target.tagName == "Img"){
    var dmImage = event.target.getAttribute('data-description');
  }console.log('img');
})


let colorRed = document.querySelector(".circle_one");
var filterEm_1 =  document.querySelector(".em_1");
let colorDark = document.querySelector(".circle_two");
let colorLight = document.querySelector(".circle_three");
let colorMedium = document.querySelector(".circle_four");
let colorWhite = document.querySelector(".circle_five");
let colorOrange = document.querySelector(".circle_six");


colorRed.addEventListener("click", function(event){
    document.body.style.backgroundColor = "#B40000"; 
    // dmImage.style.display = "inline-block";

});

colorDark.addEventListener("click", function(event){
    document.body.style.backgroundColor = '#eb2a51'; 
});

colorLight.addEventListener("click", function(event){
    document.body.style.backgroundColor = '#db3327'; 
});
colorMedium.addEventListener("click", function(event){
    document.body.style.backgroundColor = '#801a18'; 
});
colorWhite.addEventListener("click", function(event){
    document.body.style.backgroundColor = '#db2a27'; 
});
colorOrange.addEventListener("click", function(event){
    document.body.style.backgroundColor = '#7d4545'; 
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