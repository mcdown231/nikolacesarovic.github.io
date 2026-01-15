document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const menu = document.getElementById('navbarNav');
    const toggler = document.querySelector('.navbar-toggler');

    // Funkcija za odblokiranje skrola
    function enableScroll() {
        document.body.style.overflow = 'auto';
        document.body.style.height = 'auto';
    }

    navLinks.forEach((link) => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 992) {
                // Koristimo Bootstrap metodu za zatvaranje
                const bsCollapse = bootstrap.Collapse.getInstance(menu);
                if (bsCollapse) {
                    bsCollapse.hide();
                }
                enableScroll(); // Odmah odblokiraj skrol
            }
        });
    });

    // Ako klikne na hamburger ponovo da zatvori, takođe odblokiraj
    toggler.addEventListener('click', () => {
        if (menu.classList.contains('show')) {
            enableScroll();
        } else {
            // Blokiraj skrol samo dok gledaš meni
            document.body.style.overflow = 'hidden';
        }
    });
});