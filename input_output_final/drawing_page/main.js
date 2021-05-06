console.log('hello');
let currentcolor = "red";
let reDrawing = false;
const container = document.querySelector(".grid-container");
const deleteDrawing = document.querySelector('#delete');
// const colorImput = document.getElementsByClassName("prototype_colorpicker") [0];
//choose colors
const color_One = document.querySelector(".color_One");
const color_Two = document.querySelector(".color_Two");
const color_Three = document.querySelector(".color_Three");
const color_Four = document.querySelector(".color_Four");
const color_Five = document.querySelector(".color_Five");
const color_Six = document.querySelector(".color_Six");
const color_Seven = document.querySelector(".color_Seven");
const color_Eight = document.querySelector(".color_Eight");
const color_Nine = document.querySelector(".color_Nine");
const color_Ten = document.querySelector(".color_Ten");
const color_Eleven = document.querySelector(".color_Eleven");
const color_Twelve = document.querySelector(".color_Twelve");
const color_Thirteen = document.querySelector(".color_Thirteen");
const color_Fourteen = document.querySelector(".color_Fourteen");
const color_Fifteen = document.querySelector(".color_Fifteen");
const color_Sixteen = document.querySelector(".color_Sixteen");
const color_Seventeen = document.querySelector(".color_Seventeen");
const color_Eighteen = document.querySelector(".color_Eighteen");
const color_Nineteen = document.querySelector(".color_Nineteen");
const color_Twenty = document.querySelector(".color_Twenty");
const color_TwentyOne = document.querySelector(".color_TwentyOne");
const color_TwentyTwo = document.querySelector(".color_TwentyTwo");
const color_TwentyThree = document.querySelector(".color_TwentyThree");
const color_TwentyFour = document.querySelector(".color_TwentyFour");
// const color = colorInput.value;
// colorInput.addEventListener("change", function(e){
// 	color = e.target.value;
// });
for (let i = 0; i < 36 * 36; i++) {
	const newDiv = document.createElement('div');
	newDiv.classList.add('pixel');
	newDiv.addEventListener('mousedown', function() {
		reDrawing = true;
		newDiv.style.background = currentcolor;
	});
	deleteDrawing.addEventListener('click', function(event) {
	newDiv.style.background = "white";
})
	container.appendChild(newDiv);
}
// click = color
color_One.addEventListener("click", function(event) {
	currentcolor = "red";
})
color_Two.addEventListener("click", function(event) {
	currentcolor = "#ff00f2";
})
color_Three.addEventListener("click", function(event) {
	currentcolor = "yellow";
})
color_Four.addEventListener("click", function(event) {
	currentcolor = "orange";
})
color_Five.addEventListener("click", function(event) {
	currentcolor = "#1900ff";
})
color_Six.addEventListener("click", function(event) {
	currentcolor = "#00ff08";
})
color_Seven.addEventListener("click", function(event) {
	currentcolor = "#a200ff";
})
color_Eight.addEventListener("click", function(event) {
	currentcolor = "black";
})
color_Nine.addEventListener("click", function(event) {
	currentcolor = "#ff9d96";
})
color_Ten.addEventListener("click", function(event) {
	currentcolor = "#ff8af9";
})
color_Eleven.addEventListener("click", function(event) {
	currentcolor = "fbff8a";
})
color_Twelve.addEventListener("click", function(event) {
	currentcolor = "#ffe68a";
})
color_Thirteen.addEventListener("click", function(event) {
	currentcolor = "#9cbeff";
})
color_Fourteen.addEventListener("click", function(event) {
	currentcolor = "#9cff9f";
})
color_Fifteen.addEventListener("click", function(event) {
	currentcolor = "#d7a3ff";
})
color_Sixteen.addEventListener("click", function(event) {
	currentcolor = "#bdbdbd";
})
color_Seventeen.addEventListener("click", function(event) {
	currentcolor = "#780000";
})
color_Eighteen.addEventListener("click", function(event) {
	currentcolor = "#91006f";
})
color_Nineteen.addEventListener("click", function(event) {
	currentcolor = "#878a00";
})
color_Twenty.addEventListener("click", function(event) {
	currentcolor = "#6b5400";
})
color_TwentyOne.addEventListener("click", function(event) {
	currentcolor = "#080052";
})
color_TwentyTwo.addEventListener("click", function(event) {
	currentcolor = "#026905";
})
color_TwentyThree.addEventListener("click", function(event) {
	currentcolor = "#3f0070";
})
color_TwentyFour.addEventListener("click", function(event) {
	currentcolor = "#FFFFFF";
})
// 	 color_Twentytwo.addEventListener("click", function(event){
//      	currentcolor = "#fbff8a";
//   })
// color_Twentythree.addEventListener("click", function(event){
//      	currentcolor = "#fbff8a";
//   })
// deleteDrawing.addEventListener('click', function(event) {
// 	newDiv.style.background = "white";
// })

document.querySelector('#save').addEventListener('click', function() {
	const previousScroll = document.documentElement.scrollTop;
	window.scrollTo(0, 0);
	html2canvas(document.querySelector('.grid-container')).then((canvas) => {
		Canvas2Image.saveAsPNG(canvas);
		document.documentElement.scrollTop = previousScroll;
	});
});

// $(window).on('load', function(){
// 	$});
// (".loading-wrap").addClass('loading-anime');
// let myCursor = document.querySelector("#customCursor");
// window.addEventListener("mousemove", function(event){
// 	console.log(event);
// 	myCursor.style.top = event.pageY + "px";
// 	myCursor.style.left = event.pageX + "px";
// });

// var canvas = document.querySelector('.canvas');
// var drawingSubmit = canvas.outerHTML;
// document.querySelector('#submit').addEventListener('click', function() {
	
// });