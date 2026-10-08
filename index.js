//1.var

// 1. Create a var variable called name and initialize it with your name. Print it.
var name = "Vignesh Kumar";

console.log(name);


// 2. Create a var variable called age with value 25. Reassign it to 30 and print it.
var age = 25;
age = 30;

console.log(age);


// 3. Create a var variable called city, assign "Chennai", then reassign "Bangalore". Print the final value.
var city = "Chennai";
city = "Bangalore";

console.log(city);


// 4. Create a var variable called salary and initialize it with 25000. Redeclare it with 35000. Print the value.
var salary = 25000;
salary = 35000;

console.log(salary);


// 5. Create a var variable, assign a value, reassign it, and redeclare it. Print the final value.
var number = 10;
number = 20;
var number = 30;

console.log(number);


// 6. Create a var variable called department with "ECE" and redeclare it with "CSE".
var department = "ECE";
var department = "CSE";

console.log(department);


// 7. Create a var variable called mark with 50,reassign it to 75, and print it.
var mark = 50;
mark = 75;

console.log(mark);


// 8. Create a var variable called company and redeclare it with another company name.
var company = "SLSB";
company = "Stackly";

console.log(company);


// 9. Create a var variable without assigning a value,then initialize it later and print it.
var country;
country = "India";

console.log(country);


// 10. Create one var variable and change its value three times.Print the final value.
var color = "Red";
color = "Blue";
color = "Green";
color = "Yellow";

console.log(color);


//2.let

//11.Create a let variable called age,initalize it with your age and print it.
let yourage = 24;
yourage = 25;

console.log(yourage); //output=true

//12.Create a let variable called salary,initialize it with 30000,then reassign it to 40000.
let Mysalary = 30000;
Mysalary = 40000;

console.log(Mysalary);

//13.Create a let variable called name, assign your name, then change it to another name.
let Myname = "Tamil";
Myname = "Vigneshkumar";

console.log(Myname);

//14.Create a let variable called department and change its value from "ECE" to "CSE".
let Mydepartment = "ECE";
Mydepartment = "CSE";

console.log(Mydepartment);

//15.Create a let variable called mark, initialize it with 60, then reassign it to 90.
let mymark = 60;
mymark = 90;

console.log(mymark);

//16.Declare a let variable without initialization. Later assign a value and print it.
let Job;
Job = "Frontend Developer";

console.log(Job);

//17.Try to redeclare the same let variable. Observe what happens.
let Mycity = "Tirupattur";
Mycity = "Vaniyambadi";

console.log(Mycity);

//18.Create a let variable called city and reassign it two times. Print the final value.
let nativecity = "Vellore";
nativecity = "Tirupattur";
nativecity = "Vaniyambadi";

console.log(nativecity);

//19.Create three different let variables and print all three.
let firstname = "Vignesh";
let lastname = "Kumar";
let favfood = "Briyani";

console.log(firstname);
console.log(lastname);
console.log(favfood);

//20.Create a let variable, initialize it, reassign it, and try to redeclare it.
let Ourcompany = "SLSB";
Ourcompany = "Stackly";

console.log(Ourcompany);


// 3.const

//21.Create a const variable called age with value 25 and print it.
const ages = 25;

console.log(ages);

//22.Create a const variable called salary with value 50000 and print it.
const salaries = 50000;

console.log(salaries);

//23.Create a const variable called company with "Stackly" and print it.
const Companies = "Stackly";

console.log(Companies);

//24.Try to reassign a const variable with another value. Observe the result.
const subject = "maths";
//subject = "physics"; Uncaught typeError:Assignment to constant variable.

console.log(subject);

//25.Try to redeclare a const variable. Observe the result.
const lang = "English";
//const lang = "Tamil"; "lang" has already been declared.

console.log(lang);

//26.Create a const variable called college and initialize it with your college name.
const College = "Vel Tech High Tech";

console.log(College);

//27.Create three const variables for name, age, and department. Print them.
const names = "Vignesh Kumar"
const ageses = 25;
const ourdepartment = "IT";

console.log(names);
console.log(ageses);
console.log(ourdepartment);

//28.Write a program using one var, one let, and one const variable. Print all three.\
var friut = "kiwi";
let juice = "orange";
const fastfood = "friedrice";

console.log(friut);
console.log(juice);
console.log(fastfood);


//Printing statements

//29.Print your name using console.log().
console.log("Vignesh kumar");

//30.Create a variable containing your age and print it using console.log().
var agge = 25;

console.log(agge);

//31.Print the number 100 using console.log().
console.log(100);

//32.Create three variables and print their values using console.log().
let Village = "Mallankuppam";
let num = 152;
let qualification = "B.TECH";

console.log(Village);
console.log(num);
console.log(qualification);

//33.Create a variable called message with "Hello JavaScript" and print it.
let message = "Hello Javascript";

console.log(message);

//34.Create a variable, print its value, change its value, and print it again.
let value = 60;

console.log(value);

value = 90;

console.log(value);

//35.Print your name, age, and qualification using three separate console.log() statements.
console.log("Vignesh Kumar");
console.log(25);
console.log("B.TECH");


//5.Alert()

//36.Display "Welcome to JavaScript" using alert().
alert("Welcome to Javascript");

//37.Create a variable called userName and display it using alert().
let userName = "Vignesh Kumar";
alert(userName);

//38.Create a variable called userAge and display it using alert().
let userAge = 25;
alert(userAge);

//39.Create a variable containing "Welcome Vignesh" and show it in a popup.
let Welcomemessage = "Welcome Vignesh";
alert(Welcomemessage);

//40.Create a variable containing your qualification and display it using alert().
let qualifications = "B.TECH";
alert(qualifications);



//6.prompt()

// 41. Ask the user "What is your name?" and print the answer in console
let namess = prompt("What is your name?");
console.log(namess);


// 42. Ask the user "How old are you?" and display the answer using alert()
let agess = prompt("How old are you?");
alert(agess);


// 43. Ask the user for their qualification and print the answer in console
let qualificationss = prompt("What is your qualification?");
console.log(qualificationss);


// 44. Ask the user for their name and show the entered name in a popup
let userNames = prompt("Enter your name:");
alert(userNames);


// 45. Ask the user for their age and print the entered age in console
let userAges = prompt("Enter your age:");
console.log(userAges);


//7.confirm() & document.writeln()

// 46. Create a confirmation box asking "Do you know programming?"
confirm("Do you know programming?");


// 47. Create a variable and display it using document.writeln()
let messagess = "Welcome to Batch 41";
document.writeln(messagess);


// 48. Ask the user "Do you want to continue?" using confirm()
confirm("Do you want to continue?");



//8.Console Methods

// 49. Display three different messages

console.log("This is a normal message.");
console.warn("This is a warning message.");
console.error("This is an error message.");

// 50. Using console methods

console.log("This is a normal message.");

console.warn("This is a warning message.");

console.error("This is an error message.");

console.clear();

console.log("Console has been cleared.");