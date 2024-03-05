function CountDeadAnts(ants) {
  if(ants !== null) ants = ants.toString().replace(/ant/g, "") // Delete all ants

  if(ants === null || ants.trim() === "") return 0

  const heads = ants.split(/a/g).length - 1
  const bodies = ants.split(/n/g).length - 1
  const butt = ants.split(/t/g).length - 1

  let deadAnts = heads
  if(heads < bodies) deadAnts = bodies
  if(bodies < butt) deadAnts = butt

  return deadAnts
}

module.exports = CountDeadAnts;