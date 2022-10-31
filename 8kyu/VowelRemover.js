// Vowel remover
// https://www.codewars.com/kata/5547929140907378f9000039
//

// function shortcut (string) {
//     let vow = ['a','e','i','o','u']
//     return string.split('')
//                   .filter(vowels=> !vow.includes(vowels))
//                   .join('')
//   }

//Refactored

function shortcut (string) {
    return string
    .split('')
    .filter(vow=>!'aeiou'.includes(vow))
    .join('')
  }