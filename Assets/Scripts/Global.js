function AddBanner() {
    // Globaal Banner Systeem
    //
    // Kies uit Danger-Banner, Warning-Banner en Notice-Banner
    // Kies voor een Icoontje uit /Assets/Scripts/Icons.js
    // Geef het een link voor meer info (Optioneel) 


    // Maak de hoofdcontainer aan
    const Banner = document.createElement('div');
    Banner.className = 'Danger-Banner'; // Hier de banner type aanpassen

    // Voeg een afbeelding toe
    const Icon = document.createElement('img');
    Icon.alt = 'Warning';
    Icon.className = 'Icon-CubeWarningIcon'; // Hier een Icon Toevoegen
    Banner.appendChild(Icon);

    // Voeg een tekst toe
    const Text = document.createElement('h2');
    Text.textContent = 'You are currently viewing a preview of davidnet V2'; // Hier tekst aanpassen
    Banner.appendChild(Text);

    // Voeg een link toe
    const Link = document.createElement('a');
    Link.href = 'https://davidnet.net/Forum/View?21'; // Hier link url aanpassen
    Link.textContent = 'Read more'; // Hier link tekst aanpassen
    Banner.appendChild(Link); // Dit stukje commenten als je de link uit wil doen

    // Voeg alles toe aan de body of een specifieke container
    const nav = document.querySelector('nav'); // Zoek het nav element
    document.body.insertBefore(Banner, nav.nextSibling); // Voeg Banner toe na nav
}

document.addEventListener('DOMContentLoaded', () => {
    AddBanner();
    updateIcons();
});


