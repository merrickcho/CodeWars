// Filter out the geese
// https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7
//

function gooseFilter (birds) {
    let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    return birds.filter(bird => !geese.includes(bird))
    
   }