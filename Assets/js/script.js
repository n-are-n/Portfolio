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
function Validate()
{
    const client = {
        Name : document.getElementById('Name').value,
        Mail : document.getElementById('Mail').value,
        Comment : document.getElementById('Comment').value,
        Date : new Date()
    }
    for (const key in client) {
        const URL = `https://api.telegram.org/bot5442760054:AAGNKmQ3Rc2VC4o7QiUCo-o4J-UsVbL8p74/sendMessage?chat_id=833384210&text=${key} : ${client[key]}`
        fetch(URL)
    }
    document.getElementById('Form').reset()
}