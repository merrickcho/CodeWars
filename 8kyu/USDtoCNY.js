// USD => CNY
// https://www.codewars.com/kata/5977618080ef220766000022
//

function usdcny(usd) {
    const rate = 6.75
    return (usd*rate).toFixed(2)+' Chinese Yuan'
  }