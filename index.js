var home = document.getElementById('home');
var name_ = document.getElementById('name');
var homePage = document.getElementById('homePage');
var about = document.getElementById('about');
var aboutMe = document.getElementById('aboutMe');
var projects = document.getElementById('projects');
var projectPage = document.getElementById('projectPage');

window.onload = function () {
    homePage.style.display = 'block';
    name_.style.display= 'block';
    aboutMe.style.display = 'none';
    projectPage.style.display = 'none';

    home.addEventListener('click', () => {
        homePage.style.display = 'block';
        name_.style.display = 'block';
        aboutMe.style.display = 'none';
        projectPage.style.display = 'none';
    })
    name_.addEventListener('click', () => {
        homePage.style.display = 'block';
        name_.style.display = 'block';
        aboutMe.style.display = 'none';
        projectPage.style.display = 'none';
    })
    about.addEventListener('click', () =>{
        homePage.style.display = 'none';
        name_.style.display = 'block';
        aboutMe.style.display = 'block';
        projectPage.style.display = 'none';
    })
    projects.addEventListener('click', () => {
        homePage.style.display = 'none';
        name_.style.display = 'block';
        aboutMe.style.display = 'none';
        projectPage.style.display = 'block';
    })

    
}