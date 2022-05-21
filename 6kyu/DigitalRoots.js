// Sum of Digits / Digital Root
// https://www.codewars.com/kata/541c8630095125aba6000c00
//
// function digitalRoot(n) {
//     //P
//     //We are given a number n and we need to break it down to a single digit by adding the numbers of n together. If the result of addition of n is greater than 9, the addition process is repeated until a single number is found.
//     //R
//     //The return will be a number less than 9. Should the return be greater, the process will be repeated.
//     //E
//     //We will have 1 function for the addition of numbers in n.  We will have another function to check if the result is greater than 9.
//     //P 
//     //
//     if (n<10) return n
    
//     return digitalRoot(String(n).split("").reduce((p, c) => Number(p) + Number(c)))
    
//     }

//Refactored

function digitalRoot(n) {
    //P
    //We are given a number n and we need to break it down to a single digit by adding the numbers of n together. If the result of addition of n is greater than 9, the addition process is repeated until a single number is found.
    //R
    //The return will be a number less than 9. Should the return be greater, the process will be repeated.
    //E
    //We will check for if n is greater than 9. if n greater than 9, function will reduce n.
    //P 
    //
    if (n<10) return n
    
    return digitalRoot(String(n).split("").reduce((p, c) => Number(p) + Number(c)))
    
    }