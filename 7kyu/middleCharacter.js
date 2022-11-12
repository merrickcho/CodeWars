// Get the Middle Character
// https://www.codewars.com/kata/56747fd5cb988479af000028
//

function getMiddle(s)
{
  let mid = s.length/2
  return s.length%2==0? s[mid-1]+s[mid] : s[Math.floor(mid)]
}