const yearEl = document.getElementById("year");
yearEl.textContent = new Date().getFullYear();

// Burger menu (mobile)
const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");

burger?.addEventListener("click", () => {
  const open = menu.classList.toggle("open");
  burger.setAttribute("aria-expanded", String(open));
});

// Active link on scroll
const links = [...document.querySelectorAll(".menu__link")];
const sections = links
  .map(a => document.querySelector(a.getAttribute("href")))
  .filter(Boolean);

const setActive = () => {
  let currentId = "#home";
  for (const sec of sections) {
    const rect = sec.getBoundingClientRect();
    if (rect.top <= 120) currentId = `#${sec.id}`;
  }
  links.forEach(a => a.classList.toggle("active", a.getAttribute("href") === currentId));
};

window.addEventListener("scroll", setActive);
setActive();

// Close menu after click (mobile)
links.forEach(a => {
  a.addEventListener("click", () => {
    menu.classList.remove("open");
    burger.setAttribute("aria-expanded", "false");
  });
});

// Fake send button
document.getElementById("fakeSend")?.addEventListener("click", () => {
  alert("Message envoyé ✅ (démo). On peut connecter un vrai formulaire après.");
});
