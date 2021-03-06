/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculates the area of the associated rectangle.
*/

function calculateArea (l1 , l2) {
    let area = l1 * l2
    return area
}

console.log(calculateArea(20 ,50))


/* EXERCISE 2
Write a function "crazySum" which receives two integers. It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

function crazySum( num1 , num2) {
    let sum = num1 + num2 
    if (num1 === num2) {
        sum = (num1 + num2) * 3
        return sum
    }
    return sum
}

console.log(crazySum(20 , 21))

/* EXERCISE 3
Write a function "crazyDiff" that computes the absolute difference between a given number and 19. 
It should return triple their absolute difference if the given number is greater than 19.
*/

function crazyDiff (givenNum){
    let absoluteDifference = givenNum - 19
    if (givenNum > 19) {
        absoluteDifference *= 3
        return Math.abs(absoluteDifference)
    }
    return Math.abs(absoluteDifference)
}

console.log(crazyDiff(21))

/* EXERCISE 4
Write a function "boundary" which accept an integer n and returns true if n is within 20 and 100 (included) or if it's equal to 400.
*/

function boundary(n){
    if (n >= 20 && n <= 100) {
        return true
    } if (n === 400) {
        return true
    } else {
        return false
    }
}

console.log(boundary(400))

/* EXERCISE 5
Write a function "strivify" which accepts a string.
It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

function strivify(stringWord) {
    let newString = "Strive" + " " + stringWord
    let string = newString.startsWith()
    if (string = true) {
        return stringWord
    }
    return newString
}

console.log(strivify("Strive is awesome"))

/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
*/


function check3and7(num){
    let num1 = Math.abs(num)
    if (num%3 === 0) {
        return console.log("The number is a multiple of 3")
    } else if (num%7 === 0) {
        return console.log("The number is a multiple of 7")
    }
}

console.log(check3and7(14))



/* EXERCISE 7
Write a function "reverseString" to programmatically reverse a given string (es.: Strive => evirtS).
*/


function reverseString (stringToReverse) {
    let reversedString = " "
    for (let j = stringToReverse.length - 1; j >= 0; j--) {
        reversedString += stringToReverse[j]
    }
    return reversedString
}

console.log(reverseString("this is a string reversed"))


/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as a parameter.
*/


function upperFirst(stringToCapital) {
    let str = stringToCapital
    let arr = str.split(" ");
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    let str2 = arr.join(" ");
    return str2
}

console.log(upperFirst("this string is crazy"));



/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

function cutString(str) {
    return str.slice(1, str.length - 1);
  }
  console.log(cutString("hi strivers"));

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/


function giveMeRandom(n) {
    let array = []
    for (let i = 0; i < n; i++) {
        array.push(Math.floor(Math.random() * 10))
    }
    return array
}

console.log(giveMeRandom(10))

/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit in Eduflow.
*/