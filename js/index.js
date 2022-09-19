const ongletBtns = document.querySelectorAll('.onglet-btn')

// Ajouter des écouteurs d'événements
ongletBtns.forEach(o => {

    o.addEventListener('click', (e) => {
        if(!e.target.classList.contains('onglet-btn-actif')) {
            
            // Enlever les etats actives
            document.querySelector('.onglet-btn-actif').classList.remove('onglet-btn-actif');
            document.querySelector('.onglet-actif').classList.remove('onglet-actif');
            
            // Ajouter les etats actives
            e.target.classList.add('onglet-btn-actif');
            // Touver l'id d'onglet
            const ogletId = e.target.id.split("-")[0] + "-" + e.target.id.split("-")[2]
            // Cibler l'onglet
            const onglet = document.querySelector(`#${ogletId}`)
            // ajouter l'etat actif
            onglet.classList.add('onglet-actif')
            
        }
    })
})


