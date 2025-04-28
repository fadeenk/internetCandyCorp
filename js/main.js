// Intern Candy Corporation - Main JavaScript

document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll(
    "nav a, .cta-button, .footer-links a"
  );

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");

      // Only apply smooth scroll to hash links that exist on the page
      if (href.startsWith("#") && document.querySelector(href)) {
        e.preventDefault();
        const targetSection = document.querySelector(href);

        window.scrollTo({
          top: targetSection.offsetTop - 80, // Offset for header
          behavior: "smooth",
        });
      }
    });
  });

  // Simple animation for elements as they come into view
  const animateOnScroll = function () {
    const sections = document.querySelectorAll("section");

    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight * 0.75) {
        section.classList.add("visible");
      }
    });
  };

  // Add CSS for animations
  const style = document.createElement("style");
  style.textContent = `
        section {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        section.visible {
            opacity: 1;
            transform: translateY(0);
        }
    `;
  document.head.appendChild(style);

  // Run animation check on load and scroll
  animateOnScroll();
  window.addEventListener("scroll", animateOnScroll);
});
