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
const p = document.querySelector('.taskP')

const edit = new Image()
edit.src = notes
const del = new Image()
del.src = trash
const Today = document.querySelector('.Today')
const Week = document.querySelector('.Week')
const Projects = document.querySelector('.Projects')


function events(currentTask){
    //append container to event tab, if container === today/week/project
   
    const priority = document.querySelector('#priority')
    const p = document.querySelector('.taskP')
    Today.addEventListener('click', todayHandler)
       
    Week.addEventListener('click', weekHandler)
       
    Projects.addEventListener('click', projectHandler)
      
    submitBtn.addEventListener('click',  (e) =>{
        e.preventDefault()
        submitBtn.addEventListener('click', addToDo)
        //submitBtn.addEventListener('click', displayToDo)
    })

    
    
}

function addToDo(){
    const ToDoVal = document.querySelector('.TODOinput')
    const ToDoDescVal = document.querySelector('.TODODesc')
    const dateVal = document.querySelector('.dateInput')
    const priorityVal = document.querySelector('.priInput')
    const task = ToDo(ToDoVal.value, ToDoDescVal.value,dateVal.value, priorityVal.value, false)
     tasks.push(task)
    console.log(tasks)
    displayToDo(task)
    return task
}

function weekHandler(){
    listOfToDos.replaceChildren();
    Week.removeEventListener('click', weekHandler)
    Today.addEventListener('click', ()=>{
        listOfToDos.replaceChildren();
        const TODAYDIV = createElement('div', {class:'ToDoTasks', id:'todayDiv'})
        listOfToDos.appendChild(TODAYDIV)
        TODAYDIV.appendChild(card)
    })
    Projects.addEventListener('click', ()=>{
        listOfToDos.replaceChildren();
        //Projects.removeEventListener('click', projectHandler)
        const PROJECTSDIV = createElement('div', {class:'ToDoTasks', id:'projectsDiv'})
        listOfToDos.appendChild(PROJECTSDIV)
        listOfToDos.appendChild(PROJECTSDIV)
        PROJECTSDIV.appendChild(card2)
        PROJECTSDIV.appendChild(card2)
    })
    const WEEKDIV =  createElement('div', {class:'ToDoTasks', id:'weekDiv'})
    listOfToDos.appendChild(WEEKDIV)
    WEEKDIV.appendChild(card1)
    for(const task of tasks){
        if(task.type === 'week'){
            displayToDo(task)
          
        }
    }
    
}
function todayHandler(){
    listOfToDos.replaceChildren();
    Today.removeEventListener('click', todayHandler)
    Projects.addEventListener('click', ()=>{
        listOfToDos.replaceChildren();
        const PROJECTSDIV = createElement('div', {class:'ToDoTasks', id:'projectsDiv'})
        listOfToDos.appendChild(PROJECTSDIV)
        listOfToDos.appendChild(PROJECTSDIV)
        PROJECTSDIV.appendChild(card2)
        PROJECTSDIV.appendChild(card2)
    })
    Week.addEventListener('click', ()=>{
        listOfToDos.replaceChildren();
        const WEEKDIV =  createElement('div', {class:'ToDoTasks', id:'weekDiv'})
        listOfToDos.appendChild(WEEKDIV)
        WEEKDIV.appendChild(card1)
    })
    const TODAYDIV = createElement('div', {class:'ToDoTasks', id:'todayDiv'})
    listOfToDos.appendChild(TODAYDIV)
    TODAYDIV.appendChild(card)
    for(const task of tasks){
        if(task.type === 'today'){
            displayToDo(task)
        }
    }
}

function projectHandler(){
    listOfToDos.replaceChildren();
    Projects.removeEventListener('click', projectHandler)
    Today.addEventListener('click', ()=>{
        listOfToDos.replaceChildren();
        const TODAYDIV = createElement('div', {class:'ToDoTasks', id:'todayDiv'})
        listOfToDos.appendChild(TODAYDIV)
        TODAYDIV.appendChild(card)
    })
    Week.addEventListener('click', ()=>{
        listOfToDos.replaceChildren();
        const WEEKDIV =  createElement('div', {class:'ToDoTasks', id:'weekDiv'})
        listOfToDos.appendChild(WEEKDIV)
        WEEKDIV.appendChild(card1)
    })

    const PROJECTSDIV = createElement('div', {class:'ToDoTasks', id:'projectsDiv'})
    listOfToDos.appendChild(PROJECTSDIV)
    listOfToDos.appendChild(PROJECTSDIV)
    PROJECTSDIV.appendChild(card2)
    PROJECTSDIV.appendChild(card2)
    for(const task of tasks){
    if(task.type === 'projects'){
        displayToDo(task)
        
            //displayToDo(task)
                
        }
    }
    
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
            taskDiv.removeChild(TASKPCON)
            taskDiv.appendChild(TASKPCON)
            taskDiv.appendChild(TASKDCON)
            taskDiv.appendChild(TASKDATECON)
            taskDiv.appendChild(TASKPRIORITYCON)
            taskDiv.appendChild(TRASHCON)
            taskDiv.appendChild(EDITCON)
            currentTask.type = `today`
            setStorage()
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
            currentTask.type = `week`
            setStorage()
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
            currentTask.type = `projects`
            setStorage()
        } else if(currentTask.type !== `` || currentTask.type === `` || currentTask.type === undefined) {
            card3.appendChild(taskDiv)
            taskCards.push(taskDiv)
            taskDiv.appendChild(RADIO)
            taskDiv.appendChild(TASKPCON)
            taskDiv.appendChild(TASKDCON)
            taskDiv.appendChild(TASKDATECON)
            taskDiv.appendChild(TASKPRIORITYCON)
            taskDiv.appendChild(TRASHCON)
            taskDiv.appendChild(EDITCON)
            setStorage()
            //currentTask.type = `homeOnly`
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
            taskDiv.setAttribute(`id`, `${currentTask.chore}`)
            if(currentTask.done === true){
                CLONEDTASKP.style.textDecoration = `line-through`
                CLONEDTASKPRIORITY.style.textDecoration = `line-through`
                RADIO.checked = true
                CLONEDTASKP.setAttribute(`data-para`, `done`)
                CLONEDTASKPRIORITY.setAttribute(`data-pri`, `done`)
                RADIO.setAttribute(`data-task`, `done`)
            } else if (currentTask.done === false){
                CLONEDTASKP.style.textDecoration = `none`
                CLONEDTASKPRIORITY.style.textDecoration = `none`
                RADIO.checked = false
            } 

    }
    TRASHimg.addEventListener('click', (e)=>{
        const currentTarget = e.currentTarget.parentNode.parentNode
        console.log(currentTarget.textContent)
        currentTarget.remove()
        deleteEle(findTask(tasks, currentTarget.textContent))
    })
    EDITimg.addEventListener('click', openEdit)
    RADIO.addEventListener('click', (e)=>{
            const hello = e.currentTarget.nextSibling
            console.log(hello.textContent)
        if(RADIO.checked === true && hello.textContent === currentTask.chore){
            currentTask.done = true
            CLONEDTASKP.style.textDecoration = `line-through`
            CLONEDTASKPRIORITY.style.textDecoration = `line-through`
            console.log(hello.done)
            console.log(tasks)
            setStorage()
        } else {
            currentTask.done = false
            CLONEDTASKP.style.textDecoration = `none`
            CLONEDTASKPRIORITY.style.textDecoration = `none`
            console.log(hello.done)
            console.log(tasks)
            setStorage()
        }
          
            
           
        
    })
  
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

function setStorage(){
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

function getStorage(){
    let keys = Object.keys(localStorage);
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
}
getStorage()

function clear(currentTask){
  delete currentTask.type
}

    
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


            /*RADIO.addEventListener('click', (e)=>{
                tasks.forEach(function(task){
                    if(RADIO !== e.currentTarget){
                        return
                    } else if(RADIO === e.currentTarget && RADIO.Checked === false  ){
                        CLONEDTASKP.setAttribute(`data-para`, `${currentTask.chore}`)
                        CLONEDTASKPRIORITY.setAttribute(`data-pri`, `${currentTask.chore}`)
                        RADIO.setAttribute(`data-task`, `${currentTask.chore}`)
                         task.done = false
                         taskDone(currentTask)
                    } else if(RADIO === e.currentTarget && RADIO.checked === true){
                        CLONEDTASKP.setAttribute(`data-para`, `${currentTask.chore}`)
                        CLONEDTASKPRIORITY.setAttribute(`data-pri`, `${currentTask.chore}`)
                        RADIO.setAttribute(`data-task`, `${currentTask.chore}`)
                        task.done = true
                        taskDone(currentTask)
                        
                    }
                    
                })
                }) */
