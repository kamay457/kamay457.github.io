let myname = 'yukakamata';
console.log(myname);

let favoriteNumber = 2+4+8;
console.log(favoriteNumber);

let myNumber = 'one';
console.log(myNumber);

let human = true;
console.log(human);

let Name = ['y', 'u', 'k', 'a'];
console.log(Name);

let data = ['toystory', 2 +1, true];
console.log(data);


let name_One = 'Yuka';
let name_Two = 'Kamata';
console.log(name_One,name_Two);


let newNumber = 44 + 7 * 8;
console.log(newNumber);


let my_things = ['y', 'u', 'k', 'a']
console.log(my_things[0]);
console.log(my_things.length);


let number_three = 'supercalifragilisticexpialidocious';
console.log(number_three.length);


let firstName = 'yuka';
let lastName = 'kamata';
console.log(firstName.length == lastName.length);



for (let i = 0; i < my_things.length; i++) {
  console.log(my_things[i]);
}





let time = 'between 7pm and 9:40pm';
// let time = '9:40pm';
if (time == 'between 7pm and 9:40pm'){
	console.log(true)
} else {
	console.log(false)
}



let date = 'friday';
if (date == 'monday'){
	console.log('just begin wait tiil the weekend');
} else if (date == 'tuesday'){
	console.log('go to eat the curry')
} else if ( date == "wedensday"){
	console.log('do you want to drink bubble tea?');
} else if (date == 'thrusday'){
	console.log('go to gym');
} else if (date == 'friday'){
	console.log('you will see the many empty cans of beer in your room');
}



let restaurants = ['yakiniku futago', 'atoboy', 'NomWah'];
let pandemic = ['meeting with my friend', 'eat out', 'traveling'];
let places = ['Redhook', 'Domino Park', 'UpperWest'];
let movie = ['Starwars', 'Avengers', 'Ladybird'];

let allIn = [restaurants, pandemic, places, movie ];


for(let i = 0; i < allIn.length; i++){ 
	console.log(allIn[i]);
}



allIn.forEach(function(item) {
  console.log(item);
});



