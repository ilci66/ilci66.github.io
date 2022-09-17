import { data } from './data.js';
console.log(data);

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


filterBtns.forEach(b => {
    b.addEventListener('click', (e) => {
        document.querySelector('.actif-filter').classList.remove('actif-filter')
        b.classList.add('actif-filter')
        // console.log(b.id.split('-')[0])
        const x = b.id.split('-')[0]
        if(x === "tous") {
            filteredData = data;
        } else {
            filteredData = data.filter(d => {
                console.log(d.personne, x)    
                return d.personne === x
            })
        }
        // console.log("result => ",filteredData)
        renderProducts(filteredData)
    })
}) 


const openModal = (e) => {
    modalInfoBox.style.transform = "scale(1)";

    const targetId = e.target.id.split('-')[0];
    const filtered = data.filter(d => d.id === parseInt(targetId))[0]
    
    const modalImg = document.querySelector('.modal__info-box--img');
    modalImg.setAttribute('src', filtered.img);
    modalImg.setAttribute('alt', filtered.name + "image");

    modalTitle.textContent = filtered.name;
    modalPrice.textContent = `${filtered.price} €`
    modalPaymentBtn.textContent = 'Voir les options de paiement'

    modalInfo.textContent = filtered.info;
    
    modalInfoBox.style.display = "flex"
    modal.setAttribute('open', "")
    setTimeout(() => {
        
    }, 500)
}

const closeModal = (e) => {

    modalTitle.innerHTML = ""
    modalPrice.innerHTML = ""
    modalInfo.innerHTML = ""
    
    modalInfoBox.style.transform = "scale(0)";
    setTimeout(() => {
        // modalInfoBox.style.display = "none";
        modal.removeAttribute('open')
    }, 500)
}



document.addEventListener('click', (e) => {
    if(e.target === modal || e.target === modalClose) {   
        closeModal()
    }
})

function renderProducts (data) {
    console.log("gonna render")
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
            p.textContent = d.price;
            
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
renderProducts(filteredData)
