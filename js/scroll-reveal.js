const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // scrollObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 }); // Se activa cuando el 15% del elemento es visible

document.querySelectorAll('.scroll-reveal').forEach(el => {
    scrollObserver.observe(el);
});
