// Count of positives / sum of negatives
// https://www.codewars.com/kata/576bb71bbbcf0951d5000044
//

function countPositivesSumNegatives(input) {
    if(input == null || input.length == 0)
      return []
    
    let positiveNum = []
    let negativeNum = []
    let total = []
    for(i=0;i<input.length;i++){
      input[i]>0? positiveNum.push(input[i]): input[i]<0? negativeNum.push(input[i]) : 0
    }
      total.push(positiveNum.length)
      total.push(negativeNum.reduce((p,c) => p+c))
    return total;
  }