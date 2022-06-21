function deleteTask(){
    const TRASHIMG = document.querySelector('.trash')
    const TASKDIV = document.querySelector('.taskDiv')
    const arrayTask = Array.from(TASKDIV)
    TRASHIMG.getAttribute(`id`)
    
    for(let i =0; i< tasks.length; i+=1){
            TASKDIV.removeAttribute(`id`)
            TRASHIMG.removeAttribute('id')
            TRASHIMG.setAttribute(`id`, `${i}`)
            TASKDIV.setAttribute(`id`, `${i}`)
        }
   
}

