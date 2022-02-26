const playersDiv = document.getElementById('players-div');

const allPlayers = () => {
    const searchBox = document.getElementById('search-box');
    const searchBoxValue = searchBox.value;
    
    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchBoxValue}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayPlayers(data.player))
}

const displayPlayers = (players) => {
    for(const player of players) {
        const newDiv = document.createElement('div');
        newDiv.innerHTML = `
        <img class="w-50 rounded-3" src="${player.strThumb}" alt=""> 
        <h3>Name: ${player.strPlayer} </h3>
        <h5>Nationality: ${player.strNationality} </h5>
        <button class="bg-danger text-white py-2 px-2 position-center">Details</button>
        <br><br>
        `;
        playersDiv.appendChild(newDiv);

    }
}

