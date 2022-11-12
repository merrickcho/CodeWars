// Calculate average
// https://www.codewars.com/kata/57a2013acf1fa5bfc4000921

function find_average(array) {
    return array.length === 0 ? 0 : array.reduce((p,c) => p + c, 0)/array.length 
    }