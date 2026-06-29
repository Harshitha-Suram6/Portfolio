// Flower Animation

const flowerContainer = document.getElementById("flowers");

function createFlower() {

    const flower = document.createElement("div");

    flower.classList.add("flower");

    // Flower emoji
    flower.innerHTML = "🌸";

    // Random position
    flower.style.left = Math.random() * window.innerWidth + "px";

    // Random size
    let size = Math.random() * 20 + 20;
    flower.style.fontSize = size + "px";

    // Random animation duration
    let duration = Math.random() * 5 + 5;
    flower.style.animationDuration = duration + "s";

    // Random opacity
    flower.style.opacity = Math.random();

    flowerContainer.appendChild(flower);

    // Remove flower after animation
    setTimeout(() => {
        flower.remove();
    }, duration * 1000);

}

// Create flowers continuously
setInterval(createFlower, 300);

// Scroll Animation
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    sections.forEach(section => {

        const top = window.scrollY;
        const offset = section.offsetTop - 300;

        if (top > offset) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }

    });

});

// Initial Style
sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
    section.style.transition = "1s";

});