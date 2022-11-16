const showMenu = () => {
    const toggle = /** @type {HTMLDivElement} */ document.getElementById('nav-toggle')
    const nav = document.getElementById('nav-menu') as HTMLDivElement
    if(toggle && nav){
        toggle.addEventListener('click', () => nav.classList.toggle('show'))
    }
}
showMenu()
const hideMenu = () => {
    /**
     * @type {HTMLDivElement}
     */
    const menu = document.getElementById('nav-menu')
    menu.classList.remove('show')
}
const links = document.querySelectorAll('.nav__link')
links.forEach(link /** @type { HTMLLinkElement } */ => link.addEventListener('click', hideMenu))
const scrollActive = () => {
    const sections = document.querySelectorAll<HTMLDivElement>('section[id]')
    const scrollY : number = window.pageYOffset
    sections.forEach(section /** @type { HTMLDivElement } */ => {
        const sectionHeight : number = section.offsetHeight
        const sectionTop : number = section.offsetTop - 50
        const sectionId = section.getAttribute('id')
        const link = document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList
        scrollY > sectionTop && scrollY <= sectionTop + sectionHeight ? link.add('active') : link.remove('active')
    })
}
window.addEventListener('scroll', scrollActive)