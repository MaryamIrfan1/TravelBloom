// Travel recommendations JSON data
const travelData = {
    "beaches": [
        {
            "name": "Maldives",
            "image": "Images/maldives.jpg",
            "description": "Crystal-clear waters and luxurious resorts make the Maldives a top beach destination."
        },
        {
            "name": "Bora Bora",
            "image": "Images/bora_bora.jpg",
            "description": "Famous for its stunning lagoons and overwater bungalows."
        }
    ],
    "temples": [
        {
            "name": "Angkor Wat",
            "image": "Images/angor_wat.jpg",
            "description": "The largest religious monument in the world, rich in history and architecture."
        },
        {
            "name": "Kinkaku-ji",
            "image": "Images/kinkaku_ji.jpg",
            "description": "Also known as the Golden Pavilion, this Zen temple is a masterpiece of Japanese culture."
        }
    ],
    "countries": [
        {
            "name": "Japan",
            "image": "Images/japan.jpg",
            "description": "Japan is a blend of modern innovation and rich cultural heritage."
        },
        {
            "name": "Italy",
            "image": "Images/italy.jpg",
            "description": "Known for its historic cities, delicious cuisine, and stunning landscapes."
        }
    ]
};

// Function to display recommendations
function displayRecommendations(category) {
    const container = document.getElementById("destinationResults");
    container.innerHTML = ""; // Clear previous results

    if (travelData[category]) {
        travelData[category].forEach(dest => {
            const card = document.createElement("div");
            card.classList.add("destination-card");

            card.innerHTML = `
                <img src="${dest.image}" alt="${dest.name}">
                <h3>${dest.name}</h3>
                <p>${dest.description}</p>
            `;

            container.appendChild(card);
        });
    } else {
        container.innerHTML = "<p>No destinations found in this category.</p>";
    }
}

// Function to search within all categories
function searchDestinations() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const container = document.getElementById("destinationResults");
    container.innerHTML = ""; // Clear previous results

    let foundResults = false;

    Object.keys(travelData).forEach(category => {
        travelData[category].forEach(dest => {
            if (dest.name.toLowerCase().includes(searchInput)) {
                const card = document.createElement("div");
                card.classList.add("destination-card");

                card.innerHTML = `
                    <img src="${dest.image}" alt="${dest.name}">
                    <h3>${dest.name}</h3>
                    <p>${dest.description}</p>
                `;

                container.appendChild(card);
                foundResults = true;
            }
        });
    });

    if (!foundResults) {
        container.innerHTML = "<p>No destinations found.</p>";
    }
}

// Load beach recommendations by default
window.onload = function() {
    displayRecommendations("beaches");
};
