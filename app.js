// ==========================================
// Bangkok Trip Planner
// Main JavaScript File
// ==========================================
//test

// ==========================================
// Countdown Timer
// ==========================================

const departureDate = new Date("July 14, 2026 23:59:59").getTime();

const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

function updateCountdown() {

    const now = new Date().getTime();

    const distance = departureDate - now;

    if (distance <= 0) {

        daysElement.textContent = "0";
        hoursElement.textContent = "0";
        minutesElement.textContent = "0";
        secondsElement.textContent = "0";

        return;

    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60)) /
        1000
    );

    daysElement.textContent = days;
    hoursElement.textContent = hours;
    minutesElement.textContent = minutes;
    secondsElement.textContent = seconds;

}

updateCountdown();

setInterval(updateCountdown, 1000);


// ==========================================
// Currency Converter
// ==========================================

// Change this whenever exchange rates change

const USD_TO_THB = 32.65;

const usdInput = document.getElementById("usdInput");
const thbInput = document.getElementById("thbInput");

usdInput.addEventListener("input", () => {

    const usd = parseFloat(usdInput.value);

    if (isNaN(usd)) {

        thbInput.value = "";

        return;

    }

    thbInput.value = (usd * USD_TO_THB).toFixed(2);

});

thbInput.addEventListener("input", () => {

    const thb = parseFloat(thbInput.value);

    if (isNaN(thb)) {

        usdInput.value = "";

        return;

    }

    usdInput.value = (thb / USD_TO_THB).toFixed(2);

});


// ==========================================
// Swap Button
// ==========================================

const swapButton = document.getElementById("swapButton");

swapButton.addEventListener("click", () => {

    const usd = usdInput.value;
    const thb = thbInput.value;

    usdInput.value = thb;
    thbInput.value = usd;

});


// ==========================================
// Start Exploring Button
// ==========================================

const exploreButton = document.querySelector(".primary-button");

exploreButton.addEventListener("click", () => {

    window.location.href = "itinerary.html";

});


// ==========================================
// Active Navigation Link
// ==========================================

const currentPage = window.location.pathname.split("/").pop();

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

    if (link.getAttribute("href") === currentPage) {

        link.style.color = "#E9C46A";

    }

});


// ==========================================
// Fade In Cards
// ==========================================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll(".glass-card, .nav-card, .time-card").forEach(card => {

    card.classList.add("hidden");

    observer.observe(card);

});


// ==========================================
// Console Message 😄
// ==========================================

console.log("🌴 Bangkok Trip Planner Loaded!");
console.log("Have an amazing trip!");
