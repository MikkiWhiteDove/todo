import React from 'react';
import { Button, Input, Checkbox, Layout } from 'antd';

const { Content } = Layout;

const TaskItem = () => {
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
                
                <Input
                    disabled="true"
                    type="text"
                />
                <Button type="button" 
                >Check</Button>
                <Button type="button" 
                // onClick={deleteItem}
                >Delete</Button>
            </Content>
            </>
        )
};
export default TaskItem;