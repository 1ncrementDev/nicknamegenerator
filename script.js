const adjectives = ["Brave", "Fearless", "Strong", "Mighty", "Unwavering", "Indomitable", "Final", "Shy", "Decent", "Nice", "New", "Old", "Holy", "Gold", "Smart", "Furious", "Blind", "Courageous", "Daring", "Resolute", "Valiant", "Steadfast", "Fearless", "Bold", "Gallant", "Heroic", "Brilliant", "Wise", "Intrepid", "Robust", "Fierce", "Brutal", "Tenacious", "Swift", "Mighty", "Powerful", "Unstoppable", "Relentless", "Vigilant", "Savage"];
const nouns = ["Lion", "Wolf", "Tiger", "Bear", "Eagle", "Dragon", "Granade", "Ban", "Long", "Cat", "Flash", "Warlock", "Thing", "Killer", "Iron", "Bomb", "Falcon", "Power", "Shot", "Speed", "Slow", "Hero", "Work", "Rider", "Panther", "Leopard", "Rhino", "Gorilla", "Hawk", "Falcon", "Phoenix", "Saber", "Samurai", "Champion", "Gladiator", "Conqueror", "Warrior", "Assassin", "Sniper", "Mercenary", "Crusader", "Avenger", "Defender", "Guardian", "Challenger", "Destroyer", "Savior", "Legend"];

function generateNickname() {
    const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];
    const number = Math.floor(Math.random() * 99) + 1;
    const nickname = `${adjective}${noun}${number}`;

    return nickname;
}

const generateBtn = document.getElementById("generate-btn");
const outputDiv = document.getElementById("output");
const nicknameDiv = document.getElementById("nickname");

generateBtn.addEventListener("click", function() {
    const nickname = generateNickname();
    outputDiv.innerHTML = nickname;

});
