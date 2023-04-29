const showMenu = () : void => { const toggle : HTMLElement = document.getElementById('nav-toggle'), nav : HTMLElement = document.getElementById('nav-menu')
    toggle.addEventListener('click', () : boolean => nav.classList.toggle('show'))}
showMenu()
const linkAction = () : void => { const nav : HTMLElement = document.getElementById('nav-menu'), navLinks : NodeListOf<HTMLElement> = document.querySelectorAll('.nav__link')
    navLinks.forEach(link => link.addEventListener('click', () : void => nav.classList.remove('show')))}
linkAction()
const scrollActive = () : void => { const sections : NodeListOf<HTMLElement> = document.querySelectorAll('section[id]')
    sections.forEach(section  => { const link : HTMLElement = document.querySelector(`.nav__menu a[href*='${section.getAttribute('id')}']`), scrollY :number  = window.pageYOffset, sectionHeight : number = section.offsetHeight, sectionTop : number = section.offsetTop - 50
        scrollY > sectionTop && scrollY <= sectionTop + sectionHeight ? <void>link.classList.add('active') : <void>link.classList.remove('active')})}
window.addEventListener('scroll', scrollActive)
const Validate = () : void => { const client : Object = { Name : <HTMLInputElement>document.getElementById('Name'), Mail : <HTMLInputElement>document.getElementById('Mail'), Comment : <HTMLInputElement>document.getElementById('Comment'), Date : <Date>new Date()}
    let URL : string = 'https://api.telegram.org/bot5442760054:AAGNKmQ3Rc2VC4o7QiUCo-o4J-UsVbL8p74/sendMessage?chat_id=833384210&text='
    for (const key in client) URL = URL + ` ${key} : ${ key === 'Date' ? client[key] : client[key].value} `
    fetch(URL)
    let form : HTMLFormElement = <HTMLFormElement>document.getElementById('Form')
    form.reset()}