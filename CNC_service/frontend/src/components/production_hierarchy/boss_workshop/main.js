import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import axiosInstance from "./../../../axios/axiosAPI";

class Boss_Workshop_Main extends Component {
    constructor(props) {
        super(props);
        this.state;
        //this.handleLogout = this.handleLogout.bind(this)
    }

    /*async handleLogout() {
        try {
            const response = await axiosInstance.post('/blacklist/', {
                "refresh_token": localStorage.getItem("refresh_token")
            });
            localStorage.removeItem('access_token');
            localStorage.removeItem('refresh_token');
            axiosInstance.defaults.headers['Authorization'] = null;
            this.props.history.push("/login/");
            return response;
        }
        catch (e) {
            console.log(e);
        }
    };*/

    /*<button onClick={this.handleLogout}>Выйти</button>*/
    render() {
        return (
            <div>
                Начальник цеха
                Главная
                Здесь будет статистика
            </div>
        )
    }
}

export default Boss_Workshop_Main;