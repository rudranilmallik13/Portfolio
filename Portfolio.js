document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.querySelectorAll('.skill').forEach(skill => {
    skill.addEventListener('mouseover', () => {
        skill.style.transform = 'scale(1.1)';
        skill.style.boxShadow = '0px 8px 16px rgba(0, 0, 0, 0.2)';
    });
    skill.addEventListener('mouseout', () => {
        skill.style.transform = 'scale(1)';
        skill.style.boxShadow = '0px 4px 8px rgba(0, 0, 0, 0.1)';
    });
});

const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent actual form submission
    alert('Thank you for reaching out! I will get back to you soon.');
    contactForm.reset(); // Clear the form fields
});
