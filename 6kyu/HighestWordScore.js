// Highest Scoring Word
// https://www.codewars.com/kata/57eb8fcdf670e99d9b000272
//

//p - We are looking to create a function that can score words and finding the highest scoring word.
//r - The return will be the word with the highest score
//e - We will need to do 2 things in our function. First part will be to score each word. The second part will be to return the highest word.
//p - First we will take a string and make it into an array. Each array we need to determine the score. Then we return the winning score.
function high(x){
    //   First we take the string and turn it into an array
      const arr = x.split(' ')
    //   Now we need to determine the score of each word
      const scoring = {
        'a' : 1, 'b' : 2, 'c' : 3, 'd' : 4, 'e' : 5,
        'f' : 6, 'g' : 7, 'h' : 8, 'i' : 9, 'j' : 10,
        'k' : 11, 'l' : 12, 'm' : 13, 'n' : 14, 'o' : 15,
        'p' : 16, 'q' : 17, 'r' : 18, 's' : 19, 't' : 20,
        'u' : 21, 'v' : 22, 'w' : 23, 'x' : 24, 'y' : 25,
        'z' : 26
      }
    //  We will take each word into numbers
      let wordToScore = []
      for(i=0;i<x.split(' ').length;i++){
            let result = arr[i].split('').map(e=>scoring[e]).reduce((p,c)=>p+c)
            wordToScore.push(result)
      }
      
    //  use indexOf method to take the highest number and return arr[index]
      let highest = wordToScore.indexOf(Math.max(...wordToScore))
      return arr[highest]
    }