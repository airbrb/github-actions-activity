const { time } = require("./github-actions-activity");


test("time always has the format 'HH:MM:SS *M'", () => {
  strLength = time.length 
  expect(strLength).toBe(11);
});
