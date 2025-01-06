const body = document.getElementById('body');
let time;
let hours;
let observed = false;   
let observedAb = false; 
const socials = document.getElementById('socials');
const projectsBtn = document.getElementById('projectsBtn');
projectsBtn.addEventListener('click', () => {
    window.location.href = '/projects.html';
});

const aboutBtn = document.getElementById('aboutMeBtn');

let observer1 = new IntersectionObserver((entries, observer1) => {
    entries.forEach(entry => {
        if(observed){return;}
        else{
            if(entry.isIntersecting){
                requestAnimationFrame(() => {
                    entry.target.style.opacity = '1';
                    entry.target.classList.add('addSlideDown');
                        setTimeout(() => {
                            entry.target.classList.remove('addSlideDown');
                            observed = true;
                        }, 1202);   
                })
            }
        }
    });
});

observer1.observe(aboutBtn);

let observer2 = new IntersectionObserver((entries, observer2) => {
    entries.forEach(entry => {
        if(observed){return;}
        else{
            if(entry.isIntersecting){
                requestAnimationFrame(() => {
                    entry.target.style.opacity = '1';
                    entry.target.classList.add('addSlideTop');
                    setTimeout(() => {
                        entry.target.classList.remove('addSlideTop');
                    }, 1202);
                })
            }
        }
    });
});

observer2.observe(projectsBtn);


let observer3 = new IntersectionObserver((entries, observer3) => {
    entries.forEach(entry => {
        if(observed){return;}
        else{
            if(entry.isIntersecting){
                requestAnimationFrame(() => {
                    entry.target.style.opacity = '1';
                    entry.target.classList.add('addSlideTop');
                    setTimeout(() => {
                        entry.target.classList.remove('addSlideTop');
                    }, 1202);       
                })
            }
        }
    });
});

observer3.observe(socials);


const aboutMe = document.querySelector('.about-me');
    // Define the Intersection Observer
    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(observedAb){return;}
            else{
                if(entry.isIntersecting) {
                    requestAnimationFrame(() => {
                        entry.target.style.opacity = '1';
                        entry.target.classList.add('addFadeIn');
                        setTimeout(() => {
                            entry.target.classList.remove('addFadeIn');
                            observedAb = true;
                        }, 2002);       
                    })
                }
            }
            // If the element is in the viewport, add the animation class
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
    aboutMe.scrollIntoView({behavior: "smooth"});
}

document.addEventListener("DOMContentLoaded", function() {
     time = new Date();
     hours = time.getHours();
    
    if(hours >= 19 || hours <= 8){
        body.style.backgroundImage = "linear-gradient(to right, #2a1a4c, #2d3f71)";
        aboutBtn.style.backgroundColor = '#2d3f71';
        projectsBtn.style.backgroundColor = '#344696';
        socials.style.backgroundColor = '#384685';
    }

});