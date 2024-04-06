document.addEventListener('DOMContentLoaded', function() {
    const rotatorContainers = document.querySelectorAll('.rotator');

    rotatorContainers.forEach(function(rotatorContainer) {
        const rotatorCases = rotatorContainer.querySelectorAll('.rotator__case');
        let activeIndex = 0;

        function rotateCases() {
            
            rotatorCases.forEach(function(rotatorCase) {
                rotatorCase.classList.remove('rotator__case_active');
            });

            
            rotatorCases[activeIndex].classList.add('rotator__case_active');
            activeIndex = (activeIndex + 1) % rotatorCases.length; 
        }

        
        setInterval(rotateCases, 1000);
    });
});