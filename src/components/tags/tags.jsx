
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
        store.subscribe(this.storeChanges)
    }
    
     /* 监听stroe状态改变 */
    storeChanges = () => {
        this.setState({
            active: store.getState().active,
            tagList: store.getState().tagList
        })
			console.log('active变化:' + this.state.active);
    }
		// 删除tag
    c_removeTags = (index) => {
        let action = {
            type: REMOVE_TAG_LIST,
            value: index
        }
        store.dispatch(action);
        console.log('提交数据了');
        console.log(index);
        console.log(this.state.active);
				if (index === 0 && this.state.tagList.length === 1){
					this.props.history.push('/home/main');
					return;
				}
				console.log(this.state.tagList);
				if(this.state.tagList[index].key === this.state.active){
				setTimeout(() => {
					console.log(this.state.tagList);
					console.log("index: " + index);
					console.log("active: " + this.state.active);
					console.log('是当前的');
					this.props.history.push(this.state.tagList[this.state.tagList.length - 1].link)
					// if (index + 1 >= this.state.tagList.length){
					// 	this.props.history.goBack();
					// }else {
					// 	console.log(this.state.tagList[this.state.tagList.length - 1].link);
					// }
				})
			}


		}
    c_changeTagActive = (item) => {
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
                                    </Link>
																		<span ><CloseOutlined onClick = {(e) => {e.stopPropagation();this.c_removeTags(index)}} /></span>
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
