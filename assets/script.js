// assets/script.js
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.carousel-slide img');
    const indicators = document.querySelectorAll('.indicator');
    let currentIndex = 0;

    function showSlide(index) {
        const newTranslateX = -index * 100 / slides.length;
        document.querySelector('.carousel-slide').style.transform = `translateX(${newTranslateX}%)`;
        indicators.forEach(indicator => indicator.classList.remove('active'));
        indicators[index].classList.add('active');
        currentIndex = index;
    }

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => showSlide(index));
    });

    // Auto-slide functionality (optional)
    setInterval(() => {
        const nextIndex = (currentIndex + 1) % slides.length;
        showSlide(nextIndex);
    }, 3000); // Change slide every 3 seconds

    // Initialize first slide as active
    showSlide(0);
});

function redirectToWhatsApp() {
    window.location.href = 'https://wa.me/5521996835824'; // Insira o número de WhatsApp correto aqui
}
