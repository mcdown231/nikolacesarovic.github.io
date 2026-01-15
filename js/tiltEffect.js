document.querySelectorAll('.skill-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        let x = e.offsetX;
        let y = e.offsetY;
        let cardWidth = card.clientWidth;
        let cardHeight = card.clientHeight;
        let transX = (x - cardWidth / 2) / 10;
        let transY = (y - cardHeight / 2) / 10;
        
        card.style.transform = `translateY(-15px) rotateX(${-transY}deg) rotateY(${transX}deg)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = `translateY(0px) rotateX(0deg) rotateY(0deg)`;
    });
});