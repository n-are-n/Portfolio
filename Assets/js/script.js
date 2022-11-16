const showMenu = (nav) => {
    const toggle = document.querySelector('nav span')
    console.log(toggle)
    if (toggle && nav)
        toggle.addEventListener('click', () => nav.classList.toggle('show'))
}
const nav = document.querySelector('ul')
console.log(nav)
showMenu(nav)
const hideMenu = (menu) => menu.classList.remove('show')
const links = document.querySelectorAll('ul > li > a')
console.log(links)
links.forEach(link => link.addEventListener('click', hideMenu(nav)))
const scrollActive = () => {
    const sections = document.getElementsByTagName('section')
    console.log(sections)
    const scrollY = window.pageYOffset
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight
        const sectionTop = section.offsetTop - 50
        const link = document.querySelector('ul > li > a[href*=' + section.id + ']').classList
        console.log(link)
        scrollY > sectionTop && scrollY <= sectionTop + sectionHeight ? link.add('active') : link.remove('active')
    })
}
window.addEventListener('scroll', scrollActive)