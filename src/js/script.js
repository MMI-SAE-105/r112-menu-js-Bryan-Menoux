// On cible les éléments à modifier
const toggle = document.querySelector(".menu-btn"); // Sélectionne le bouton de menu
const nav = document.querySelector("#mainNav"); // Sélectionne l'élément de navigation principal

// Ajoute un écouteur d'événements à l'élément 'toggle' qui écoute les événements 'click'.
toggle.addEventListener("click", () => {
  // Mise à jour des attributs ARIA pour accessibilité
  const isOpen = toggle.ariaExpanded === "true"; // Vérifie si le menu est actuellement ouvert
  const isClosed = !isOpen; // Détermine si le menu est fermé
  console.log("isOpen : ", isOpen, "isClosed : ", isClosed); // Affiche l'état actuel du menu dans la console
  nav.ariaHidden = isOpen; // Met à jour l'attribut ARIA 'aria-hidden' de l'élément de navigation
  toggle.ariaExpanded = isClosed; // Met à jour l'attribut ARIA 'aria-expanded' du bouton de menu
  document.body.classList.toggle("noscroll", isClosed); // Ajoute ou retire la classe 'noscroll' du corps du document pour empêcher ou permettre le défilement
});
