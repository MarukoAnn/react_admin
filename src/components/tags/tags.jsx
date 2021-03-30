
import {Component} from 'react';
import {Tabs} from 'antd'
import {Link} from 'react-router-dom'
import './tags.scss'
const {TabPane} = Tabs;
class Tags extends Component{

    constructor(props){
        super(props);
        this.state = {
            tagList: [
                {key: '1', label: '首页', link: '/home/main'},
                {key: '2', label: '基础表格', link: '/home/table'},
                {key: '3', label: 'tab选项卡', link: '/home/table'},
                {key: '4', label: '表单相关', link: '/home/table'}
            ]
        }
    }

    render(){
        return (
            <div className="tags">
                <Tabs
                
                >
                    {
                        this.state.tagList.map(val => {
                            return (
                                <TabPane tab={val.label} key={val.key}>
                                    {/* <Link to={val.link}>{val.label}</Link> */}
                                    
                                </TabPane>
                            )
                        })
                    }
                </Tabs>
            </div>
        )
    }
} 

export default Tags;