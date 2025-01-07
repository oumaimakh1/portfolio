/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => { //arrow function
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')



let btn = document.getElementById("bw")
function backChange() {
    home = document.getElementById("home")
    about = document.getElementById("about")
    let currentColor = window.getComputedStyle(home).backgroundColor;
    if (currentColor === 'rgb(153, 166, 135)') {
        home.style.backgroundColor = "#2a2927"
        about.style.backgroundColor="#3a3936"
        skills.style.backgroundColor="#3a3936"
        contact.style.backgroundColor="#3a3936"
        he.style.color="#99a687"
        llo.style.color="#99a687"
        scroll_down.style.color="#99a687"


    }else{
        home.style.backgroundColor = 'rgb(153, 166, 135)'
        about.style.backgroundColor="white"
        skills.style.backgroundColor="white"
        contact.style.backgroundColor="white"
        he.style.color="#3a3936"
        llo.style.color="#3a3936"
        scroll_down.style.color="#3a3936"


    }
    console.log(home.style.backgroundColor)
}








/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000, 
    reset: true
})

//SCROLL HOME
sr.reveal('.home__title', {})
sr.reveal('.home__scroll', { delay: 200 })
sr.reveal('.home__img', { origin: 'right', delay: 400 })

console.log(sr.reveal)

//SCROLL ABOUT 
sr.reveal('.about__img', { delay: 500 })
sr.reveal('.about__subtitle', { delay: 300 })
sr.reveal('.about__profession', { delay: 400 })
sr.reveal('.about__text', { delay: 500 })
sr.reveal('.about__social-icon', { delay: 600, interval: 200 })

//SCROLL SKILLS
sr.reveal('.skills__subtitle', {})
sr.reveal('.skills__name', { distance: '20px', delay: 50, interval: 100 })
sr.reveal('.skills__img', { delay: 400 })

//SCROLL PORTFOLIO
sr.reveal('.portfolio__img', { interval: 200 })

//SCROLL CONTACT
sr.reveal('.contact__subtitle', {})
sr.reveal('.contact__text', { interval: 200 })
sr.reveal('.contact__input', { delay: 400 })
sr.reveal('.contact__button', { delay: 600 })




