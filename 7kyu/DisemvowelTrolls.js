// Disemvowel Trolls
// https://www.codewars.com/kata/52fba66badcd10859f00097e
//

// function disemvowel(str) {
//     //P
//     //problem: we are removing vowels from string.
//     //R
//     //return: we will be returning the set of string without vowels
//     //E
//     //we could use a loop or something to check the vowel list and push to newStr
//     //P
//     let vow = ["a","A","e","E","i","I","o","O","u","U"]
//     let strToArr = str.split('')
    
//     let newStr = strToArr.filter(vowels=> !vow.includes(vowels));
//     return newStr.join('')
//   }

//Refactored

  function disemvowel(str) {
    //P
    //problem: we are removing vowels from string.
    //R
    //return: we will be returning the set of string without vowels
    //E
    //we could use a loop or something to check the vowel list and push to newStr
    //P
    let vow = ["a","e","i","o","u"]
    let strToArr = str.split('')
    
    let newStr = strToArr.filter(vowels=> !vow.includes(vowels.toLowerCase()));
    return newStr.join('')
  }