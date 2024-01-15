document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.getElementById('toggleDark');
    const body = document.querySelector('body');

    // Récupérer le thème actuel depuis le stockage local
    const isDarkMode = localStorage.getItem('isDarkMode') === 'true';

    // Appliquer le thème actuel au chargement de la page
    if (isDarkMode) {
        toggle.classList.add('bi-moon');
        body.style.background = 'black';
        body.style.color = 'white';
    }

    toggle.addEventListener('click', function () {
        toggle.classList.toggle('bi-moon');

        // Basculer entre le mode sombre et le mode clair
        if (toggle.classList.contains('bi-moon')) {
            body.style.background = 'black';
            body.style.color = 'white';
            localStorage.setItem('isDarkMode', 'true');
        } else {
            body.style.background = 'white';
            body.style.color = 'black';
            localStorage.setItem('isDarkMode', 'false');
        }
    });
});
