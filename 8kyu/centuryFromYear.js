// Century From Year
// https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097

function century(year) {
    let cent = year/100
    return year%100===0 ? cent : Math.floor(cent)+1
  }