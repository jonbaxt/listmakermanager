import React from 'react';
import { connect } from 'react-redux';
import { deleteTaskById, markTaskComplete } from '../../ducks/reducer';
import loadingHOC from '../HigherOrderComp/LoadingHOC';
import CollapseRP from '../HigherOrderComp/CollapseRP';
// import FontAwesomeIcon from '@fortawesome/react-fontawesome';
// import faWrench from '@fortawesome/fontawesome-free-solid/faWrench'
// import { faTimes } from '@fortawesome/fontawesome-free-solid';
// import faTimesCircle from '@fortawesome/fontawesome-free-solid/faTimesCircle'
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
        <div className='customConstructBorder TaskAreaMainArea'>
        <div className='individualTaskArea '>
            <div className='theTask'>
            {divMe}
            <p>{props.giveTask.task}</p>
            {/* <p>Assigned: {props.giveTask}</p> */}
            </div>
            <div className='theButtons'>
            {/* <span className='pColor' onClick={() => props.deleteTaskById(props.giveTask.taskid)}>
            <FontAwesomeIcon  icon={faTimesCircle}  />
            </span> */}
            <button onClick={() => props.deleteTaskById(props.giveTask.taskid)}>Delete</button>
            </div>
        </div>
        <CollapseRP title={'Edit'} >
            {(styles) =>
                    <div style={ styles }>
                        {/* {console.log(styles)} */}
                        <p>Edit Options</p>
                        <p>Description: {props.giveTask.description !== null ? props.giveTask.description: 'No description currently'}</p>
                        <input type='text' />
                        
                    </div>
            }
            </CollapseRP>
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
export default loadingHOC(connect(mapStateToProps, mapDispatchToProps)(Task));