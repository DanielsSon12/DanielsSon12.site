//Dropdown menu
function showMenu() {
    let mobileMenu = document.querySelector('.mobile-menu');

    if (mobileMenu.classList.contains('open')) {
        mobileMenu.classList.remove('open');
        document.querySelector('.icon').src = "imgs/menu-aberto.png";
    } else {
        mobileMenu.classList.add('open');
        document.querySelector('.icon').src = "imgs/x.png";
    }
}

//Função para os icones que ficam dentro da imagem que da zoom
function showIconZoom(className) {
    document.querySelector(`.${className}`).classList.add('showIcon');
}

function hideIconZoom(className) {
    document.querySelector(`.${className}`).classList.remove('showIcon');
}