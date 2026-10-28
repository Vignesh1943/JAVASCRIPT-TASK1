// PART 1:

// 1. forEach()
let numbers1 = [10,20,30,40,50,60,70,80,90,100];
numbers1.forEach(num => console.log(num));

// 2. map()
let numbers2 = [2,4,6,8,10];
console.log(numbers2.map(num => num * 5));

// 3. filter()
let numbers3 = [10,25,15,30,40,5];
console.log(numbers3.filter(num => num > 30));

// 4. Employees earning <= ₹300,000
let employees = [
    {name:"Varun",salary:250000},
    {name:"Riya",salary:350000},
    {name:"Kumar",salary:300000},
    {name:"Divya",salary:200000}
];
console.log(employees.filter(emp => emp.salary <= 300000));

// 5. find()
console.log(employees.find(emp => emp.salary > 200000));

// 6. reduce()
console.log([10,20,30,40,50].reduce((sum,num) => sum + num, 0));

// 7. some()
console.log([3,7,9,12,15].some(num => num % 2 === 0));

// 8. every()
console.log([10,20,30,40].every(num => num > 0));

// 9. Ascending sort
console.log([50,10,40,20,30].sort((a,b) => a - b));

// 10. Descending sort
console.log([50,10,40,20,30].sort((a,b) => b - a));


// PART 2:

// 11. charAt()
let str = "javascript";
console.log(str.charAt(4));

// 12. charCodeAt()
console.log(str.charCodeAt(2));

// 13. trim()
console.log("   Hello JavaScript   ".trim());

// 14. Uppercase and lowercase
console.log("JavaScript".toUpperCase());
console.log("JavaScript".toLowerCase());

// 15. includes()
console.log("javascript".includes("script"));

// 16. startsWith() and endsWith()
console.log("JavaScript".startsWith("Java"));
console.log("JavaScript".endsWith("Script"));

// 17. replaceAll()
console.log("java is easy. java is popular."
    .replaceAll("java", "python"));

// 18. split()
console.log("html-css-javascript-react".split("-"));

// 19. join()
console.log(["Varun","iya","Kumar","Divya"].join(","));

// 20. slice()
console.log("JavaScript Programming".slice(0,10));


// PART 3:

// 21. Current date
let today = new Date();
console.log("Year:", today.getFullYear());
console.log("Month:", today.getMonth() + 1);
console.log("Date:", today.getDate());
console.log("Day:", today.getDay());

// 22. Current month name
let months = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
];
console.log("Current Month:", months[today.getMonth()]);

// 23. Current time
console.log("Hours:", today.getHours());
console.log("Minutes:", today.getMinutes());
console.log("Seconds:", today.getSeconds());

// 24. Set date to January 30, 2003
let date = new Date();
date.setFullYear(2003);
date.setMonth(0);
date.setDate(30);
console.log(date);


// PART 4:

// 25. setTimeout()
setTimeout(() => {
    console.log("Welcome to JavaScript");
}, 3000);

// 26 and 27. setInterval() and clearInterval()
let interval = setInterval(() => {
    console.log("Learning JavaScript");
}, 2000);

setTimeout(() => {
    clearInterval(interval);
    console.log("Interval stopped");
}, 8000);

// 28. Function execution order
function one() { console.log("One"); }
function two() { console.log("Two"); }
function three() { console.log("Three"); }

one();
setTimeout(two, 0);
three();


// PART 5:

// 29. Resolve Promise
let login = new Promise(resolve => {
    resolve("Login successful");
});
login.then(message => console.log(message));

// 30. Reject Promise
let password = new Promise((resolve, reject) => {
    reject("Invalid password");
});
password.catch(error => console.log(error));

// 31. finally()
Promise.resolve("Task successful")
    .then(message => console.log(message))
    .catch(error => console.warn(error))
    .finally(() => console.log("Process completed"));

// 32. Print product titles
fetch("https://fakestoreapi.com/products")
    .then(response => {
        if (!response.ok) throw new Error("API request failed");
        return response.json();
    })
    .then(products => {
        products.forEach(product => console.log(product.title));
    })
    .catch(error => console.warn(error.message));

// 33. Print title, price, and category
fetch("https://fakestoreapi.com/products")
    .then(response => {
        if (!response.ok) throw new Error("API request failed");
        return response.json();
    })
    .then(products => {
        products.forEach(product => {
            console.log(product.title, product.price, product.category);
        });
    })
    .catch(error => console.warn(error.message));

// 34. API error handling
fetch("https://fakestoreapi.com/products")
    .then(response => {
        if (!response.ok) throw new Error("Failed to fetch products");
        return response.json();
    })
    .then(products => console.log(products))
    .catch(error => console.warn("Error:", error.message));

// 35. API finally()
fetch("https://fakestoreapi.com/products")
    .then(response => {
        if (!response.ok) throw new Error("API request failed");
        return response.json();
    })
    .then(products => console.log(products))
    .catch(error => console.warn(error.message))
    .finally(() => console.log("API call completed"));


// PART 6:

// 36. Employee salary report
let staff = [
    {name:"Arun",salary:250000},
    {name:"Priya",salary:350000},
    {name:"Kumar",salary:200000},
    {name:"Divya",salary:280000}
];
staff.filter(emp => emp.salary < 300000)
    .forEach(emp => console.log(emp.name, "₹" + emp.salary));

// 37. Product price calculator
fetch("https://fakestoreapi.com/products")
    .then(response => {
        if (!response.ok) throw new Error("API request failed");
        return response.json();
    })
    .then(products => {
        let result = products.map(product => ({
            title: product.title,
            price: product.price
        }));
        console.log(result);
    })
    .catch(error => console.warn(error.message))
    .finally(() => console.log("Price calculation completed"));

// 38. Product search: electronics
fetch("https://fakestoreapi.com/products")
    .then(response => {
        if (!response.ok) throw new Error("API request failed");
        return response.json();
    })
    .then(products => {
        console.log(products.filter(
            product => product.category === "electronics"
        ));
    })
    .catch(error => console.warn(error.message))
    .finally(() => console.log("Product search completed"));

// 39. Number analysis
let nums = [10,15,20,25,30];
console.log("Doubled:", nums.map(num => num * 2));
console.log("Greater than 20:", nums.filter(num => num > 20));
console.log("Total:", nums.reduce((sum,num) => sum + num, 0));
console.log("Has even:", nums.some(num => num % 2 === 0));
console.log("All positive:", nums.every(num => num > 0));

// 40. Product listing with catch() and finally()
fetch("https://fakestoreapi.com/products")
    .then(response => {
        if (!response.ok) throw new Error("Failed to fetch products");
        return response.json();
    })
    .then(products => {
        products.forEach(product => {
            console.log("Title:", product.title);
            console.log("Price: $" + product.price);
            console.log("Category:", product.category);
        });
    })
    .catch(error => console.warn("Error:", error.message))
    .finally(() => console.log("Product listing completed"));
