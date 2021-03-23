let rainbow = 0;

window.addEventListener('mousemove', (e) => {
    const particle = document.createElement('span');
    document.body.appendChild(particle);
    rainbow += 2;

    const size = Math.random() * 120 + 30;
    gsap.set(particle, {
        x: e.clientX - size / 2,
        y: e.clientY - size / 2,
        width: size,
        height: size, 
        filter: `blur(${(1 - ((size - 30) / 120)) * 10}px)`,
        backgroundColor: `hsl(${rainbow}, 70%, 50%)`
    });

    gsap.to(particle, {
        x: '+=random(-200, 200)',
        y: '+=random(-200, 200)',
        opacity: 0,
        duration: 'random(4, 7)',
        ease: 'power2.out',
        onComplete: () => {
            particle.remove();
        }
    });
});