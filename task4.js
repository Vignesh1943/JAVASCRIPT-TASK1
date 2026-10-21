//part1:
//1.
function welcome() {
    console.log("Welcome to JavaScript");
}
welcome();

//2.
function studentDetails(name, age, cgpa) {
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("CGPA:", cgpa);
}
studentDetails("Arun", 20, 8.5);
studentDetails("Priya", 21, 9.2);

//3.

function calculateFee(fee) {
    return fee;
}
let studentFee = calculateFee(200000);
console.log(studentFee);

//4.

function discount(percent) {
    let fee = 200000;
    let discountAmount = fee * percent / 100;
    let finalFee = fee - discountAmount;
    console.log("Discount:", discountAmount);
    console.log("Final Fee: ₹" + finalFee);
}
discount(10);

//5.

function studentForm(name, age, disability = "no") {
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Disability:", disability);
}
studentForm("Arun", 20, "yes");
studentForm("Priya", 21, "no");
studentForm("Rahul", 19);

//part2:

//6.

function displayMessage(message) {
    console.log(message);
}
displayMessage("Hello, JavaScript!");

//7.

const printName = function(name) {
    console.log(name);
};
printName("Arun");

//8.

const printNumber = (num) => {
    console.log(num);
};
printNumber(100);

//9.

function checkScope() {
    if (true) {
        var a = 10;
        let b = 20;
        const c = 30;

        console.log("Inside:", a, b, c);
    }

    console.log("Outside var:", a);
}
checkScope();

//10.

console.log(value);
var value = 10;

//part3:

//11.

function first(callback) {
    console.log("First function");
    callback();
}
function second() {
    console.log("Second function");
}
first(second);

//12.

function add(callback, a, b) {
    console.log("Sum:", a + b);
    callback(a, b);
}
function result(a, b) {
    console.log("Callback received:", a, b);
}
add(result, 10, 5);

//13.

const sub = (num1, num2) => {
    console.log("Subtraction:", num1 - num2);
};
function add(callback, a, b) {
    console.log("Addition:", a + b);
    callback(a, b);
}
add(sub, 20, 8);

//14.

function multiply(callback, a, b) {
    console.log("Multiplication:", a * b);
    callback();
}
function showMessage() {
    console.log("Multiplication completed");
}
multiply(showMessage, 5, 4);

//15.

function divide(num1, num2) {
    if (num2 === 0) {
        console.log("Cannot divide by zero");
        return;
    }
    console.log("Division:", num1 / num2);
}
function calculate(callback) {
    callback(20, 4);
}
calculate(divide);

//16.

function greetStudent(callback, name) {
    callback(name);
}
function greet(name) {
    console.log("Welcome, " + name);
}
greetStudent(greet, "Priya");

//part4:

//17.

function* cashbackMessages() {
    yield "10% cashback";
    yield "30% cashback";
    yield "Better luck next time";
}
const generator = cashbackMessages();
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());



//19.

function* discounts() {
    yield "5% discount";
    yield "10% discount";
    yield "15% discount";
    yield "20% discount";
    yield "25% discount";
}
for (const message of discounts()) {
    console.log(message);
}

//20.

function* studentNames() {
    yield "Arun";
    yield "Priya";
    yield "Rahul";
}
for (const name of studentNames()) {
    console.log(name);
}

//21.

function* numbers() {
    yield 10;
    yield 20;
    yield 30;
    yield 40;
}
const gen = numbers();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

//part5:

//22.

function add(a, b, c) {
    console.log(a + b + c);
}
add(5, 10, 15);

//23.

function add(a) {
    return function(b) {
        return function(c) {
            console.log(a + b + c);
        };
    };
}
add(5)(10)(15);

//24.

const calculateSum = a => b => c => a + b + c;

console.log(calculateSum(5)(10)(15));

//25.

const calculateTotal = price => discount => quantity => {
    const discountedPrice = price - (price * discount / 100);
    return discountedPrice * quantity;
};
const total = calculateTotal(1000)(10)(3);
console.log("Total price: ₹" + total);

//26.

function normalCalculate(a, b, c) {
    return a + b + c;
}
function curriedCalculate(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
}
const normalResult = normalCalculate(5, 10, 15);
const curriedResult = curriedCalculate(5)(10)(15);
console.log("Normal result:", normalResult);
console.log("Curried result:", curriedResult);

//part6:

//27.

(function(productName, discountPercent) {
    console.log(
        `${productName} is on sale with ${discountPercent}% discount!`
    );
})("Laptop", 20);

//28.

function getNumber() {
    return 100;
}
const number = getNumber();
console.log(number);

//29.

function getMarks(marks) {
    return marks;
}

const studentMarks = getMarks(95);

console.log("Student marks:", studentMarks);

//30.

function getMarks(marks) {
    return marks;
}

const studentMarks1 = getMarks(95);

console.log("Student marks:", studentMarks);