const Benchmark = require('benchmark');

const DeadAntsNew = require('./main');
const DeadAntsOld = require('./anterior');

const suite = new Benchmark.Suite;


suite.add("Dead Ants Old", () => {
  const input = "antantatnatattatatatatantantat".repeat(10000);
  DeadAntsOld(input)
})

suite.add("Dead Ants New", () => {
  const input = "antantatnatattatatatatantantat".repeat(10000);
  DeadAntsNew(input)
})


suite.on("complete", function() {
  console.info("Fastest is: " + this.filter('fastest').map('name'))
})


.run({ 'async': true })
