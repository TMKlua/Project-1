// Sélectionnez le bouton du menu burger et la navigation
const menuToggle = document.getElementById("menu-toggle");
const nav = document.querySelector(".navbar-text");

// Ajoutez un gestionnaire d'événement de clic au bouton du menu burger
menuToggle.addEventListener("click", function () {
    // Basculez la classe "active" pour afficher/masquer la navigation
    nav.classList.toggle("active");
    // Animez les barres du menu burger
    const bars = document.querySelectorAll(".bar");
    bars.forEach((bar) => bar.classList.toggle("active"));
});
