
//Declare a function called test that will take 2 test results as arguments 

function tests(test1,test2)
{
//Create variable greater and assign it the final output from the condition.
let greater = test2>test1?test1:test2

//return the output assigned to greater
return greater

}

//Declare a function called test that will pass cswork as the argument.
 function coursework(cswork)
 {
 
 //Create a variable coursework and assign it the output from adding cswork and return value from function tests
 let coursework = cswork + tests(80,80)
 
 console.log(coursework)
 //Log coursework into console
 
return coursework
 //return output assigned to coursework
 
 }

//Declare a function called avg that will pass 'a' as the argument.
function avg(a)
{

//Assign avg the final result from diving the return value for function coursework with 'a'
let avg =coursework(90)/a

//.
return avg

}

//Declare a function called crsmark that will pass 'a' as the argument.
function crsmark(a)
{
//Assign exm the final result from the math equation
let exm = avg(2)*(a/100)

//return exm value
 return exm
}

//Declare a function called exam that will pass 'a' as the argument.

function exam(a)
{

//Assign fexm the final result from the math equation
let fexam = (60/100)*a

//return value for fexam
return fexam

}

//Declare a function called final.

function fnal()
{

//Assign the final result from the math equation to fmark 

let fmark = exam(75)+crsmark(40)
console.log(fmark)

}

//Invoke function final

fnal()


/**
Initially the file couldnt run due to an error.
Function coursework was missing a closing bracket, it was fixed and file is running

The file logs results from 'coursework' and 'final' functions respectively

**/