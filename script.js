var typed = new Typed(".text", { 
    strings: ["Frontend Developer","Tech Enthusiast", "Web Developer","UI / UX Designer","Creative Thinker"], 
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault(); 

        let successMessage = document.getElementById("successMessage");
        successMessage.style.display = "block";

        setTimeout(function () {
            successMessage.style.display = "none"; 
            window.location.href = "index.html"; 
        }, 3000);
        this.reset();
    });
});




