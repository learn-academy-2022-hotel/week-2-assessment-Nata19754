// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Hotel 2022"
console.log(cohort.split(""))

// a) Your answer: It will convert the string " Hotel 2022" into and array, so each character in this sring including the space between hotel and 2022 will become and element in the new array.

// b) Verify and explain: The output for this code was an array made up of elements that were previously the characters in the string. The split method is used to convert a string into an array. In this case, each character in the string was turned into its individual element in the output array.

//output: [
//   'H', 'o', 't', 'e',
//   'l', ' ', '2', '0',
//   '2', '2'
// ]


// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer: I believe that the output for the function above will be  undefine , because there is no return statement in the function.

// b) Verify and explain: The output for this code was undefined, because the return statement in a function is meant to notify that the function is ending and a value is getting returned.Since the function above did not have the return statement , it was unable to return the output that was being requested. Therefore, giving us an output of undefined.

//output: undefined

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
console.log(multipliedByTwo)

// a) Your answer: [8,10,12,14,16]
// b) Verify and explain: The output for this code was the elements in the multipliedByTwo array multiplied by 2. This is a result of  .map  acting on the array, iterating, and multiply each individual element, in this case (numbers) by 2 to produce a new array without changing the original array.

//output: [ 8, 10, 12, 14, 16 ]

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
console.log(onlyOdds)

// // a) Your answer:[11,13,15]
// // b) Verify and explain: The output for this code was as answered above. This would be because the filter method iterated the onlyOdss array and returned a new array with only odd number elements, which satisfied the stated condition.By using the filter method,we can see that the array returned was a subset of the original.

//output: [ 11, 13, 15 ]

// // --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer: "JavaScript"
// b) Verify and explain: The output for this was Javascript, because the console.log is calling the name of the object,referencing the language key, and asking us what's in the zeroth index of the languages array. In this case, the answer for that would be Javascript.

//output: JavaScript

// --------------------STRETCH: What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "Hotel"
    this.year = 2022
  }
}
const learnStudent = new Learn("George")
console.log(learnStudent)

// // a) Your answer: learn { student: "George", cohort:"Hotel", year: "2022"}
// // b) Verify and explain: The output for this was as stated above because the const learnStudent function, is adding a new name to the class Learn. When we call on the function to add the new name to the class, we get the output above.

//output: Learn { student: 'George', cohort: 'Hotel', year: 2022 }

 // Not completly sure if my explanation makes sense, would love more feedback on how to properly explain this output :)