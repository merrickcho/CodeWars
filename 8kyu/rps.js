// Rock Paper Scissors!
// https://www.codewars.com/kata/5672a98bdbdd995fad00000f

const rps = (p1, p2) => {
    let r = 'rock'
    let p = 'paper'
    let s = 'scissors'
    
    if(p1 === p2){
      return 'Draw!'
      }else if(p1 === r  && p2 === s || p1 === p && p2 === r || p1 === s && p2 === p){
          return 'Player 1 won!'
        }else{
          return 'Player 2 won!'
      }
  };