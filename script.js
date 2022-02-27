const playersDiv = document.getElementById('players-div');
const playerDetails = document.getElementById('player-details');
const newDiv2 = document.createElement('div');
const newDiv = document.createElement('div');


const allPlayers = () => {
    const searchBox = document.getElementById('search-box');
    const searchBoxValue = searchBox.value;
   searchBox.value = '';
   
    
    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchBoxValue}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayPlayers(data.player))
}
        newDiv.textContent = '';

const displayPlayers = (players) => {
    for(const player of players) {
       
        newDiv.innerHTML = `
        <img class="w-50 rounded-3" src="${player.strThumb}" alt=""> 
        <h3>Name: ${player.strPlayer} </h3>
        <h5>Nationality: ${player.strNationality} </h5>
        <button onclick="loadDetails(${player.idPlayer})" class="bg-danger text-white py-2 px-2 position-center">Details</button>
        <br><br>
        `;
        
        playersDiv.appendChild(newDiv);
        

    }
}

const loadDetails = (id) => {
    const url2  = `https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${id}
    `
    fetch(url2)
    .then(res => res.json())
    .then(data => displayPlayerDetails(data.players[0]));
    
}
newDiv2.textContent = '';

const displayPlayerDetails = (info) => {
    // console.log(info);
    newDiv2.innerHTML = `
    <img class="w-50 rounded-3" src="${info.strThumb}" alt=""> 
        <h5>Id: ${info.idPlayer} </h5>
        <h4>Name: ${info.strPlayer} </h4>
        <h5>Nationality: ${info.strNationality} </h5>
        <p>Description: ${info.strDescriptionEN} </p>
        <br><br>
    `;
    playerDetails.appendChild(newDiv2);
}