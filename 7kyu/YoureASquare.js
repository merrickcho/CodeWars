// You're a square!
// https://www.codewars.com/kata/54c27a33fb7da0db0100040e
//

var isSquare = function(n){
    //p
    //We are given a number 
    //r
    //we are looking to check if the number is a square number
    //e
    //We can use the Math.sqrt method and then check if the result % n is == to 0
    //p
    let sqrt = Math.sqrt(n)
    return sqrt == 0 || n % sqrt == 0 ? true : false
  }