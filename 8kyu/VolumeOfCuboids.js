// Difference of Volumes of Cuboids
// https://www.codewars.com/kata/58cb43f4256836ed95000f97
//

function findDifference(a, b) {
    return Math.abs(a.reduce((p,c)=>(p*c))-b.reduce((p,c)=>(p*c)))
    //1 liner challenge accepted
  }