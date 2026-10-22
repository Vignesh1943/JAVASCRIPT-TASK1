//part1:
//1.
{
    let fruits = ["Apple", "Mango", "Orange", "Grapes", "Banana"];
    fruits.push("Kiwi", "Papaya", "Pineapple");
    console.log(fruits);
}
//2.
{
    let numbers = [10, 20, 30, 40, 50, 60];
    numbers.pop();
    console.log(numbers);
}
//3.
{
    let names = ["Arun", "Tamil", "Ravi", "Kumar", "Suresh"];
    names.shift();
    console.log(names);
}
//4.
{
    let numbers = [30, 40, 50, 60];
    numbers.unshift(10, 20);
    console.log(numbers);
}
//5.
{
    let arr = [10, 20, 30, 40, 50];
    arr.splice(1, 2);
    console.log(arr);
}
//6.
{
    let arr = [1, 2, 3, 4, 5];
    arr.splice(2, 1, 100);
    console.log(arr);
}
//7.
{
    let numbers = [10, 20, 30, 40, 50];
    numbers.fill("hello", 2, 4);
    console.log(numbers);
}
//part2:
//8.
{
    let arr1 = [1, 2, 3];
    let arr2 = [4, 5, 6];
    let result = arr1.concat(arr2);
    console.log(result);
}
//9.
{
    let arr = [10, 20, 30, 40, 50, 60];
    console.log(arr.slice(1, 5));
}
//10.
{
    let nested = [1, [2, 3], [4, [5, 6]], 7];
    console.log(nested.flat(Infinity));
}
//11.
{
    let arr = [10, 20, 30, 40, 50];
    console.log(arr.includes(30));
}
//12.
{
    let arr = [5, 10, 15, 20, 25];
    console.log(arr.indexOf(20));
}
//13.
{
    let arr = [1, 2, 3, 2, 1, 2];
    console.log(arr.lastIndexOf(2));
}
//14.
{
    let numbers = [40, 10, 50, 20, 30];
    numbers.sort((a, b) => a - b);
    console.log(numbers);
}
//15.
{
    let numbers = [10, 20, 30, 40, 50, 60, 70];
    numbers.reverse();
    console.log(numbers);
}
//part3:
//16.
{
    let arr1 = [1, 2, 3, 4];
    let arr2 = [5, 6, 7, 8];
    let merged = [...arr1, ...arr2];
    console.log(merged);
}
//17.
{
    let student = {
        name: "Tamil",
        age: 25
    };

    let job = {
        role: "Developer",
        company: "ABC"
    };

    let details = { ...student, ...job };
    console.log(details);
}
//18.
{
    function example(a, b, ...rest) {
        console.log(a);
        console.log(b);
        console.log(rest);
    }

    example(10, 20, 30, 40, 50);
}
//19.
{
    function one(a, b, ...c) {
        console.log(a + b + c[0] + c[1]);
    }

    one(10, 20, 30, 40);
}
//20.
{
    let arr1 = [10, 20, 30, 40];
    let arr2 = [50, 60, 70];

    let copied = [...arr1];
    console.log(copied);
    console.log(arr2);
}
//part4:
//21.
{
    let arr = [10, 20, 30, 40];
    let [a, b, c, d] = arr;
    console.log(a, b, c, d);
}
//22.
{
    let nested = [1, 2, [3, 4, [5, 6]]];
    let [a, b, [c, d, [e, f]]] = nested;
    console.log(a, b, c, d, e, f);
}
//23.
{
    let student = ["Tamil", 25, 8.5];
    let [name, age, cgpa] = student;
    console.log(name, age, cgpa);
}
//part5:
//24.
{
    let employee = {
        name: "Tamil",
        role: "Developer",
        location: "Salem"
    };

    let { name, role, location } = employee;
    console.log(name, role, location);
}
//25.
{
    let student = {
        name: "Tamil",
        address: {
            city: "Salem",
            state: "Tamil Nadu"
        }
    };

    let {
        address: { city, state }
    } = student;

    console.log(city, state);
}
//26.
{
    let employee = {
        name: "Tamil",
        role: "Developer",
        location: {
            mainLocation: "Chennai",
            currentLocation: "Salem"
        }
    };

    let {
        name,
        role,
        location: { mainLocation, currentLocation }
    } = employee;

    console.log(name, role, mainLocation, currentLocation);
}
//part6:
//27.
{
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    numbers.shift();
    numbers.pop();
    numbers.unshift(100, 200);

    console.log(numbers);
}
//28.
{
    let arr = [10, 20, 30, 20, 40, 20];
    let target = 20;

    console.log(arr.includes(target));
    console.log(arr.indexOf(target));
    console.log(arr.lastIndexOf(target));
}
//29.
{
    let employee1 = {
        name: "Tamil",
        age: 25
    };

    let employee2 = {
        role: "Full Stack Developer",
        company: "ABC"
    };

    let employee = { ...employee1, ...employee2 };
    let { name, role } = employee;

    console.log(name, role);
}
//30.
{
    let nested = [1, [2, 3], [4, [5, 6]], 7];
    let result = nested.flat(Infinity).reverse();

    console.log(result);
}