// Quarter of the year
// https://www.codewars.com/kata/5ce9c1000bab0b001134f5af
//

const quarterOf = (month) => {
    return month%3==0? month/3 : Math.floor(month/3)+1
    
  }