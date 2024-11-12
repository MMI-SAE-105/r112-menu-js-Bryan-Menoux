// On cible les éléments à modifier
const toggle = document.querySelector(".menu-btn");
const nav = document.querySelector("#mainNav");

// Ajoute un écouteur d'événements à l'élément 'toggle' qui écoute les événements 'click'.
toggle.addEventListener("click", () => {
  // Mise à jour des attributs ARIA pour accessibilité
  const isOpen = toggle.ariaExpanded === "true";
  const isClosed = !isOpen;
  console.log("isOpen : ", isOpen, "isClosed : ", isClosed);
  nav.ariaHidden = isOpen;
  toggle.ariaExpanded = isClosed;
  document.body.classList.toggle("noscroll", isClosed);
});
