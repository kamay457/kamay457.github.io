let myname = 'yukakamata';
console.log(myname);


console.log(3 *8)

let myNumber = '3';
console.log(myNumber)

// let myname = true;

let Name = ['y', 'u', 'k', 'a']
console.log(Name)

let data = ['toystory', 2 +1, true]
console.log(data)


data.push('yuka', 'kamata');
console.log(data)


console.log([44 + 7 * 8])


let my_things = ['y', 'u', 'k', 'a']
console.log(my_things[0]);
console.log(my_things.length);


let number_three = ['s', 'u', 'p', 'r', 'c', 'a', 'l', 'i', 'f', 'r', 'a', 'g', 'i', 'l', 'i', 's', 't', 'i', 'c', 'e', 'x', 'p', 'i', 'a', 'l', 'i', 'd', 'o', 'c', 'i', 'o', 'u', 's'];
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



