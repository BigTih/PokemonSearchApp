const dataString = localStorage.getItem('pokemonData');
const data = JSON.parse(dataString);

const nameData = data.name;
const first = nameData.charAt(0)
const cap = first.toUpperCase()
const ame = nameData.slice(1)
const named = cap + ame
const listName = document.createElement('li');
listName.textContent = "Name: "+named;
resultsList.appendChild(listName);