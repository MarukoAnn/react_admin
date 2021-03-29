import { Component } from "react";

import Headers from './header/header'
import Sidebar from './sidebar/sidebar'
import HomeRoute from '../../router/homeRoute'
import './home.scss';
class Home extends Component{

    render(){
        return(
            <div className="home">
                <Headers />
                <Sidebar />
                <div className="main">
                    <HomeRoute />
                </div>
            </div>
        )
    }
}

export default Home;