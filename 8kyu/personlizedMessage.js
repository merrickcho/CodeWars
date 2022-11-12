// Personlized Message
// https://www.codewars.com/kata/5772da22b89313a4d50012f7
//

function greet (name, owner) {
    let greeting = 'Hello'
    return name.toLowerCase() == owner.toLowerCase() ? `${greeting} boss` : `${greeting} guest`
  }