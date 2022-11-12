// Removing Elements
// https://www.codewars.com/kata/5769b3802ae6f8e4890009d2
//

function removeEveryOther(arr){
    let newArr = []
    for(i=0;i<arr.length;i++){
      i%2==0? newArr.push(arr[i]):0
    }
    return newArr
  }