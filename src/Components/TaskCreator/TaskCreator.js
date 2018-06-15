export default function TaskCreator(newTask, userid){
    let compiledTask = {
        task: newTask,
        userid: userid
    }
    return compiledTask;
}