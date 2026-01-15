function filterProjects(category) {
    const projects = document.querySelectorAll('.project-item');
    const buttons = document.querySelectorAll('.btn-filter');

    // Promeni aktivno dugme
    buttons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.innerText.toLowerCase() === category || (category === 'all' && btn.innerText === 'Sve')) {
            btn.classList.add('active');
        }
    });

    // Filtriraj projekte
    projects.forEach(project => {
        if (category === 'all') {
            project.style.display = 'block';
            project.classList.add('show');
        } else {
            if (project.classList.contains(category)) {
                project.style.display = 'block';
                project.classList.add('show');
            } else {
                project.style.display = 'none';
                project.classList.remove('show');
            }
        }
    });
}