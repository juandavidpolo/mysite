function darkmode() {
    const button = document.querySelector('#dark-toggle');
    var anchor = document.querySelectorAll("a")
    if (button.className === 'fas fa-toggle-off'){
        button.className = 'fas fa-toggle-on';
        for (var i = 0; i < anchor.length; i++){
            anchor[i].className += ' dark-mode-a';
        }
    }else{
        button.className = 'fas fa-toggle-off';
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