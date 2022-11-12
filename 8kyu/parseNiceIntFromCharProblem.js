// Parse nice int from char problem
// https://www.codewars.com/kata/557cd6882bfa3c8a9f0000c1
//

function getAge(s){
    return Number(s.split('').find(e => e > 0))
  }