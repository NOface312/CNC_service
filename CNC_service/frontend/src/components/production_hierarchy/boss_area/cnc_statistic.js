import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import axiosInstance from "./../../../axios/axiosAPI";
import Area_Menu from "./../../../helpers/menus/area_menu";


class Boss_Area_CNC_Statistic extends Component {
    constructor(props) {
        super(props);
        this.state;
    }

    render() {
        return (
            <div>
                <Area_Menu/>
                Статистика станков
            </div>
        )
    }
}

export default Boss_Area_CNC_Statistic;