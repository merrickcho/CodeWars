// Beginner Series #2 Clock
// https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a
//

function past(h, m, s){
    //1sec = 1000milliseconds
    let hTm = h*3600000
    let mTm = m*60000
    let sTm = s*1000 
    return h<=23&&m<=59&&s<=59 ? hTm + mTm + sTm : error
  }