import React, { Component } from 'react';
import { Form, Icon, Input } from 'antd';
import { Link } from 'react-router-dom';

import { Button, Block } from 'components';
import getTop from 'utils/getTop';
import I18N from 'core/translation';

class LoginForm extends Component {

    render() {
        const { blockName } = this.props;
        const { LOGIN_HEADING, LOGIN_TEXT, REGISTERATION_ACTION } = I18N.RU;

        return (
            <div>
                {getTop(blockName, LOGIN_HEADING, LOGIN_TEXT)}
                <Block>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item hasFeedback>
                            <Input
                                prefix={
                                    <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                                }
                                placeholder="Username"
                                size='large'
                            />,
                        </Form.Item>
                        <Form.Item hasFeedback>
                            <Input size='large'
                                prefix={
                                    <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                                }
                                type="password"
                                placeholder="Password"
                                size='large'
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button type='primary' size='large'>
                                {LOGIN_HEADING}
                            </Button>
                        </Form.Item>
                        <Link className='auth__register-link' to='/register'>
                            {REGISTERATION_ACTION}
                        </Link>
                    </Form>
                </Block>
            </div>
        );
    };
};
export default LoginForm;