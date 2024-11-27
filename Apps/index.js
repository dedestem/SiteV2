const Elements = {
    DFinderGet: document.getElementById("DFinderGet"),
    DFinderDownloads: document.getElementById("DFinderDownloads"),

    DQRGet: document.getElementById("DQRGet"),
    DQRDownloads: document.getElementById("DQRDownloads"),
}

let DFinderOpen = false;
let DQROpen = false;

document.addEventListener('DOMContentLoaded', () => {
    Elements.DFinderGet.addEventListener("click", DFinder);
    Elements.DQRGet.addEventListener("click", DQR);
});

function DFinder() {
    if (DFinderOpen == true) {
        DFinderOpen = false;
        Elements.DFinderDownloads.style.display = "none";
    } else {
        DFinderOpen = true;
        Elements.DFinderDownloads.style.display = "block";
    }
}
function DQR() {
    if (DQROpen == true) {
        DQROpen = false;
        Elements.DQRDownloads.style.display = "none";
    } else {
        DQROpen = true;
        Elements.DQRDownloads.style.display = "block";
    }
}