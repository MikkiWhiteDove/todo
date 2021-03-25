import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../Reducers/index';
import { Layout } from 'antd';

import TaskAdd from './TaskAdd';
import TaskList from './TaskList';

const { Content, Header } = Layout;

const localStorageMiddleware = ({ getState }) => next => action => {
  const res = next(action);
  if ([action.type].includes(res.type)) {
    localStorage.setItem('data', JSON.stringify(getState().todos));
  }
  return res;
};

export const store = createStore(rootReducer, applyMiddleware(localStorageMiddleware));

const App = ()  => {
  return (
    <div>
      <Provider store={store}>
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
      </Provider>
    </div>
  )
};

export default App;
