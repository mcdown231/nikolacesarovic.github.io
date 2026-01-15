window.addEventListener('scroll', function() {
    const nav = document.querySelector('.modern-nav');
    
    // Promena izgleda pri skrolu
    if (window.scrollY > 20) {
        nav.classList.add('navbar-scrolled');
    } else {
        nav.classList.remove('navbar-scrolled');
    }

    // ScrollSpy logika - menja aktivni link dok skroluješ
    const sections = document.querySelectorAll('section'); // pretpostavka da imaš <section id="...">
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});