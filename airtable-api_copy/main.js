console.log("Is our script file working?");


var Airtable = require('airtable');
console.log(Airtable);

Airtable.configure({
  apiKey: 'keycg1GTfNi5JyiP0',
  endpointUrl: 'https://api.airtable.com'
});

var base = Airtable.base('appKTUMSmQk2NSRGR');

// // load the airtable library, call it "Airtable";
// var Airtable = require("airtable");
// console.log(Airtable);

// // use airtable library, connect to our base using API key
// var base = new Airtable({ apiKey: "keycg1GTfNi5JyiP0" }).base(
//   "appKTUMSmQk2NSRGR"
// );


base('Books').select({
  maxRecords: 200,
  view: 'Grid view'
}).eachPage(function page(records, fetchNextPage) {


  var bookContainer = document.querySelector('#book-container');
  var description = document.querySelector('#description');



  records.forEach(function(record) {
    console.log('Retrieved', record.get('title'), record.fields);

    var book = document.createElement('div');
    var label = document.createElement('div');
    var coverImageUrl = record.fields.cover_image[0].url;

    label.classList.add('book__label');
    label.innerHTML = record.fields.title;

    book.classList.add('book');
    book.style.backgroundImage = 'url(' + coverImageUrl + ')';

    book.addEventListener('mouseover',function(){
      description.innerHTML = record.fields.description;
    } );

  
    book.addEventListener('click',function(){
      window.open(record.fields.more_info);
    } );


    book.append(label);
    bookContainer.append(book);
  });


  fetchNextPage();

}, function done(err) {
  if (err) { console.error(err); return; }
});
