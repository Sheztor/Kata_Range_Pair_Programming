function DeadAnts(ants){
   if(!ants || typeof ants !=="string") return 0;

   let countA = 0, countN = 0, countT = 0
   const lengthAnst = ants.length

   for (let i = 0; i < lengthAnst; i++) {
    const currentChar = ants[i]
    
    if (ants[i] === "a" && ants[i+1] === "n" && ants[i+2] === "t") {
      i += 2
      continue
    } // ant 

    if(currentChar === "a") countA++
    else if (currentChar === "n") countN++
    else if (currentChar === "t") countT++

  }

   return Math.max(countA, countN, countT)

}

module.exports = DeadAnts;