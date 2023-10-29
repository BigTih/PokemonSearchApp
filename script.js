// script.js
const searchBtn = document.getElementById('searchBtn');
const searchInput = document.getElementById('searchInput');
const resultsList = document.getElementById('resultsList');

searchBtn.addEventListener('click', function() {
    const query = searchInput.value.trim();
    fetchPokemon(query);
});

function fetchPokemon(query) {
    const API_ENDPOINT = `https://pokeapi.co/api/v2/pokemon/${query}/`;
    fetch(API_ENDPOINT)
        .then(response => response.json())
        .then(data => {
            displayPokemon(data.abilities);
        })
        .catch(error => {
            console.error('There was an error fetching the books:', error);
        });
}

function displayPokemon(pokemon) {
    resultsList.innerHTML = ''; // clear previous results
    if (pokemon && pokemon.length > 0) {
        pokemon.forEach(pok => {
            const title = pok.ability.name;
            const listItem = document.createElement('li');
            listItem.textContent = title;
            resultsList.appendChild(listItem);
        });
    } else {
        const listItem = document.createElement('li');
        listItem.textContent = 'No books found.';
        resultsList.appendChild(listItem);
    }
}
