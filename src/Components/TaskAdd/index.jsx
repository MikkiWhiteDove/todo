import React from 'react';
import { Input, Button, Layout } from 'antd';
const { Content } = Layout;

const TaskAdd = () => {
        return (
            <Content 
        className="site-layout-background"
        style={{
          display: 'flex',
          margin: '20px 16px',
          padding: 20,
        }}
      >
          <Input />
          <Button type="submit">Добаить</Button>
       </Content>
        )
};

export default TaskAdd;