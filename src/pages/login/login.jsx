import React from 'react';
import logo from '../../assets/images/logo.png'
import { Form, Input, Button } from 'antd'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import './login.less'
const { Item } = Form

const Login = () => {
    const [form] = Form.useForm()

    const handleSubmit = () => {
        form.validateFields().then(values => {
            console.log(values) 
        })
    }

      const validatePwd = (rule, value, callback) => {
        if(!value) {
          callback('密码必须输入')
        } else if (value.length<4) {
          callback('密码长度不能小于4位')
        } else if (value.length>12) {
          callback('密码长度不能大于12位')
        } else if (!/^[a-zA-Z0-9_]+$/.test(value)) {
          callback('密码必须是英文、数字或下划线组成')
        } else {
          callback() // 验证通过
        }
        // callback('xxxx') // 验证失败, 并指定提示的文本
    }

    return ( 
        <div className="login">
            <header className="login-header">
                <img src={logo} alt="logo"/>
                <h1>后台管理系统</h1>
            </header>
            <section className="login-content">
                <h2>用户登录</h2>
                <Form form={form} name="control-hooks" onFinish={handleSubmit} className="login-form">
                    <Item 
                        name="username"
                        rules={[
                            { required: true, whitespace: true, message: '用户名必须输入' },
                            { min: 4, message: '用户名至少4位' },
                            { max: 12, message: '用户名最多12位' },
                            { pattern: /^[a-zA-Z0-9_]+$/, message: '用户名必须是英文、数字或下划线组成' },
                        ]}>
                        <Input prefix={<UserOutlined style={{color: 'rgba(0,0,0,.25)'}}/>} placeholder="用户名"/>
                    </Item>
                    <Item name="password" rules={[{validator: validatePwd}]}>
                        <Input
                            prefix={<LockOutlined  style={{ color: 'rgba(0,0,0,.25)' }}/>}
                            type="password"
                            placeholder="密码"
                        />
                    </Item>
                    <Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            登录
                        </Button>
                        
                    </Item>
                </Form>
            </section>
                    
        </div>
    ); 
}
 
export default Login