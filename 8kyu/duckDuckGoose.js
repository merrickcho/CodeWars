// Duck Duck Goose
// https://www.codewars.com/kata/582e0e592029ea10530009ce
//

function duckDuckGoose(players, goose) {
    return players[((goose-1)%players.length)].name
  }