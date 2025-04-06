var home = document.getElementById('home');
var homePage = document.getElementById('homePage');
var about = document.getElementById('about');
var aboutMe = document.getElementById('aboutMe');

window.onload = function () {
    homePage.style.display = 'block';
    aboutMe.style.display = 'none';
    home.addEventListener('click', () => {
        homePage.style.display = 'block';
        aboutMe.style.display = 'none';
    })
    about.addEventListener('click', () =>{
        homePage.style.display = 'none';
        aboutMe.style.display = 'block';
    })

    
}