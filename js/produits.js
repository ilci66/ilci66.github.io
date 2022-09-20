// Importation des données
import { data } from './data.js';


const productsContainerUl = document.querySelector('.cards-container');
const modal = document.querySelector('.modal')
const modalClose = document.querySelector('.modal__info-box--close-btn');
const filterBtns = document.querySelectorAll('.filter__btn');
const modalInfoBox = document.querySelector('.modal__info-box');
const modalTitle = document.querySelector('.modal__info-box--titre')
const modalPrice = document.querySelector('.modal__info-box--price');
const modalInfo = document.querySelector('.modal__info-box--info');
const modalPaymentBtn = document.querySelector('.modal__info-box--pay-btn');

let filteredData = [...data];

// Ajouter un événement de clic au bouton de filtre
filterBtns.forEach(b => {
    b.addEventListener('click', (e) => {
        document.querySelector('.actif-filter').classList.remove('actif-filter')

        b.classList.add('actif-filter')

        // Séparer la valeur de l'id
        const x = b.id.split('-')[0]

        if(x === "tous") {
            filteredData = data;
        } else {
            filteredData = data.filter(d => {
                return d.personne === x
            })
        }
        // Exécuter la fonction pour rendre les produits filtrés
        renderProducts(filteredData)
    })
}) 

// fonction pour rendre le modal visible
const openModal = (e) => {
    // Pour une simple animation de croissance
    modalInfoBox.style.transform = "scale(1)";
    
    // Séparer la valeur de l'id
    const targetId = e.target.id.split('-')[0];

    // Trouver les données en fonction de leur valeur
    const filtered = data.filter(d => d.id === parseInt(targetId))[0]
    
    // Commencer à remplir le modal
    const modalImg = document.querySelector('.modal__info-box--img');
    modalImg.setAttribute('src', filtered.img);
    modalImg.setAttribute('alt', filtered.name + " image");

    modalTitle.textContent = filtered.name;
    modalPrice.textContent = `${filtered.price} €`
    modalPaymentBtn.textContent = 'Voir Les Options de Paiement'

    // Itérer sur les informations et créer une liste
    for(let i = 0; i < filtered.info.length; i++) {
        let li = document.createElement('li');
        li.textContent = filtered.info[i];
        modalInfo.appendChild(li)
    }

    // rendre le modal invisible et possible d'interagir
    modalInfoBox.style.display = "flex"
    modal.setAttribute('open', "")

}

// Fermer le modal
const closeModal = (e) => {

    // Effacer les champs des éléments modaux
    modalTitle.innerHTML = ""
    modalPrice.innerHTML = ""
    modalInfo.innerHTML = ""
    
    modalInfoBox.style.transform = "scale(0)";
    // Lorsque l'animation est terminée, supprimer 
    // l'attribut ouvert pour rendre le modèle 
    // invisible et impossible à interagir avec
    setTimeout(() => {
        modal.removeAttribute('open')
    }, 500)
}


// Si la cible est bouton "fermer le modal" ou l'arrière-plan, fermer le modal
document.addEventListener('click', (e) => {
    if(e.target === modal || e.target === modalClose) {   
        closeModal()
    }
})

// Créer des cartes en fonction des données fournies
function renderProducts (data) {
    // Supprimer tout pour éviter d'ajouter à un conteneur "carts" déjà rempli
    productsContainerUl.innerHTML = ""
    if(productsContainerUl) {

        data.map(d => {
            let li = document.createElement('li');
            li.classList.add('card')
            
            let img = document.createElement('img');
            img.setAttribute('src', d.img);
            img.setAttribute('alt', d.name);
            
            let h3 = document.createElement('h3');
            h3.textContent = d.name;
            
            let p = document.createElement('p');
            p.textContent = d.price + " €";
            
            let btn = document.createElement('button')
            btn.classList.add('card__button');
            btn.textContent = 'Detaillée'
            btn.setAttribute('id', `${d.id}-detaille`)
            btn.addEventListener('click', (e) => openModal(e))
            
            li.appendChild(img);
            li.appendChild(h3);
            li.appendChild(p);
            li.appendChild(btn);
            
            productsContainerUl.appendChild(li)
        })
    
    }
}
// exécuter la fonction immédiatement
renderProducts(filteredData)