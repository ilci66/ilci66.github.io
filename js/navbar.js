const burger = document.querySelector('#burger');
const toggleMenu = document.querySelector('#toggle-menu')

burger.addEventListener('click', e => {
    if(burger.classList.contains('burger-close')) {

        burger.classList.replace('burger-close', 'burger-open');

        toggleMenu.setAttribute('open', "");

    } else if(burger.classList.contains('burger-open')) {
        
        burger.classList.replace('burger-open', 'burger-close');
        
        toggleMenu.removeAttribute('open');
      
    }
})
