//Mobile Menu
function showMenu() {
  let mobileMenu = document.querySelector('.mobile-menu');

  if (mobileMenu.classList.contains('open')) {
    mobileMenu.classList.remove('open');
    document.querySelector('.icon').src = "imgSite/menu-Icon.png";
  } else {
    mobileMenu.classList.add('open');
    document.querySelector('.icon').src = "imgSite/menu-IconX.png";
  }
}

//Animação de scroll
const scrollAnimated = new IntersectionObserver((sections) => {
    sections.forEach((section) => {
        if(section.isIntersecting) {
            section.target.classList.add("show");
        } else {
            section.target.classList.remove("show");
        }
    })
})
const elements = document.querySelectorAll(".hidden");

elements.forEach(section => scrollAnimated.observe(section));

//Animação dos itens das Atividades de informática
var listItems = document.querySelectorAll('.list > div');
    
    listItems.forEach(function(item) {
      var title = item.querySelector('h4');
      var sublist = item.querySelector('ul');
      
      title.addEventListener('mouseover', function() {
        sublist.style.opacity = '1';
        sublist.style.pointerEvents = 'auto';
      });
      
      item.addEventListener('mouseleave', function() {
        sublist.style.opacity = '0';
        sublist.style.pointerEvents = 'none';
      });
    });

//Botão pra mudar a cor do site
function changeTheme(themeName) {
  document.querySelector('.theme-css').href = themeName;
  localStorage.setItem('selectedTheme', themeName);
}

//Verifica se tem algum tema salvo no localStorage ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
  const savedTheme = localStorage.getItem('selectedTheme');
  if (savedTheme) {
    document.querySelector('.theme-css').href = savedTheme;
  }
});