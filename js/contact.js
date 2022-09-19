const form = document.querySelector('form');
const inputs = document.querySelectorAll('input:not([type="submit"]), textarea')
const submitBtn = document.querySelector('#submit-btn')
const successPlane = document.querySelector('.success-plane')


// Ajout d'un écouteur d'événement pour chaque élément input et textarea
inputs.forEach(input => {
    input.addEventListener('keyup', () => {

        let allValid = checkInputs(inputs)
        
        // jusqu'à ce que toutes les entrées soient valides, 
        // maintenez le bouton Soumettre désactivé
        if(!allValid) {
            submitBtn.setAttribute('disabled', '')
        } else {
            submitBtn.removeAttribute('disabled')
        }
        
    })
})

// Soumission et vérifications personnalisées
form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Si toutes les inputs sont correctes
    if(checkInputs(inputs)) {
        // Rendre l'avion visible
        successPlane.classList.add('visible')
        inputs.forEach(i => {
            i.value = "";
        })

        // Faire voler l'avion
        setTimeout(() => {
            successPlane.classList.add('fly')
        }, 300)

        // Supprimer les classes et revenir à l'état initial
        setTimeout(() => {
            successPlane.classList.remove('fly', 'visible')
        },800)
    }
})

// Pour verifier les inputs
function checkInputs(inputs) {
    let res = true;

    for(let i = 0; i < inputs.length; i++){
        if(inputs[i].type === "tel") {
            if(inputs[i].value !== "" && !inputs[i].validity.valid) {
                return res = false;
            }
        } else if(!inputs[i].validity.valid) {
                return res = false;
        }

    }
    return res;
}