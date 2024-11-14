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

const projectContainer = document.querySelectorAll('.projectContainer');

const linksArray = [
    "",
    "https://proky24.github.io/BlockBusters/",
    "https://meme-pexeso.vercel.app",
    "https://proky24.github.io/Challenge1.1/",
    "https://proky24.github.io/Youtube/",
    "https://lewdguri.github.io/kitty-picker/",
    "https://lewdguri.github.io/todo-list/",
]


link = (number) => {
    window.open(linksArray[number]);
}

document.addEventListener("DOMContentLoaded", function() {
    const time = new Date();
    const hours = time.getHours();
    
    if(hours >= 19 && hours <= 8){
        document.body.style.backgroundImage = 'linear-gradient(to right, #2a1a4c, #2d3f71)';
        projectContainer.forEach((projectContainer) => {
            projectContainer.style.backgroundColor = '#2d3f71';
            projectContainer.style.border = '3px solid #5462a0'
        });
    }
});