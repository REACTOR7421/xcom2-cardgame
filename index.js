const express = require('express');
const app = express();
const PORT = process.env.PORT || 10000;

// Statikus fájlok kiszolgálása
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(PORT, () => {
    console.log(`Szerver fut: http://localhost:${PORT}`);
});
