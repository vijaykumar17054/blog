document.addEventListener('DOMContentLoaded', () => {
    const techniques = document.querySelectorAll('.technique');

    // Toggle visibility of technique descriptions
    techniques.forEach(technique => {
        technique.addEventListener('click', () => {
            technique.classList.toggle('expanded');
            technique.style.backgroundColor = technique.classList.contains('expanded') ? '#dfe6e9' : '#ecf0f1';
        });
    });

    // Smooth scrolling to sections when clicked on navbar
    const links = document.querySelectorAll('.navbar ul li a');
    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
        });
    });
});
