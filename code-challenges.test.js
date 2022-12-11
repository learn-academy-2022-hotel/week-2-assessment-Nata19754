// ASSESSMENT 2: Coding Practical Questions with Jest

// const { exportAllDeclaration } = require("@babel/types")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

// const numbersArray1 = [6, 7, 8, 9, 10]
// // Expected output: [18, 21, 24, 27, 30]
// const numbersArray2 = [24, 27, 30, 33, 36]
// // Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

// const object1 = { number: 15 }
// // Expected output: "15 is divisible by three"
// const object2 = { number: 0 }
// // Expected output: "0 is divisible by three"
// const object3 = { number: -7 }
// // Expected output: "-7 is not divisible by three"

const object1 = { number: 15 }
const object2 = { number: 0 }
const object3 = { number: -7 }

describe ("divisible", () => {
    it("takes a object as an argument and decides if the number inside it is evenly divisible by three or not",() => {
    expect (divisible(object1)).toEqual(("15 is divisible by three"))
    expect (divisible(object2)).toEqual(("0 is divisible by three"))
    expect (divisible(object3)).toEqual(("-7 is not divisible by three"))
    })
})

//GOOD FAIL:

// FAIL  ./code-challenges.test.js
// divisible
//   ✕ takes a object as an argument and decides if the number inside it is evenly divisible by three or not (1 ms)

// ● divisible › takes a object as an argument and decides if the number inside it is evenly divisible by three or not

//   ReferenceError: divisible is not defined



// b) Create the function that makes the test pass.

//PSEUDOCODE:
//Create function called divisible
//input: objest as an argument
//output: string stating if the number in the object is divisible by 3 or not
//use conditionals in function
//if % 3 of the value is strickly equal to zero, then the number is divisible by 3
//else, the value is not divisible by 3
//callback function on the 3 variable and run $yarn jest for test


const divisible = (value) => {
    if(value.number % 3 === 0) {
        return `${value.number} is divisible by three`
    }
    else {
        return `${value.number} is not divisible by three`
    }
   
}
console.log(divisible(object1))
//OUTPUT: 15 is divisible by three
console.log(divisible(object2))
//OUTPUT: 0 is divisible by three
console.log(divisible(object3))
//OUTPUT: -7 is not divisible by three

// 15 is divisible by three

// at Object.log (code-challenges.test.js:80:9)

// console.log
// 0 is divisible by three

// at Object.log (code-challenges.test.js:82:9)

// console.log
// -7 is not divisible by three

// at Object.log (code-challenges.test.js:84:9)

// PASS  ./code-challenges.test.js
// divisible
// ✓ takes a object as an argument and decides if the number inside it is evenly divisible by three or not (1 ms)



// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// // // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// // // Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

describe ("cap", () => {
        it("takes in an array of words and returns an array with all the words capitalized",() => {
        expect (cap(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
        expect (cap(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
        })
    })

//GOOD FAIL:

// FAIL  ./code-challenges.test.js
// capitalized
//   ✕ takes in an array of words and returns an array with all the words capitalized

// ● capitalized › takes in an array of words and returns an array with all the words capitalized

//   ReferenceError: capitalized is not defined



// b) Create the function that makes the test pass.

//PSEUSO CODE
//Create a function called capitalized
//input: array of strings
//output: array with all the words capitalized
//use map to iterate
//after map method has been implemented, use charAt to find the character at index 0 of each element and use toUppercase on the character at index 0
//slice the rest of the remaining characters in the elements and apply the tolowercase

function cap(array) {
    return array.map(placement => {
        return placement.charAt(0).toUpperCase() + placement.slice(1).toLowerCase()
    });
    };
console.log(cap(randomNouns1))
//OUTPUT: [ 'Streetlamp', 'Potato', 'Teeth', 'Conclusion', 'Nephew' ]
console.log(cap(randomNouns2))
//OUTPUT: [ 'Temperature', 'Database', 'Chopsticks', 'Mango' ]


//GOOD TEST

// [ 'Streetlamp', 'Potato', 'Teeth', 'Conclusion', 'Nephew' ]

// at Object.log (code-challenges.test.js:149:9)

// console.log
// [ 'Temperature', 'Database', 'Chopsticks', 'Mango' ]

// at Object.log (code-challenges.test.js:150:9)

// PASS  ./code-challenges.test.js
// cap
// ✓ takes in an array of words and returns an array with all the words capitalized (1 ms)



// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

// const vowelTester1 = "learn"
// // Expected output: 1
// const vowelTester2 = "academy"
// // Expected output: 0
// const vowelTester3 = "challenges"
// // Expected output: 2

const vowelTester1 = "learn"
const vowelTester2 = "academy"
const vowelTester3 = "challenges"

describe ("fVowel",() => {
    it ("takes in a string and logs the index of the first vowel",() => {
    expect(fVowel(vowelTester1)).toEqual(1)
    expect(fVowel(vowelTester2)).toEqual(0)
    expect(fVowel(vowelTester3)).toEqual(2)

    })
})


//GOOD FAIL

// FAIL  ./code-challenges.test.js
// fVowel
//   ✕ takes in a string and logs the index of the first vowel

// ● fVowel › takes in a string and logs the index of the first vowel

//   ReferenceError: fVowel is not defined


// b) Create the function that makes the test pass.

//PSEUDOCODE
//Create a function CALLED FVowel
//input: "string"
//output: index of first vowel
//use for loop
//use charAt and match to find if character at index matches the vowels
//retuen the index if character matches

const fVowel = (string) => {
    for(let i=0; i<string.length; i++){
        if (string.charAt(i).match(/[a,e,i,o,u]/)) {
            return i
        }
    }
}
console.log(fVowel(vowelTester1))
// //output:1
console.log(fVowel(vowelTester2))
// //output:0
console.log(fVowel(vowelTester3))
// //output:2

//PASSING TEST

// 1

// at Object.log (code-challenges.test.js:203:9)

// console.log
// 0

// at Object.log (code-challenges.test.js:204:9)

// console.log
// 2

// at Object.log (code-challenges.test.js:205:9)

// PASS  ./code-challenges.test.js
// fVowel
// ✓ takes in a string and logs the index of the first vowel (1 ms)


