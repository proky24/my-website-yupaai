const body = document.getElementById('body');
const socials = document.getElementById('socials');
const projectsBtn = document.getElementById('projectsBtn');
const aboutBtn = document.getElementById('aboutMeBtn');
const aboutMe = document.querySelector('.about-me');


let aboutMeBtnObserver = new IntersectionObserver((entries, observer1) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            requestAnimationFrame(() => {
                entry.target.style.opacity = '1';
                entry.target.classList.add('addSlideDown');
                setTimeout(() => {
                    entry.target.classList.remove('addSlideDown');
                }, 1500);
            })
        }else{
            entry.target.style.opacity = '0';
        }
    });
});
aboutMeBtnObserver.observe(aboutBtn);

let projectsObserver = new IntersectionObserver((entries, observer2) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            requestAnimationFrame(() => {
                entry.target.style.opacity = '1';
                entry.target.classList.add('addSlideTop');
                setTimeout(() => {
                    entry.target.classList.remove('addSlideTop');
                }, 1500);
            })
        }else{
            entry.target.style.opacity = '0';
        }
    });
});
projectsObserver.observe(projectsBtn);

let socialsObserver = new IntersectionObserver((entries, observer3) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            requestAnimationFrame(() => {
                entry.target.style.opacity = '1';
                entry.target.classList.add('addSlideTop');
                setTimeout(() => {
                    entry.target.classList.remove('addSlideTop');
                }, 1500);
            })
        }else{
            entry.target.style.opacity = '0';
        }
    });
});
socialsObserver.observe(socials);

let aboutMeObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            requestAnimationFrame(() => {
                entry.target.style.opacity = '1';
                entry.target.classList.add('addSlideIn');
                setTimeout(() => {
                    entry.target.classList.remove('addSlideIn');
                }, 1500);
            })
        }else{
            entry.target.style.opacity = '0';
        }
    });
}, {threshold: 0.6});
aboutMeObserver.observe(aboutMe);

document.addEventListener("DOMContentLoaded", function() {

   const div = document.querySelector('.container-main');
   const pic = document.querySelector('.pic');

    div.classList.add('addOpacity');
    pic.classList.add('addShadowColor');
    
});
    

function scrollDown(){
    aboutMe.style.opacity = '1';
    aboutMe.classList.add('addSlideIn');
    aboutMe.scrollIntoView({behavior: "smooth"});
}

function redirectToProjects(){
    window.location.assign("/projects.html");
}

//this creates a dark version of thes site
document.addEventListener("DOMContentLoaded", function() {
    const time = new Date();
    const hours = time.getHours();
    
    if(hours >= 19 || hours <= 8){
        body.style.backgroundImage = "linear-gradient(to right, #2a1a4c, #2d3f71)";
        aboutBtn.style.backgroundColor = '#2d3f71';
        projectsBtn.style.backgroundColor = '#344696';
        socials.style.backgroundColor = '#384685';
    }
});