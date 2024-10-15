let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighter;
let monsterHealth;
let inventory = ["stick", "dagger", "sword"];

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterHealthText = document.querySelector("#monsterHealthText");
const monsterNameText = document.querySelector("#monsterNameText");

const location =[
  {
    name : "town square",
    "button text" : ["Go to store", "Go to cave", "Fight the dragon"],  
    "button function" : [goStore, goCave, fightDragon],
    "text" : "You are in the town!"
  },
  {
    name : "store",
    "button text" : ["Buy 10 health for 10 gold", "Buy a weapon for 30 gold", "Leave store"],
    "button function" : [buyHealth, buyWeapon, goTown],
    "text" : "Welcome to the store!"
  }

]
// Initialising buttons

button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;


function update (location){
  button1.innerText =location["button text"][0];
  button2.innerText =location["button text"][1];
  button3.innerText =location["button text"][2];
  button1.onclick =location["button function"][0];
  button2.onclick =location["button function"][1];
  button3.onclick =location["button function"][2];
  text.innerText = location["text"];

}
function goTown() {
  update(location[0]);
}

function goStore() {
  update(location[1]);
}

function goCave() {
  console.log("Going to cave");
}

function fightDragon() {    
  console.log("Fighting dragon");
}

function buyHealth() {
  console.log("Buying health");
}

function buyWeapon() {
  console.log("Buying weapon");
}

