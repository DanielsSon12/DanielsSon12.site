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
      });
      
      item.addEventListener('mouseleave', function() {
        sublist.style.opacity = '0';
      });
    });
