
// Menu
let headerMenu = document.getElementById('header-menu');
let headerButton = document.getElementById('header-button');
let headerLinks = document.querySelectorAll('.header__link');

headerButton.addEventListener('click', () => {
    headerMenu.classList.toggle('active');
    headerButton.classList.toggle('active');
});

headerLinks.forEach(element => {
    element.addEventListener('click', () => {
        headerLinks.forEach(item => {
            item.classList.remove('active');
        });
        element.classList.add('active');
        headerMenu.classList.remove('active');
        headerButton.classList.remove('active');
    });
});

let sections = document.querySelectorAll('section[id]');

function scrollActive () {
    let scrollY = window.pageYOffset;

    sections.forEach(current => {
        let sectionHeight = current.offsetHeight;
        let sectionTop = current.offsetTop - 90;
        sectionId = current.getAttribute('id');
        
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.header__item a[href*=' + sectionId + ']').classList.add('active');
        } else {
            document.querySelector('.header__item a[href*=' + sectionId + ']').classList.remove('active');
        }
    });
}

window.addEventListener('scroll', scrollActive);

// Button Up
let botonUp = document.getElementById('button-up');

botonUp.addEventListener('click', () => {
        window.scrollTo(0, 0);
});

window.onscroll = function () {
    
    let scroll = document.documentElement.scrollTop;

    if(scroll > 300){
        botonUp.classList.add('active');
    } else if(scroll < 300){
        botonUp.classList.remove('active');
    }
}