// Square Every Digit
// https://www.codewars.com/kata/546e2562b03326a88e000020
//

function squareDigits(num){
    //p
    //We are giving a number
    //r
    //We are looking to square every digit of that number
    //e
    //Looks like we will need to turn each digit into an array and do the Math.pow method on each digit and return the joined numbers
    //p
   
    return Number(num.toString()
              .split('')
              .map(e=>Math.pow(e,2))
              .join(''))
  }