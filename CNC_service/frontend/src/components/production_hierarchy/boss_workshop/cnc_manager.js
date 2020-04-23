import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import axiosInstance from "./../../../axios/axiosAPI";
import Workshop_Menu from "./../../../helpers/menus/workshop_menu";

class Boss_Workshop_CNC_Manager extends Component {
    constructor(props) {
        super(props);
        this.state;
    }

    render() {
        return (
            <div>
                <Workshop_Menu />
                Начальник цеха
                Управление станками
            </div>
        )
    }
}

export default Boss_Workshop_CNC_Manager;