// altERnaTIng cAsE <=> ALTerNAtiNG CaSe
// https://www.codewars.com/kata/56efc695740d30f963000557
//

//p
//prototype extension, will have to use 'this' to access the string
//r
//the return will be the same string with opposite casing
//e
//will need to take the string and split it into an array to use the map method. Using map method we can
//check each element and convert it to the opposite case
//p
//test case of Hello World => hELLO wORLD
//we need split the string into [H,e,l,l,o, ,W,o,r,l,d]
//we will use the map method to see the current case using toUpperCase and toLowerCase methods
//lastly we will rejoin for the final product


String.prototype.toAlternatingCase = function toAlternatingCase() {
    return this.split('')
            .map(e=>(e==e.toUpperCase()?e.toLowerCase():e.toUpperCase()))
            .join('')
  }