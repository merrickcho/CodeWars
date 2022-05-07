// A wolf in sheep's clothing
// https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15
//

function warnTheSheep(queue) {
    let revQ = queue.reverse()
    return revQ[0] === 'wolf'? "Pls go away and stop eating my sheep" : `Oi! Sheep number ${revQ.indexOf('wolf')}! You are about to be eaten by a wolf!`
  }