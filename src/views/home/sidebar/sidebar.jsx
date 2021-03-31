import {Component} from 'react'
import PubSub from 'pubsub-js'
import {Menu} from 'antd'
import {Link} from 'react-router-dom'
import {PieChartOutlined, DesktopOutlined, ContainerOutlined, AppstoreOutlined, MailOutlined} from '@ant-design/icons'
import './sidebar.scss'
import store from '../../../store'
import {ADD_TAG_LIST} from '../../../store/actions'
const { SubMenu } = Menu;
class Sidebar extends Component{

    constructor(props){
        super(props)
        this.state = {
            collapsed: false,
            menuList: [
                {label: '首页', link: '/home/main', icon: 'PieChartOutlined', key: '1'},
                {label: '基础表格', link: '/home/table', icon: 'DesktopOutlined', key: '2'},
                {label: 'tab选项卡', link: '/home/tab', icon: 'DesktopOutlined', key: '3'},
                {label: '表单相关', link: '', icon: 'DesktopOutlined', key: '4', children: [
                    {label: '基本表单', link: '/home/input', key: 'input'},
                    {label: '基本表单1', link: '/home/table', key: 'sub2', children: [
                        {label: '富文本编辑器', key: 'fu', link: '/home/table'},
                        {label: 'markdown编辑器', key: 'markdown', link: '/home/table'},
                    ]},
                    {label: '文件上传',key: '4-3', link: '/home/file'},
                ]},
                {label: '自定义图标', key: '5', link: '/home/table', icon: 'DesktopOutlined'},
                {label: 'eChart图表', key: '6', link: '/home/table', icon: 'DesktopOutlined'},
            ],
            active: '1',
            openKeys: [],
        }
        store.subscribe(this.storeChange)

    }

    componentDidMount(){
        // 初始化渲染的时候就开始订阅消息
        PubSub.subscribe('isChangeSidebarWidth', (msg, data) => {
            this.setState({
                collapsed: data
            })
        });
    }
    /* 监听stroe状态改变 */
    storeChange = () => {
        console.log('监听：' + store.getState().active)
        this.setState({
            active: store.getState().active,
            openKeys: store.getState().openKeys
        })
    }

    // 组件卸载时
    componentWillUnmount(){
        // 组件卸载后取消订阅
        PubSub.unsubscribe('isChangeSidebarWidth');
    }

    // menu列表数据
    viewMenu = (list) => {
        let listView = null;
        if(list){
            listView =  list.map((item) => {
                if(item.children && item.children.length > 0){
                    return (
                        <SubMenu 
                            key={item.key} 
                            icon={this.setIconView(item.icon)} 
                            title={item.label}>
                                {
                                    this.viewMenu(item.children)
                                }
                        </SubMenu> 
                    )
                }else{
                    return (
                        <Menu.Item 
                        onClick = {() => {this.setSelItem(item)}}
                        key={item.key} icon={this.setIconView(item.icon)} >
                            <Link to={item.link}>{item.label}</Link>
                        </Menu.Item>
                    )
                }
            });
        }
        return listView;
    }

    // 设置导航的Icon
    setIconView = (icon) => {
        let iconView = null;
        switch(icon) {
            case 'MailOutlined':
            	iconView = <MailOutlined />;
            	break;
            case 'PieChartOutlined':
            	iconView = <PieChartOutlined />;
            	break;
            case 'DesktopOutlined':
            	iconView = <DesktopOutlined />;
            	break;
        }
        return iconView;
    }
    
    // 菜单栏选择
    setSelItem = (item) => {
        console.log(this.state.openKeys)
        let action = {
            type: ADD_TAG_LIST,
            value: {key: item.key, label: item.label, link: item.link, openKeys: this.state.openKeys}
        }
        store.dispatch(action)
    }
    render(){
        return(
            <div className="sidebar">
                <Menu
                    defaultSelectedKeys={[this.state.active]}
                    selectedKeys={[this.state.active]}
                    onSelect = {({key}) => {this.setState({active: key})}}
                    openKeys={this.state.openKeys}
                    multiple={false}
                    onOpenChange={(openKeys) => {this.setState({openKeys: openKeys})}}
                    mode="inline"
                    style={{
                        height: '100%',
                        background: '#324157',
                        width: this.state.collapsed? '80px': '250px'
                    }}
                    theme="dark"
                    inlineCollapsed={this.state.collapsed}
                    >
                        {
                            this.viewMenu(this.state.menuList)
                        }
                </Menu>
            </div>
        )
    }
    
}

export default Sidebar;
