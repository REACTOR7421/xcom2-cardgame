const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// Statikus fájlok kiszolgálása (pl. HTML, CSS, JS)
app.use(express.static("public"));

// Alap útvonal
app.get("/", (req, res) => {
  res.send("XCOM 2 Kártyajáték - Hamarosan!");
});

// Szerver indítása
app.listen(PORT, () => {
  console.log(`Szerver fut: http://localhost:${PORT}`);
});
