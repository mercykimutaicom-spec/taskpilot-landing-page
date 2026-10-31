// ==================================================
// Theme Toggle
// ==================================================

const themeToggle = document.getElementById("theme-toggle");
const html = document.documentElement;

// Check for saved theme preference or system preference
const savedTheme = localStorage.getItem("taskpilot-theme");
const systemMatchesDark = window.matchMedia(
  "(prefers-color-scheme: dark)",
).matches;

if (savedTheme === "dark" || (!savedTheme && systemMatchesDark)) {
  html.setAttribute("data-theme", "dark");
  themeToggle.classList.add("moon");
  themeToggle.classList.remove("sun");
} else {
  html.setAttribute("data-theme", "light");
  themeToggle.classList.add("sun");
  themeToggle.classList.remove("moon");
}

themeToggle.addEventListener("click", () => {
  const currentTheme = html.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  html.setAttribute("data-theme", newTheme);

  if (newTheme === "dark") {
    themeToggle.classList.add("moon");
    themeToggle.classList.remove("sun");
    localStorage.setItem("taskpilot-theme", "dark");
  } else {
    themeToggle.classList.add("sun");
    themeToggle.classList.remove("moon");
    localStorage.setItem("taskpilot-theme", "light");
  }
});

// ==================================================
// Mobile Navigation
// ==================================================

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.getElementById("nav-menu");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");

    // Toggle aria-expanded
    const expanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", !expanded);
  });

  // Close menu when a link is clicked
  const navLinks = navMenu.querySelectorAll("a");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// ==================================================
// Reduced Motion Check
// ==================================================

if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  document.body.classList.add("reduced-motion");
}
// ==================================================
// Demo Sign-Up Button
// ==================================================

const getStartedButton = document.getElementById("get-started-free");

if (getStartedButton) {
  getStartedButton.addEventListener("click", (event) => {
    event.preventDefault();

    alert("Thanks for signing up! This is a demo project.");
  });
}
