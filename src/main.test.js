const DeadAnts = require("./main");
const DeadAntsOld = require('./anterior');
const measureExecutionTime = require('./performance');


test("Return 0 if the string is null", () =>{
    expect(DeadAnts(null)).toBe(0);
})

test("Return 0 if the string is undefined", () =>{
    expect(DeadAnts(undefined)).toBe(0);
})

test("Return 0 if the string is empty", () =>{
    expect(DeadAnts("")).toBe(0);
})

test("Return 0 if the input is not a string", () =>{
    expect(DeadAnts(12)).toBe(0);
})


test("Return 2 if the input has 2 dead ants", () =>{
  expect(DeadAnts("an ant ant tn")).toBe(2);
})

test("Return 0 if the input has not dead ants", () =>{
  expect(DeadAnts("ant ant ant")).toBe(0);
})

test("Return 0 if the input is 'Helo world' dead ants", () =>{
  expect(DeadAnts("'Helo world'")).toBe(0);
})

test("Returns 1 if the entry contains an 'an' at the end", () =>{
  expect(DeadAnts("ant ant ant an")).toBe(1);
})


// test("Compare execution speed of DeadAnts and DeadAntsOld", () => {
//   const input = "'antantatnatattatatatatantantat".repeat(10000);
//   const timeOld = measureExecutionTime(DeadAntsOld, input);
//   const timeNew = measureExecutionTime(DeadAnts, input);
 
//   expect(timeNew).toBeLessThan(timeOld);
// });