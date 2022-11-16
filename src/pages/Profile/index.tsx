import { memo } from 'react';

import { Button, Form, Input, message, Typography, Row, Col, Card } from 'antd';

import { useStoreActions, useStoreState } from '@/hooks/useStore';
import { User } from '@/interfaces/user';

function Profile() {
  const { userData } = useStoreState(state => state?.userStore);
  const { setUser } = useStoreActions(actions => actions?.userStore);

  const handleSetUser = (user: User) => setUser(user);

  const onFinish = (values: User) => {
    handleSetUser({ ...userData, ...values });
    message.success('User updated');
  };

  return (
    <div>
      <Typography.Title level={2}>Profile</Typography.Title>

      <br />

      <Row gutter={50}>
        <Col xs={24} sm={16}>
          <Form name='basic' layout='vertical' onFinish={onFinish} autoComplete='off'>
            <Form.Item label='Name' name='name' rules={[{ required: true, message: 'Please input your name' }]}>
              <Input placeholder={userData?.name} />
            </Form.Item>

            <Form.Item
              label='E-mail'
              name='email'
              rules={[
                { required: true, message: 'Please input your e-mail' },
                { type: 'email', message: 'Please input valid e-mail' }
              ]}
            >
              <Input placeholder={userData?.email} />
            </Form.Item>

            <Form.Item>
              <Button type='primary' htmlType='submit'>
                Update
              </Button>
            </Form.Item>
          </Form>
        </Col>

        <Col xs={24} sm={8}>
          <Card title='Current user'>
            <p>
              <b>ID:</b> {userData?.id}
            </p>
            <p>
              <b>Name:</b> {userData?.name}
            </p>
            <p>
              <b>E-mail:</b> {userData?.email}
            </p>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default memo(Profile);
