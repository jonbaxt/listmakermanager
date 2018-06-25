import React from 'react';
import Task from '../Task/Task';
import './TaskList.css';

class TaskList extends React.Component {
    render() {
        // console.log(this.props.props)
        let goThroughTasks = '';
        if (this.props.typeOfTask === 'todo') {
            goThroughTasks = this.props.giveTaskList.filter(task => task.completed === false ).map(task => { return (<Task giveTask={task} loading={this.props.giveTaskList.length === 0} key={task.taskid} match={this.props.props} />) })
        } else if (this.props.typeOfTask === 'done') {
            goThroughTasks = this.props.giveTaskList.filter(task => task.completed === true ).map(task => { return (<Task giveTask={task} loading={this.props.giveTaskList === 0} key={task.taskid}  match={this.props.props} />) })
        }
        return (
            <div className='taskListMainAreaForList'>
                {/* <h2>Task List Show</h2> */}
                <div className='taskListBodyForList border'>
                    {goThroughTasks}
                </div>
            </div>
        )
    }
}

export default TaskList;