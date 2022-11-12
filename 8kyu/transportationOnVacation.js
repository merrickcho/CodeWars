// Transportation on Vacation
// https://www.codewars.com/kata/568d0dd208ee69389d000016
//

function rentalCarCost(d) {
    let basePrice = d*40
    return d>=7? basePrice-=50 : d>=3 && d<7? basePrice-=20 : basePrice
  }