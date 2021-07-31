# JavaScript where to
JavaScript in \<head> or \<body>

\<script> 이 안에 js 작성\</script>

External File \<script src=external file>\</script>

External JavaScript Advantages 
1. It separates HTML and code
1. It makes HTML and JavaScript easier to read and maintain 
1. Cached JavaScript files can speed up page loads

External References \<script src=full URL to link>\</script>

# JavaScript Output
* Writing into an HTML element, using **innerHTML**.
* Writing into the HTML output using **document.write()**.
* Writing into an alert box, using **window.alert()**.
* Writing into the browser console, using **console.log()**.

To access an HTML element use **document.getElementById(id)**

## JavaScript Print
**window.print()** to print the content of the current window.

# JavaScript Statements
***In HTML, JavaScript programs are executed by the web browser.***

JavaScript statements are composed of : **Values**, **Operators**, **Expressions**, **Keywords**, **Comments**

## Semicolons ; 
separate JavaScript statements.

## JavaScript White Space
ignores multiple spaces

## JavaScript Keywords
|Keyword|Description|
|:---:|:---:|
|var|Declares a variable|
|let|Declares a block variable|
|const|Declares a block constant|
|if|Marks a block of statements to be executed on a condition|
|switch|Marks a block of statements to be executes in different cases|
|for|Marks a block of statements to be executed in a loop|
|function|Declares a function|
|return|Exits a function|
|try|Implements error handling to a block of statements|

# JavaScript Syntax

## JavaScript Values
* Fixed values - **Literals**
> Numbers, Strings
* Variable values - **Variables**
> ***var***, ***let***, ***const***

## JavaScript Operators
* arithmetic operators ( **+**  **-**  **\***  **/** )
* assignment operator( **=** )

## JavaScript Comments
**// Single Line comment**

**/\* Multi-line comment \*/**

## JavaScripte and Camel Case
* **Hyphens:** first-name, last-name, master-card, inter-city 

Hyphens are not allowed in JavaScript

* **UnderScore:** first_name, last_name, master_card, inter_city
* **Upper Camel Case(Pascal case):** FirstName, LastName, MasterCard, InterCity
* **Lower Camel Case:** firstName, lastName, masterCard, interCity


# JavaScript Variables
```js
var pi = 3.14;
var person = "John Doe";
var answer = 'Yes I am!';
```

```js
var person = "John Doe
, carName = "Volvo", price = 200;
```

value = undefined
```js
var carName;
```
## JavaScript identifiers (names) must begin with
* A letter (A-Z or a-z)
* A dollar sign ($)
* Or an underscore (_)


# JavaScript Let
**Cannot be Redeclared**
```js
let x = "John Doe";

let x = 0; //SyntaxError
```

## Block Scope
* Global Scope
* Function Scope

```js
var x = 10;
// Here x is 10

{
    var x = 2;
    // Here x is 2
}

// Here x is 2
```

```js
let x = 10;
// Here x is 10

{
    let x = 2;
    // Here x is 2
}

// Here x is 10
```

# JavaScript Const
**Cannot be Redeclared.**

**cannot be Reassigned.**

**have Block Scope.**

**Must be Assigned.**

> When to use const?
> * A new Array
> * A new Object
> * A new Function
> * A new RegExp

## Constant Arrays
```js
const car = ["Saab", "Volvo", "BMW"];
 cars[0] = "Toyota";
 cars.push("Audi");
 ```

## Constant Objects
```js
const car = {type:"Fiat", model:"500", color:"white"};
car.color = "red";
car.owner = "Johnson";
```

# JavaScript Operators

|Operator|Description|
|:---:|:---:|
|**|Exponentiation|
|===|equal value and equal type|
|!==|not equal value or not equal type|
|typeof|Returns the type of a variable|
|instanceof|Returns true if an object is an instance of an object type|


# JavaScript Functions

```js
function name(parameter1, parameter2, parameter3){
    //code to be executed
}
```

# JavaScript Events

## HTML Events
```js
<element event="some JavaScript">
```

## Common HTML Events
|Event|Description|
|:---:|:---:|
|onchange|An HTML element has been changed|
|onclick|The user clicks an HTML element|
|onmouseover|The user moves the mouse over an HTML element|
|onmouseout|The user moves the mouse away from an HTML element|
|onkeydown|The user pushes a keyboard key|
|onload|The browser has finished loading the page|

# JavaScript String Methods

## Extracting String Parts
* ***slice(start, end)***
* ***substring(start, end)***
* ***substr(start, Length)***


## Replacing String Content
**replace()** method

## Converting to Upper and Lower Case
`toUpperCase()`

`toLowerCase()`

## The concar() Method
joins two or more strings


## String.trim()
removes whitespace from both sides of a string

## The charAt() Method
returns the character at a specified index (position) in a string

## Converting a String to an Array
`split()`

```js
text.split("")    //Split in characters
```

# JavaScript String Search
* String.indexOf()
* String.lastIndexOf()
* String.startsWith()
* String.endsWith()


## String.match(regexp)
```js
let text = "The rain in SPAIN stays mainly in the plain.";
text.match(/ain/g)    //Returns an array [ain,ain,ain]
text.match(/ain/gi)    //Returns an array[ain,Ain,ain,ain]
```

## String.includes()
`includes()` method returns true if a string contains a specified value.
```js
string.includes(***searchvalue***, ***start***)
```

## String.startsWith()
`startsWith()` method returns true if a string begins with a specified value.
```js
string.startsWith(***searchvalue***, ***start***)
```

## String.endsWith()
`endsWith()` method returns true if a string ends with a specified value.
```js
string.endsWith(***searchvalue***, ***length***)
```

# JavaScript Numbers

## Numbers Can be Objects
```js
let x = 123;
let y = new Number(123);
// (x == y) is true
// (x === y) is false
```

```js
let x = new Number(500);
let y = new Number(500);
// (x == y) is  false because objects cannot be compared
```

# JavaScript Number Methods
`toString()`

`toPrecision()`

`valueOf()`


## Converting Variables to Numbers
|Method|Description|
|:---:|:---:|
|Number()|Returns a number, converted from its argument.|
|parseFloat()|Parses its argument and returns a floating point number|
|parseInt()|Parses its argument and returns an integer|


# JavaScript Arrays

## Creating an Array
```js
const array_name = [item1, item2, ...];

const array_name = [];
array_name[0] = item1;
array_name[1] = item2;
```

## The length Property
`length` returns the length of an array (the number of array elements)


## Looping Array Elements
`for` loop

`Array.forEach()` function


## Adding Array Elements 
`push()` method, returns the new array length

# JavaScript Array Methods
`toString()` converts an array to a string of (comma separated) array values.

`join()` joins all array elements into a string, can specify the separator
```js
arrayName.join(" * ");
```
`pop()` removes the last element from an array, returns the value

`shift()` removes the first array element and "shifts" all other elements to a lower index.


## Merging (Concatenating) Arrays
`concat()`


# JavaScript Sorting Arrays
`sort()` method sorts an array alphabetically

`reverse()` method reverses the elements in an array, can use it to sort an array in descending order

## Numeric Sort
```js
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a,b){return a - b});
```

```js
function myArrayMax(arr){
    return Math.max.apply(null, arr);
}

function myArrayMin(arr){
    return Math.min.apply(null, arr);
}
```

# JavaScript Array
`forEach()` method calls a function once for each array element.

`map()`

* creates a new array by performing a function on each array element.
* does not change the original array.

`filter()` method creates a new array with array elements that passes a test.

`every()` method check if all array values pass a test.

`some()` method check if some array values pass a test.

`indexOf()` method searches an array for an element value and returns its position.

`lastIndexOf()` 

`includes()`

`find()` method returns the value of the first array element that passes a test function.

`findIndex()` method returns the index of the first array element that passes a test function.

`from()`
```js
Array.from("ABCDEFG")    // Returns [A,B,C,D,E,F,G]
```

# JavaScript Date Objects
```js
new Date()
new Date(year, month, day, hours, minutes, seconds, milliseconds)
new Date(milliseconds)
new Date(date string)
```


# JavaScript Errors
`try` lets you test a block of code for errors.

`catch` lets you handle the error.

`throw` lets you create custom errors.

`finally` lets you execute code, after try and catch, regardless of the result.


# JavaScript Hoisting
moving all declarations to the top of the current scope

JavaScript Initializations are Not Hoisted

# JavaSciprt Use Strict

```js
"use strict";
```

# The JavaScript **this** Keyword

* In a method, `this` refers to the **owner object**.
* Alone, `this` refers to the **global object**.
* In a function, `this` refers to the **global object**.
* In a function, in strict mode, `this` is `undefined`.
* In an event, `this` refers to the **element** that received the event.
* Methods like `call()`, and `apply()` can refer `this` to **any object**.


# JavaScript Arrow Function

```js
//Before
hello = function() {
    return "Hello World!";
}
//Arrow Function
hello = () => {
    return "Hello World!";
}
```
> With arrow functions the `this` keyword ***always*** represents the object that defined the arrow function.


# JavaScript Classes

## JavaScript Class Syntax
* Use the keyword `class` to create a class
* Always add a method named `constructor()`
* is **not** an object.
* is a **template** for JavaScript objects.
```js
class ClassName {
    constructor() { ... }
    method_1() { ... }
    method_2() { ... }
    method_3() { ... }
}
```

# JavaScript JSON
* is a format for storing and transporting data.
* is often used when data is sent from a server to a web page.

## JSON Syntax Rules
* Data is in name/value pairs
* Data is separated by commas
* Curly braces hold objects
* Square brackets hold arrays

```js
"employees":[
    {"firstName":"John", "lastName":"Doe"},{"firstName":"Anna", "lastName":"Smith"},{"firstName":"Peter", "lastName":"Jones"}
]
```

# Converting a JSON Text to a JavaScript Object
`JSON.parse()`


# JavaScript Debugging
* use `console.log()`
* `debugger` keyword stops the execution, and calls the debugging function

# JavaScript Best Practices
* Avoid Global Variables
* Always Declare Local Variables
* Declarations on Top
* Initialize Variables
* Declare Objects with **const**
* Declare Arrays with **const**
* Don't Use new Object()
* Beware of Automatic Type Conversions
* Use === Comparison
* Use Parameter Defaults
* End Your Switches with Defaults
* Avoid Number, String, and Boolean as Objects
* Avoid Using eval()