// Student's Final Grade
// https://www.codewars.com/kata/5ad0d8356165e63c140014d4
//

function finalGrade (ex, pro) {
    return ex>90 || pro>10? 100: ex>75 && pro>=5? 90 : ex>50 && pro>=2? 75:0
  }