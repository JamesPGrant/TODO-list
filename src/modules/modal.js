import createElement from "../createElement";

function modal(){
    const sidebar = document.querySelector('.sidebar')
    const modalPopUp = createElement('div', {class:'modal', id:'modal'})
    const exitOut = createElement('span', {class:'close', id:'modal'})
    const modalCon = createElement('div', {class:'modalCon', id:'modal'})
    sidebar.appendChild(modalPopUp)
    modalPopUp.appendChild(modalCon)
    modalCon.appendChild(exitOut)
    exitOut.textContent = `&times;`
}

export default modal