import React from 'react';
import { Layout } from 'antd';

import TaskAdd from './TaskAdd';
import TaskList from './TaskList';

const { Content, Header } = Layout;

const App = ()  => {
  return (
    <div>
       <Header ><h1 style={{ color:'white', textAlign: 'center' }}>Список задач </h1></Header>
      <Content
          style={{
            margin: '10px 16px',
            padding: 10,
          }}
        >
        <TaskAdd/>
        <TaskList/>
      </Content>
    </div>
  )
};

export default App;
