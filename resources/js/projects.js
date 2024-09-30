document.addEventListener('DOMContentLoaded', function() {
    const projectContainer = document.querySelectorAll('.projectContainer');

    function addClass(){
        projectContainer.forEach((projectContainer, index) => {
            const delay = index * 500;
            
            setTimeout(() => {
                projectContainer.classList.add('addFadeIn');
            }, delay);

            setTimeout(() => {
                projectContainer.classList.remove('addFadeIn');
                projectContainer.style.opacity = '1';
            }, delay + 3000);
        });
    }

    addClass();
});

const backBtn = document.getElementById('backBtn');

backBtn.addEventListener('click', () => {
    window.location.href = '../index.html';
});