import {Component} from 'react'
import './login.scss'
import { Form, Input, Button, Checkbox } from 'antd';
class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }
    layout = {
        labelCol: { span: 6 },
        wrapperCol: { span: 16 },
    };
    // 完成 
    onFinish = () => {
        console.log('完成');
        console.log(this.props.history)
        this.props.history.push('/home/main')
    }

    // 未填满
    onFinishFailed = () => {
        console.log(123)
    }

    render(){
        return (
            <div className="login" >
                <div className="from">
                    <div className="lf-title">
                        <h2>后台管理</h2>
                    </div>
                    <div className="lf-content">
                        <Form
                            name="basic"
                            {...this.layout}
                            initialValues={{remember: true}}
                            onFinish={this.onFinish}
                            onFinishFailed={this.onFinishFailed}
                        >
                            <Form.Item
                                className="input"
                                label="用户名"
                                name="username"
                                rules={[{required: true, message: 'Please input your username!'}]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                className="input"
                                label="密 码"
                                name="password"
                                rules={[{required: true, message: 'please input your password'}]}
                            >
                                <Input.Password />
                            </Form.Item>
                            <Form.Item
                                className="check"
                                colon={false}
                            >
                                <Checkbox>记住密码</Checkbox>
                            </Form.Item>
                            <Form.Item
                                label="  "
                                colon={false}
                            >
                                <Button type="primary" htmlType="submit" block>
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;