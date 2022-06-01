// Twice as old
// https://www.codewars.com/kata/5b853229cfde412a470000d0
//

// p - we are trying to figure out the case of how many years ago  the father was twice the age of the son.
// r - the return will be the age father's age @ X years ago that is twice the son's age
// e - I think we can use a forumula of dadAge - (sonAge *2) to determine the years
// p - if dad age is 36 and son is 7, we can do 36-(7*2) = 22, which seems to be the correct answer in the test cases

// function twiceAsOld(dadAge, sonAge) {
//     let yrs = dadAge - (sonAge*2)
//     return yrs < 0 ? yrs*-1 : yrs 
//   }

//Refactored

function twiceAsOld(dad, son) {
    return Math.abs(dad -(son*2))
  }