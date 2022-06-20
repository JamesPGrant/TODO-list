import forms from '../forms'

const ToDo =(chore, description, date, priority) =>{
    const getChore = () => chore
    const getDesc= () => description
    const getDate = () => date
    const getPriority = () => priority
    return { chore:getChore(), description:getDesc(), date:getDate(), priority:getPriority()}
}


export default ToDo