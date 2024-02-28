const DeadAnts = require("./main");


test("Return -1 if the string is null", () =>{
    expect(DeadAnts(null)).toBe(-1);
})

test("Return -1 if the string is undefined", () =>{
    expect(DeadAnts(undefined)).toBe(-1);
})

test("Return -1 if the string is empty", () =>{
    expect(DeadAnts("")).toBe(-1);
})

test("Return -1 if the input is not a string", () =>{
    expect(DeadAnts(12)).toBe(-1);
})

test("Return 1 if the input has a dead ant", () =>{
  expect(DeadAnts("ant ant nt")).toBe(1);
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