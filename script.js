// Typing Effect
const typingText = document.getElementById("typingText");

const roles = [
  "Mentor | Problem Solver | Innovator",
  "B.Tech CSE (AI & ML) Final Year Student",
  "Future Software Developer",
  "Passionate About Leadership & Learning"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  let currentRole = roles[roleIndex];

  if (!isDeleting) {
    typingText.innerHTML = currentRole.substring(0, charIndex + 1);
    charIndex++;
  } else {
    typingText.innerHTML = currentRole.substring(0, charIndex - 1);
    charIndex--;
  }

  let speed = isDeleting ? 45 : 85;

  if (!isDeleting && charIndex === currentRole.length) {
    speed = 1300;
    isDeleting = true;
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    speed = 250;
  }

  setTimeout(typeEffect, speed);
}
typeEffect();

// Reveal Animation
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach((el) => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const visiblePoint = 120;

    if (elementTop < windowHeight - visiblePoint) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// Scroll Progress Bar
const progressBar = document.getElementById("progressBar");

window.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop;
  let scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let progress = (scrollTop / scrollHeight) * 100;

  progressBar.style.width = progress + "%";
});

// Active Navbar Highlight
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 160;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

// Scroll to Top Button
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 450) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});

topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// Mobile Menu Toggle
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
  if (navMenu.style.display === "flex") {
    navMenu.style.display = "none";
  } else {
    navMenu.style.display = "flex";
  }
});
