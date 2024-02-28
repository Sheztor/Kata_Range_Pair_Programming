function DeadAnts(ants){
   if(!ants || typeof ants !=="string") return -1;

   let countA = 0, countN = 0, countT = 0;

   for(i = 0; i < ants.length; i++){
    const currentChar = ants[i]

    if(currentChar === "a" && ants[i+1] === "n" && ants[i+2] === "t"){
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