import React from 'react';
import Task from '../Task/Task';
import './TaskList.css';

export default class TaskList extends React.Component {
    render() {
        // console.log(this.props.props)
        let goThroughTasks = '';
        if (this.props.typeOfTask === 'todo') {
            goThroughTasks = this.props.giveTaskList.filter(task => task.completed === false ).map(task => { return (<Task giveTask={task} key={task.taskid} match={this.props.props} />) })
        } else if (this.props.typeOfTask === 'done') {
            goThroughTasks = this.props.giveTaskList.filter(task => task.completed === true ).map(task => { return (<Task giveTask={task} key={task.taskid}  match={this.props.props} />) })
        }
        return (
            <div className='taskListMainAreaForList border'>
                {/* <h2>Task List Show</h2> */}
                <div className='taskListBodyForList border'>
                    {goThroughTasks}
                </div>
            </div>
        )
    }
}