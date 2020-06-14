import React, {Fragment} from 'react'
import {LockOutlined, UserOutlined} from '@ant-design/icons'
import {Form, Input} from 'antd'
import {Link} from 'react-router-dom'
import {Block, Button} from '../../../components'

const LoginForm = () => {
    return (
        <Fragment>
            <div className='auth__top'>
                <h2>Войти в аккаунт</h2>
                <p>Пожалуйста войдите в свой аккаунт</p>
            </div>
            <Block>
                <Form
                    className="login-form"
                >
                    <Form.Item>
                        <Input
                            size='large'
                            prefix={<UserOutlined className="site-form-item-icon" />}
                            placeholder="Username"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Input
                            size='large'
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button
                            size='large'
                            type='primary'
                        >
                            Войти в аккаунт
                        </Button>
                    </Form.Item>
                    <Link className='auth__register-link' to={'/register'}>
                        Зарегистрироваться
                    </Link>
                </Form>
            </Block>
        </Fragment>
    )
}

export default LoginForm