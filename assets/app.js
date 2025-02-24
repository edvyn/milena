window.onload = function() {
    setTimeout(function() {
        document.querySelector('.loading-screen').classList.add('hidden');
    }, 2000); // A tela desaparecerá após 2 segundos
}

document.addEventListener("DOMContentLoaded", () => {
    const hiddenElements = document.querySelectorAll('.hidden-content');

    if (hiddenElements.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        hiddenElements.forEach(element => observer.observe(element));
    }
});