document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const form = this;
    const formMessage = document.getElementById("formMessage");

    const name = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const message = form.querySelector('textarea').value;

    const templateParams = {
        from_name: name,
        from_email: email,
        message: message
    };

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
        .then(function(response) {
            formMessage.textContent = "Thank you! We'll get in touch soon.";
            formMessage.style.opacity = 0;
            formMessage.style.transition = "opacity 0.5s ease-in-out";
            formMessage.style.opacity = 1;
            setTimeout(() => {
                formMessage.style.opacity = 0;
            }, 3000);
            form.reset();
        }, function(error) {
            formMessage.textContent = "Oops! Something went wrong. Please try again.";
            formMessage.style.opacity = 0;
            formMessage.style.transition = "opacity 0.5s ease-in-out";
            formMessage.style.opacity = 1;
            setTimeout(() => {
                formMessage.style.opacity = 0;
            }, 3000);
        });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if (this.hash !== "") {
            e.preventDefault();
            const target = document.querySelector(this.hash);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});
