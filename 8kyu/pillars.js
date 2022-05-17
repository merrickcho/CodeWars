// Pillars
// https://www.codewars.com/kata/5bb0c58f484fcd170700063d
//

function pillars(p,d,w) {
    //P   p=pillars, d= distance between pillars, w=width of pillar
    //R   return the total distance between the first and last pillar
    
    //E   When 2 p? return d between pillars; when more than 2 p? return d between first and last pillar + w of all pillar aside from the firs and last pillar 
    
    //P   check for num of p, if more than 2, do calc, else if p is 2, distance of the pillar, else 0
    
    let res = 0
    const dist = d*100
    if(p<2) return 0
    if(p===2) return dist
    if(p>2) return ((p-1)*dist)+((p-2)*w)
  }