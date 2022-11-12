// Remove exclamation marks
// https://www.codewars.com/kata/57a0885cbb9944e24c00008e
//

function removeExclamationMarks(s) {
    let str = []
    for(i=0;i<s.length;i++){
      if(s[i]!=="!"){
        str.push(s[i])
      }
    }
    return str.join('')
  }