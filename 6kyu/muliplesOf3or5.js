//Multiples of 3 or 5
//https://www.codewars.com/kata/514b92a657cdc65150000006
//

function solution(number){
    //get the nums into array
    let numArr = []
    
    //itteration to push numbers muliple of 3 or 5
    for(i=0; i<number; i++){
      if(i<0||number<0){
        return 0
      }else if(i%3===0 || i%5===0){
        numArr.push(i)
      }
    }
    
    //counter to sum up the array
    let sum = 0
    numArr.forEach((e) => {
      sum = sum+e
    })
    return sum
  }