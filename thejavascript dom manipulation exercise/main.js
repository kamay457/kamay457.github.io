
let button = document.querySelector('button');
let container = document.querySelector('#more');
let heart= document.querySelectorAll('.heart');
let container2 = document.querySelector('#container2');
let count= document.querySelectorAll('#count')
let cleanUp =document.querySelector('#cleanup')


let colorWhite = document.querySelector('#item1');
let colorBlue = document.querySelector('#item2');
let colorGreen = document.querySelector('#item3');
let colorYellow = document.querySelector('#item4');
let colorPurple = document.querySelector('#item5');
let colorOrange = document.querySelector('#item6');





button.addEventListener('click', function(event) {
  console.log(event, event.target);
  let newItem = document.createElement('div');
  newItem.classList.add('new-content');
  newItem.innerHTML = '<strong>Sending Love!</strong>';
  container.appendChild(newItem);
  console.log(count);
  count.innerHTML = '#count';
});



 
heart.forEach(function (heart) {
    heart.style.left = (90 * Math.random()) + '%';
    heart.style.top = (90 * Math.random()) + '%';

  });


container2.addEventListener('click', function (event) {
    if (event.target.classList.contains('heart')) {
      event.target.remove();
    }
  });


cleanUp.addEventListener('click', function(event) {
 heart.innerHTML = clear;
  heart.remove();
});


colorWhite.addEventListener("click", function(event){
    document.body.style.backgroundColor = 'white'; 
});

colorBlue.addEventListener("click", function(event){
    document.body.style.backgroundColor = '#b0f5f1'; 
});

colorGreen.addEventListener("click", function(event){
    document.body.style.backgroundColor = '#bcf7e5'; 
});
colorYellow.addEventListener("click", function(event){
    document.body.style.backgroundColor = '#edf7bc'; 
});
colorPurple.addEventListener("click", function(event){
    document.body.style.backgroundColor = '#ecbdff'; 
});
colorOrange.addEventListener("click", function(event){
    document.body.style.backgroundColor = '#ffd1bd'; 
});
