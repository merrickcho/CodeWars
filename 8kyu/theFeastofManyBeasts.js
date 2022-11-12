// The Feast of Many Beasts
// https://www.codewars.com/kata/5aa736a455f906981800360d
//

function feast(beast, dish) {
    let charStart = beast[0]
    let charEnd = beast[beast.length-1]
    return charStart == dish[0] && charEnd == dish[dish.length-1]? true : false
  }