// 1.Variables
/*
Multiple
lines
*/
/*
// string
var a = 'home';
console.log(typeof a);

// number
var b = 1;
console.log(typeof b);

// undefined
console.log(typeof c);

// string 2
var n = '1';
console.log(typeof n);

var g = b + n;
console.log(g);

// 1.2 Type Convertions

n = Number(n);
console.log(typeof n);

b = b.toString();
console.log(typeof b);

b = parseInt(b);
console.log(typeof b);

b = parseFloat(b);
console.log(typeof b);
*/


// 2. IF Conditions
/*
var a = '1', b = 1, c = null;

if (a === b) {
    // Yes
    console.log('Same value');
} else {
    // No
    console.log('Different value');
}

// AND = &&
if (a == b && c == null)
    console.log('Perfect key');
else
    console.log('No perfect key');

// OR = ||
if (c != null || a == '1')
    console.log('At least one key matched');


var input = '1';
if (a === input)
    console.log('Match with a');
else if (b === input)
    console.log('Match with b');
else
    console.log('NA');

var res = (a == '1') ? 'Yes' : 'No';
console.log(res);

var d = d || 'New assignment';
console.log(d);
*/

// 3. Objects
/*
var person = {
    name: null,
    age: null
};

console.log(typeof person);

person.name = 'Steven';
person['age'] = 29;

console.log(person);

console.log(person.name);
console.log(person['age']);

console.log( person.hasOwnProperty('name') );
*/

// 4. Arrays

var cars = [];

console.log(typeof cars);
console.log( Array.isArray(cars) );

// Create
cars.push( { name: 'Tesla', model: 2015, ranking: 10 } );
cars.push( { name: 'Eclipse', model: 2014, ranking: 8 } );
cars.push( { name: 'Mazda', model: 2012, ranking: 7 } );
cars.push( { name: 'Toyota', model: 2013, ranking: 6 } );

// Read
console.log(cars);
console.log(cars[2].name);
console.log(cars[2]['model']);

// Update
console.log(cars[2]);
cars[2].model = 2015;
console.log(cars[2]);

// Delete

var index = cars.map(function(car) { return car.name; }).indexOf('Mazda');
console.log(index);

if (index > -1)
    cars.splice(index, 1);

console.log(cars);


// 4.2 Advanced Loops IE+9

// forEach
cars.forEach(function(car){
    console.log( car.name );
});











