// Sort and Star
// https://www.codewars.com/kata/57cfdf34902f6ba3d300001e
//

function twoSort(s) {
    let str=s.sort()[0].split('')
    for(i=0;i<str.length-1;i++){
      str[i]+='***'
    }
    return str.join('')
  }

///////////////////////////////////

function twoSort(s) {
    return s.sort()[0].split('').join('***')
   }