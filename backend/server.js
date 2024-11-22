const express = require("express");
const mysql = require("mysql2");
const app = express();
const port = 3000;
const cors = require("cors");
const path = require("path");

app.use(cors({ origin: "http://localhost:5173" }));

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "images",
});

app.use("/images", express.static(path.join(__dirname, "../frontend/flag-atlas/public/world flags")));
app.get("/api/country-details", (req, res) => {
  const query = "SELECT * FROM countries";
  db.query(query, (err, results) => {
    if (err) {
      console.log("Database connection error: ", err);
    } else {
      res.json(results);
    }
  });
});





app.get("/", (req, res) => {
  res.send("Hello from the backend");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
