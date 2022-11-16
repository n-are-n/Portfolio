const showMenu = (nav : HTMLElement) => {
     /** 
      * @type {HTMLElement}
      */ 
    const toggle = document.getElementById('nav span')
    if(toggle && nav)
        toggle.addEventListener('click', () => nav.classList.toggle('show'))
}
const nav = document.querySelector('ul') as HTMLUListElement
showMenu(nav)
const hideMenu = (menu : HTMLElement) => menu.classList.remove('show')
const links = document.querySelectorAll('ul > li > a')
links.forEach(link /** @type { HTMLLinkElement } */ => link.addEventListener('click', hideMenu(nav)))
const scrollActive = () => {
    const sections = document.getElementsByTagName('section')
    const scrollY : number = window.pageYOffset
    sections.forEach(section /** @type { HTMLElement } */ => {
        const sectionHeight : number = section.offsetHeight
        const sectionTop : number = section.offsetTop - 50
        const link = document.querySelector('ul > li > a[href*=' + section.id + ']').classList
        scrollY > sectionTop && scrollY <= sectionTop + sectionHeight ? link.add('active') : link.remove('active')
    })
}
window.addEventListener('scroll', scrollActive)