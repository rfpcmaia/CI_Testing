const db = require("../server.js");

test("1 + 1 = 2", () => {
  expect(1 + 1).toBe(2);
});

test(db, () => {});
