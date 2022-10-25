// Cat years, Dog years
// https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b
//

var humanYearsCatYearsDogYears = function(h) {
    return h==1? [1,15,15]:h==2? [2,24,24]:[h,4*(h-2)+24,5*(h-2)+24]
  }