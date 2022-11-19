// Descending Order
// https://www.codewars.com/kata/5467e4d82edf8bbf40000155
//

function descendingOrder(n){
    //p
    //We are givin a non negative integer
    //r
    //We want to return the givin integer with the digits rearranged in decending order
    //e
    //We can just take the givin nummber and pass it through the sort function 
    //p
    
    return Number(
              n.toString()
              .split('')
              .sort((a,b)=>b-a)
              .join('')
                  )
  }