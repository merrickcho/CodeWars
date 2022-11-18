// Bit Counting
// https://www.codewars.com/kata/526571aae218b8ee490006f4
//

var countBits = function(n) {
    //p
    // We are givin a number to convert into binary
    //r
    // We are returning the a number equal the all the bits added together
    //e
    // We will convert the number into binary using a while loop and counting the bits at the same time since we do not need to know what the binary output is 
    //p
    
    let bitOp = 0
    while (n>0){
      bitOp = n%2 + bitOp
      n = Math.floor(n/2)
    }
    return bitOp
  };