document.addEventListener("DOMContentLoaded", function () {
    console.log("Strona załadowana!");

    // 1️⃣ Efekt "scroll reveal" - sekcje pojawiają się po przewinięciu
    const sections = document.querySelectorAll("section");

    function revealSections() {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.9) {
                section.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", revealSections);
    revealSections();

    // 2️⃣ Hamburger menu (dla mobile)
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector("nav ul");

    if (menuToggle) {
        menuToggle.addEventListener("click", function () {
            navMenu.classList.toggle("active");
        });
    }


});
