
// Kártyák betöltése és megjelenítése az oldalra
document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("card-container");

    if (!container) {
        console.error("A card-container elem nem található.");
        return;
    }

    // Kártyanevek és ritkaságok importálása a cards.js-ből
    if (typeof cards === "undefined") {
        console.error("A cards.js nincs betöltve vagy hibás.");
        return;
    }

    // Kártyák generálása
    cards.forEach(card => {
        ["gyakori", "ritka", "epikus", "legendas"].forEach(rarity => {
            const img = document.createElement("img");
            img.src = `public/cards/${card}_${rarity}.png`;
            img.alt = `${card} (${rarity})`;
            img.classList.add("card-image");

            container.appendChild(img);
        });
    });
});
