
//Eduaction 
let buttonsEducation = document.querySelectorAll('.education__button'),
    contentEducation = document.querySelectorAll('.education__content');

buttonsEducation.forEach(element => {
    element.addEventListener('click', () => {
        if(element.classList.contains('education')) {
            contentEducation.forEach(content => {
                if(content.classList.contains('education')){
                    contentEducation.forEach(remove => {
                        remove.classList.remove('active');
                    });
                    content.classList.add('active');
                }
            });
        } else if(element.classList.contains('courses')) {
            contentEducation.forEach(content => {
                if(content.classList.contains('courses')){
                    contentEducation.forEach(remove => {
                        remove.classList.remove('active');
                    });
                    content.classList.add('active');
                }
            });
        }
        buttonsEducation.forEach(item => {
            item.classList.remove('active');
        });

        element.classList.add('active');
    });
});

// Skills
let containerSkills = document.getElementById('container-skills'),
    templateSkills = document.getElementById('template-skills').content,
    fragmentSkills = document.createDocumentFragment();
let buttonsSkills = document.querySelectorAll('.skills__button');

buttonsSkills.forEach(element => {
    element.addEventListener('click', () => {
        if(element.classList.contains('frontend')) {
            fetchData('skills', 'frontend');
        } else if(element.classList.contains('backend')) {
            fetchData('skills', 'backend');
        }
        buttonsSkills.forEach(item => {
            item.classList.remove('active');
        });

        element.classList.add('active');
    });
});

// Services
let containerServices = document.getElementById('container-services'),
    templateServices = document.getElementById('template-services').content,
    fragmentServices = document.createDocumentFragment();

// Portfolio
let containerPortfolio = document.getElementById('container-portfolio'),
    templatePortfolio = document.getElementById('template-portfolio').content,
    fragmentPortfolio = document.createDocumentFragment();


document.addEventListener('DOMContentLoaded', () => {
    fetchData();
})

const fetchData = async (data, skillsName) => {
    try {
        if(data === 'skills') {
            // Skills
            const resSkills = await fetch('../json/skills.json');
            const dataSkills = await resSkills.json();
            paintSkills(dataSkills, `${skillsName}`);
        } else {
            // Skills
            const resSkills = await fetch('../json/skills.json');
            const dataSkills = await resSkills.json();
            paintSkills(dataSkills, "frontend");

            // Portfolio
            const resPortfolio = await fetch('../json/portfolio.json');
            const dataPortfolio = await resPortfolio.json();
            paintPortfolio(dataPortfolio);

            // Services
            const resServices = await fetch('../json/services.json');
            const dataServices = await resServices.json();
            paintServices(dataServices);
        }
        
    } catch (error) {
        console.log(error);
    }
}

// Skills
const paintSkills = (data, category) => {
    containerSkills.innerHTML = '';
    data.forEach(element => {
        if(category === element.category){
            templateSkills.querySelector('.skills__name').textContent = element.skill;
            templateSkills.querySelector('.skills__number').textContent = element.porcentage;
            templateSkills.querySelector('.skills__porcentage').style.width = element.porcentage;
            
            const cloneSkills = templateSkills.cloneNode(true);
            fragmentSkills.appendChild(cloneSkills); 
        }
    });
    containerSkills.appendChild(fragmentSkills);
}

// Portfolio
const paintPortfolio = data => {
    data.forEach(element => {
        templatePortfolio.querySelector('img').setAttribute('src', `${element.image}`)
        templatePortfolio.querySelector('.title').textContent = element.title;
        templatePortfolio.querySelector('.description').textContent = element.description;
        templatePortfolio.querySelector('.portfolio__button').setAttribute('href', `${element.link}`);
            
        const clonePortfolio = templatePortfolio.cloneNode(true);
        fragmentPortfolio.appendChild(clonePortfolio); 
    });
    containerPortfolio.appendChild(fragmentPortfolio);

    var portfolio = new Swiper(".portfolio__container", {
        effect: "coverflow",
        autoplay: true,
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        loop: true,
        spaceBetween: 42,
        coverflowEffect: {
          rotate: 0
        },
        pagination: {
          el: ".swiper-pagination",
        }
    });
}

// Services
const paintServices = data => {
    data.forEach(element => {
        templateServices.querySelector('.icon--alt').innerHTML = element.icon;
        templateServices.querySelector('.title').textContent = element.title;
        templateServices.querySelector('.description').textContent = element.description;

        const cloneServices = templateServices.cloneNode(true);
        fragmentServices.appendChild(cloneServices); 
    });
    containerServices.appendChild(fragmentServices);
}

// Footer
var footer = new Swiper(".footer__container", {
    slidesPerView: 1,
    autoplay: true,
    grabCursor: true,
    loop: true,
    breakpoints: {
        510: {
          slidesPerView: 2
        },
        800: {
          slidesPerView: 3
        }
    }
});

  