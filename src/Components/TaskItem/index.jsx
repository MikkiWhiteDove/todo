import React from 'react';
import PropTypes from 'prop-types';
// import classnames from 'classnames';
// import styles from './style.module.css';
import { Button, Input, Layout } from 'antd';

const { Content } = Layout;


const TaskItem = ({
  deleteTask, completeTask, updateTask, isCompleted, text,
}) => {
  function handleChange(e) {
    updateTask(e.target.value);
  }

  return (
    <Content 
                className="site-layout-background"
                style={{
                display: 'flex',
                margin: '20px 16px',
                padding: 20,
                }}
            >
      <Input
        type="text"
        disabled="true"
        value={text}
        onChange={handleChange}
      />
      <Button onClick={completeTask}>Complete</Button>
      <Button onClick={deleteTask}>Delete</Button>
      </Content >
  );
};

TaskItem.propTypes = {
  deleteItem: PropTypes.func.isRequired,
  toggleItem: PropTypes.func.isRequired,
  updateItem: PropTypes.func.isRequired,
  isCompleted: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default TaskItem;