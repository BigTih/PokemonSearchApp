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
            displayPokemon(data);
        })
        .catch(error => {
            displayPokemon(null);
            console.error('There was an error fetching the pokemon:', error);
        });
}

function displayPokemon(pokemon) {
    resultsList.innerHTML = ''; // clear previous results
    if(pokemon)
    {
        const nameData = pokemon.name;
        const first = nameData.charAt(0)
        const cap = first.toUpperCase()
        const ame = nameData.slice(1)
        const name = cap + ame
        const listName = document.createElement('li');
        listName.textContent = "Name: "+name;
        resultsList.appendChild(listName);

        const xp = pokemon.base_experience;
        const listXP = document.createElement('li');
        listXP.textContent = "Base Experience: "+xp;
        resultsList.appendChild(listXP);

        const height = pokemon.height;
        const listHeight = document.createElement('li');
        listHeight.textContent = "Height: "+height;
        resultsList.appendChild(listHeight);

        const weight = pokemon.weight;
        const listWeight = document.createElement('li');
        listWeight.textContent = "Weight: "+weight;
        resultsList.appendChild(listWeight);

        const button = document.createElement("button");
        button.innerHTML = "Moves";
        resultsList.appendChild(button);

        localStorage.setItem('pokemonData', JSON.stringify(pokemon));
        button.addEventListener('click', () => {
            window.location.href = "moves.html";
          });
    }
    //if (pokemon && pokemon.length > 0) {

        //pokemon.forEach(pok => {
            /*const name = pokemon.name;
            const listItem = document.createElement('li');
            listItem.textContent = name;
            resultsList.appendChild(listItem);*/
        //});
    else 
    {
        const listItem = document.createElement('li');
        listItem.textContent = 'No pokemon found.';
        resultsList.appendChild(listItem);
    }
}
