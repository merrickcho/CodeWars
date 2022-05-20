// Who likes it?
// https://www.codewars.com/kata/5266876b8f4bf2da9b000362
//

// function likes(names) {
//     //p   name returns array
//     //r   return string and array including names
//     //e   want to figure out how many people are in arr names and display string based on what is in the array
//     //p
//     if(names.length===0){return 'no one likes this'}
//     if(names.length===1){return `${names[0]} likes this`}
//     else if(names.length===2){return `${names[0]} and ${names[1]} like this`}
//     else if(names.length===3){return `${names[0]}, ${names[1]} and ${names[2]} like this`}
//     else if(names.length>3){return `${names[0]}, ${names[1]} and ${names.length -2} others like this`}
//   }

//Refactored

  function likes(names) {
    let like = {
      0 : 'no one likes this',
      1 : `${names[0]} likes this`,
      2 : `${names[0]} and ${names[1]} like this`,
      3 : `${names[0]}, ${names[1]} and ${names[2]} like this`,
      4 : `${names[0]}, ${names[1]} and ${names.length -2} others like this`
    }//use literal obj to create objects containing selections
    
    return like[Math.min(4, names.length)]
    //use math.min to return the correct object array, if more than 4 it will return 4
  }