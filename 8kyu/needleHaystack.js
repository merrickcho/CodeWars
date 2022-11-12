// A Needle in the Haystack
// https://www.codewars.com/kata/56676e8fabd2d1ff3000000c
//

function findNeedle(haystack) {
    let foundMes = "found the needle at position "
    let index = haystack.findIndex(e => e == "needle")
    return `${foundMes}${index}`
  }