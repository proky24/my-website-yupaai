const body = document.getElementById('body');
const socials = document.getElementById('socials');
const projectsBtn = document.getElementById('projectsBtn');
projectsBtn.addEventListener('click', () => {
    window.location.href = '/projects.html';
});

const aboutBtn = document.getElementById('aboutMeBtn');

let observer1 = new IntersectionObserver((entries, observer1) => {
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

observer1.observe(aboutBtn);

let observer2 = new IntersectionObserver((entries, observer2) => {
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

observer2.observe(projectsBtn);


let observer3 = new IntersectionObserver((entries, observer3) => {
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

observer3.observe(socials);


const aboutMe = document.querySelector('.about-me');
    // Define the Intersection Observer
    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // If the element is in the viewport, add the animation class
            if(entry.isIntersecting) {
                requestAnimationFrame(() => {
                    entry.target.style.opacity = '1';
                    entry.target.classList.add('addSlideIn');
                    setTimeout(() => {
                        entry.target.classList.remove('addSlideIn');
                        /*entry.target.style.marginBottom = '12px';
                        entry.target.style.marginTop = '400px';*/
                    }, 1500);
                })
            }else{
                entry.target.style.opacity = '0';
            }
        });
    }, {threshold: 0.6}); // Adjust the threshold according to your needs

    // Start observing the aboutMe element
    observer.observe(aboutMe);

document.addEventListener("DOMContentLoaded", function() {
    /*const hey = document.querySelector('.hey');
    const name = document.querySelector('.name');
    const about = document.querySelector('.about');
    const studying = document.querySelector('.studying');
    */
   const div = document.querySelector('.container-main');
   const pic = document.querySelector('.pic');
   
   function addOpacity(){
       /*hey.classList.add('addOpacity');
        name.classList.add('addOpacityName');
        pic.classList.add('addOpacityPic');
        about.classList.add('addOpacityAbout');
        studying.classList.add('addOpacityStudying');
        */
       div.classList.add('addOpacity');
       pic.classList.add('addShadowColor');
    }
    
    addOpacity();
});

    

function scrollDown(){
    aboutMe.style.opacity = '1';
    aboutMe.classList.add('addSlideIn');
    aboutMe.scrollIntoView({behavior: "smooth"});
    setTimeout(() => {
        /*aboutMe.classList.remove('addSlideIn');
        /*aboutMe.style.marginTop = '12px';*/
    }, 1500);
}

document.addEventListener("DOMContentLoaded", function() {
    const time = new Date();
    const hours = time.getHours();
    
    if(hours >= 19){
        body.style.backgroundImage = "linear-gradient(to right, #2a1a4c, #2d3f71)";
        aboutBtn.style.backgroundColor = '#2d3f71';
        projectsBtn.style.backgroundColor = '#344696';
        socials.style.backgroundColor = '#384685';
    }
});