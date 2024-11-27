document.addEventListener('DOMContentLoaded', () => {
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

    function updateIcons() {
        const Arrows = document.querySelectorAll('.Icon-Arrow');
        const Githubs = document.querySelectorAll('.Icon-Github');
    
        // Update alle pijlen
        Arrows.forEach(arrow => {
            arrow.src = prefersDarkScheme.matches 
                ? "/Assets/Icons/White/Arrow.svg" 
                : "/Assets/Icons/Black/Arrow.svg";
        });

        // Update alle Github-iconen
        Githubs.forEach(github => {
            github.src = prefersDarkScheme.matches 
                ? "/Assets/Icons/White/Github.svg" 
                : "/Assets/Icons/Black/Github.svg";
        });
    }
    
    // Initial load
    updateIcons();

    // Listen for changes
    prefersDarkScheme.addEventListener('change', updateIcons);
});
