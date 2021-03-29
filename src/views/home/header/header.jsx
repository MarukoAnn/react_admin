import {Component} from 'react'
import {MenuFoldOutlined, ExpandAltOutlined, BellOutlined, UserOutlined} from '@ant-design/icons'
import {Avatar, Image } from 'antd'

import './header.scss'
class Headers extends Component{

    render(){
        return(
            <div className="header">
                <div className="header-left">
                    <MenuFoldOutlined style={{fontSize: '24px'}} />
                    <h2>ReactAdmin</h2>
                </div>
                <div className="header-right">
                    <ExpandAltOutlined className="icon"/>
                    <BellOutlined className="icon"/>
                    {/* <Badge count={1}> */}
                        <img src="../../../assets/images/img.jpg" alt=""/>
                        <Avatar shape="circle" src={<Image src="../../../assets/images/img.jpg" />} />
                    {/* </Badge> */}
                </div>
            </div>
        )
    }
}

export default Headers;