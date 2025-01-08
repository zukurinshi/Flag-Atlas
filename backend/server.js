const express = require("express");
const mysql = require("mysql2");
const app = express();
const port = 3000;
const cors = require("cors");
const path = require("path");


app.use(cors({ origin: "http://localhost:5173" }));

//DATABASE CONNNECTION
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "images",
});

//IMAGES
app.use("/images", express.static(path.join(__dirname, "../frontend/flag-atlas/public/world flags")));

//COUNTRY FLAGS ROUTE
app.get("/api/country-details", (req,res) => {
  const query = "SELECT * FROM countries";
  db.query(query, (err, results) => {
    if (err) {
      console.log("Database connection error: ", err);
      return res.status(500).json({ error: "Database error" });
    }
    res.json(results);
  });
});

//COUNTRY DETAILS ROUTE
app.get("/api/country-details/:id", (req, res) => {
  const countryId = req.params.id;
  const query = "SELECT * FROM countries WHERE id = ?"; 
  db.query(query, [countryId], (err, results) => {
    if (err) {
      console.log("Database connection error: ", err);
      return res.status(500).json({ error: "Database error" });
    }
    if (results.length === 0) {
      return res.status(404).json({ error: "Failed to load country detail" });
    }
    res.json(results[0]); 
  });
});


app.get("/", ( req,res) => {
  res.send("Hello from the backend");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});