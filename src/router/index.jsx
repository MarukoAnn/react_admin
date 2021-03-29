// const Index = React

import { Component } from "react";
import {HashRouter, Route, Redirect, Switch} from 'react-router-dom'
import Login from '../views/login/login';
import Home from '../views/home/home';
import Main from '../views/common/main/main'
class Index extends Component{

    render(){
        return (
            <div>
                <HashRouter>
                    {/* <Switch> */}
                        <Redirect from="/" to="/login" />
                        <Route path="/login" component={Login} />
                        <Route path="/home" component={Home} />
                            {/* <Route path="/main" component={Main} />     */}
                    {/* </Switch> */}
                </HashRouter> 
            </div>
        )
    }
}

export default Index;