// show menu

const navMenu = document.getElementById('nav--menu'),
navToggle = document.getElementById('nav--togggle'),
navClose = document.getElementById('nav--close')
/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle) {
navToggle.addEventListener('click', () => {
navMenu.classList.add('show--menu')
})
}
/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose) {
navClose.addEventListener('click', () => {
navMenu.classList.remove('show--menu')
})
}

// remove menu mobile
const navLink = document.querySelectorAll('.nav__link')
 const linkAction = () =>{
const navMenu = document.getElementById('nav--menu')

// When we click on each nav__link, we remove the show-menu

navMenu.classList.remove('show--menu')
 }
navLink.forEach(n => n.addEventListener('click',linkAction))

// Add blur to header
const blurHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >=50 ? header.classList.add('blur--header')
                       :classList.remove('blur--header')
}
window.addEventListener('scroll', blurHeader)

// Email Js
const contactForm = document.getElementById('contact--form')
contactMessage = document.getElementById('contact--message')

const sendEmail = (e) =>{
    e.preventDefault()
    emailjs.sendForm('service_ren0kry','template_6c4d1mp','#contact--form' ,'siSjfi9x0naGtF2j8')
     .then(() => {
        contactMessage.textContent = "Message sent successfully✅"

        setTimeout(() => {
            contactMessage.textContent = ''
        }, 5000)
        contactForm.reset()

     }, () => {
        contactMessage.textContent = 'Message not sent'
     }
    )
}
contactForm.addEventListener('submit',sendEmail)

// show scrollup
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350? scrollUp.classList.add('show-scroll')
                         :scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollUp)

// scroll sections active link
const sections = document.querySelectorAll('section[id]')
const scrollActive = () => {
const scrolly = window.pageYOffset

sections.forEach(current =>{
const sectionHeight = current.offsetHeight,
sectionTop = current.offsetTop - 58,
sectionId = current.getAttribute('id'),
sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
if(scrolly > sectionTop && scrolly <= sectionTop + sectionHeight){
sectionsClass.classList.add('active-link')
}else{
sectionsClass.classList.remove('active-link')
}
})
}
window.addEventListener('scroll', scrollActive)