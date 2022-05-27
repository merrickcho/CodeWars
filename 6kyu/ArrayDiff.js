// Array.diff
// https://www.codewars.com/kata/523f5d21c841566fde000009
//

function arrayDiff(a, b) {
    //p we have arr of a and arr b were we remove all values from arr a with arr b
    //r the return will be a single arr with all the values of b removed
    //e we wll need to check if b contains more than 1 value with a length check, then a loop to go through the b list until all values are removed
    //p make new return arr, make a length check for arr b, make a loop for arr b, use filter method to remove list of arr b from arr a and output to return arr
  
    //arr b can be any length; filter arr a with arr b using includes method
    //the filtered element only returns if the includes returns true
    // using the !, the filter will only return the false numbers
    return a.filter(e=> !b.includes(e))
   
  }