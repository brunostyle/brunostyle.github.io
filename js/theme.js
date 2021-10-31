
// Theme
let btnTheme = document.getElementById('switch');
btnTheme.addEventListener('click', () => {
    document.body.classList.toggle('theme');
    btnTheme.classList.toggle('active');

    if (document.body.classList.contains('theme')) {
        localStorage.setItem('light-mode', 'true');
    } else {
        localStorage.setItem('light-mode', 'false');
    }
});

if (localStorage.getItem('light-mode') === 'true') {
    document.body.classList.add('theme');
    btnTheme.classList.add('active');
} else {
    document.body.classList.remove('theme');
    btnTheme.classList.remove('active');
}