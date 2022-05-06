// Well of Ideas - Easy Version
// https://www.codewars.com/kata/57f222ce69e09c3630000212
//

function well(x){
    const check = x.filter(ideas => ideas == 'good')
    return check.length > 2 ? 'I smell a series!': check.length <=2 && check.length >0? 'Publish!' : 'Fail!'
  }