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

  let output = "\n"
  output += "| Method         |       Runtime |       N |       Mean |     Error |   StdDev |\n"
  output += "|--------------- |-------------- |-------- |-----------:|----------:|---------:|\n"
  this.forEach(element => {
    element.count = 100
    output += `| ${element.name}  | ${element.hz.toFixed(2)} ops/s  | ${element.count.toFixed(2)}  |  ${(element.stats.mean* 1000).toFixed(4) } s  | ${(element.stats.moe * 1000).toFixed(4) } s  | ${(element.stats.deviation * 1000).toFixed(4)} s |\n`
  })

  console.log(output)
})


.run({ 'async': true })
