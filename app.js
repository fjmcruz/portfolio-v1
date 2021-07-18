const navigationSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  // Toggle nav
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    // Animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navigationLinkFade 0.4s ease forwards ${
          index / 6
        }s`;
      }
    });
    // Burger animation
    burger.classList.toggle("toggle");
  });
};
// Call navigation slide function
navigationSlide();
