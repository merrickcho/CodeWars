// Correct the mistakes of the character recognition software
// https://www.codewars.com/kata/577bd026df78c19bca0002c0
//

function correct(string)
{
  //p
  //we are given a string wtih mistakes
  //r
  //we will need to return the corrected string
  //e
  //we will need to split the string and check for numbers and replace to letters
  //p
  const arr = string.split('')
  let word = []
  for(i=0;i<arr.length;i++){
    arr[i] == '5'? word.push('S') : arr[i] == '0'? word.push('O') : arr[i] =='1'? word.push('I') : word.push(arr[i])
  }
  return word.join('')
}