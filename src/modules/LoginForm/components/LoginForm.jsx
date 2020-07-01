import React, {Fragment} from 'react'
import {LockOutlined, UserOutlined} from '@ant-design/icons'
import {Form, Input} from 'antd'
import {Link} from 'react-router-dom'
import {Block, Button} from '../../../components'

const LoginForm = (props) => {
    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
    } = props

    return (
        <Fragment>
            <div className='auth__top'>
                <h2>Войти в аккаунт</h2>
                <p>Пожалуйста войдите в свой аккаунт</p>
            </div>
            <Block>
                <Form
                    onSubmit={handleSubmit}
                    className="login-form"
                >
                    <Form.Item
                        validateStatus={
                            !touched.username
                                ? ''
                                : errors.username ? 'error' : 'success'
                        }
                        help={!touched.username ? '' : errors.username}
                        hasFeedback
                    >
                        <Input
                            id='username'
                            size='large'
                            prefix={<UserOutlined className="site-form-item-icon" />}
                            placeholder="Логин"
                            value={values.username}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </Form.Item>
                    <Form.Item
                        validateStatus={
                            !touched.password
                                ? ''
                                : errors.password ? 'error' : 'success'
                        }
                        help={!touched.password ? '' : errors.password}
                        hasFeedback
                    >
                        <Input
                            id='password'
                            size='large'
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            placeholder="Пароль"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button
                            onClick={handleSubmit}
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