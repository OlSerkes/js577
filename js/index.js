//alert('Hello');
//let message = "Hello JavaScript";
//alert(message);
//message = "Hello World";
//alert(message);

//const userName = prompt('Enter your name');
//alert('Hello ' + userName);
const userAge = Number(prompt('Enter your age'));
alert('Your age is ' + userAge);
const nextAge = add(userAge, 1);
alert('Your age should be ' + nextAge);
if (userAge >= 18) {
    alert('You are adult');
} else {
    alert('You are underage');
}
function add(a, b) {
    const sum = a + b;
    return sum;
}