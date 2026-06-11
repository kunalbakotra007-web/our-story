function startJourney() {
    alert("Our journey begins ❤️");
}

const sparkleContainer = document.getElementById("sparkles");

for(let i = 0; i < 50; i++) {

    let sparkle = document.createElement("div");

    sparkle.classList.add("sparkle");

    sparkle.innerHTML = "⭐";

    sparkle.style.left = Math.random() * 100 + "vw";

    sparkle.style.animationDuration =
        (3 + Math.random() * 5) + "s";

    sparkle.style.animationDelay =
        Math.random() * 5 + "s";

    sparkleContainer.appendChild(sparkle);
}

function startJourney() {
    window.location.href = "gh4-start.html";
}

function goNext() {
    window.location.href =
    "https://www.google.com/maps/dir/?api=1&destination=Surya+Jyot+Lake+Gandhinagar";
}

function goIceCream() {
    window.location.href = "https://maps.app.goo.gl/CdrJL2RVF3CGkQGBA";
}