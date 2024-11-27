document.addEventListener('DOMContentLoaded', function() {
    const hash = window.location.hash.substring(1);
    
    if (hash) {
        document.getElementById(hash).scrollIntoView();
        document.getElementById(hash).style.color = "red";
    }
});