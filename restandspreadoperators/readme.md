<h1 style="text-align:center;">Rest parameters and spread syntax</h1>

<p>The rest of the parameters can be included in the function definition by using three dots ... followed by the name of the array that will contain them. The dots literally mean “gather the remaining parameters into an array”.</p>

arugments[i]-> for accessing the resultant array value

Note: Rest paramenters always be at last and arguments are not supported by arrow function.

<code>
function f(arg1, ...rest, arg2) { // arg2 after ...rest ?!
  // error
}
</code>

