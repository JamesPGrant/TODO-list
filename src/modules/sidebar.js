import createElement from '../createElement'

function sidebar(){
    const container = document.querySelector('.container')
    const sidebarDiv = createElement('div', {class:'sidebar', id:'sidebar'})
    const Today = createElement('button', {class:'Today', id:'TODOWhen'})
    const Week = createElement('button', {class:'Week', id:'TODOWhen'})
    const Projects = createElement('button', {class:'Projects', id:'TODOWhen'})
    container.appendChild(sidebarDiv)
    sidebarDiv.appendChild(Today)
    sidebarDiv.appendChild(Week)
    sidebarDiv.appendChild(Projects)
    Today.textContent = `Today`
    Week.textContent = `Week`
    Projects.textContent = `Projects`
    return sidebarDiv
}

export default sidebar

//if id === today if id === week if id === project ect. append blah blah