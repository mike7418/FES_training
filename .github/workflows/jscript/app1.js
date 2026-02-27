// JavaScript source code


// Math function
function addition(num1, num2) {
    return num1 + num2;
}
console.log(addition(2, 3));

// New argument
console.log(addition(-3, 6));


// Another new argument
console.log(addition(7, 3));

function hoursIntoSeconds(hours) {
    return hours * 3600;
}

// First calculation
console.log(hoursIntoSeconds(2)); // Output: 7200

// Second calculation
console.log(hoursIntoSeconds(10)); // Output: 36000

// Third calculation
console.log(hoursIntoSeconds(24)); // Output: 86400

// calcPerimeter
function calcPerimeter(length, width) {
    return 2 * (length + width);
}

// first calculation
console.log(calcPerimeter(6, 7)); // Output: 26

// second calculation
console.log(calcPerimeter(20, 10)); // Output: 60

// third calculation
console.log(calcPerimeter(2, 9)); // Output: 28

// calcTriangleArea
function calcTriangleArea(base, height) {
    return 0.5 * base * height;
}
// first calculation
console.log(calcTriangleArea(3, 2)); // Output: 3

// second calculation
console.log(calcTriangleArea(10, 10)); // Output: 50

// third calculation
console.log(calcTriangleArea(20, 20)); // Output: 200


// appendFrontend function
function appendFrontend(string) {
    return string + ' Frontend ';
}
// first calculation
console.log(appendFrontend('Apple')); // Output: 'Apple Frontend'

// second calculation
console.log(appendFrontend('Banana')); // Output: 'Banana Frontend'

// third calculation
console.log(appendFrontend('Orange')); // Output: 'Orange Frontend'

// sumGreaterThan100
function sumGreaterThan100(num1, num2) {
    if (num1 + num2 > 100)
        return true;
    else
        return false;
}
// first calculation
console.log(sumGreaterThan100(20, 10)); // Output: false

// second calculation
console.log(sumGreaterThan100(50, 60)); // Output: true

// third calculation
console.log(sumGreaterThan100(100, -50)); // Output: false

// lessThanOrEqualToZero
function lessThanOrEqualToZero(num) {
    if (num <= 0)
        return true;
    else
        return false;
}
// first calculation
console.log(lessThanOrEqualToZero(3)); // Output: false

// second calculation
console.log(lessThanOrEqualToZero(0)); // Output: true

// third calculation
console.log(lessThanOrEqualToZero(-2)); // Output: true

// oppositeBoolean
function oppositeBoolean(bool) {
//    if (bool === false) {
//        return true;
//    }
//    else {
//        return false;
    //    }
    return !bool;
}
// first calculation
console.log(oppositeBoolean(true)); // Output: false

// second calculation
console.log(oppositeBoolean(false)); // Output: true

// isNotZero
function isNotZero(num) {
    return num !== 0;
}

// first calculation
console.log(isNotZero(3)); // Output: true

// second calculation
console.log(isNotZero(0)); // Output: false

// third calculation
console.log(isNotZero(null)); // Output: true

// calcRemainder
function calcRemainder(num1, num2) {
    return num1 % num2;
}
// first calculation
console.log(calcRemainder(4, 2)); // Output: 0

// second calculation
console.log(calcRemainder(7, 8)); // Output: 7

// third calculation
console.log(calcRemainder(9, 8)); // Output: 1

// isOdd
function isOdd(num) {
    return num % 2 !== 0;
}

// first calculation
console.log(isOdd(3)); // Output: true

// second calculation
console.log(isOdd(2)); // Output: false

// third calculation
console.log(isOdd(1)); // Output: true

// booleanInteger
function booleanInteger(bool) {
    return bool % 2 ? 1 : -1;
}

// first calculation
console.log(booleanInteger(1)); // Output: -1

// second calculation
console.log(booleanInteger(2)); // Output: 1

// third calculation
console.log(booleanInteger(5)); // Output: -1

// isLoggedInAndSubscribed
function isLoggedInAndSubscribed(loggedIn, subscribed) {
    return (loggedIn === 'LOGGED IN' && subscribed === 'SUBSCRIBED') ? true : false;
}

// first calculation
console.log(isLoggedInAndSubscribed('LOGGED IN', 'SUBSCRIBED')); // Output: true

// second calculation
console.log(isLoggedInAndSubscribed('LOGGED IN', 'UNSUBSCRIBED')); // Output: false

// third calculation
console.log(isLoggedInAndSubscribed('NOT LOGGED IN', 'SUBSCRIBED')); // Output: false


// falsyOrTruthy
function falsyOrTruthy(value1, value2) {
    return (!value1) ? value1 : value2;
}

// first calculation
console.log(falsyOrTruthy(0, 500)); // Output: 0

// second calculation
console.log(falsyOrTruthy(false, 100)); // Output: false

// third calculation
console.log(falsyOrTruthy(true, 'Dog')); // Output: 'Dog'

// arrLength
function arrLength(arr) {
    return arr.length;  
}

// first calculation
console.log(arrLength([1, 2, 3, 4, 5])); // Output: 5

// second calculation
console.log(arrLength(['a', 'b', 'c'])); // Output: 3

// third calculation
console.log(arrLength([])); // Output: 0

// arrSum
function arrSum(arr) {
    return arr.reduce((a, b) => a + b, 0);
}

// first calculation
console.log(arrSum([1, 2, 3, 4, 5])); // Output: 15

// second calculation
console.log(arrSum([10, 20, 30, 40, 50])); // Output: 150

// third calculation
    console.log(arrSum([5, 5, 5, 5, 5])); // Output: 25



// progressiveSum
function progressiveSum(num) {
    let sum = 0;
    for (let i = 0; i <= num; i++) {
        sum += i;
    }
    return sum;
}

// first calculation
console.log(progressiveSum(5)); // Output: 15

// second calculation
console.log(progressiveSum(10)); // Output: 55

// third calculation
console.log(progressiveSum(100)); // Output: 5050


// calcTime
function calcTime(num) {
    let minutes = Math.floor(num / 60);
    let seconds = num % 60;
    if (minutes.toString().length === 1) {
        minutes = '0' + minutes;
    }
    if (seconds.toString().length === 1) {
        seconds = seconds + '0';
    }

    return `${minutes}:${seconds}`;
}

// first calculation
console.log(calcTime(60)); // Output: '01:00'

// second calculation
console.log(calcTime(90)); // Output: '01:30'

// third calculation
console.log(calcTime(120)); // Output: '02:00'

// fourth calculation
console.log(calcTime(2100)); // Output: '03:30'0