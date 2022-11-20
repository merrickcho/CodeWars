// List Filtering
// https://www.codewars.com/kata/53dbd5315a3c69eed20002dd
//

function filter_list(l) {
    //p
    //We are givin a list
    //r
    //We are returning only the integers in the list
    //e
    //We will take the list and use the filter method and return if does not include a string
    //p
    
    let filteredLi = l.filter(e=> Number.isInteger(e))
    return (filteredLi)
  }