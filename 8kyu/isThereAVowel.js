// Is there a vowel in there?
// https://www.codewars.com/kata/57cff961eca260b71900008f
//

function isVow(a){
    let res = []
    for(i=0;i<a.length;i++){
      a[i] === 97? res.push('a') : a[i] === 101? res.push('e') : a[i] === 105? res.push('i') : a[i] === 111? res.push('o'): a[i] === 117? res.push('u'): res.push(a[i])    
    }
    return res
  }