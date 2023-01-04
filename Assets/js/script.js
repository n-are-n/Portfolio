const showMenu = () =>
{
    const toggle = document.getElementById('nav-toggle'),
    nav = document.getElementById('nav-menu')
    toggle.addEventListener('click', () => nav.classList.toggle('show'))
}
showMenu()
const linkAction = () =>
{
    const nav = document.getElementById('nav-menu'),
    navLinks = document.querySelectorAll('.nav__link')
    navLinks.forEach(link => link.addEventListener('click', () => nav.classList.remove('show')))
}
linkAction()
const scrollActive = () =>
{
    const sections = document.querySelectorAll('section[id]')
    sections.forEach(section =>
    {
        const link = document.querySelector(`.nav__menu a[href*='${section.getAttribute('id')}']`),
        scrollY = window.pageYOffset,
        sectionHeight = section.offsetHeight,
        sectionTop = section.offsetTop - 50
        scrollY > sectionTop && scrollY <= sectionTop + sectionHeight ? link.classList.add('active') : link.classList.remove('active')
    })
}
window.addEventListener('scroll', scrollActive)
