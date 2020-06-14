import React, {Fragment, useState} from 'react'
import {LockOutlined, UserOutlined, MailOutlined, InfoCircleOutlined} from '@ant-design/icons'
import {Form, Input} from 'antd'
import {Link} from 'react-router-dom'
import {Block, Button} from '../../../components'

const RegisterForm = () => {
    const [isRegistered] = useState(false)
    return (
        <Fragment>
            <div className='auth__top'>
                <h2>Регистрация</h2>
                <p>Для входа в чат, Вам нужно зарегистрироваться</p>
            </div>
            <Block>
                {!isRegistered ? (
                        <Form
                            className="login-form"
                        >
                            <Form.Item>
                                <Input
                                    size='large'
                                    prefix={<MailOutlined className="site-form-item-icon" />}
                                    placeholder="Email"
                                />
                            </Form.Item>
                            <Form.Item>
                                <Input
                                    size='large'
                                    prefix={<UserOutlined className="site-form-item-icon" />}
                                    placeholder="Ваше имя"
                                />
                            </Form.Item>
                            <Form.Item>
                                <Input
                                    size='large'
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    type="password"
                                    placeholder="Пароль"
                                />
                            </Form.Item>
                            <Form.Item>
                                <Input
                                    size='large'
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    type="password"
                                    placeholder="Повторите пароль"
                                />
                            </Form.Item>
                            <Form.Item>
                                <Button
                                    size='large'
                                    type='primary'
                                >
                                    Зарегистрироваться
                                </Button>
                            </Form.Item>
                            <Link className='auth__register-link' to={'/login'}>
                                Войти в аккаунт
                            </Link>
                        </Form>
                    )
                    : (<div className='auth__success-block'>
                        <div>
                            <InfoCircleOutlined />
                        </div>
                        <h2>Подтвердите свой аккаунт</h2>
                        <p>На ваш почтовый ящик отправлено письмо для активации аккаунта.</p>
                    </div>)
                }
            </Block>
        </Fragment>
    )
}

export default RegisterForm