const body = document.body;
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".site-nav a");

const closeMenu = () => {
  body.classList.remove("menu-open");
  if (navToggle) {
    navToggle.setAttribute("aria-expanded", "false");
  }
};

if (navToggle) {
  navToggle.addEventListener("click", () => {
    const isOpen = body.classList.toggle("menu-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const href = link.getAttribute("href") || "";
    const isSamePageHash = href.startsWith("#");

    if (isSamePageHash) {
      const target = document.querySelector(href);
      if (target) {
        event.preventDefault();
        closeMenu();
        requestAnimationFrame(() => {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        });
        return;
      }
    }

    closeMenu();
  });
});
