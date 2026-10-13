//Part 5:
//1.Declare a variable using var, assign it the value 10, reassign it to 20, and print the result.

var number = 10;
number = 20;

console.log(number);

//2.Declare a variable using var with the value 30. Redeclare the same variable with the value 50 and print it.

var number = 30;
var number = 50;

console.log(number);

//3.Declare a variable using let with the value 100. Reassign it to 200 and print the result.

let numberss = 100;
numberss = 200;

console.log(numberss);

//4.Declare a variable using const to store your age. Print the value.

const agess = 21;

console.log(agess);

//5.Identify which variable declarations are valid and which are invalid: var, let, and const.

var x = 10;    // Valid
let y = 20;    // Valid
const z = 30;  // Valid

x = 15;        // Valid
y = 25;        // Valid
// z = 35;     // Invalid: const cannot be reassigned

var a = 1;
var a = 2;     // Valid: var can be redeclared

let b = 1;
// let b = 2;  // Invalid: let cannot be redeclared

//6.Create three variables using var, let, and const to store your name, age, and city. Print all three.

var name = "Vignesh";
let age = 21;
const city = "Chennai";

console.log(name);
console.log(age);
console.log(city);

//Part 2:

//7.Use prompt() to get the user's name and display it using alert().

let userName = prompt("Enter your name");

alert("Hello " + userName);

//8.Use prompt() to get the user's age and print it using console.log().

let agesss = prompt("Enter your age");

console.log(agesss);

//9.Use confirm() to ask the user whether they know JavaScript. Print the returned value.

let answer = confirm("Do you know JavaScript?");

console.log(answer);

//10.Declare variables containing a string, number, boolean, and undefined value. Print each variable's value and type.

let fruit = "Apple";
let price = 100;
let isAvailable = true;
let result;

console.log(fruit, typeof fruit);
console.log(price, typeof price);
console.log(isAvailable, typeof isAvailable);
console.log(result, typeof result);

//11.Create an array containing five fruits. Print the entire array, the first element, and the last element.

let fruits = ["Apple", "Mango", "Banana", "Orange", "Grapes"];

console.log(fruits);
console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);

//12.Create an object containing a fruit array, an electronic-items array, and a vegetable name. Print each property separately.

let shop = {
    fruits: ["Apple", "Mango", "Banana"],
    electronics: ["Mobile", "Laptop", "Headphones"],
    vegetable: "Carrot"
};

console.log(shop.fruits);
console.log(shop.electronics);
console.log(shop.vegetable);

//Part 3:

//13.Declare two variables with values 15 and 4. Print their addition, subtraction, multiplication, and division.

let l = 15;
let m = 4;

console.log(l + m);
console.log(l - m);
console.log(l * m);
console.log(l / m);

//14.Find the remainder when 27 is divided by 5 using the modulus operator.

console.log(27 % 5);

//15.Calculate \(3^4\) using the exponentiation operator.

console.log(3 ** 4);

//16.Declare a variable with the value 10. Apply the pre-increment operator and print the result.

let numbe = 10;

console.log(++numbe);

//17.Declare a variable with the value 10. Apply the pre-decrement operator and print the result.

let num = 10;

console.log(--num);

//18.Predict the output:
let g = 5;
let h = g++;

console.log(g);
console.log(h);

//Part 4:

//19. Predict the output:
let u = 4;
console.log(u++);
console.log(u);

//20. Predict the output:
let f = 4;
console.log(++f);
console.log(f);

//21. Predict the output:
let e = 8;
let r = e++;
console.log(e);
console.log(r);

//22. Predict the output:
let t = 8;
let o = ++t;
console.log(t);
console.log(o);

//23. Predict the output:
let i = 6;
let j = i--;
console.log(i);
console.log(j);

//24. Predict the output:
let p = 6;
let q = --a;
console.log(p);
console.log(q);

//25. Predict the output:
let k = 2;
k++;
k++;
console.log(k);

//26. Predict the output:
let gh = 10;
--gh;
--gh;
console.log(gh);

//27. Predict the output:
let ba = 3;
ba = ba++;
console.log(ba);

//28. Predict the output:
let ca = 4;
let da = ca++;
console.log("ca:", ca);
console.log("da:", da);

//29. Predict the output:
let eg = 5;
let fg = --e;
console.log("eg:", eg);
console.log("fg:", fg);

//30. Predict the final values of a, b, and c:
let ab = 5;
let bc = a++;
let cd = ++a;

console.log(ab);
console.log(bc);
console.log(cd);
