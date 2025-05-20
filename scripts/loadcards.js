ddocument.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("card-gallery"); // főoldali galéria ID-je

    if (!container) {
        console.error("A card-gallery ID-jű elem nem található az oldalon.");
        return;
    }

    if (!window.cards || !Array.isArray(window.cards)) {
        console.error("A cards.js nincs betöltve vagy hibás.");
        return;
    }

    const rarities = ["gyakori", "ritka", "epikus", "legendas"];

    window.cards.forEach(card => {
        const isSpecialCard = ["katona", "tombolo_king", "arkon_king", "warlock", "assasin", "hunter", "elders", "uber_elders"].includes(card);

        if (isSpecialCard) {
            const cardDiv = document.createElement("div");
            cardDiv.classList.add("card");

            const img = document.createElement("img");
            img.src = `cards/${card}.png`;
            img.alt = `${card}`;
            img.classList.add("card-image");

            img.onerror = function () {
                this.style.display = 'none';
                if (this.parentElement) this.parentElement.style.display = 'none';
            };

            cardDiv.appendChild(img);
            container.appendChild(cardDiv);

        } else {
            rarities.forEach(rarity => {
                const cardDiv = document.createElement("div");
                cardDiv.classList.add("card");

                const img = document.createElement("img");
                img.src = `cards/${card}_${rarity}.png`;
                img.alt = `${card} (${rarity})`;
                img.classList.add("card-image");

                img.onerror = function () {
                    this.style.display = 'none';
                    if (this.parentElement) this.parentElement.style.display = 'none';
                };

                cardDiv.appendChild(img);
                container.appendChild(cardDiv);
            });
        }
    });
});
