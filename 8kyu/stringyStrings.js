// Stringy Strings
// https://www.codewars.com/kata/563b74ddd19a3ad462000054
//

function stringy(size) {
    let arr = []
    for(i=0;i<size;i++){
      i%2==0? arr.push(1):arr.push(0)
    }
    return arr.join('')
  }