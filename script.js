// JavaScript to handle smooth scrolling with transitions
document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Get the target section
        const targetId = this.getAttribute('href').substring(1); // Remove '#' from href
        const targetElement = document.getElementById(targetId);

        // Hide all sections
        document.querySelectorAll('.section').forEach(section => {
            section.classList.remove('active');
        });

        // Show the target section with transition
        targetElement.classList.add('active');

        // Scroll to the target section smoothly with correct offset
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start' // Ensure it scrolls to the start of the section and not hidden under navbar
        });
    });
});

// Optional: Automatically show the first section by default
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('about').classList.add('active');
});
