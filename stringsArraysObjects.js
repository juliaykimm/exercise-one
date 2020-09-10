// STRINGS
'string'
"string"
`string` //preferable way to define a string

//ways to define a string
const coolString1 = `cool string`; // const never changes
let coolString2 = `Very Cool String`; // when you wnat to update the value of the variables

`we quoted them as saying "howdy y'all"` // no errors in the characters

const userName = `Julia`;

`hi`+ userName;
`hi, ${userName}`;

coolString2 = coolString2.toLowerCase();
// `becomes very cool string`

undefined // this value isn't defined therefore, we cannot use it - creates an error

null // this value is equal to 'null', value is equal to null which is nothing - does not create an error - NO VALUE
`how many apples do i have?`
undefined // idk
null // there are no apples
// about null... if you are using in an if statement - it will act the same way as false

NaN // not a number - means you are trying to use a value as a number but it is not - creates an error

// ARRAYS
// list of values 
[1, `hi`, 1.234, `cool word`]
const coolArray = [`cool`, `array`];
let coolArray = [`cooler`, `array`];

const numberArray = [1, 2, 3, 4, 5, 6];
const lengthOfarray = numberarray.length; // would be 6

console.log(numberArray)
numberArray.push(7); // adds value to the array

// access a value in an array
const fourthValue = numberArray[3]; // outputs 4
const secondValue = coolArray[1];

// OBJECTS
// {key: value}

const coolObject = { val1: `value`, val2: `another value`};

let newValue = coolObject.val1; // this would be equal to value
let anothervalue = coolObject.val2 // this would be equal to another value
let thirdValue = coolObject.val3 // equals undefined bc val3 does not exist

const userData = { name: `julia`, age: `18`};
const introText = `Hello, ${userData.name}`;

// JSON
// json oject is an array OF objects
const coolArray = [
    {
        val1: `hi`
    }, 
    {
        val1:`hi`
    }
]
 const thisIsHello = coolArray[2].val2; // undefined - no val2 in second object of coolArray

 // DATE

 23456789348765678976543278 // milliseconds since a specific date in time

 const newDate = Date().now; // 3:33 September 10, 2020
 const coolMinutes = newDate.getMinutes(); // gives current minute - 33
 const coolMinutes = newDate.getHours(); // gives current hour - 3