// DELETE IF STATEMENTS WHEN SPERATİNG FILES
    
// for navbar
// const burger = document.querySelector('#burger');
// const toggleMenu = document.querySelector('#toggle-menu')

// burger.addEventListener('click', e => {
//     if(burger.classList.contains('burger-close')) {
//         burger.classList.replace('burger-close', 'burger-open');
//         toggleMenu.classList.replace('hide', 'd-flex')
//     } else if(burger.classList.contains('burger-open')) {
//         burger.classList.replace('burger-open', 'burger-close');
//         toggleMenu.classList.replace('d-flex','hide');
//     }
// })

// for index page
const ongletBtns = document.querySelectorAll('.onglet-btn')
if(ongletBtns) {

    ongletBtns.forEach(o => {
        o.addEventListener('click', (e) => {
            console.log(e.target.classList.contains('onglet-btn-actif'))
            if(!e.target.classList.contains('onglet-btn-actif')) {
                
                // Remove active states
                document.querySelector('.onglet-btn-actif').classList.remove('onglet-btn-actif');
                document.querySelector('.onglet-actif').classList.remove('onglet-actif');
                
                // Add new active states
                e.target.classList.add('onglet-btn-actif');
                const ogletId = e.target.id.split("-")[0] + "-" + e.target.id.split("-")[2]
                const onglet = document.querySelector(`#${ogletId}`)
                onglet.classList.add('onglet-actif')
                
                // Set the right background color
                console.log(e.target.style)
            }
        })
    })
    console.log("first")
}


