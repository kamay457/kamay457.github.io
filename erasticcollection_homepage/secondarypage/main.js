 let words = document.querySelector('.words');
  let container = document.querySelector('.container');
  // place our bubbles randomly
  words.forEach(function (word) {
    words.style.left = (100 * Math.random()) + '%';
    words.style.top = (100 * Math.random()) + '%';
  });


  // container.addEventListener('click', function (event) {
  //   if (event.target.classList.contains('word')) {
  //     event.target.remove();
  //   }
  // });

// let words =['danger', 'sin', 'war'];
// console.log(words);


// words.forEach(function(lunguage){
// console.log(words);
// });


