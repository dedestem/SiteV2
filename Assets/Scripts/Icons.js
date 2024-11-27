document.addEventListener('DOMContentLoaded', () => {
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

    function updateIcons() {
        const Arrows = document.querySelectorAll('.Icon-Arrow');
        const Githubs = document.querySelectorAll('.Icon-Github');
        const CubeWarningIcon = document.querySelectorAll('.Icon-CubeWarningIcon');
    
        // Update alle pijlen
        Arrows.forEach(icon => {
            icon.src = prefersDarkScheme.matches 
                ? "/Assets/Icons/White/Arrow.svg" 
                : "/Assets/Icons/Black/Arrow.svg";
        });

        // Update alle Github-iconen
        Githubs.forEach(icon => {
            icon.src = prefersDarkScheme.matches 
                ? "/Assets/Icons/White/Github.svg" 
                : "/Assets/Icons/Black/Github.svg";
        });

        // Update alle CubeWarningIcon-iconen
        CubeWarningIcon.forEach(icon => {
            icon.src = prefersDarkScheme.matches 
                ? "/Assets/Icons/White/CubeWarningIcon.svg" 
                : "/Assets/Icons/Black/CubeWarningIcon.svg";
        });
    }
    
    // Initial load (Geef tijd voor scripts icoonen toe te voegen)
    setTimeout(() => {
        updateIcons();
    }, 100);

    // Listen for changes
    prefersDarkScheme.addEventListener('change', updateIcons);
});
