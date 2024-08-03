<h1 style="text-align:center;">Rest parameters and spread syntax</h1>

<p>The rest of the parameters can be included in the function definition by using three dots ... followed by the name of the array that will contain them. The dots literally mean “gather the remaining parameters into an array”.</p>

arugments[i]-> for accessing the resultant array value

Note: Rest paramenters always be at last and arguments are not supported by arrow function.

<code>
function f(arg1, ...rest, arg2) { // arg2 after ...rest ?!
  // error
}
</code>
<!--  -->
<h2> Spread Operator</h2>
When ... occurs in a function call or alike, it’s called a “spread syntax” and expands an array into a list.
The spread syntax is used to pass an array to functions that normally require a list of many arguments.
