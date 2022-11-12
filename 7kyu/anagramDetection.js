// Anagram Detection
// https://www.codewars.com/kata/529eef7a9194e0cbc1000255
//

// write the function isAnagram
var isAnagram = function(test, original) {
    let testCheck = test.toLowerCase().split('').sort().join('')
    let origCheck = original.toLowerCase().split('').sort().join('')
    return testCheck === origCheck ? true : false
  };