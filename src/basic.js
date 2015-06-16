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
/*
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

var oneCar = cars[1];
for (var property in oneCar){
    console.log( 'Prop => ' + property + ' / value => ' + oneCar[property] );
};

// map
var models = cars.map( function(car){ return car.model; } );
console.log(models);

// filter
var twoYearsAgo = cars.filter(function(car){ return car.model > 2013; });
console.log(twoYearsAgo);

// Check if all cars has a T in its name
var tCars = cars.every(function(car) { return car.name.indexOf('T') !== -1; });
console.log(tCars);

// some
var mCars = cars.some(function(car) { return car.model === 2015; });
console.log(mCars);

// sort
var orderCars = cars.sort(function(car1, car2) { return car2.model - car1.model; });
console.log(orderCars);

// Get the first best ranking car which name contains a T
var bestTCar = cars.filter(function(car){ return car.name.indexOf('T') !== -1; })
                   .sort(function(car1, car2){ return car2.ranking - car1.ranking; })
                   .map(function(car) { return car.name })
                   [0];

console.log(bestTCar);
*/


// 5. Functions

// 5.1 Invoke Types

// Function Declaration
// Pure functions
/*
function sum(a, b) {
    return a + b;
}

console.log( sum(1,2) );

console.log( sum.call(null, 1, 2) );

console.log( sum.apply(null, [1, 2]) );

function abc() {
    console.log( arguments );
}

abc.apply(this, [1, 2, 3, 'a']);
*/

// 5.2 Callback functions

// Passing an Object to callback
/*
function myCallBack(params) {
    params = params || {};
    params.name = params.name || 'Steven';
    params.age = params.age || 29;
    
    console.log('My name is ' + params.name + ' and I\'m ' + params.age + ' years old.');
}

function knowPeople(callback) {
    callback = callback || function() {};
    
    console.log('Before Loop');
    
    [{ name: 'Mary', age: 30}, { name: 'Minor', age: 50}].forEach(
        function(person) {
            
            setTimeout(function() {
                callback(person);
            }, 0);
        }
    );
    
    callback();
    
    console.log('After Loop');
}

knowPeople(myCallBack);
*/


// 5.3 Function Expression
/*
var abc = function mul(a, b) {
    return a * b;
};

console.log( abc(2, 2) );
*/

// 5.4 Anonymous function
/*
(
    function(a, b) {
        console.log( a - b );
    }
)(2, 2);
*/

// 5.5. Timer Functions
/*
console.log('Before BOOM !!!');

setTimeout(
    function() {
        console.log('BOOM !!!');
    }
, 0);

console.log('After BOOM !!!');
*/

/*
var counterInterval = 1;
var interval =
    setInterval(function(){
       
        var date = new Date();
        console.log( date.getHours() + ':' + 
                     date.getMinutes() + ':' + 
                     date.getSeconds() );
        
        if (counterInterval == 5)
            clearInterval(interval);
        
        counterInterval++;
        
    }, 1000);
*/

// 6. Scope
/*
var x = 1;

function abc() {
    var x = 5;
    console.log('Inside fn ' + x);
}

abc();

console.log('Outside fn ' + x);
*/

// The Power of Hoisting
/*
var a = 1;

function xyz() {
    if (false) {
        var a = 2;
    }
    
    return a;
}

console.log( xyz() );
*/

/*
if (true)
    function foo() { console.log('One'); }
else
    function foo() { console.log('Two'); }
    
foo();
*/






















