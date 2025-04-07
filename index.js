var home = document.getElementById('home');
var name_ = document.getElementById('name');
var homePage = document.getElementById('homePage');
var about = document.getElementById('about');
var aboutMe = document.getElementById('aboutMe');
var projects = document.getElementById('projects');
var projectPage = document.getElementById('projectPage');
var contact = document.getElementById('contact');
var contactMe = document.getElementById('contactMe');

window.onload = function () {
    homePage.style.display = 'block';
    aboutMe.style.display = 'none';
    projectPage.style.display = 'none';
    contactMe.style.display = 'none';


    home.addEventListener('click', () => {
        homePage.style.display = 'block';
        aboutMe.style.display = 'none';
        projectPage.style.display = 'none';
        contactMe.style.display = 'none';
    })
    name_.addEventListener('click', () => {
        homePage.style.display = 'block';
        aboutMe.style.display = 'none';
        projectPage.style.display = 'none';
        contactMe.style.display = 'none';
    })
    about.addEventListener('click', () =>{
        homePage.style.display = 'none';
        aboutMe.style.display = 'block';
        projectPage.style.display = 'none';
        contactMe.style.display = 'none';
    })
    projects.addEventListener('click', () => {
        homePage.style.display = 'none';
        aboutMe.style.display = 'none';
        projectPage.style.display = 'block';
        contactMe.style.display = 'none';
    })
    contact.addEventListener('click', () => {
        homePage.style.display = 'none';
        aboutMe.style.display = 'none';
        projectPage.style.display = 'none';
        contactMe.style.display = 'block';
    })

    
}