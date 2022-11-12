// Stop gninnipS My sdroW!
// https://www.codewars.com/kata/5264d2b162488dc400000001
//

function spinWords(string){
    let strSpin = string.split(' ').map(x => x.length>=5? x.split('').reverse('').join('') : x)
    return strSpin.join(' ')
}