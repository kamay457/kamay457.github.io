console.log('hello');

let container = document.querySelector(".grid-container");
let reDrawing = false;
let deleteDrawing = document.querySelector('#delete');
// const colorImput = document.getElementsByClassName("prototype_colorpicker") [0];





let color_One = document.querySelector(".color_One");
let color_Two = document.querySelector(".color_Two");
let color_Three = document.querySelector(".color_Three");


// let color = colorInput.value;
// colorInput.addEventListener("change", function(e){
// 	color = e.target.value;
// });


for (let i = 0; i < 24 * 24; i ++){
	let newDiv = document.createElement('div');
	newDiv.classList.add('pixel');

	newDiv.addEventListener('mousedown', function(){
		reDrawing = true;


		newDiv.style.background = '';
	})

	color_One.addEventListener("click", function(event){
        newDiv.style.background = "pink"; 
     
    })

    color_Two.addEventListener("click", function(event){
        newDiv.style.background = "red"; 
     
    })

    color_Three.addEventListener("click", function(event){
        newDiv.style.background = "yellow"; 
     
    })

    deleteDrawing.addEventListener('click', function(event){
    	newDiv.style.background = "white";
    })

	container.appendChild(newDiv);
}