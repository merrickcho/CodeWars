// Array plus Array
// https://www.codewars.com/kata/5a2be17aee1aaefe2a000151
//

function arrayPlusArray(arr1, arr2) {
    return (arr1.reduce((p,c)=>p+c))+(arr2.reduce((p,c)=>p+c))
  }