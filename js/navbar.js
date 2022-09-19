const burger = document.querySelector('#burger');
const toggleMenu = document.querySelector('#toggle-menu')


// J'ai utilisé les classes d'attribut "open" et 
// "burger-open" et "burger-close" pour contrôler 
// le menu mobıl navbar
burger.addEventListener('click', e => {

    // Si le burger est à l'état fermé
    if(burger.classList.contains('burger-close')) {
        
        burger.classList.replace('burger-close', 'burger-open');
        
        toggleMenu.setAttribute('open', "");
        
    // Si le burger est à l'état ouvert
    } else if(burger.classList.contains('burger-open')) {
        
        burger.classList.replace('burger-open', 'burger-close');
        
        toggleMenu.removeAttribute('open');
      
    }
})
