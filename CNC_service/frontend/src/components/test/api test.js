import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import axiosInstance from "./../../axios/axiosApi";
import factory_manager_workshop_services from "./../../services/factory_manager/factory_manager_area_services";

class API_Test extends Component {
    constructor(props) {
        super(props);
        this.state;
        this.handleLogout = this.handleLogout.bind(this)
    }

    async handleLogout() {
        try {
            const response = await axiosInstance.post('/blacklist/', {
                "refresh_token": localStorage.getItem("refresh_token")
            });
            localStorage.removeItem('access_token');
            localStorage.removeItem('refresh_token');
            axiosInstance.defaults.headers['Authorization'] = null;
            return response;
        }
        catch (e) {
            console.log(e);
        }
    };

    async getallworkshop() {
        try {
            const response = await factory_manager_workshop_services.get('/workshop/', {
            });
            console.log(response.data);
            return response;
        }
        catch (e) {
            console.log(e);
        }
    };

    render() {
        return (
            <div>Здаров
                <button onClick={this.handleLogout}>Выйти</button>
                <button onClick={this.getallworkshop}>Получить все мастерские</button>
            </div>
        )
    }
}

export default API_Test;