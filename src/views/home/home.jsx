import { Component } from "react";

import Headers from './header/header'
import Sidebar from './sidebar/sidebar'
import HomeRoute from '../../router/homeRoute';
import Tags from '../../components/tags/tags'
import PubSub from 'pubsub-js'
import './home.scss';
class Home extends Component{

    constructor(props){
        super(props);
        this.state = {
            collapsed: false
        }
    }

    componentDidMount(){
        // 初始化渲染的时候就开始订阅消息
        PubSub.subscribe('isChangeSidebarWidth', (msg, data) => {
            console.log(data)
            this.setState({
                collapsed: data
            })
        })
    }

    // 组件卸载时
    componentWillUnmount(){
        // 组件卸载后取消订阅
        PubSub.unsubscribe('isChangeSidebarWidth')
    }
    render(){
        return(
            <div className="home">
                <Headers />
                <Sidebar />
                <div className="main" style={{marginLeft: !this.state.collapsed? '250px': '80px'}}>
                    <Tags />
                    <HomeRoute />
                </div>
            </div>
        )
    }
}

export default Home;