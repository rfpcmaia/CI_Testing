const db = require("../server.js");

test("1 + 1 = 2", () => {
  expect(1 + 1).toBe(2);
});

const sql =
  "INSERT INTO teacher (ID, Username, Password) Values ('1', 'Z', '123')";

test(sql, () => {
  db.query(sql);
});
