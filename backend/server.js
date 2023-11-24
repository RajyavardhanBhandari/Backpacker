const express = require("express");
const app = express();
const session = require("express-session");
const mysql = require('mysql2');
// create a new MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Siddhijain18@',
  database: 'travel database'
});
// connect to the MySQL database
connection.connect((error) => {
  if (error) {
    console.log('Error connecting to MySQL database:', error);
  } else {
    console.log('Connected to MySQL database!');
  }
});
// close the MySQL connection
connection.end();
//session logic:
app.use(
    session({
      secret: "secret-key",
      resave: false,
      saveUninitialized: false,
    })
  );
  app.get("/", (req, res) => {
    res.send("Hello, World!");
})
//establish http server:
const PORT = 3000;
app.listen(PORT, function () {
    console.log(`Server is Running on http://localhost:${PORT}`);
});
