// Calculate dynamic years
const startYear = 2018;
const currentYear = new Date().getFullYear();
const yearsActive = currentYear - startYear;
document.getElementById("yearsCount").innerText = yearsActive;


document.querySelectorAll('.navbar-nav a').forEach(link => {
    link.addEventListener('click', () => {
        const navbarToggler = document.querySelector('.navbar-toggler');
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse.classList.contains('show')) {
            navbarToggler.click();  // Toggle to close the navbar after selection
        }
    });
});