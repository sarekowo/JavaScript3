// URL de l'API
const API_URL = "https://restcountries.com/v3.1/all";

// Fonction pour récupérer les pays
async function fetchCountries() {
    try {
        // Récupération des données depuis l'API
        const response = await fetch(API_URL);
        const countries = await response.json();

        // Sélection de 20 pays aléatoires
        const selectedCountries = countries.slice(0, 20);

        // Affichage des pays
        displayCountries(selectedCountries);
    } catch (error) {
        console.error("Erreur lors de la récupération des pays :", error);
    }
}

// Fonction pour afficher les pays sur la page
function displayCountries(countries) {
    const container = document.getElementById("countries-container");
    container.innerHTML = ""; // Vider le conteneur avant d'ajouter du contenu

    countries.forEach(country => {
        // Récupération des informations
        const name = country.name.common;
        const flag = country.flags.svg;
        const capital = country.capital ? country.capital[0] : "N/A";
        const currency = country.currencies ? Object.keys(country.currencies)[0] : "N/A";

        // Création d'un élément HTML pour chaque pays
        const countryCard = document.createElement("div");
        countryCard.classList.add("country-card");
        countryCard.innerHTML = `
            <h3>${name}</h3>
            <img src="${flag}" alt="Drapeau de ${name}">
            <p>Capitale : ${capital}</p>
            <p>Devise : ${currency}</p>
        `;

        // Ajout de la carte au conteneur
        container.appendChild(countryCard);
    });
}

// Appel de la fonction pour récupérer et afficher les pays
fetchCountries();
