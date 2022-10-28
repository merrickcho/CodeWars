// Multiplication table for number
// https://www.codewars.com/kata/5a2fd38b55519ed98f0000ce
//

function multiTable(number) {
    let arr=[]
    for(i=1;i<=10;i++){
      arr.push(`${i} * ${number} = ${i*number}`) 
    }
    return arr.join('\n')
  }