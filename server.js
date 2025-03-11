const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 10000; // A Render automatikusan beállítja a PORT változót

// Statikus fájlok kiszolgálása a "public" mappából
app.use(express.static(path.join(__dirname, 'public')));

// Alapértelmezett útvonal az index.html betöltésére
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Szerver indítása
app.listen(PORT, () => {
    console.log(`✅ Szerver fut: http://localhost:${PORT}`);
});

