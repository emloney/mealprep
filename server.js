const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
app.use(cors());
app.use(express.json());

const mealsFile = "meals.json"; // The JSON file with meal data

// Endpoint to fetch meals
app.get("/api/meals", (req, res) => {
  fs.readFile(mealsFile, "utf8", (err, data) => {
    if (err) {
      res.status(500).json({ error: "Failed to load meal data" });
    } else {
      res.json(JSON.parse(data));
    }
  });
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
