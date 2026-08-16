// Navigation menu
const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

if (menuOpenButton) {
    menuOpenButton.addEventListener("click", () => {
        document.body.classList.toggle("show-mobile-menu");
    });
}

if (navLinks.length > 0 && menuOpenButton) {
    navLinks.forEach(link => {
        link.addEventListener("click", () => menuOpenButton.click());
    });
}

if (menuCloseButton && menuOpenButton) {
    menuCloseButton.addEventListener("click", () => menuOpenButton.click());
}

// Swiper (only initialize if .slider-wrapper exists)
if (document.querySelector('.slider-wrapper')) {
    const swiper = new Swiper('.slider-wrapper', {
        loop: true,
        grabCursor: true,
        spaceBetween: 25,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
        }
    });
}

// Contact form clear button (safely checked)
const clearbtn = document.getElementById("clear-button");
if (clearbtn) {
    clearbtn.addEventListener("click", () => {
        const contactForm = document.querySelector(".contact-form");
        if (contactForm) contactForm.reset();
    });
}

// Typed.js (only initialize if element exists)
if (document.querySelector('.multiple-text')) {
    const typed = new Typed('.multiple-text', {
        strings: ['an Amateur Web Developer.', 'a Graphic Designer.'],
        typeSpeed: 80,
        backSpeed: 80,
        backDelay: 1200,
        loop: true,
    });
}

// Modal Logic
document.addEventListener("DOMContentLoaded", function () {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    var span = document.getElementsByClassName("close")[0];

    var images = document.querySelectorAll(".myImg");

    // Open modal on image click
    images.forEach(img => {
        img.addEventListener("click", function () {
            if (modal && modalImg && captionText) {
                modal.style.display = "block";
                modalImg.src = this.src;
                captionText.innerHTML = this.alt;
            }
        });
    });

    // Close button
    if (span) {
        span.onclick = function () {
            modal.style.display = "none";
            resizeAll();
        };
    }

    // Close on backdrop click
    if (modal) {
        modal.onclick = function (e) {
            if (e.target === modal) {
                modal.style.display = "none";
                resizeAll();
            }
        };
    }
});

// Grid resizing functions
function resizeGridItem(item) {
    const grid = document.querySelector(".gallery");
    if (!grid) return;

    const rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows')) || 0;
    const rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap')) || 0;

    const imgElement = item.tagName === "IMG" ? item : item.querySelector("img");
    if (!imgElement) return;

    const rowSpan = Math.ceil((imgElement.getBoundingClientRect().height + rowGap) / (rowHeight + rowGap));
    item.style.gridRowEnd = "span " + rowSpan;
}

function resizeAll() {
    const gallery = document.querySelector(".gallery");
    if (!gallery) return;

    const allItems = gallery.querySelectorAll(".myImg");
    allItems.forEach(item => resizeGridItem(item));
}

window.addEventListener("load", resizeAll);
window.addEventListener("resize", resizeAll);
