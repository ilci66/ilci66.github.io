const form = document.querySelector('form');
const inputs = document.querySelectorAll('input:not([type="submit"]), textarea')
const submitBtn = document.querySelector('#submit-btn')

const successPlane = document.querySelector('.success-plane')

inputs.forEach(input => {
    input.addEventListener('keyup', () => {
        console.log("changed")

        let allValid = checkInputs(inputs)

        if(!allValid) {
            submitBtn.setAttribute('disabled', '')
            console.log("disabled")
        } else {
            submitBtn.removeAttribute('disabled')
            console.log("removed disabled")
        }
        
    })
})

form.addEventListener('submit', (e) => {
    console.log("submit")
    e.preventDefault();
    if(checkInputs(inputs)) {
        console.log("should fly")
        successPlane.classList.add('visible')
        setTimeout(() => {
            successPlane.classList.add('fly')
        }, 300)
        setTimeout(() => {
            successPlane.classList.remove('fly', 'visible')
        },800)
    }
})

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