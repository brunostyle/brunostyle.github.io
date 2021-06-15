/*----------------------------------------|EDUCACION|----------------------------------------*/

let tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]');

tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        let target = document.querySelector(tab.dataset.target);

        tabContents.forEach((tabContent) => {
            tabContent.classList.remove('educacion__activa');
        }) 

        target.classList.add('educacion__activa');

        tabs.forEach((tab) => {
            tab.classList.remove('educacion__activa');
        });
        tab.classList.add('educacion__activa');
    })
});