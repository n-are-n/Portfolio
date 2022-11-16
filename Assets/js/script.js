const showMenu = () => {
    const toggle = document.getElementById('nav-toggle')
    const nav = document.getElementById('nav-menu')
    if (toggle && nav) {
        toggle.addEventListener('click', () => nav.classList.toggle('show'))
    }
}
showMenu()
const hideMenu = () => {
    const menu = document.getElementById('nav-menu')
    menu.classList.remove('show')
}
const links = document.querySelectorAll('.nav__link')
links.forEach(link => link.addEventListener('click', hideMenu))
const scrollActive = () => {
    const sections = document.querySelectorAll('section[id]')
    const scrollY = window.pageYOffset
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight
        const sectionTop = section.offsetTop - 50
        const sectionId = section.getAttribute('id')
        const link = document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList
        scrollY > sectionTop && scrollY <= sectionTop + sectionHeight ? link.add('active') : link.remove('active')
    })
}
window.addEventListener('scroll', scrollActive)
