// const Index = React

import { Component } from "react";
import {Route, Redirect} from 'react-router-dom'
import Main from '../views/common/main/main'
import BasicTable from '../views/common/table/table'
class HomeRoute extends Component{

    render(){
        return (
            <div>
                    {/* <Switch> */}
                        <Redirect from="/home" to="/home/main" />
                        <Route path="/home/main" component={Main} />
                        <Route path="/home/table" component={BasicTable} />    
                    {/* </Switch> */}
            </div>
        )
    }
}

export default HomeRoute;