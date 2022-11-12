// Fake Binary
// https://www.codewars.com/kata/57eae65a4321032ce000002d
//

function fakeBin(x){
    let bin = []
    for(i=0;i<x.length;i++){
      if(x.split('')[i]>=5){
        bin.push(1)
      }else {
        bin.push(0)
      }
    }
     return bin.join('')
   }