import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import axiosInstance from "./../../../axios/axiosAPI";
import Repair_Menu from "./../../../helpers/menus/repair_menu";

class Boss_Repair_Service_Main extends Component {
    constructor(props) {
        super(props);
        this.state;
    }

    render() {
        return (
            <div>
                <Repair_Menu/>
                Начальник ремонтной службы
            </div>
        )
    }
}

export default Boss_Repair_Service_Main;