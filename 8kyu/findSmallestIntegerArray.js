// Find the smallest integer in the array
// https://www.codewars.com/kata/55a2d7ebe362935a210000b2
//

class SmallestIntegerFinder {
    findSmallestInt(args) {
      let smol = args.sort((a, b) => a - b);
      return smol[0]
      }
  }