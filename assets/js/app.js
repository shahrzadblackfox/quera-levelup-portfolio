const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

const navLink = document.querySelectorAll(".nav-link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

function scrollTop() {
  const scrollTop = document.getElementById("scrollup");
  if (this.scrollY >= 560) scrollTop.classList.add("show-scroll");
  else scrollTop.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollTop);



const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'


const selectedTheme = localStorage.getItem('slected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrrentTheme = () =>document.body.classList.contains(darkTheme)? 'dark' :'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : "uil-sun"

if(selectedTheme){
    document.body.classList[selectedTheme ==='dark' ? 'add': 'remove'] (darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add': 'remove'](iconTheme)

}
themeButton.addEventListener('click',() =>{
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())

})