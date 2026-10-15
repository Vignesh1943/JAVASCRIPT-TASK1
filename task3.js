//Part.1 Variables and data types
//1.
// var: 
var a = 10;
a = 20;
var a = 30;
console.log(a);

// let: 
let b = 40;
b = 50;
console.log(b);

// const:
const f = 60;
console.log(f);

//2.

let name = "Vignesh";
let age = 22;
let programmingKnowledge = true;

console.log(name, typeof name);
console.log(age, typeof age);
console.log(programmingKnowledge, typeof programmingKnowledge);

// 3.
let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
console.log(fruits);
console.log("First fruit:", fruits[0]);
console.log("Last fruit:", fruits[fruits.length - 1]);

// 4.
let student1 = {
name: "Riya",
role: "Frontend Developer",
cgpa: 9
 };
console.log(student1.name);
console.log(student1.role);
console.log(student1.cgpa);

// 5.
let userName = prompt("Q3: Enter your name:");
let userAge = prompt("Q3: Enter your age:");
alert("Your name is " + userName);
console.log("Age:", userAge);


// PART 2: OPERATORS
// 6. Arithmetic operators
let c = 10, d = 3;
console.log(c + d);      //13
console.log(c - d);      //7
console.log(c * d);      //30
console.log(c / d);      //3.3333333
console.log(c % d);      //1
console.log(c ** d);     //1000


// 7.
let e = 5;
console.log(e++);  //5
console.log(e);    //6
console.log(++e);  //7

// 8.
let g = 10;
let h = a--;
let i = --a;

console.log(g);  //10
console.log(h);  //30
console.log(i);  //28

// 9. Assignment operators
let j = 20;
j += 5;
console.log(j); //25

j -= 3;
console.log(j); //22

j *= 2;
console.log(j); //44

j /= 4;
console.log(j); //11

j %= 3;
console.log(j)  //2
        
// 10. comparison

console.log(5 == "5");     //true
console.log(5 === "5");    //false
console.log(10 != "10");   //fasle
console.log(10 !== "10");  //true

// 11.
let ager = 20;
let hasID = true;

console.log(ager >= 18 && hasID); //true
console.log(ager < 18 || hasID);  //true
console.log(!hasID);              //false
console.log(ager < 18 && hasID);  //false

// 12.
let aged = Number(prompt("Enter your age:"));

let result = aged >= 18
    ? "You are eligible."
    : "You are not eligible.";

console.log(result);

// part 3: type casting and condition

//13.
console.log(typeof ("hello" + 10));         //string
console.log(typeof (10 + true));            //number
console.log(typeof (10 + null));            //number
console.log(typeof ("hello" + undefined));  //string

//14.
let num = Number(prompt("Enter a number:"));

console.log("Result:", num + 10);

//15.
console.log(Boolean(""));         //false
console.log(Boolean("Hello"));    //true
console.log(Boolean(0));          //false
console.log(Boolean(true));       //true

//16.
let numz = Number(prompt("Enter a number:"));

if (numz > 0) {
    console.log("Positive number");
} else {
    console.log("Zero or negative number");
}

//17.
let time = Number(prompt("Enter the hour (0-23):"));

if (time < 0 || time > 23 || !Number.isInteger(time)) {
    console.log("Invalid time");
} else if (time < 5) {
    console.log("Night");
} else if (time < 8) {
    console.log("Early morning");
} else if (time < 12) {
    console.log("Morning");
} else if (time < 17) {
    console.log("Afternoon");
} else if (time < 20) {
    console.log("Evening");
} else {
    console.log("Night");
}

//18.
let agex = Number(prompt("Enter your age:"));
let height = Number(prompt("Enter your height in cm:"));
let weight = Number(prompt("Enter your weight in kg:"));

if (agex >= 18) {
    if (height >= 160) {
        if (weight >= 50) {
            console.log("You are eligible.");
        } else {
            console.log("Weight requirement not met.");
        }
    } else {
        console.log("Height requirement not met.");
    }
} else {
    console.log("Age requirement not met.");
}

//part 4: switch and loops
//19.
let color = prompt("Enter traffic light color:").toLowerCase();

switch (color) {
    case "red":
        console.log("Stop!");
        break;

    case "yellow":
        console.log("Get ready!");
        break;

    case "green":
        console.log("Go!");
        break;

    default:
        console.log("Invalid color");
}

//20.
for (let i = 1; i <= 20; i++) {
    console.log(i);
}

//21.
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

//22.
let k = 10;

while (k >= 1) {
    console.log(k);
    k--;
}

//23.
let l = 1;

do {
    console.log(l);
    l++;
} while (l <= 10);

//24.
let text = "JavaScript";

for (let char of text) {
    console.log(char);
}

//25.
let students = ["Riya", "Ravi", "Kumar", "Divya", "Arun"];

for (let name of students) {
    console.log(name);
}

//26.
let student = {
    name: "Riya",
    role: "Frontend Developer",
    cgpa: 9
};

for (let key in student) {
    console.log(key + ":", student[key]);
}

//part 5: mixed practice
//27.
let num1 = Number(prompt("Enter first number:"));
let num2 = Number(prompt("Enter second number:"));

console.log("Sum:", num1 + num2);
console.log("Difference:", num1 - num2);
console.log("Product:", num1 * num2);

if (num2 !== 0) {
    console.log("Remainder:", num1 % num2);
} else {
    console.log("Cannot calculate remainder with zero.");
}

//28.
let numbers = [5, 12, 8, 15, 20];

for (let num of numbers) {
    if (num > 10) {
        console.log(num);
    }
}

//29.
let agel = Number(prompt("Enter your age:"));

if (agel >= 18) {
    alert("You are eligible.");
} else {
    alert("You are not eligible.");
}

//30.
let num3 = Number(prompt("Enter first number:"));
let num4 = Number(prompt("Enter second number:"));

let choice = prompt(
    "Choose operation:\n1. Addition\n2. Subtraction\n3. Multiplication\n4. Division"
);

switch (choice) {
    case "1":
        alert("Sum: " + (num3 + num4));
        break;

    case "2":
        alert("Difference: " + (num3 - num4));
        break;

    case "3":
        alert("Product: " + (num3 * num4));
        break;

    case "4":
        if (num2 !== 0) {
            alert("Division: " + (num3 / num4));
        } else {
            alert("Cannot divide by zero.");
        }
        break;

    default:
        alert("Invalid choice.");
}