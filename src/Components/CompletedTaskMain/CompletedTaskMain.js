import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import TaskList from '../TaskList/TaskList';
import { searchUserTasks  } from '../../ducks/reducer';
class CompletedTaskMain extends Component {
    constructor() {
        super()
        this.state = {
            usersTable: [],
            taskListTable: [],
            textAreaEntry: '',
            searchAreaEntry: '',
        }
        this.handleSearchEnter = this.handleSearchEnter.bind(this);
        this.submitNewSearch = this.submitNewSearch.bind(this);
    }
    handleSearchEnter(text) {
        this.setState({ searchAreaEntry: text })
    }
    submitNewSearch() {
        if (this.props.user.length !== 0) {
            this.props.searchUserTasks(this.state.searchAreaEntry, this.props.user[0].id);
            this.setState({ searchAreaEntry: ''})
        }
    }
    // componentDidMount() {

    // }
    render() {
        // console.log(this.props.match)
        return (
            <div className='mainArea'>
                <header className='headerArea border'>
                    <h1 className='hiSize marginLeftIndent' >My Completed Tasks</h1>
                    <div className='buttonSpace'>
                        <Link to='/'><button>Back To Current Tasks</button></Link>
                    </div>
                </header>
                <div className='newTaskEntry border' >
                <input type='text'
                        className='inputBoxSearchResize '
                        placeholder='search tasks'
                        value={this.state.searchAreaEntry}
                        onChange={(newText) => this.handleSearchEnter(newText.target.value)} />
                    <div>
                        <button onClick={() => this.submitNewSearch()} >Search</button>
                    </div>
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

export default connect(mapStateToProps, { searchUserTasks  })(CompletedTaskMain);