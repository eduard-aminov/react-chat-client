import React, {Fragment, useEffect} from 'react'
import {LockOutlined, UserOutlined, MailOutlined, InfoCircleOutlined} from '@ant-design/icons'
import {Form, Input} from 'antd'
import {Link} from 'react-router-dom'
import {Block, Button} from '../../../components'
import {getErrorMessage, openNotification} from '../../../utils'

const RegisterForm = (props) => {
    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        isRegistered,
        isFetching,
        authErrors
    } = props

    useEffect(() => {
        if (!authErrors.length) {
            return
        }
        const errors = getErrorMessage(authErrors)

        for (const message of errors) {
            openNotification('error', 'Ошибка', message)
        }
    }, [authErrors])

    return (
        <Fragment>
            {!isRegistered ? (
                    <Fragment>
                        <div className='auth__top'>
                            <h2>Регистрация</h2>
                            <p>Для входа в чат, Вам нужно зарегистрироваться</p>
                        </div>
                        <Block>

                            <Form
                                onSubmit={handleSubmit}
                                className="login-form"
                            >
                                <Form.Item
                                    validateStatus={
                                        !touched.firstName
                                            ? ''
                                            : errors.firstName ? 'error' : 'success'
                                    }
                                    help={!touched.firstName ? '' : errors.firstName}
                                    hasFeedback
                                >
                                    <Input
                                        id='firstName'
                                        size='large'
                                        prefix={<UserOutlined className="site-form-item-icon" />}
                                        placeholder="Имя"
                                        value={values.firstName}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </Form.Item>
                                <Form.Item
                                    validateStatus={
                                        !touched.lastName
                                            ? ''
                                            : errors.lastName ? 'error' : 'success'
                                    }
                                    help={!touched.lastName ? '' : errors.lastName}
                                    hasFeedback
                                >
                                    <Input
                                        id='lastName'
                                        size='large'
                                        prefix={<UserOutlined className="site-form-item-icon" />}
                                        placeholder="Фамилия"
                                        value={values.lastName}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </Form.Item>
                                <Form.Item
                                    validateStatus={
                                        !touched.email
                                            ? ''
                                            : errors.email ? 'error' : 'success'
                                    }
                                    help={!touched.email ? '' : errors.email}
                                    hasFeedback
                                >
                                    <Input
                                        id='email'
                                        size='large'
                                        prefix={<MailOutlined className="site-form-item-icon" />}
                                        placeholder="Email"
                                        value={values.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </Form.Item>
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
                                    <Input.Password
                                        id='password'
                                        size='large'
                                        prefix={<LockOutlined className="site-form-item-icon" />}
                                        type="password"
                                        placeholder="Пароль"
                                        value={values.password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </Form.Item>
                                <Form.Item
                                    validateStatus={
                                        !touched.password2
                                            ? ''
                                            : errors.password2 ? 'error' : 'success'
                                    }
                                    help={!touched.password2 ? '' : errors.password2}
                                    hasFeedback
                                >
                                    <Input.Password
                                        id='password2'
                                        size='large'
                                        prefix={<LockOutlined className="site-form-item-icon" />}
                                        type="password"
                                        placeholder="Повторите пароль"
                                        value={values.password2}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </Form.Item>
                                <Form.Item>
                                    <Button
                                        onClick={handleSubmit}
                                        size='large'
                                        type='primary'
                                        disabled={isFetching}
                                    >
                                        Зарегистрироваться
                                    </Button>
                                </Form.Item>
                                <Link className='auth__register-link' to={'/login'}>
                                    Войти в аккаунт
                                </Link>
                            </Form>
                        </Block>
                    </Fragment>
                )
                : (
                    <div className='auth__success-block'>
                        <div>
                            <InfoCircleOutlined />
                        </div>
                        <h1>Подтвердите свой аккаунт</h1>
                        <p>На ваш почтовый ящик отправлено письмо для активации аккаунта.</p>
                    </div>
                )
            }
        </Fragment>
    )
}

export default RegisterForm