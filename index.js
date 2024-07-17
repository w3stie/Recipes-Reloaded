/* Menu reveal */

const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-button'),
      navClose = document.getElementById('nav-close')

//Show Menu
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

//Menu hidden
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

//Mobile Menu Remove
const navLink = document.querySelectorAll('.nav-link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

//Changing background header
const shadowHeader = () => {
    const header = document.getElementById('header')

        this.scrollY >= 50 ? header.classList.add('shadow-header')
                           : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)