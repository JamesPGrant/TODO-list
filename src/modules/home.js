import createElement from '../createElement'

function createHome(){
    const sidebar = document.querySelector('.sidebar')
    const homeTab = createElement('button', {class:'home', id:'home'})
    sidebar.appendChild(homeTab)
    homeTab.textContent = `Home`
}

function eventHome(){
    const homeBtn = document.querySelector('.home')
    const listOfToDos = document.querySelector('.listOfToDos')
    const HOMEDIV = createElement('div', {class:'homeDiv', id:'homeDiv'})
    const card3 = createElement('div', {class:'TaskCard', id:`homeTask`})
    listOfToDos.appendChild(HOMEDIV)
    HOMEDIV.appendChild(card3)
    homeBtn.addEventListener('click', ()=>{
        listOfToDos.replaceChildren();
        listOfToDos.appendChild(HOMEDIV)
        HOMEDIV.appendChild(card3)
    })
}

//print hello function


export {createHome, eventHome}