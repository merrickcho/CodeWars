// Find the first non-consecutive number
// https://www.codewars.com/kata/58f8a3a27a5c28d92e000144
//

function firstNonConsecutive (arr) {
    let count = arr[0]
      
    if(arr.length < 0){
      return null
    }
    if(arr == null){
      return null
    }
    for(i=0;i<=arr.length;i++){
      if(arr[i] == count){
        count++
      }
      else{
        return arr[i]
      }
      if(arr[arr.length-1] - count == 0){
        return null
      }
    }
  }