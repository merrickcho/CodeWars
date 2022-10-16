// What is between?
// https://www.codewars.com/kata/55ecd718f46fba02e5000029
//

function between(a, b) {
    //p
    //we are given two variable a and b
    //r
    //we want all integers between a and b
    //e
    //we will probably want to have a counter system and return the numbers in an array
    //p
    let arr = []
    for (i=a;i<=b;i++){
      arr.push(i)
    }
    return arr
  }