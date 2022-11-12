// Total amount of points
// https://www.codewars.com/kata/5bb904724c47249b10000131
//

function points(games) {
    let points = 0
    for(i=0;i<games.length;i++){
      games[i][0]>games[i][2]? points+=3 : games[i][0]==games[i][2]? points++ : points+=0
    }
    return points
  }