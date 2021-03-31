// const Index = React

import { Component } from "react";
import {Route, Redirect} from 'react-router-dom'
import Main from '../views/common/main/main'
import BasicTable from '../views/common/table/table'
import Tab from '../views/common/tab/tab'
import BasicInput from '../views/common/input/basic/basic'
import FileUpload from '../views/common/input/file/file'
class HomeRoute extends Component{

    render(){
        return (
            <div>
								<Redirect from="/home" to="/home/main" />
								<Route path="/home/main" component={Main} />
								<Route path="/home/table" component={BasicTable} />
								<Route path="/home/tab" component={Tab} />
								<Route path="/home/input" component={BasicInput} />
								<Route path="/home/file" component={FileUpload} />
            </div>
        )
    }
}

export default HomeRoute;
