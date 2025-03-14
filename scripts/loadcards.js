document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("card-container");

    if (!container) {
        console.error("A card-container ID-jű elem nem található az oldalon.");
        return;
    }

    // Ellenőrizzük, hogy a cards.js be van-e töltve
    if (!window.cards || !Array.isArray(window.cards)) {
        console.error("A cards.js nincs betöltve vagy hibás.");
        return;
    }

    // Ritkaságok listája
    const rarities = ["gyakori", "ritka", "epikus", "legendas"];

    // Kártyák generálása
    window.cards.forEach(card => {
        const isSpecialCard = ["katona", "tombolo_king", "arkon_king", "warlock", "assasin", "hunter", "elders", "uber_elders"].includes(card);
        
        if (isSpecialCard) {
            // Speciális kártya - nincs ritkaság, csak egyetlen kép
            const cardDiv = document.createElement("div");
            cardDiv.classList.add("card");

            const img = document.createElement("img");
            img.src = `cards/${card}.png`;
            img.alt = `${card}`;
            img.classList.add("card-image");

            // Hibakezelés - elkerüli a törött kép ikonokat
            img.onerror = function () {
                console.warn(`Hiányzó kép: ${img.src}`);
                cardDiv.style.display = "none";
            };

            cardDiv.appendChild(img);
            container.appendChild(cardDiv);

        } else {
            // Normál kártyák - ritkasággal együtt
            rarities.forEach(rarity => {
                const cardDiv = document.createElement("div");
                cardDiv.classList.add("card");

                const img = document.createElement("img");
                img.src = `cards/${card}_${rarity}.png`;
                img.alt = `${card} (${rarity})`;
                img.classList.add("card-image");

                // Hibakezelés
                img.onerror = function () {
                    console.warn(`Hiányzó kép: ${img.src}`);
                    cardDiv.style.display = "none";
                };

                cardDiv.appendChild(img);
                container.appendChild(cardDiv);
            });
        }
    });
});


