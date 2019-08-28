import React from 'react';
import { Form, Icon, Input, Checkbox } from 'antd';
import { Button, Block } from 'components';

import './Auth.scss';

class Auth extends React.Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <section className='auth'>
                <div className="auth__content">
                    <div className="auth__top">
                        <h2>Войти в аккаунт</h2>
                        <p>Пожалуйста, войдите в свой аккаунт</p>
                    </div>
                    <Block >
                        <Form onSubmit={this.handleSubmit} className="login-form">
                            <Form.Item>
                                {getFieldDecorator('username', {
                                    rules: [{ required: true, message: 'Please input your username!' }],
                                })(
                                    <Input size='large'
                                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="Username"
                                    />,
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: 'Please input your Password!' }],
                                })(
                                    <Input size='large'
                                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        type="password"
                                        placeholder="Password"
                                    />,
                                )}
                            </Form.Item>
                            <Form.Item>
                                <Button type='primary' size='large'>
                                    Войти в аккаунт
                                </Button>
                            </Form.Item>
                            <a className='auth__register-link' href='#'>
                                Зарегистрироваться
                            </a>
                        </Form>
                    </Block>
                </div>
            </section>
        );
    };
};

const WrappedNormalLoginForm = Form.create({ name: 'auth' })(Auth);
export default WrappedNormalLoginForm;