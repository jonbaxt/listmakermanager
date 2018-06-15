const express = require('express'),
      bodyParser = require('body-parser'),
      massive = require('massive'),
    //   session = require('express-session'),
      con = require('./controls'),
      chalk = require('chalk');
require('dotenv').config();
const { SERVER_PORT, CONNECTION_STRING } = process.env;
const app = express();

massive(CONNECTION_STRING).then( mySQLDatabase => {
    console.log(chalk.bgYellow.black('Connected to SQL Database'))
    mySQLDatabase.seedfile().then(el => console.log(chalk.bgGreen.yellow('Seed Successful'))).catch( err=> console.log(chalk.bgRed.yellow('Seed Failed')))
    app.set('db', mySQLDatabase)
})
app.use(express.static(`${__dirname}/../build`));
app.use(bodyParser.json());

app.get('/api/gettasklistuser/:id', con.getUserById);
app.get('/api/gettasklists/:id', con.getTasksListsById);
app.post('/api/createnewtask', con.createNewTask);
app.put('/api/markcompleted/:taskid/:id', con.markTaskComplete);
app.delete('/api/deletetask/:id', con.deleteTaskById)

app.listen( SERVER_PORT, () => { console.log(chalk.blue(`Connected on Port ${SERVER_PORT}`)) })