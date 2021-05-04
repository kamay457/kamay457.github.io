console.log('hello');


let currentcolor = "red";
let container = document.querySelector(".grid-container");
let reDrawing = false;
let deleteDrawing = document.querySelector('#delete');
// const colorImput = document.getElementsByClassName("prototype_colorpicker") [0];




//choose colors
let color_One = document.querySelector(".color_One");
let color_Two = document.querySelector(".color_Two");
let color_Three = document.querySelector(".color_Three");
let color_Four = document.querySelector(".color_Four");
let color_Five = document.querySelector(".color_Five");
let color_Six = document.querySelector(".color_Six");
let color_Seven = document.querySelector(".color_Seven");
let color_Eight = document.querySelector(".color_Eight");
let color_Nine = document.querySelector(".color_Nine");
let color_Ten = document.querySelector(".color_Ten");
let color_Eleven = document.querySelector(".color_Eleven");
let color_Twelve = document.querySelector(".color_Twelve");
let color_Thirteen = document.querySelector(".color_Thirteen");
let color_Fourteen = document.querySelector(".color_Fourteen");
let color_Fifteen = document.querySelector(".color_Fifteen");
let color_Sixteen = document.querySelector(".color_Sixteen");
let color_Seventeen = document.querySelector(".color_Seventeen");
let color_Eighteen = document.querySelector(".color_Eighteen");
let color_Nineteen = document.querySelector(".color_Nineteen");
let color_Twenty = document.querySelector(".color_Twenty");
let color_TwentyOne = document.querySelector(".color_TwentyOne");
let color_TwentyTwo = document.querySelector(".color_TwentyTwo");
let color_TwentyThree = document.querySelector(".color_TwentyThree");
let color_TwentyFour = document.querySelector(".color_TwentyFour");

// let color = colorInput.value;
// colorInput.addEventListener("change", function(e){
// 	color = e.target.value;
// });


for (let i = 0; i < 24 * 24; i ++){
	let newDiv = document.createElement('div');
	newDiv.classList.add('pixel');

	newDiv.addEventListener('mousedown', function(){
		reDrawing = true;

		// if(color_One){
		//  newDiv.style.background = "pink"; 
		// }else if (color_Two) {
		// 	newDiv.style.background = "red";
		// }

		// if(color_Two){
		// 	newDiv.style.background = "red"; 
		// }else{
		// 	newDiv.style.background = "none"
		// }
		newDiv.style.background = currentcolor;
	})


	// click = color
	color_One.addEventListener("click", function(event){
        currentcolor = "red"; 
     
    })

    color_Two.addEventListener("click", function(event){
        currentcolor= "#ff00f2"; 
     
    })

    color_Three.addEventListener("click", function(event){
       	currentcolor = "yellow"; 
     
    })

    color_Four.addEventListener("click", function(event){
       	currentcolor = "orange"; 
     
    })


      color_Five.addEventListener("click", function(event){
       	currentcolor = "#1900ff"; 
     
    })

  	 color_Six.addEventListener("click", function(event){
       	currentcolor = "#00ff08"; 
     
    })
  	 
  	 color_Seven.addEventListener("click", function(event){
       	currentcolor = "#a200ff"; 
     
    })

  	 color_Eight.addEventListener("click", function(event){
       	currentcolor = "black"; 
     
    })

  	 color_Nine.addEventListener("click", function(event){
       	currentcolor = "#ff9d96"; 
     
    })
  	 color_Ten.addEventListener("click", function(event){
       	currentcolor = "#ff8af9"; 
     
    })

  	 color_Eleven.addEventListener("click", function(event){
       	currentcolor = "fbff8a"; 
     
    })

  	 color_Twelve.addEventListener("click", function(event){
        currentcolor = "#ffe68a"; 
     
    })

    color_Thirteen.addEventListener("click", function(event){
        currentcolor= "#9cbeff"; 
     
    })

    color_Fourteen.addEventListener("click", function(event){
       	currentcolor = "#9cff9f"; 
     
    })

    color_Fifteen.addEventListener("click", function(event){
       	currentcolor = "#d7a3ff"; 
     
    })


    color_Sixteen.addEventListener("click", function(event){
       	currentcolor = "#bdbdbd"; 
     
    })

  	 color_Seventeen.addEventListener("click", function(event){
       	currentcolor = "#780000"; 
     
    })
  	 
  	 color_Eighteen.addEventListener("click", function(event){
       	currentcolor = "#91006f"; 
     
    })

  	 color_Nineteen.addEventListener("click", function(event){
       	currentcolor = "#878a00"; 
     
    })

  	 color_Twenty.addEventListener("click", function(event){
       	currentcolor = "#6b5400"; 
     
    })
  	 color_TwentyOne.addEventListener("click", function(event){
       	currentcolor = "#080052"; 
     
    })

  	color_TwentyTwo.addEventListener("click", function(event){
       	currentcolor = "#026905"; 
     
    })
  	color_TwentyThree.addEventListener("click", function(event){
       	currentcolor = "#3f0070"; 
     
    })

    color_TwentyFour.addEventListener("click", function(event){
       	currentcolor = "#FFFFFF"; 
     
    })

  // 	 color_Twentytwo.addEventListener("click", function(event){
  //      	currentcolor = "#fbff8a"; 
     
  //   })

	 // color_Twentythree.addEventListener("click", function(event){
  //      	currentcolor = "#fbff8a"; 
     
  //   })



    deleteDrawing.addEventListener('click', function(event){
    	newDiv.style.background = "white";
    })

	container.appendChild(newDiv);

document.querySelector('#save').addEventListener('click', function() {
 html2canvas(document.querySelector('.specific'), {
            onrendered: function(canvas) {
                // document.body.appendChild(canvas);
              return Canvas2Image.saveAsPNG(canvas);
            }
        });
    });
// const audioFiles = [
// 	'https://www2.cs.uic.edu/~i101/SoundFiles/taunt.wav',
//   'https://www2.cs.uic.edu/~i101/SoundFiles/taunt.wav',
//   'https://www2.cs.uic.edu/~i101/SoundFiles/taunt.wav',
//   'https://www2.cs.uic.edu/~i101/SoundFiles/taunt.wav',
//   'https://www2.cs.uic.edu/~i101/SoundFiles/taunt.wav',
//   'https://www2.cs.uic.edu/~i101/SoundFiles/taunt.wav',
//   'https://www2.cs.uic.edu/~i101/SoundFiles/taunt.wav',
//   'https://www2.cs.uic.edu/~i101/SoundFiles/taunt.wav',
//   'https://www2.cs.uic.edu/~i101/SoundFiles/taunt.wav',
//   'https://www2.cs.uic.edu/~i101/SoundFiles/taunt.wav',
//   'https://www2.cs.uic.edu/~i101/SoundFiles/taunt.wav',
//   'https://www2.cs.uic.edu/~i101/SoundFiles/taunt.wav',
//   'https://www2.cs.uic.edu/~i101/SoundFiles/taunt.wav',
//   'https://www2.cs.uic.edu/~i101/SoundFiles/taunt.wav',
//   'https://www2.cs.uic.edu/~i101/SoundFiles/taunt.wav',
//   'https://www2.cs.uic.edu/~i101/SoundFiles/taunt.wav',
//   'https://www2.cs.uic.edu/~i101/SoundFiles/taunt.wav',
//   'https://www2.cs.uic.edu/~i101/SoundFiles/taunt.wav',
//   'https://www2.cs.uic.edu/~i101/SoundFiles/taunt.wav',
//   'https://www2.cs.uic.edu/~i101/SoundFiles/taunt.wav',
//   'https://www2.cs.uic.edu/~i101/SoundFiles/taunt.wav',
//   'https://www2.cs.uic.edu/~i101/SoundFiles/taunt.wav',
//   'https://www2.cs.uic.edu/~i101/SoundFiles/taunt.wav',
//   'https://www2.cs.uic.edu/~i101/SoundFiles/taunt.wav',
//   'https://www2.cs.uic.edu/~i101/SoundFiles/taunt.wav'
// ];

// for (let i = 0; i < audioFiles.length; i++) {
// 	playAudioOnKeydown(String.fromCharCode(i + 97), audioFiles[i]);
// }

// function playAudioOnKeydown(keyCode, audioSrc) {
// 	document.addEventListener('keydown', (event) => {
//   	if (event.key === keyCode) {
//     	stopAllAudio();
//       const audio = document.createElement('audio');
//       audio.style.display = 'none';
//       const source = document.createElement('source');
//       source.src = audioSrc;
//       audio.appendChild(source);
//       document.body.appendChild(audio);
//       audio.play();
//     }
//   });
// }

// function stopAllAudio() {
// 	while (document.getElementsByTagName('audio').length > 0) {
//   	document.getElementsByTagName('audio')[0].remove();
//   }
// }


}
