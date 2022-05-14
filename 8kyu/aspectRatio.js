// Aspect Ratio Cropping - Part 1
// https://www.codewars.com/kata/596e4ef7b61e25981200009f
//

function aspectRatio(x,y){
    let newX = Math.ceil((y/9)*16)
      
      return [newX,y]
    }