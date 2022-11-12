// Reversed sequence
// https://www.codewars.com/kata/5a00e05cc374cb34d100000d
//

const reverseSeq = n => {
    let seq = []
    for(i=0;i<n;i++){
     seq.push(n-i) 
    }
    return seq;
  };