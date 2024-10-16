document.getElementById('hamburger-button').addEventListener('click', function () {
    const navbar = document.querySelector('nav');
    const hamburger = document.querySelector('.hamburger');

    navbar.classList.toggle('open');
    hamburger.classList.toggle('open');
});

// Close the sidebar when a link is clicked
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', function () {
        const navbar = document.querySelector('nav');
        const hamburger = document.querySelector('.hamburger');

        navbar.classList.remove('open');
        hamburger.classList.remove('open');
    });
});

let slideIndex = 0;
const slides = document.querySelectorAll(".gallery-slide");

function showSlides() {
    slides.forEach((slide, index) => {
        slide.style.display = "none";
    });

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "flex";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

window.onload = showSlides;
