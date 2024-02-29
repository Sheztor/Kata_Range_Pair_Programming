function DeadAnts(ants){
   if(!ants || typeof ants !=="string") return -1;

   let countA = 0;
   let countN = 0;
   let countT = 0;

   for (let i = 0; i < ants.length; i++) {
      if (ants.substring(i, 3) === 'ant') {
          i += 2; // Saltar las letras 'a', 'n', 't'
      } else {
          if (ants[i] === 'a') countA++;
          if (ants[i] === 'n') countN++;
          if (ants[i] === 't') countT++;
      }
  }

   return Math.max(countA, countN, countT)

   // let deadAnts = countA
   // if(countA < countN) deadAnts = countN
   // if(countN < countT) deadAnts = countT
   // return deadAnts;

}

module.exports = DeadAnts;