// Gravity Flip 
// https://www.codewars.com/kata/5f70c883e10f9e0001c89673
//

const flip=(d, a)=>{
    //P   d=flip; a=array
    //R   looks like the return will be the flipped array based on d
    //E
    //P
    
    // 'R' = sort by smallest to largerest
    // 'L' = sort by largest to smallest
    
    let res = d==='R'? a.sort((a,b)=>a-b) : a.sort((a,b)=>a-b).reverse()
    
    return res
  }