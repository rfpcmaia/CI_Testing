const mysql = require("mysql");
const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "pas",
});

db.connect((err) => {
  if (err) {
    console.log("Error connecting to database");
  } else {
    console.log("MySql database connected");

    // Create students table
    db.query("DROP TABLE IF EXISTS students", (err) => {
      var createStudents =
        "CREATE TABLE students (ID int, Username varchar(255), " +
        "Password varchar(255), Team varchar(255));";

      db.query(createStudents, (err) => {
        if (err) console.log("ERROR: ", err);
      });
    });

    // Create teachers table
    db.query("DROP TABLE IF EXISTS teachers", (err) => {
      var createTeachers =
        "CREATE TABLE teachers (ID int, Username varchar(255), " +
        "Password varchar(255));";

      db.query(createTeachers, (err) => {
        if (err) console.log("ERROR: ", err);
      });
    });

    // Create evaluations table
    db.query("DROP TABLE IF EXISTS evaluations", (err) => {
      var createEvaluations =
        "CREATE TABLE evaluations (ID int AUTO_INCREMENT PRIMARY KEY, " +
        "teammateID int, cooperation int, comments text);";

      db.query(createEvaluations, (err) => {
        if (err) console.log("ERROR: ", err);
      });
    });
  }
});

test("1 + 1 = 2", () => {
  expect(1 + 1).toBe(2);
});

const sql =
  "INSERT INTO teacher (ID, Username, Password) Values ('1', 'Z', '123')";

test(sql, () => {
  expect(
    db.query(sql, (err, res) => {
      if (err) {
        throw err;
      } else {
        return 1;
      }
    })
  ).toBe(1);
});
