document.addEventListener('DOMContentLoaded', function() {
    const revealElements = document.querySelectorAll('.reveal');

    function revealOnScroll() {
        revealElements.forEach(function(element) {
            
            const elementTop = element.getBoundingClientRect().top;

            
            if (elementTop < window.innerHeight) {
                element.classList.add('reveal_active'); 
            } else {
                element.classList.remove('reveal_active'); 
            }
        });
    }

    
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); 
});