// Exes and Ohs
// https://www.codewars.com/kata/55908aad6620c066bc00002a
//

function XO(str) {
    //p
    // We are given a str
    //r
    // We want to return a true or false statement if the str contains equals about of x's and o's.  
    // Case insensitive. Only contains characters.
    //e
    // Option #1: We can use a loop to check if each char is x or o and use a count to check if they are equal.
    // Option #2: We can use the filter method and filter out x's and o's and use the character length to check if they are equal.
    //p
    
    //Options #2
    
    let x = str.toLowerCase()
                .split('')
                .filter(e => e == 'x')
    let o = str.toLowerCase()
                .split('')
                .filter(e => e == 'o')
    
    return x.length == o.length ? true : false
    
  }