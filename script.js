// Placeholder for potential JavaScript functionality
console.log("Welcome to Choleric Clothing!");

document.addEventListener("DOMContentLoaded", function() {
    const fadeInElements = document.querySelectorAll('.fade-in');

    const isElementInViewport = (el) => {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    const checkFadeIn = () => {
        fadeInElements.forEach(el => {
            if (isElementInViewport(el)) {
                el.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', checkFadeIn);
    checkFadeIn(); // Trigger the function on page load
});

console.log("Welcome to Choleric Clothing!");