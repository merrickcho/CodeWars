// Expressions Matter
// https://www.codewars.com/kata/5ae62fcf252e66d44d00008e
//

function expressionMatter(a, b, c) {
    let arr = [a+b+c,(a+b)*c,a*(b+c),a*b*c]
    return arr.sort((a,b)=>a-b)[3]
  }