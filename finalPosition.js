const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']

function finalPosition (moves){
  const pos = [0,0] //x,y
  for (const move of moves){
    const movement = move

    if(movement === 'north'){
      pos[1] = pos[1] + 1
    }else if(movement === 'south'){
      pos[1] = pos[1] - 1
    }else if(movement === 'east'){
      pos[0] = pos[0] + 1
    }else if(movement === 'west'){
      pos[0] = pos[0] - 1
    }
  }
  return pos
}

console.log(finalPosition(moves))