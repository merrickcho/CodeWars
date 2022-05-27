// Highest and Lowest
// https://www.codewars.com/kata/554b4ac871d6813a03000035
//

function highAndLow(numbers){
    //P -
    //R - Return highest and lower number in a str with space in the middle
    //E - change str to arr then use sort function to figure the highest and lower number and output the first and last index
    //P
    let input = numbers
      .split(' ')
      .sort((a,b) => a-b)
    return `${input[input.length-1]} ${input[0]}`
  }