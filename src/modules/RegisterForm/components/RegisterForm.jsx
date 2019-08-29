import React, { Component } from 'react';
import { Form, Icon, Input } from 'antd';
import { Link } from 'react-router-dom';

import { Button, Block } from 'components';

class RegisterForm extends Component {
    render() {
        return (
            <div>
                <div className="auth__top">
                    <h2>Регистрация</h2>
                    <p>Для входа в чат, вам нужно зарегистрироваться</p>
                </div>
                <Block>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item hasFeedback>
                            <Input
                                prefix={
                                    <Icon type="email" style={{ color: 'rgba(0,0,0,.25)' }} />
                                }
                                placeholder="E-Mail"
                                size='large'
                            />,
                        </Form.Item>
                        <Form.Item hasFeedback>
                            <Input size='large'
                                prefix={
                                    <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                                }
                                type="password"
                                placeholder="Ваше имя"
                                size='large'
                            />
                        </Form.Item>
                        <Form.Item hasFeedback>
                            <Input size='large'
                                prefix={
                                    <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                                }
                                type="password"
                                placeholder="Пароль"
                                size='large'
                            />
                        </Form.Item>
                        <Form.Item hasFeedback>
                            <Input size='large'
                                prefix={
                                    <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                                }
                                type="password"
                                placeholder="Повторите пароль"
                                size='large'
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button type='primary' size='large'>
                                Зарегистрироваться
                            </Button>
                        </Form.Item>
                        <Link className='auth__register-link' to='/login'>
                            Войти в аккаунт
                        </Link>
                    </Form>
                </Block>
            </div>
        );
    };
};
export default RegisterForm;