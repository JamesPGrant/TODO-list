import createElement from "../createElement";

function editModal(){
    const EDITDIV = document.querySelector('.editCon')
    const createEdit = createElement('div', {class:'editModal', id: 'editModal'})
    const editModalContent = createElement('div', {class:'editCon', id:'editCon'})
    const editSpan = createElement('span', {class:'closeEdit'})
    const editTask = createElement('p', {class:'editDesc'})
    const myTODOLabel = createElement('label', {class:'TODOLabel', id:'TODOLab', for:'TODO'});
    const myTODO = createElement('p', {class: 'TODOp', id:'TODOIn', for:'TODO', type:'text'})
    const TODODescLabel = createElement('label', {class:'TODODescLabel', id:'TODOdesc', for:'TODO'})
    const TODODescription = createElement('p', {class:'TODODescrip', id:'TODOdesc', for:'TODO'})
    const dueDateLabel = createElement('label', {class:"dateLabel", id:"TODODate", for:"TODO"})
    const dueDate = createElement('p', {class:'dateP', id:'TODODate', for:'TODO' ,type:'date'})
    const priLabel = createElement('label', {class:'priLabel', id:'TODOPri', for:'TODO'})
    const priInput = createElement('input', {class:'priInput', id:'TODOPri', for:'TODO' ,list:'pri', name:'pri'})
    const priorityList = createElement('datalist', {class:'TODOPri', id:'pri',})
    const pri = createElement('p', {class:'priP'})
    const lowPri = createElement('option', {value:'low', class:'selectPri'})
    const medPri = createElement('option', {value:'medium', class:'selectPri'})
    const highPri = createElement('option', {value:'high', class:'selectPri'})
    EDITDIV.appendChild(createEdit)
    createEdit.appendChild(editModalContent)
    editModalContent.appendChild(editSpan)
    editModalContent.appendChild(editTask)
    editModalContent.appendChild(myTODO)
    editModalContent.appendChild(TODODescription)
    editModalContent.appendChild(dueDateLabel)
    editModalContent.appendChild(dueDate)
    editModalContent.appendChild(priorityList)
    editModalContent.appendChild(pri)
    editSpan.textContent = `X`
}

export default editModal