import forms from '../forms'

const ToDo =(chore, description, date, priority, done) =>{
    const getChore = () => chore
    const getDesc= () => description
    const getDate = () => date
    const getPriority = () => priority
    const getDone =()=> done
    return { chore:getChore(), description:getDesc(), date:getDate(), priority:getPriority(), done:getDone()}
}


export default ToDo