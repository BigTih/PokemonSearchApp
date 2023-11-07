const dataString = localStorage.getItem('pokemonData');
const data = JSON.parse(dataString);

const moves = data.moves;
moves.forEach(mov => {
    const name = mov.move.name;
    const moveList = document.createElement('li');
    moveList.textContent = name;
    resultsList.appendChild(moveList);
});

const button = document.createElement("button");
button.innerHTML = "Back";
resultsList.appendChild(button);

button.addEventListener('click', () => {
    window.location.href = "pokemon.html";
  });

/*const first = nameData.charAt(0)
const cap = first.toUpperCase()
const ame = nameData.slice(1)
const named = cap + ame
const listName = document.createElement('li');
listName.textContent = "Name: "+named;
resultsList.appendChild(listName);*/