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
