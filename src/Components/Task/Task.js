import React from 'react';
import { connect } from 'react-redux';
import { deleteTaskById, markTaskComplete } from '../../ducks/reducer';
import './Task.css';

function Task(props) {
    // console.log(props.match)
    // console.log(props.user)
    let divMe = '';
    if(props.giveTask.completed !== true){
       divMe= ( <input type='checkbox' id='checker' 
        onChange={() => {props.markTaskComplete(props.giveTask.taskid, props.user[0].id)}}/> )
    }
    return (
        <div className='individualTaskArea customConstructBorder'>
            <div className='theTask'>
            {divMe}
            <p>{props.giveTask.task}</p>
            {/* <p>Assigned: {props.giveTask}</p> */}
            </div>
            <div className='theButtons'>
            <button>Edit</button>
            <button onClick={() => props.deleteTaskById(props.giveTask.taskid)}>Delete</button>
            </div>
        </div>
    )
}
function mapStateToProps(state){
    return {
        user: state.user,
    }
}
let mapDispatchToProps = {
    deleteTaskById,
    markTaskComplete,
}
export default connect(mapStateToProps, mapDispatchToProps)(Task);