 console.log('hello');


 let words = document.querySelectorAll('.word');
 let container = document.querySelector('.container'); 
 let button = document.querySelector('.randam');



console.log(words, container);



    

words.forEach(function (words){
	words.style.left = (90 * Math.random()) + '%';
	words.style.top = (90 * Math.random()) + '%';
})

// container2.addEventListener('click', function (event) {
//     if (event.target.classList.contains('heart')) {
//       event.target.remove();
//     }
//   });

