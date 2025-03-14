// Kártyák betöltése és megjelenítése az oldalra
document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("card-container");

   if (!window.cards || !Array.isArray(window.cards)) {
    console.error("HIBA: A cards.js nem töltődött be, vagy nincs megfelelő formátumban.");
    return;
    }

    // Ellenőrizzük, hogy a cards.js be van-e töltve
    if (!window.cards || !Array.isArray(window.cards)) {
        console.error("A cards.js nincs megfelelően betöltve.");
        return;
    }

    // Ritkaságok listája
    const rarities = ["gyakori", "ritka", "epikus", "legendas"];

    // Kártyák generálása
    window.cards.forEach(card => {
        rarities.forEach(rarity => {
            const cardDiv = document.createElement("div");
            cardDiv.classList.add("card");

            const img = document.createElement("img");
            img.src = `public/cards/${card}_${rarity}.png`;
            img.alt = `${card} (${rarity})`;
            img.classList.add("card-image");

            // Ha a kép nem létezik, hibakezelés (elkerüli a törött kép ikonokat)
            img.onerror = function () {
                console.warn(`Hiányzó kép: ${img.src}`);
                cardDiv.style.display = "none"; // Elrejti az üres kártyát
            };

            cardDiv.appendChild(img);
            container.appendChild(cardDiv);
        });
    });
});
