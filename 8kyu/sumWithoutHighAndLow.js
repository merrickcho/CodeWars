// Sum without highest and lowest number
// https://www.codewars.com/kata/576b93db1129fcf2200001e6
//

function sumArray(arr) {
    if (arr == null){
      return 0
    }  
    if (arr.length <= 2){
      return 0
    }
      else{
        console.log(arr)
        console.log(arr
                   .sort((a,b)=>a-b)
          .reduce((p,c)=>(p+c)) - (arr[0] + arr[arr.length-1]))
        return arr
          .sort((a,b)=>a-b)
          .reduce((p,c)=>(p+c)) - (arr[0] + arr[arr.length-1])
      }
    }