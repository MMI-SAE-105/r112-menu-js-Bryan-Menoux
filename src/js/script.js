// On cible les éléments à modifier
const toggle = document.querySelector(".menu-btn");
const nav = document.querySelector("#mainNav");

// Ajoute un écouteur d'événements à l'élément 'toggle' qui écoute les événements 'click'.
toggle.addEventListener("click", () => {
  // Mise à jour des attributs ARIA pour accessibilité
  const isOpen = toggle.ariaExpanded === "true";
  const isClosed = !isOpen;
  nav.ariaHidden = isOpen;
  toggle.ariaExpanded = isClosed;
  if (nav.ariaHidden === "false") {
    document.body.classList.toggle("noscroll");
  }
  if (nav.ariaHidden === "true") {
    document.body.classList.toggle("noscroll");
  }
});
