function darkmode() {
    const button = document.querySelector('#dark-toggle');
    var anchor = document.querySelectorAll("a")
    var header = document.querySelector("header");
    var ulist = document.querySelector("ul");
    if (button.className === 'fas fa-toggle-off'){
        button.className = 'fas fa-toggle-on';
        header.className += 'header-dark';
        ulist.className += ' navbar-responsive-dark';
        for (var i = 0; i < anchor.length; i++){
            anchor[i].className += ' dark-mode-a';
        }
    }else{
        button.className = 'fas fa-toggle-off';
        header.classList.remove('header-dark')
        ulist.classList.remove('navbar-responsive-dark');
        for (var i = 0; i < anchor.length; i++){
            anchor[i].classList.remove('dark-mode-a');
        }
    }
    var body = document.body;
    body.classList.toggle("dark-mode");
 }

function projectsScroll(){
    document.getElementById('projects').scrollIntoView({behavior:'smooth'});
}
function aboutScroll(){
    document.getElementById('about').scrollIntoView({behavior:'smooth'});
}
function contactScroll(){
    document.getElementById('contact').scrollIntoView({behavior:'smooth'});
}
function responsive(){
    navbar = document.querySelector("#navbar");
    navbar.classList.toggle("navbar-responsive");
}