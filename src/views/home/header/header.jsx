import {Component} from 'react'
import {
    MenuFoldOutlined, 
    FullscreenOutlined, 
    BellOutlined, 
    FullscreenExitOutlined,
    CaretDownOutlined,
    MenuUnfoldOutlined
} from '@ant-design/icons'
import {Avatar, Image, Badge, Dropdown, Menu} from 'antd';
import {withRouter} from 'react-router-dom'
import PubSub from 'pubsub-js'
import userLogo from '../../../assets/images/img.jpg'
import './header.scss'
class Headers extends Component{

    constructor(props){
        super(props);
        this.state = {
            image: userLogo,
            fullscreen: false,
            isChangedSidebarWidth: true
        }
    }


	viewMenu = (
        <Menu onClick={({key}) => {this.c_menusClick(key)}}>
            <Menu.Item key="1">项目仓库</Menu.Item>
            <Menu.Item key="2">退出登录</Menu.Item>
        </Menu>
    )
    // 切换事件
    c_menusClick = (key) => {
        console.log(this.props);
        switch(key){
            case '1':
            	window.open('https://github.com/moonshinean/react_admin');
            	break;
            case '2':
            	this.props.history.push('/login');
            	break;
            default:
                break;
        }
    }
    // 全屏点击事件
    c_handleFullScreen = () => {
        console.log('123')
        let element = document.documentElement;
        if(this.state.fullscreen){
            if(document.exitFullscreen){
                document.exitFullscreen();
            }else if (document.webkitCancelFullScreen){
                document.webkitCancelFullScreen();
            }else if (document.mozCancelFullScreen){
                document.mozCancelFullScreen();
            }else if(document.msExitFullscreen){
                document.msExitFullscreen();
            }
        }else {
            if (element.requestFullscreen){
                element.requestFullscreen();
            }else if(element.webkitRequestFullScreen){
                element.webkitRequestFullScreen();
            }else if(element.mozRequestFullScreen){
                element.mozRequestFullScreen();
            }else if(element.msRequestFullscreen){
                element.msRequestFullscreen();
            }
        }

        this.setState({
            fullscreen: !this.state.fullscreen
        })
    }

    // 侧边栏缩进点击事件
    c_changeSidebarWidthShow = () => {
        // 发布消息
        PubSub.publish('isChangeSidebarWidth', this.state.isChangedSidebarWidth)
        this.setState({
            isChangedSidebarWidth: !this.state.isChangedSidebarWidth
        })
    }

    render(){
        return(
            <div className="header">
                <div className="header-left">
                    {
                        this.state.isChangedSidebarWidth? 
                        <MenuFoldOutlined style={{fontSize: '24px'}} onClick={this.c_changeSidebarWidthShow} />
                        : <MenuUnfoldOutlined style={{fontSize: '24px'}} onClick={this.c_changeSidebarWidthShow} />
                    }
                    
                    <h2>ReactAdmin</h2>
                </div>
                <div className="header-right">
                    {
                        !this.state.fullscreen ? <FullscreenOutlined  className="icon" onClick={this.c_handleFullScreen}/> :
                        <FullscreenExitOutlined  className="icon" onClick={this.c_handleFullScreen}/>
                    }
                    <Badge dot offset={[-14, 0]} >
                        <BellOutlined className="icon" style={{color: 'white', fontSize: '22px'}}/>
                    </Badge>
                    
                    <Badge count={1} size={8}>
                        <Avatar shape="circle" size={40} alt={'user'} src={<Image src={this.state.image} />} />
                    </Badge>
                    <Dropdown overlay={this.viewMenu}>
                        <span style={{marginLeft: '1vw'}}>
                            admin <CaretDownOutlined />
                        </span>
                    </Dropdown>
                </div>
            </div>
        )
    }
}

export default withRouter(Headers);
