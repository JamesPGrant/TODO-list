import createElement from "../createElement";
import modal from './modal'

function popUp(){
    const myModal = document.querySelector('.modal');
    const span = document.querySelector('.close')
    const popUpButton = createElement('button', {class:'modalBtn', id:'modalBtn'})
    document.body.appendChild(popUpButton)
    popUpButton.textContent = `+`
    popUpButton.addEventListener('click', ()=>{
        myModal.style.display ="block"
    })
    span.addEventListener('click', ()=>{
        myModal.style.display = "none"
    })
    window.onclick = function (e){
        if (e.target === myModal){
            modal.style.display = "none"
        }
    }
}

export default popUp