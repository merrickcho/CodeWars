// Tribonacci Sequence
// https://www.codewars.com/kata/556deca17c58da83c00002db
//

function tribonacci(signature,n){
    //p  we have the signiture of x y z with n amount of numbers to count to. looks like we have 2 cases to look for, n count of less than 3 and n count of greater than 3.
    //r   for the return we need to test the 2 cases. we can use the slice method in the case of less than 3 since we are always given 3 number arr in the signature. for the other case, we will need to create the tribonacci loop to fully determine all the numbers associated to the signature.
    //e   for example, for the first sequence, we only need to add x y z together. we can loop this to figure out the rest of the sequence with a counter and moving the 3 numbers in sequence
    //p   we will add x y z and push it to the sequence with every loop. this loop can be as long as the count n is required
    
    //Tribonacci sequence
    let count = 3 //signiture always starts with 3 numbers
    let sequence = signature//start sequence with the 3 signatures
    
    for(x=0,y=1,z=2;count<=n-1;x++,y++,z++,count++){ //the next number will always be x+y+z
      let next = signature[x]+signature[y]+signature[z]
      sequence.push(next)
    }
    
    
  //   test cases: 
    if (n <= 3) return sequence.slice(0, n)
    if (n > 3) return sequence
    
  }