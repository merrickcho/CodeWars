// Opposite number
// https://www.codewars.com/kata/56dec885c54a926dcd001095

function opposite(n1) {
    if(n1 > 0 || n1 < 0 && typeof n1 === "number"){
      n1 *= -1
      return n1
    }else {
      return n1 = 0
    }
  }