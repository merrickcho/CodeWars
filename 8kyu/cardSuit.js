// Define a card suit
// https://www.codewars.com/kata/5a360620f28b82a711000047
//

function defineSuit(card) {
    let suits = {
      '♣' : 'clubs',
      '♦' : 'diamonds',
      '♥' : 'hearts',
      '♠' : 'spades'}
    return suits[card.slice(-1)]
  }