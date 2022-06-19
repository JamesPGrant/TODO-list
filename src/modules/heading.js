import createElement from '../createElement'

function heading(){
    const container = document.querySelector('.container')
    const headingDiv = createElement('div', {class: 'headingDiv', id:'headingDiv'})
    const h1 = createElement ('h1', {class:"heading"})
    container.appendChild(headingDiv)
    headingDiv.appendChild(h1)
    h1.textContent = `To-Do List`
    return {h1, headingDiv}
}

export default heading