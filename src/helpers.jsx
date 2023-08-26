export const selectTasks = (tasks, projectId) => {

    switch(projectId){
        case 0:
            return tasks.filter(isToday);
        case -1:
            return tasks.filter((task) => task.scheduled);
        case -2:
            return tasks;
        case -3:
            return tasks.filter((task) => task.completed);
        default:
            return tasks.filter((task) => task.projectId === projectId);

    }
}

function isToday(task) {
    let string = task.content;
    console.log(string);
    if(!task.scheduled) return false;
    const today = new Date();
    let date = task.dueDate.toDate();
    
    return date.getDate() === today.getDate() &&
           date.getMonth() === today.getMonth() &&
           date.getFullYear() === today.getFullYear();
}



export const countTasks = (tasks, projectId) => {

    switch(projectId){
        case 0:
            return tasks.filter(isToday).length;
        case -1:
            return tasks.filter((task) => task.scheduled).length;
        case -2:
            return tasks.length;
        case -3:
            return tasks.filter((task) => task.completed).length;
        default:
            return tasks.filter((task) => task.projectId === projectId).length;

    }
}