// Sum of positive
// https://www.codewars.com/kata/5715eaedb436cf5606000381

function positiveSum(arr) {
    let sum = 0
    arr.forEach((e) =>{
      if(e>=0){
        sum = sum + e
      }
    })
    return sum
  }