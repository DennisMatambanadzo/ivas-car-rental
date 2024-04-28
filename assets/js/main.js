/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/* Menu show */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/* Menu hidden */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll(".nav-link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));
/*=============== SWIPER WACTHES ===============*/
const swiperWatches = new Swiper(".vehicle-swiper", {
    loop: true,
    spaceBetween:32,
    grabCursor:true,
    autoplay:{
        delay:5000
    },
    effect:'creative',
    creativeEffect:{
        prev:{
            translate:[-100,0,-500],
            rotate:[0,0,0],
            opacity:0
        },
        next:{
            translate:[100,0,-500],
            rotate:[0,0,0],
            opacity:0
        }
    },
  
    pagination: {
      el: '.swiper-pagination',
      clickable:true
    },
});

/*=============== GSAP ANIMATION ===============*/
gsap.from('.vehicle-images',1.5,{opacity:0, y:150,delay: .1})
