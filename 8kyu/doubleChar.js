// Double Char
// https://www.codewars.com/kata/56b1f01c247c01db92000076
//

function doubleChar(str) {
    //P   input of str
    //R   Return str with double characters
    //E   take str and convert into array and use forEach to double each element and join the array into a str to return
    //P   
    let strToArr = str.split('')
    let doubleChar = []
  //   console.log(strToArr)
    strToArr.forEach(element => doubleChar.push(element + element))
  //   console.log(doubleChar)
    return doubleChar.join('')
  }