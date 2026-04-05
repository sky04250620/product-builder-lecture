const menu = [
    "Bibimbap",
    "Kimchi Jjigae",
    "Bulgogi",
    "Japchae",
    "Tteokbokki",
    "Samgyeopsal",
    "Kimbap",
    "Sundubu Jjigae",
    "Haemul Pajeon",
    "Galbi",
];

const menuDisplay = document.getElementById("menu-display");
const recommendButton = document.getElementById("recommend-button");

recommendButton.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * menu.length);
    menuDisplay.textContent = menu[randomIndex];
});