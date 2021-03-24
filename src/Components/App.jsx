import React from 'react';
import TaskAdd from './TaskAdd';
import TaskItem from './TaskItem';
import TaskList from './TaskList';
// import './App.scss';


// import { Home } from './home/index'

const App = ()  => {
  return (
    <div>
        <TaskAdd/>
        <TaskList/>
    </div>
  )
};

export default App;
