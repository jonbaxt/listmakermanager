import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import taskCreator from '../TaskCreator/TaskCreator';
import TaskList from '../TaskList/TaskList';
import './TaskListMain.css';
import { getUserByAxios, createNewTask, getUserTasks } from '../../ducks/reducer';

class TaskListMain extends Component {
    constructor() {
        super()
        this.state = {
            usersTable: [],
            taskListTable: [],
            textAreaEntry: '',
        }
        this.handleTextEnter = this.handleTextEnter.bind(this);
        this.submitNewTask = this.submitNewTask.bind(this);
    }
    componentDidMount() {
        const hardCodedId = 1;
        if (this.props.user.length === 0) {
            this.props.getUserByAxios(hardCodedId);
        }
        if (this.state.taskListTable.length === 0) {
            axios.get(`/api/gettasklists/${hardCodedId}`).then(theTable => {
                this.setState({ taskListTable: theTable.data })
                this.props.getUserTasks(theTable.data)
            }).catch(comeBackErr => { console.log(comeBackErr) })
        }
    }
    componentDidUpdate(prevProps, preState) {
        if (prevProps.usersTasks.length !== this.props.usersTasks.length) {
            this.setState({ taskListTable: this.props.usersTasks })
        }
        if (prevProps.usersTasks.filter(task=> task.completed === false).length !== this.props.usersTasks.filter(task=> task.completed === false).length) {
            this.setState({ taskListTable: this.props.usersTasks })
        }
    }
    handleTextEnter(text) {
        this.setState({ textAreaEntry: text })
    }
    submitNewTask() {
        if (this.props.user.length !== 0) {
            let newTask = taskCreator(this.state.textAreaEntry, this.props.user[0].id)
            this.props.createNewTask(newTask);
            this.setState({ textAreaEntry: '', taskListTable: this.props.usersTasks })
        }
    }
    render() {
        // console.log(this.props.match)
        let decideLink = () => {
            if (this.props.user.length !== 0) {
                return (<Link to={`/completetasks/${this.props.user[0].id}`}><button>Show Completed Tasks</button></Link>)
            }
        }
        return (
            <div className='mainArea'>
                <header className='headerArea border'>
                    <h1 className='hiSize marginLeftIndent' >My Tasks</h1>
                    <div className='buttonSpace'>
                        {/* <button>Enter New Task</button> */}
                        {decideLink()}
                    </div>
                </header>
                <div className='newTaskEntry border' >
                    <h4 className='marginLeftIndentLess'>New Task</h4>
                    <input type='text'
                        className='inputBoxResize'
                        placeholder='new task'
                        value={this.state.textAreaEntry}
                        onChange={(newText) => this.handleTextEnter(newText.target.value)} />
                    <div>
                        <button onClick={() => this.submitNewTask()} >Submit</button>
                    </div>
                </div>
                <div className='taskArea border'>
                    <TaskList giveTaskList={this.state.taskListTable} typeOfTask={'todo'} props={this.props.match} />
                    <div className='footArea'>

                    </div>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        user: state.user,
        usersTasks: state.usersTasks
    }
}
let mapDispatchToProps = {
    getUserByAxios,
    getUserTasks,
    createNewTask,
}
export default connect(mapStateToProps, mapDispatchToProps)(TaskListMain);