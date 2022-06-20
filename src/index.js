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

let tasks = [];
heading()
sidebar()
modal()
popUp()
forms()

const submitBtn = document.querySelector('.submit')
const listOfToDos = document.querySelector('.listOfToDos')
const card = createElement('div', {class:'TaskCard'})
const card1 = createElement('div', {class:'TaskCard'})
const card2 = createElement('div', {class:'TaskCard'})
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
        submitBtn.addEventListener('click', displayToDo)
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
    const task = ToDo(ToDoVal.value, ToDoDescVal.value,dateVal.value, priorityVal.value)
     tasks.push(task)
    console.log(tasks)
    return task
}
events()

function displayToDo(task){
    //setup modal that pops up when edit img is clicked
    //setup different divs first than set up modal for less confusion
    //TodayDiv, WeekDiv, ProjectsDiv
    //append specific div and then append Home
    //if div.id === today, week, projects append that div
        const TODAYDIV = document.querySelector('#todayDiv')
        const WEEKDIV = document.querySelector('#weekDiv')
        const PROJECTSDIV = document.querySelector('#projectsDiv')
        const CLONEDCARD = card.cloneNode(true)
        const CLONEDTASKP = taskP.cloneNode(true)
        const CLONEDTASKD = taskD.cloneNode(true)
        const CLONEDTASKDATE = taskDate.cloneNode(true)
        const CLONEDTASKPRIORITY =taskPriority.cloneNode(true)
        const TASKPCON = createElement('div')
        const TASKDCON = createElement('div')
        const TASKDATECON = createElement('div')
        const TASKPRIORITYCON = createElement('div')
        const TRASHCON = createElement('div')
        const EDITCON = createElement('div')
        const TRASHimg = createElement('img', {class:'trash', id:'Icon', src: `${del.src}`})
        const EDITimg  = createElement('img', {class:'edit', id:'Icon', src:`${edit.src}`})
        for(let i = 0; i<tasks.length; i+=1){
            //div for TASKSCARDDIV
            //NOTES IS GONNA HAVE DIFFERENT FUNCTIONALITY DIFFERENT FROM TODODIVS
        if(listOfToDos.firstChild.id === `todayDiv`){
            card.appendChild(TASKPCON)
            card.appendChild(TASKDCON)
            card.appendChild(TASKDATECON)
            card.appendChild(TASKPRIORITYCON)
            card.appendChild(TRASHCON)
            card.appendChild(EDITCON)
        } else if(listOfToDos.firstChild.id ===  `weekDiv`){
            card1.appendChild(TASKPCON)
            card1.appendChild(TASKDCON)
            card1.appendChild(TASKDATECON)
            card1.appendChild(TASKPRIORITYCON)
            card1.appendChild(TRASHCON)
            card1.appendChild(EDITCON)
        } else if(listOfToDos.firstChild.id === `projectsDiv`){
            card2.appendChild(TASKPCON)
            card2.appendChild(TASKDCON)
            card2.appendChild(TASKDATECON)
            card2.appendChild(TASKPRIORITYCON)
            card2.appendChild(TRASHCON)
            card2.appendChild(EDITCON)
        }
            TASKPCON.appendChild(CLONEDTASKP) 
            TASKDCON.appendChild(CLONEDTASKD)
            TASKDATECON.appendChild(CLONEDTASKDATE)
            TASKPRIORITYCON.appendChild(CLONEDTASKPRIORITY)
            TRASHCON.appendChild(TRASHimg)
            EDITCON.appendChild(EDITimg)
            CLONEDTASKP.textContent = `${tasks[i].chore}`
            CLONEDTASKD.textContent = `${tasks[i].description}`
            CLONEDTASKDATE.textContent = `${tasks[i].date}`
            CLONEDTASKPRIORITY.textContent = `${tasks[i].priority}`
    }
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



