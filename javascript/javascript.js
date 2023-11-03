
const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(){
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');//togle: add caso não tenha, remove caso tenha.
}

btnMobile.addEventListener('click', toggleMenu);