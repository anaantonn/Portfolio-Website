const switchButton = document.getElementById("switch");
const animalImg = document.querySelector(".animal");

function fadeImage(img, newSrc) {
    img.style.opacity = 0;
    setTimeout(() => {
        img.src = newSrc;
        img.style.opacity = 1;
    }, 300);
}

if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark");
    if (switchButton) switchButton.checked = true;
    if (animalImg) animalImg.src = "images/animal-footprints-svgrepo-com.svg";
} else {
    if (switchButton) switchButton.checked = false;
    if (animalImg) animalImg.src = "images/animal-prints-svgrepo-com.svg";
}

if (switchButton) {
    switchButton.addEventListener("change", (e) => {
        if (e.target.checked) {
            document.body.classList.add("dark");
            if (animalImg) fadeImage(animalImg, "images/animal-footprints-svgrepo-com.svg");
            localStorage.setItem("darkMode", "enabled");
        } else {
            document.body.classList.remove("dark");
            if (animalImg) fadeImage(animalImg, "images/animal-prints-svgrepo-com.svg");
            localStorage.setItem("darkMode", "disabled");
        }
    });
}
