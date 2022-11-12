// Find Numbers which are divisible by given number
// https://www.codewars.com/kata/55edaba99da3a9c84000003b
// 

function divisibleBy(numbers, divisor){
    return numbers.filter(e => e%divisor==0)
  }