# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?


Your answer: 

A parameter is a place holder for an input function aregument, while an argument is the actual value.

Researched answer:

Parameter is a place holder passed into a function that are then assigned a value called an argument. You can remember what a parameter is by thinking that they are the aliases for the values that will eventually be passed.On the other hand, arguments are the actual value or content passed to the function when its invoked.You can think of them as the real deal (the actual information that will be inputed)

For example in the function below, the parameter is (a,b), while the argument is ( 3 , 4)

function addNumbers (a , b) {
    const adding = a + b ;// 3  + 4
    return adding;
}
console.log(adding(3 , 4));


2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

Your answer: 

The predefined parameters that the built in method .map takes are value,array,function,index, and this value. The required parameter is value, while array and index are optional depending on the developers preference.

Researched answer: 

.map takes in two arguments.Fuction(currentvalue,Index, arr) is a required parameter, and it runs on each individual element of an array. The function parameter contains 3 parameters. The first parameter (currents value) is required and contains the value of the current elements. The next 3 are optional, they are the index parameter , the array (arr) parameter, and the thisValue parameter.The index holds the index of the currents element,the arr holds the array, and the thisValue holds the value passed to the function that will be used as the this value. 



3. What is the difference between map and filter?

Your answer: 

The map method goes through an array, and returns a new updated array with the condition that you have requested applied. Keep in mind, that the map method keeps the same length as the original array and does not change the original array. The filter method goes through the array and filters out specific elements from the original array, and creates a new array with the elements that met the condition that you applied.

Researched answer:

The difference between map and filter would be the outputs that are returned after each one is performed. The map method returns the result of each element of an array having passed through a function, the filter method, requires the function that is applied to the array, to return with a boolean value, either true or false. It is then able to pass each element through the function, creating a new array with the filtered elements.



4. What is iteration?

Your answer: 

Iteration is the ability of a process to be able to go over and over again until a specific condition that you have assigned has been met.

Researched answer:

 Iteration is a means for a programmers to be able to iterate or go through over a collection or data structure repeatedlyuntil a specific condition has been met. Iteration helps to pull information from  specific source in a one in a time fashion. For example, if you have a bowl of m&ms that include all the colors, but you only want the blue ones, then you will start the process of taking out the m&ms that are not blue. With repeating the process of taking the non blue m&ms out, you are experiencing iteration, because you are going through the process until you have a bowl full of only blue m&ms. This example applies to coding. If you have an array of numbers but you only want the even numbers, then you can use iteration to have that set condition that you want(only even numbers)met.In todays world, iteration is used to perform specific task,solve problem, and present solutions.

5. What is the difference between a class and an object?

Your answer: 

A class is the format or blueprint that describes the way an object is created. On the other hand, an object is more like a collection of data made up of keys and values. 

Researched answer:

The difference between class and and an object, is that a class defines the object properties and describes the object behavior. A class can be called the "blueprint" or "template" from which object will be created. An object is a stand alone entity that has properties and types.  An example of classes and objects can be a dog being a class and color, breed, barking, and whinnig being objects. A class is a collection of object and it is defined only once. An object can also be created as many as there is a requirement for.

6. STRETCH: What is hoisting in JavaScript?

Your answer: A form of simplifying a function by moving a piece of code to the top of a file.

Researched answer: 

Hoisting in JavaScript  can be defined as the action or behavior of moving all the declarations at the top of files. Hoisting allows programmers to use functions and variables prior to them being declared. To sum this up in simpler words, this means that no matter where we declare the variables,functions, or even classes it can get moved to the top of their scope.

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. User stories: Tool asset that allows us to obtain a simplified description of what an individual wants

2. Spread operator: Is used to take an array and expanded into individual elements. Makes it easier to convert an array into a string and apply certain methods like the toUppercase. ( Was used in previous assignment)

3. React state: used to store data or informtion about components that allows us to be able to manage data in applications

4. React props: The React version of function arguments. They are the area where the properties of an object are stored.

5. DOM events: Events that are triggered  due to user action or by browser that signal that something has happened or is actively happening.
