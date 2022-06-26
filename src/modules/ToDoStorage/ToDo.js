import forms from '../forms'

const ToDo =(chore, description, date, priority, done, type) =>{
    const getChore = () => chore
    const getDesc= () => description
    const getDate = () => date
    const getPriority = () => priority
    const getDone =()=> done
    const getType = () => type;
    return { chore:getChore(), description:getDesc(), date:getDate(), priority:getPriority(), done:getDone(), type:getType()}
}


export default ToDo