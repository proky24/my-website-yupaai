let rnd = Math.random();

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
    }, {threshold: 0.4}); // Adjust the threshold according to your needs

    // Start observing the aboutMe element
    observer.observe(aboutMe);

function scrollDown(){
    aboutMe.style.opacity = '1';
    aboutMe.classList.add('addSlideIn');
    aboutMe.scrollIntoView({behavior: "smooth"});
    setTimeout(() => {
        /*aboutMe.classList.remove('addSlideIn');
        /*aboutMe.style.marginTop = '12px';*/
    }, 1500);
}