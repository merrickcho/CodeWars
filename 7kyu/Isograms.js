// Isograms
// https://www.codewars.com/kata/54ba84be607a92aa900000f1
//

function isIsogram(str){
    //p
    // We are given a str
    //r
    // We are to return a true or false statement base on if the str contains no repeating letters
    //e
    // We will be taking the str and turn it into an arr and push each letter while comparing if letter was used before or not.
    //p
    
    let check = str.toLowerCase().split('')
    let confirm = []
    
    for(i=0;i<str.length;i++){
      if(confirm.includes(check[i])){
        continue //check if letter is included in confirm; if true, skip
      } else{
        confirm.push(check[i]) //if false, push to confirm arr
      }
    }
    
    return confirm.length == str.length ? true : false
  }

//Refactored

function isIsogram(str){
    let check = new Set(str.toLowerCase())
    return check.size == str.length ? true : false
  }