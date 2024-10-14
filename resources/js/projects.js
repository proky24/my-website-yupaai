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