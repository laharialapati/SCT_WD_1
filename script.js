// Change navbar background & size on scroll
window.addEventListener("scroll", function() {
    let navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// Function to show only the selected section
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });

    // Show the clicked section
    document.getElementById(sectionId).classList.add('active');
}

// Smooth transition of navbar indicator
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-link");
    const indicator = document.querySelector(".nav-indicator");

    navLinks.forEach((link, index) => {
        link.addEventListener("click", (e) => {
            let navWidth = link.offsetWidth;
            let navOffset = link.offsetLeft;

            indicator.style.width = `${navWidth}px`;
            indicator.style.transform = `translateX(${navOffset}px)`;

            navLinks.forEach(nav => nav.classList.remove("active"));
            e.target.classList.add("active");
        });
    });

    showSection('home');
});
