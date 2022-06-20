import createElement from "../createElement";
import modal from './modal'
//didn't select sidebar and yet it appended to sidebar probably has to do with index
function popUp(){
    const myModal = document.querySelector('.modal');
    const span = document.querySelector('.close')
    const sidebar = document.querySelector('.sidebar')
    const popUpButton = createElement('button', {class:'modalBtn', id:'modalBtn'})
    sidebar.appendChild(popUpButton)
    popUpButton.textContent = `+`
    popUpButton.addEventListener('click', ()=>{
        myModal.style.display ="block"
    })
    span.addEventListener('click', ()=>{
        myModal.style.display = "none"
    })
    window.onclick = function (e){
        if (e.target === myModal){
            myModal.style.display = "none"
        }
    }
}

export default popUp