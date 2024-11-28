document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('clickButton');
    const clicksDisplay = document.getElementById('clicks');

    async function fetchInitialClicks() {
        try {
            const response = await fetch('/Php/General/HomeClicker.php', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
    
            const data = await response.json();
            if (response.ok) {
                clicksDisplay.textContent = data.totalClicks;
            } else {
                console.error('Error fetching initial clicks:', data.message);
            }
        } catch (error) {
            console.error('Error fetching initial clicks:', error);
        }
    }
    
    // Functie om het klik aantal bij te werken
    async function updateClickCount() {
        try {
            const response = await fetch('/Php/General/HomeClicker.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ clicked: true })
            });
    
            const data = await response.json();
            if (response.ok) {
                clicksDisplay.textContent = data.totalClicks;
            } else {
                console.error('Error:', data.message);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }
    
    fetchInitialClicks();
    button.addEventListener('click', updateClickCount);
});