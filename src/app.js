var allCharactersArray = [
  "Iron Man",
  "Daredevil",
  "Spider-Man",
  "Hulk",
  "Thor",
  "Captain America",
  "Doctor Strange",
  "Black Panther",
  "Wolverine",
  "Deadpool"
];
var inputForm = document.querySelector("#input");
var heroSelect;

let weekDay = moment();
$("#time").text(weekDay.format("dddd, MMMM Do YYYY hh:mm A"));

function handleSearchForm(event) {
  event.preventDefault();

  var heroInput = document.querySelector('#input').value;
  if(!heroInput || heroInput === "Choose a hero...") {
    console.error("No blank inputs allowed");
    return;
  }
  
  var queryString = "./character.html?q=" + heroInput;
  location.assign(queryString);
}

for(var i = 0; i < allCharactersArray.length; i++) {
  heroSelect = document.createElement("option");
  heroSelect.textContent = allCharactersArray[i];
  inputForm.appendChild(heroSelect);
}

document.querySelector("#input-form").addEventListener('submit', handleSearchForm);