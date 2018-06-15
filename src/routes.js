import React from 'react';
import { Switch, Route } from 'react-router-dom';

import TaskListMain from './Components/TaskListMain/TaskListMain';
import CompletedTaskMain from './Components/CompletedTaskMain/CompletedTaskMain';

export default (
    <Switch>
        <Route path='/' component={TaskListMain} exact/>
        <Route path='/completetasks/:userid' component={CompletedTaskMain} />
    </Switch>
)