 console.log('hello');


 let words = document.querySelectorAll('.word');
 let container = document.querySelector('.container'); 
 let button = document.querySelector('button');



console.log(words, container);


words.forEach(function (words){
	words.style.left = (90 * Math.random()) + '%';
	words.style.top = (90 * Math.random()) + '%';
})

button.addEventListener('click', function(event){
	 console.log(event, event.target);
	 if(event.target.classList.contains('button')){
	 	event.target.random();
	 }
})

  // // place our bubbles randomly
  // words.forEach(function (word) {

  //   word.style.left = (100 * Math.random()) + '%';
  //   word.style.top = (100 * Math.random()) + '%';
  // });


  // container.addEventListener('click', function (event) {
  // 	console.log(event, event.target);
  //   if (event.target.classList.contains('word')) {
  //     event.target.remove();
  //   }
  // });

// let words =['danger', 'sin', 'war'];
// console.log(words);


// words.forEach(function(lunguage){
// console.log(words);
// });


// You need to use querySelectorAll() 
// if you want to query more than one element. 
// 	querySelector only returns the first instance of that selector 
// (that's why if you view your javascript console you are seeing the error 
// 	Uncaught TypeError: words.forEach is not a function.
// 	 This error is saying that words.forEach is not a function, 
// 	 because words is only a single element, not a collection of elements.