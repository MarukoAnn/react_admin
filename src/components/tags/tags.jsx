
import {Component} from 'react';
import {CloseOutlined} from '@ant-design/icons'
import {Link, withRouter} from 'react-router-dom'
import './tags.scss'
import store from '../../store'
import {REMOVE_TAG_LIST, SET_ROUTER} from '../../store/actions'
class Tags extends Component{

    constructor(props){
        super(props);
        this.state = {
            tagList:  store.getState().tagList,
            active: store.getState().active
        }
        store.subscribe(this.storeChange)
    }
    
     /* 监听stroe状态改变 */
    storeChange = () => {
        this.setState({
            active: store.getState().active,
            tagList: store.getState().tagList
        })
    }
		// 删除tag
    c_removeTags = (index) => {
        // let list = this.state.tagList;
        // list.splice(index, 1);
        let action = {
            type: REMOVE_TAG_LIST,
            value: index
        }
        store.dispatch(action);
        console.log(this.state.tagList[index -1].link)
        this.props.history.goBack();
        console.log(this.props.history)

    }
    c_changeTagActive = (item) => {
        console.log(item.openKeys)
        store.dispatch({type: SET_ROUTER, value: {key: item.key, openKeys: item.openKeys}});
    }

    render(){
        return (
            <div className="tags">
                <ul>
                    {
                        this.state.tagList.map((val, index) => {
                            return (
                                <li key={index} onClick={() => this.c_changeTagActive(val)}>
                                    <Link to={val.link}>
                                        <span>{val.label}</span>
                                        <span ><CloseOutlined onClick = {() => {this.c_removeTags(index)}} /></span>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
} 

export default withRouter(Tags);
