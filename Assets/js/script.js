const showMenu = () => { const toggle = document.getElementById('nav-toggle'), nav = document.getElementById('nav-menu')
    toggle.addEventListener('click', () => nav.classList.toggle('show'))}
showMenu()
const linkAction = () => { const nav = document.getElementById('nav-menu'), navLinks = document.querySelectorAll('.nav__link')
    navLinks.forEach(link => link.addEventListener('click', () => nav.classList.remove('show')))}
linkAction()
        // link.innerText === 'Skills' ? js.style.animation = 'js_bar_width 4s normal 2s infinte alternate' : link.style.animation = 'none'
        // const js = document.getElementById('js-bar')
const scrollActive = () => { const sections = document.querySelectorAll('section[id]')
    sections.forEach( section => { const link = document.querySelector(`.nav__menu a[href*='${section.getAttribute('id')}']`), scrollY = window.scrollY, sectionHeight = section.offsetHeight, sectionTop = section.offsetTop - 50
        scrollY > sectionTop && scrollY <= sectionTop + sectionHeight ? link.classList.add('active') : link.classList.remove('active')})}
window.addEventListener('scroll', scrollActive)
const Validate = async () => { const client = { Name : document.getElementById('Name').value, Mail : document.getElementById('Mail').value, Comment : document.getElementById('Comment').value, Date : new Date()}
    let URL = 'https://api.telegram.org/bot5442760054:AAGNKmQ3Rc2VC4o7QiUCo-o4J-UsVbL8p74/sendMessage?chat_id=833384210&text='
    for (const key in client) URL = URL + ` ${key} : ${client[key]} `
    await fetch(URL)
    document.getElementById('Form').reset() 
    }