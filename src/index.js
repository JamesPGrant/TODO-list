import createElement from './createElement'
import heading from './modules/heading'
import sidebar from './modules/sidebar'
import forms from './modules/forms'
import '../styles/main.scss'
import popUp from './modules/popUp'
import modal from './modules/modal'
import addToDo from './modules/ToDoStorage/setToDo'

function events(e){
    const listOfToDos = document.querySelector('.listOfToDos')
    const Today = document.querySelector('.Today')
    const Week = document.querySelector('.Week')
    const Projects = document.querySelector('.Projects')
    const priority = document.querySelector('#priority')
    Today.addEventListener('click', () =>{
        listOfToDos.replaceChildren();
    })
    Week.addEventListener('click',()=>{
        listOfToDos.replaceChildren();
    })
    Projects.addEventListener('click', ()=>{
        listOfToDos.replaceChildren();
    })
    
}

heading()
sidebar()
modal()
popUp()
forms()
addToDo()
events()

