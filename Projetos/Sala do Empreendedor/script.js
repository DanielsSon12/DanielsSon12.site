function showMenu() {
    let mobileMenu = document.querySelector('.mobile-menu');

    if (mobileMenu.classList.contains('open')) {
        mobileMenu.classList.remove('open');
        document.querySelector('.icon').src = "imgs/cardapio.png";
    } else {
        mobileMenu.classList.add('open');
        document.querySelector('.icon').src = "imgs/letra-x.png";
    }
}