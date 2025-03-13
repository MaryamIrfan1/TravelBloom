document.addEventListener("DOMContentLoaded", function () {
    fetch("travel_recommendation_api.json")
        .then(response => response.json())
        .then(data => displayRecommendations(data));
});

function displayRecommendations(data) {
    const container = document.getElementById("destinations-container");

    function createCard(item) {
        return `
            <div class="destination">
                <img src="${item.image}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
            </div>
        `;
    }

    let content = "";

    data.beaches.forEach(beach => content += createCard(beach));
    data.temples.forEach(temple => content += createCard(temple));
    data.countries.forEach(country => content += createCard(country));

    container.innerHTML = content;
}

function searchDestinations() {
    const query = document.getElementById("searchBox").value.toLowerCase();
    fetch("travel_recommendation_api.json")
        .then(response => response.json())
        .then(data => {
            let results = [];

            function filterItems(items) {
                return items.filter(item => item.name.toLowerCase().includes(query));
            }

            results.push(...filterItems(data.beaches));
            results.push(...filterItems(data.temples));
            results.push(...filterItems(data.countries));

            document.getElementById("destinations-container").innerHTML =
                results.map(item => `
                    <div class="destination">
                        <img src="${item.image}" alt="${item.name}">
                        <h3>${item.name}</h3>
                        <p>${item.description}</p>
                    </div>
                `).join("");
        });
}
