const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000; // Render által adott port vagy 3000-es fallback

app.use(express.static("public")); // Ha van egy 'public' mappa a statikus fájloknak

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
