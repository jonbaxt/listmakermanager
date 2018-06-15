const chalk = require('chalk');

module.exports = {
    getUserById: (req, res) => {
        const dbInstance = req.app.get('db');
        const { id } = req.params;
        // console.log(chalk.green('User Id in TaskListUsers', id))
        dbInstance.get_user_by_id([Number(id)]).then( tableRetrieve => {
            res.status(200).send(tableRetrieve)
        }).catch( recErr => { console.log(chalk.bgRed.black('Error while getting the table', recErr))})
    },
    getTasksListsById: (req, res) => {
        const dbInstance = req.app.get('db');
        const { id } = req.params;
        // console.log(chalk.green('User Id in TaskList', id))
        dbInstance.get_tasklist_by_userid([Number(id)]).then( tableRetrieve => {
            res.status(200).send(tableRetrieve)
        }).catch( recErr => { console.log(chalk.bgRed.black('Error while getting the table', recErr))})
    },
    createNewTask: (req, res) => {
        const dbInstance = req.app.get('db');
        const { task, userid } = req.body;
        dbInstance.insert_new_task([task, Number(userid)]).then( updatedTable => res.status(200).send(updatedTable)).catch( err => console.log(err ))
    },
    markTaskComplete: (req, res) => {
        const dbInstance = req.app.get('db');
        const { taskid, id  } = req.params;
        // console.log( taskid)
        // console.log( id)
        dbInstance.mark_task_completed([Number(taskid), Number(id)]).then( updatedTable => res.status(200).send(updatedTable)).catch( err => console.log(err ))
    },
    deleteTaskById: (req, res) => {
        const dbInstance = req.app.get('db');
        const id = req.params.id;
        dbInstance.delete_task_by_id([Number(id)]).then( updatedTable => res.status(200).send(updatedTable)).catch( err => console.log(err ))
    }

};