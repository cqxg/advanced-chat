import React, { Component } from 'react';
import { Form, Icon, Input } from 'antd';
import { Link } from 'react-router-dom';

import { Button, Block } from 'components';
import getTop from 'utils/getTop';
import I18N from 'core/translation';

class RegisterForm extends Component {

    render() {
        const { blockName } = this.props;
        const { REGISTERATION_HEADING, REGISTERATION_TEXT, REGISTERATION_ACTION, LOGIN_HEADING } = I18N.RU;

        return (
            <div>
                {getTop(blockName, REGISTERATION_HEADING, REGISTERATION_TEXT)}
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
                                {REGISTERATION_ACTION}
                            </Button>
                        </Form.Item>
                        <Link className='auth__register-link' to='/login'>
                            {LOGIN_HEADING}
                        </Link>
                    </Form>
                </Block>
            </div>
        );
    };
};
export default RegisterForm;