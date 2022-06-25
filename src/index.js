import createElement from './createElement'
import heading from './modules/heading'
import sidebar from './modules/sidebar'
import forms from './modules/forms'
import '../styles/main.scss'
import popUp from './modules/popUp'
import modal from './modules/modal'
import ToDo from '../src/modules/ToDoStorage/ToDo'
import trash from '../src/assets/trash.png'
import notes from '../src/assets/note-edit.png'
import editModal from '../src/modules/editModal'
import openEdit from './modules/openEdit'
import {createHome, eventHome} from '../src/modules/home'
//import deleteEle from '../src/modules/ToDoStorage/deleteTask'
let taskCards = []
let tasks = [];
heading()
sidebar()
createHome()
modal()
popUp()
forms()
eventHome()




const submitBtn = document.querySelector('.submit')
const listOfToDos = document.querySelector('.listOfToDos')
const card = createElement('div', {class:'TaskCard'})
const card1 = createElement('div', {class:'TaskCard'})
const card2 = createElement('div', {class:'TaskCard'})
const card3 = document.getElementById('homeTask')
const taskP = createElement('p', {class:'taskP'})
const taskD = createElement('p', {class:'taskD'})
const taskDate = createElement('p', {class:'taskDate'})
const taskPriority = createElement('p', {class:'taskPriority'})

const edit = new Image()
edit.src = notes
const del = new Image()
del.src = trash



function events(e){
    //append container to event tab, if container === today/week/project
    const Today = document.querySelector('.Today')
    const Week = document.querySelector('.Week')
    const Projects = document.querySelector('.Projects')
    const priority = document.querySelector('#priority')
    Today.addEventListener('click', () =>{
        listOfToDos.replaceChildren();
        const TODAYDIV = createElement('div', {class:'ToDoTasks', id:'todayDiv'})
        listOfToDos.appendChild(TODAYDIV)
        TODAYDIV.appendChild(card)
    })
    Week.addEventListener('click',()=>{
        listOfToDos.replaceChildren();
        const WEEKDIV =  createElement('div', {class:'ToDoTasks', id:'weekDiv'})
        listOfToDos.appendChild(WEEKDIV)
        WEEKDIV.appendChild(card1)
        
    })
    Projects.addEventListener('click', ()=>{
        listOfToDos.replaceChildren();
        const PROJECTSDIV = createElement('div', {class:'ToDoTasks', id:'projectsDiv'})
        listOfToDos.appendChild(PROJECTSDIV)
        PROJECTSDIV.appendChild(card2)
        
    })
    submitBtn.addEventListener('click',  (e) =>{
        e.preventDefault()
        submitBtn.addEventListener('click', addToDo)
        //submitBtn.addEventListener('click', displayToDo)
    })

    
    
}

function addToDo(){
    const Today = document.querySelector('.Today')
    const Week = document.querySelector('.Week')
    const Project = document.querySelector('.Projects')
    const ToDoVal = document.querySelector('.TODOinput')
    const ToDoDescVal = document.querySelector('.TODODesc')
    const dateVal = document.querySelector('.dateInput')
    const priorityVal = document.querySelector('.priInput')
    const task = ToDo(ToDoVal.value, ToDoDescVal.value,dateVal.value, priorityVal.value, `Not Done`)
     tasks.push(task)
    console.log(tasks)
    setStorage()
    displayToDo(task)
    return task
}


function displayToDo(currentTask){
    //setup modal that pops up when edit img is clicked
    //setup different divs first than set up modal for less confusion
    //TodayDiv, WeekDiv, ProjectsDiv
    //append specific div and then append Home
    //if div.id === today, week, projects append that div
        let currentChore = localStorage.getItem('chore')
        let currentDesc = localStorage.getItem('description')
        let currentDate = localStorage.getItem('date')
        let currentPriority = localStorage.getItem('priority')
        const taskDiv = createElement('div', {class:'taskDiv'})
        const CLONEDTASKP = taskP.cloneNode(true)
        const CLONEDTASKD = taskD.cloneNode(true)
        const CLONEDTASKDATE = taskDate.cloneNode(true)
        const CLONEDTASKPRIORITY =taskPriority.cloneNode(true)
        const TASKPCON = createElement('div')
        const TASKDCON = createElement('div')
        const TASKDATECON = createElement('div')
        const TASKPRIORITYCON = createElement('div')
        const TRASHCON = createElement('div', {class:'trashCon'})
        const EDITCON = createElement('div', {class:'editCon'})
        const TRASHimg = createElement('img', {class:'trash', id:'Icon', src: `${del.src}`})
        const EDITimg  = createElement('img', {class:'edit', id:'Icon', src:`${edit.src}`})
        const RADIO = createElement('input', {type:`checkbox`, class:`taskComplete`})
        const EDITDiv  = createElement('div', {class:'edit1', id:'editDiv', src:`${edit.src}`})
       
        for(const task of tasks){
            //div for TASKSCARDDIV
            //NOTES IS GONNA HAVE DIFFERENT FUNCTIONALITY DIFFERENT FROM TODODIVS
        if(listOfToDos.firstChild.id === `todayDiv`){
            card.appendChild(taskDiv)
            taskCards.push(taskDiv)
            taskDiv.appendChild(RADIO)
            taskDiv.appendChild(TASKPCON)
            taskDiv.appendChild(TASKDCON)
            taskDiv.appendChild(TASKDATECON)
            taskDiv.appendChild(TASKPRIORITYCON)
            taskDiv.appendChild(TRASHCON)
            taskDiv.appendChild(EDITCON)
        } else if(listOfToDos.firstChild.id ===  `weekDiv`){
            card1.appendChild(taskDiv)
            taskCards.push(taskDiv)
            taskDiv.appendChild(RADIO)
            taskDiv.appendChild(TASKPCON)
            taskDiv.appendChild(TASKDCON)
            taskDiv.appendChild(TASKDATECON)
            taskDiv.appendChild(TASKPRIORITYCON)
            taskDiv.appendChild(TRASHCON)
            taskDiv.appendChild(EDITCON)
        } else if(listOfToDos.firstChild.id === `projectsDiv`){
            card2.appendChild(taskDiv)
            taskCards.push(taskDiv)
            taskDiv.appendChild(RADIO)
            taskDiv.appendChild(TASKPCON)
            taskDiv.appendChild(TASKDCON)
            taskDiv.appendChild(TASKDATECON)
            taskDiv.appendChild(TASKPRIORITYCON)
            taskDiv.appendChild(TRASHCON)
            taskDiv.appendChild(EDITCON)
        } else {
            card3.appendChild(taskDiv)
            taskCards.push(taskDiv)
            taskDiv.appendChild(RADIO)
            taskDiv.appendChild(TASKPCON)
            taskDiv.appendChild(TASKDCON)
            taskDiv.appendChild(TASKDATECON)
            taskDiv.appendChild(TASKPRIORITYCON)
            taskDiv.appendChild(TRASHCON)
            taskDiv.appendChild(EDITCON)
        }
        editModal()
             const dateP = document.querySelector('.dateP')
             const descP = document.querySelector('.TODODescrip')
            TASKPCON.appendChild(CLONEDTASKP) 
            TASKDCON.appendChild(CLONEDTASKD)
            TASKDATECON.appendChild(CLONEDTASKDATE)
            TASKPRIORITYCON.appendChild(CLONEDTASKPRIORITY)
            TRASHCON.appendChild(TRASHimg)
            TRASHCON.appendChild(EDITimg)
            CLONEDTASKP.textContent = `${currentTask.chore}`
            descP.textContent = `${currentTask.description}`
            dateP.textContent = `${currentTask.date}`
            CLONEDTASKPRIORITY.textContent = `${currentTask.priority}`
            
        for(let j = 0; j < tasks.length; j++){
            taskDiv.setAttribute('id', `${j}`)
            RADIO.setAttribute(`data-task`, `${j}`)
            TRASHimg.setAttribute('data-trash', `${j}`)
            CLONEDTASKP.setAttribute(`data-para`, `${j}`)
            CLONEDTASKPRIORITY.setAttribute(`data-pri`, `${j}`)
        }
           
        

    }
    TRASHimg.addEventListener('click', (e)=>{
        const currentTarget = e.currentTarget.parentNode.parentNode
        console.log(currentTarget)
        currentTarget.remove()
        deleteEle(findTask(tasks, currentTarget.textContent))
    })
    EDITimg.addEventListener('click', openEdit)
    RADIO.addEventListener('click', taskDone)
    //setStorage()
}

events()

//local storage forEach
function deleteEle(currentTask){
    tasks.splice(currentTask,  1)
    console.log(tasks)
    localStorage.removeItem(currentTask)
    localStorage.setItem('tasks', JSON.stringify(tasks))
    //setStorage()
}

function findTask(tasks, chore){
    if(tasks.length === 0 || tasks.length === null){
        return
    }
    for(const task of tasks)
        if(task.chore === chore){
            console.log(tasks.indexOf(task))
            return tasks.indexOf(task)
        }
}

function taskDone(e){
    tasks.forEach(function(task){
        const p = document.querySelector(`[data-para= "${task}"]`)
        const pri = document.querySelector(`[data-pri= "${task}"]`)
        const RADIO = document.querySelector(`[data-task= "${task}"]`)
    
        if(RADIO !== e.currentTarget){
            return
        }
        if(RADIO.checked === true){
                p.style.textDecoration = 'line-through'
                pri.style.textDecoration = 'line-through'
                task.done = true
                console.log(tasks)
                localStorage.setItem('done', task.done)
                return tasks.done
            } else if(RADIO.checked === false){
                p.style.textDecoration = 'none'
                pri.style.textDecoration = 'none'
                task.done = false
                console.log(tasks)
                localStorage.setItem('done', task.done)
                return tasks.done
            }
    })



}

function setStorage(){
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

function refreshPage(){
    if (window.performance){
        return
    }
    if(performance.navigation.type == 1){
        console.log('hello')
    } else {
        return
    }

}
refreshPage()

function getStorage(){
    let keys = Object.keys(localStorage);
    keys.forEach(key =>{
       if(!localStorage.getItem('tasks')){
           return
       }
       else{
           let p = localStorage.getItem('tasks')
           let parse = JSON.parse(p)
           console.log(parse)
           tasks = [...parse]
           console.log(tasks)
           tasks.forEach(task => displayToDo(task))
       }
    })
}
getStorage()



    
    //today div
    //week div
    //project div
    //notes div
    //home div appends all tasks!
    //REMOVE EVENT LISTENER FOR MODAL NOTES FUNCTION
    //HOME CARD FOR EACH BUTTON
    //append radio button to TODO
    //element.required = true
    //document.getElementById('example').required = true
    //setAttribute `${tasks.key}` for edit

    /*else if(listOfToDos.firstChild.id === `homeDiv`){
            card3.appendChild(taskDiv)
            taskCards.push(taskDiv)
            taskDiv.appendChild(RADIO)
            taskDiv.appendChild(TASKPCON)
            taskDiv.appendChild(TASKDCON)
            taskDiv.appendChild(TASKDATECON)
            taskDiv.appendChild(TASKPRIORITYCON)
            taskDiv.appendChild(TRASHCON)
            taskDiv.appendChild(EDITCON)*/



