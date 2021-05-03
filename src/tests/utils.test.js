import * as utils from "../components/utils";

test("addition mock", () => {
  expect(utils.addition(2, 3)).toBe(5);
  expect(utils.addition(24, 3)).toBe(27);
  expect(utils.addition(0, 0)).toBe(0);
  expect(utils.addition(-2, 3)).toBe(1);
  expect(utils.addition(-2, -3)).toBe(-5);
});

test("colour mock ", ()=>{
    
})