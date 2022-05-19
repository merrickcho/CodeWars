// Create Phone Number
// https://www.codewars.com/kata/525f50e3b73515a6db000b83
//

function createPhoneNumber(numbers){
    //p - array of numbers; probably make variable for eacch section of numbers
    //r - output a string with area code and dash line
    //e - take an array of numbers and append each set of numbers into own variables and output them into string
    //p
    
    let area = []
    let firstNumbers = []
    let lastNumbers = []
    
    for(i=0;i<numbers.length;i++){
      if(i<3){area.push(numbers[i])} 
      if(i>=3&&i<6){firstNumbers.push(numbers[i])}
      if(i>=6){lastNumbers.push(numbers[i])}
    }
    return `(${area.join('')}) ${firstNumbers.join('')}-${lastNumbers.join('')}`
  }