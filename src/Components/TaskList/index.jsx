import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';

// import styles from './style.module.scss';
import TaskItem from '../TaskItem';

const { Content } = Layout;

const TaskList = ({
    tasks, deleteTask, updateTask, completeTask,
  }) => {
        return (
            <>
                <Content 
                    className="site-layout-background"
                    style={{
                    display: 'flex',
                    margin: '20px 16px',
                    padding: 20,
                    }}
                >
                    {tasks.map(({ id, text, isCompleted }) => (
                        <TaskItem
                            key={id}
                            isCompleted={isCompleted}
                            text={text}
                            id={id}
                            deleteItem={() => deleteTask(id)}
                            updateItem={(value) => updateTask(value, id)}
                            toggleItem={() => completeTask(id)}
                            />
                        ))} 
                </Content>
            </>
        )
};



TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isCompleted: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  deleteItem: PropTypes.func.isRequired,
  updateItem: PropTypes.func.isRequired,
  toggleItem: PropTypes.func.isRequired,
};

export default TaskList;
