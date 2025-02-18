document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1); 
        const targetElement = document.getElementById(targetId);


        document.querySelectorAll('.section').forEach(section => {
            section.classList.remove('active');
        });

        targetElement.classList.add('active');
        
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('about').classList.add('active');
});
