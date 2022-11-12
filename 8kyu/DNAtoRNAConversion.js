// DNA to RNA Conversion
// https://www.codewars.com/kata/5556282156230d0e5e000089
//

function DNAtoRNA(dna) {
    return dna.split('').map(n => n== 'T'? 'U':n).join('')
  }