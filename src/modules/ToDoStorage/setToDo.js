import forms from '../forms'
import ToDo from '../ToDoStorage/ToDo'
//querySelect modal Elements

function addToDo(){
    const Today = document.querySelector('.Today')
    const Week = document.querySelector('.Week')
    const Project = document.querySelector('.Projects')
    const submitBtn = document.querySelector('.submit')
    const ToDoVal = document.querySelector('.TODOinput')
    const ToDoDescVal = document.querySelector('.TODODesc')
    const dateVal = document.querySelector('.dateInput')
    const priorityVal = document.querySelector('.selectPri')
    submitBtn.addEventListener('click', (e) =>{
        e.preventDefault()
        const task = new ToDo(ToDoVal.value, ToDoDescVal.value,dateVal.value, priorityVal.value)
        console.log(task)
        return task
    })


}

export default addToDo