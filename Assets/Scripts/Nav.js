document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("navlogo").addEventListener("click", () => {
        window.location.href = "/";
    });

    document.getElementById("navprofile").addEventListener("click", () => {
        window.location.href = "/Account";
    });
});