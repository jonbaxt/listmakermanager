import axios from 'axios';

const initialState = {
    user: [],
    usersTasks: [],

}
const FULFILLED = '_FULFILLED';
const GET_USER_AXIOS = 'GET_USER_AXIOS';
const GET_USER_TASKS = 'GET_USER_TASKS';
const CREATE_NEW_TASK = 'CREATE_NEW_TASK';
const MARK_TASK_COMPLETE = 'MARK_TASK_COMPLETE';
const DELETE_TASK_BY_ID = 'DELETE_TASK_BY_ID';


export function getUserByAxios(userId) {
    let theUser = axios.get(`/api/gettasklistuser/${userId}`).then(userData => {
        return userData.data
    }).catch(err => console.log(err))
    return {
        type: GET_USER_AXIOS,
        payload: theUser
    }
}
export function getUserTasks(tasks) {
    return {
        type: GET_USER_TASKS,
        payload: tasks
    }
}
export function createNewTask(newTask) {
    let tableComeBack = axios.post('/api/createnewtask', newTask).then(updatedTable => { return updatedTable.data }).catch(err => console.log(err))
    return {
        type: CREATE_NEW_TASK,
        payload: tableComeBack
    }
}
export function markTaskComplete(taskid, userid) {
let updatedTable = axios.put(`/api/markcompleted/${taskid}/${userid}`)
.then(updatedTable => { return updatedTable.data }).catch(err => console.log(err))
// console.log(updatedTable)
    return {
        type: MARK_TASK_COMPLETE,
        payload: updatedTable
    }
}

export function deleteTaskById(taskId){
    let formattedTable = axios.delete(`/api/deletetask/${taskId}`).then( updatedTable => updatedTable.data).catch(err => console.log(err))

    return {
        type: DELETE_TASK_BY_ID,
        payload: formattedTable
    }
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER_AXIOS + FULFILLED:
            return Object.assign({}, state, { user: action.payload })
        case GET_USER_TASKS: 
            return Object.assign({}, state, { usersTasks: action.payload })
        case CREATE_NEW_TASK + FULFILLED:
            return Object.assign({}, state, { usersTasks: action.payload })
        case MARK_TASK_COMPLETE + FULFILLED:
            return Object.assign({}, state, { usersTasks: action.payload })
        case DELETE_TASK_BY_ID + FULFILLED:
            return Object.assign({} , state, { usersTasks: action.payload })
        default:
            return state;
    }
}