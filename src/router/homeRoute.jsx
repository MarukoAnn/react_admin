// const Index = React

import { Component } from "react";
import {Route, Redirect} from 'react-router-dom'
import Main from '../views/common/main/main'
class HomeRoute extends Component{

    render(){
        return (
            <div>
                <div>
                    {/* <Switch> */}
                        <Redirect from="/home" to="/home/main" />
                        <Route path="/home/main" component={Main} />
                            {/* <Route path="/main" component={Main} />     */}
                    {/* </Switch> */}
                </div> 
            </div>
        )
    }
}

export default HomeRoute;