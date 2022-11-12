// Take a Ten Minutes Walk
// https://www.codewars.com/kata/54da539698b8a2ad76000228
//

function isValidWalk(walk) {
    let stepTracker= 0
    
    if(walk.length !== 10){
      return false
    } else{
      for(i=0;i<walk.length;i++){
        if(walk[i] == 'n'){
          stepTracker++
        }else if(walk[i] == 'w'){
          stepTracker+=2
        }else if(walk[i] == 's'){
          stepTracker--
        }else{
          stepTracker-=2
        }}
      }
    if(stepTracker == 0 && walk.length == 10){
        return true
      }else{ 
        false
      }
    }