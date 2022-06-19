import createElement from '../createElement'
import modal from '../modules/modal'

function forms(){
    const myModalContent = document.querySelector('.modalCon');
    //uncomment if needed
   //const formsContainer = createElement('div',{class:'formContainer', id: 'formContainer'})
    const forms = createElement('form', {class:'form', id:'form'});
    const myTODODiv = createElement('div', {class:'TODOdiv', id:'TODO'})
    const TODODesc = createElement('div', {class:'TODODescDiv', id:'TODO'})
    const TODODate = createElement('div', {class:'TODODateDiv', id:'TODO'})
    const dataDiv  = createElement('div', {class:'dataDiv', id:'TODO'})
    const submitDiv = createElement('div', {class:'submitDiv', id:'TODO'})
    const myTODOLabel = createElement('label', {class:'TODOLabel', id:'TODOLab', for:'TODO'});
    const myTODO = createElement('input', {class: 'TODOinput', id:'TODOIn', for:'TODO', type:'text'})
    const TODODescLabel = createElement('label', {class:'TODODescLabel', id:'TODOdesc', for:'TODO'})
    const TODODescription = createElement('textArea', {class:'TODODesc', id:'TODOdesc', for:'TODO'})
    const dueDateLabel = createElement('label', {class:"dateLabel", id:"TODODate", for:"TODO"})
    const dueDate = createElement('input', {class:'dateInput', id:'TODODate', for:'TODO' ,type:'date'})
    const priLabel = createElement('label', {class:'priLabel', id:'TODOPri', for:'TODO'})
    const priInput = createElement('input', {class:'priInput', id:'TODOPri', for:'TODO' ,list:'pri', name:'pri'})
    const priorityList = createElement('datalist', {class:'TODOPri', id:'pri',})
    const lowPri = createElement('option', {value:'low', class:'selectPri'})
    const medPri = createElement('option', {value:'medium', class:'selectPri'})
    const highPri = createElement('option', {value:'high', class:'selectPri'})
    const submitBtn = createElement('button', {class:'submit', id:'btn', for:'TODO', type:'submit'})
    myModalContent.appendChild(forms)
    forms.appendChild(myTODODiv)
    forms.appendChild(TODODesc)
    forms.appendChild(TODODate)
    forms.appendChild(dataDiv)
    forms.appendChild(submitDiv)
    myTODODiv.appendChild(myTODOLabel)
    myTODODiv.appendChild(myTODO)
    TODODesc.appendChild(TODODescLabel)
    TODODesc.appendChild(TODODescription)
    TODODate.appendChild(dueDateLabel)
    TODODate.appendChild(dueDate)
    submitDiv.appendChild(submitBtn)
    dataDiv.appendChild(priLabel)
    dataDiv.appendChild(priInput)
    dataDiv.appendChild(priorityList)
    priorityList.appendChild(lowPri)
    priorityList.appendChild(medPri)
    priorityList.appendChild(highPri)
    myTODOLabel.textContent = `Chore: `
    TODODescLabel.textContent = `Description: `
    dueDateLabel.textContent = `Due Date:`
    submitBtn.textContent = `Submit`
    priLabel.textContent = `Priority: `
    lowPri.textContent = 'low'
    medPri.textContent = 'medium'
    highPri.textContent = 'high'
}

export default forms