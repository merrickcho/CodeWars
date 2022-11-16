// Shortest Word
// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9
//

function findShort(s){
    //p
    //  We are given a str
    //r
    //  We are to return the length of the shortest word in the str
    //e
    //  We turn the str into an arr and map the arr and return the length of each word and find the smallest number in the arr
    //p
    
    let strToArr = s.split(' ')
    let wordLength = strToArr.map(e=>e.length)
    
    return wordLength.sort((a,b)=>a-b)[0]
  }