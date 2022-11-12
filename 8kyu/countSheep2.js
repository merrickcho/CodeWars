// Counting sheep...
// https://www.codewars.com/kata/54edbc7200b811e956000556

function countSheeps(arrayOfSheep) {
    let sheep = arrayOfSheep.filter(countArr => countArr == true)
    return sheep.length
  }