// =========================
// FADE UP ANIMATION
// =========================

const fadeElements = document.querySelectorAll(".fade-up");

const appearOnScroll = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }

        });
    },
    {
        threshold: 0.15
    }
);

fadeElements.forEach((element) => {
    appearOnScroll.observe(element);
});


// =========================
// NAVBAR SCROLL EFFECT
// =========================

const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.padding = "18px 8%";
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,0.05)";
        navbar.style.background = "rgba(246,246,244,0.92)";

    } else {

        navbar.style.padding = "22px 8%";
        navbar.style.boxShadow = "none";
        navbar.style.background = "rgba(246,246,244,0.82)";

    }

});


// =========================
// SERVICE CARD INTERACTION
// =========================

const serviceCards = document.querySelectorAll(".service-card");

serviceCards.forEach((card) => {

    card.addEventListener("click", () => {

        card.classList.toggle("active-card");

    });

});


// =========================
// HERO IMAGE EFFECT
// =========================

const heroImage = document.querySelector(".hero-image");

if(heroImage){

    heroImage.addEventListener("mousemove", (e) => {

        const rect = heroImage.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        heroImage.style.transform = `
            perspective(1000px)
            rotateY(${(x - rect.width / 2) / 40}deg)
            rotateX(${-(y - rect.height / 2) / 40}deg)
            translateY(-5px)
        `;

    });

    heroImage.addEventListener("mouseleave", () => {

        heroImage.style.transform = `
            perspective(1000px)
            rotateY(0deg)
            rotateX(0deg)
            translateY(0px)
        `;

    });

}


// =========================
// SMOOTH BUTTON PRESS EFFECT
// =========================

const buttons = document.querySelectorAll(
    ".primary-btn, .secondary-btn, .quote-btn"
);

buttons.forEach((button) => {

    button.addEventListener("mousedown", () => {

        button.style.transform = "scale(0.97)";

    });

    button.addEventListener("mouseup", () => {

        button.style.transform = "scale(1)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "scale(1)";

    });

});
