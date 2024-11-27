function applyHalloweenTheme() {
    // Halloween-lettertype toevoegen aan de head
    let fontLink = document.createElement("link");
    fontLink.rel = "stylesheet";
    fontLink.href = "https://fonts.googleapis.com/css2?family=Creepster&display=swap";
    document.head.appendChild(fontLink);

    // Achtergrond en tekst kleuren instellen
    document.body.style.backgroundColor = "#2e2e2e"; // Donkergrijze achtergrond
    document.body.style.color = "#ff6f61"; // Spooky oranje tekst
    document.body.style.fontFamily = "'Creepster', cursive"; // Halloween-font toepassen
    
    // Links een oranje kleur en glow-effect geven
    let links = document.querySelectorAll("a");
    links.forEach(link => {
        link.style.color = "#ff7518";
        link.style.textShadow = "0 0 5px #ff7518";
    });

    // Knoppen aanpassen met Halloween kleuren en effecten
    let buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        button.style.backgroundColor = "#d4af37"; // Goudachtige kleur
        button.style.color = "#2e2e2e"; // Donkere tekst
        button.style.border = "2px solid #ff7518"; // Oranje rand

        // Hover-effect voor knoppen
        button.addEventListener("mouseenter", () => {
            button.style.transform = "scale(1.05)";
            button.style.boxShadow = "0 0 10px #ff7518";
        });

        button.addEventListener("mouseleave", () => {
            button.style.transform = "scale(1)";
            button.style.boxShadow = "none";
        });
    });

    // Creepy rand toevoegen aan de pagina
    let spookyBorder = document.createElement("div");
    spookyBorder.style.position = "fixed";
    spookyBorder.style.top = "0";
    spookyBorder.style.left = "0";
    spookyBorder.style.width = "100vw";
    spookyBorder.style.height = "100vh";
    spookyBorder.style.pointerEvents = "none";
    spookyBorder.style.backgroundImage = "url('https://www.transparenttextures.com/patterns/black-linen.png')";
    spookyBorder.style.opacity = "0.2";
    spookyBorder.style.backgroundRepeat = "repeat";
    spookyBorder.style.zIndex = "9999";
    document.body.appendChild(spookyBorder);
}

var halloweenTheme = false;

(function() {
    // Controleer of "www." in de URL aanwezig is vanwege CORS
    if (window.location.hostname.startsWith("www.")) {
        const newURL = window.location.protocol + "//" + window.location.hostname.replace("www.", "") + window.location.pathname + window.location.search;
        window.location.replace(newURL);
    }


    if (localStorage.getItem('halloweenTheme')) {
        const themeEnabled = localStorage.getItem('halloweenTheme') === 'true';
        halloweenTheme = themeEnabled;
    } else {
        localStorage.setItem('halloweenTheme', 'false');
    }

})();


document.addEventListener("DOMContentLoaded", function() {
    if (halloweenTheme == true) {
        applyHalloweenTheme();
    }
});