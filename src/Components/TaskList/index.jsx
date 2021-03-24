import React from 'react';
import { Button, Input, Checkbox, Layout } from 'antd';
import TaskItem from '../TaskItem';

const { Content } = Layout;

const TaskList = () => {
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
                    <TaskItem/>
                </Content>
            </>
        )
};

export default TaskList;