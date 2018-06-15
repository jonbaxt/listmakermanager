import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import TaskList from '../TaskList/TaskList';
import { } from '../../ducks/reducer';
class CompletedTaskMain extends Component {

    componentDidMount() {

    }
    render() {
        // console.log(this.props.match)
        return (
            <div className='mainArea'>
                <header className='headerArea border'>
                    <h1 className='hiSize marginLeftIndent' >My Tasks</h1>
                    <div className='buttonSpace'>
                        {/* <button>Enter New Task</button> */}
                        <Link to='/'><button>Back To Current Tasks</button></Link>
                    </div>
                </header>
                <div className='newTaskEntry border' >
                    <h2 className='marginLeftIndentLess'>My Completed Tasks</h2>
                </div>
                <div className='taskArea border'>
                    <TaskList giveTaskList={this.props.usersTasks} typeOfTask={'done'} props={this.props.match} />
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
        usersTasks: state.usersTasks,
    }
}

export default connect(mapStateToProps, {})(CompletedTaskMain);