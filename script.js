// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href'))
                .scrollIntoView({
                    behavior: 'smooth'
                });
        }
    });
});

// Typing animation
const text = "ECE Student | Full Stack Developer";
let i = 0;
const title = document.querySelector(".role");

title.innerHTML = "";

function typing() {
    if (i < text.length) {
        title.innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 80);
    }
}

window.onload = typing;

// Scroll animation
const reveals = document.querySelectorAll(".hero-text, .hero-image");

function reveal() {
    reveals.forEach(item => {
        const top = item.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (top < windowHeight - 100) {
            item.style.opacity = "1";
            item.style.transform = "translateY(0)";
        }
    });
}

reveals.forEach(item => {
    item.style.opacity = "0";
    item.style.transform = "translateY(50px)";
    item.style.transition = "1s";
});

window.addEventListener("scroll", reveal);
reveal();
const form = document.getElementById("contact-form");

form.addEventListener("submit", function(e) {

    e.preventDefault();

    emailjs.sendForm(
        "service_807",
        "template_216xi8b",
        this
    )

    .then(() => {

        alert("✅ Message sent successfully!");

        form.reset();

    })

    .catch((error) => {

        alert("❌ Failed to send message.");

        console.log(error);

    });

});