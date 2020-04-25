import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import axiosInstance from "./../../../axios/axiosAPI";
import Area_Menu from "./../../../helpers/menus/area_menu";
import MainTable from "../../table/boss_area/MainTable";

var data = [
    {number: "1", area: "area 1", boss_workshop: "boss 1", date: "01-01-2020", comment: "text 1", status: "In Progress"},
    {number: "2", area: "area 2", boss_workshop: "boss 2", date: "02-01-2020", comment: "text 2", status: "In Progress"},
    {number: "3", area: "area 3", boss_workshop: "boss 3", date: "01-03-2020", comment: "text 3", status: "In Progress"},
]

class Boss_Area_Main extends Component {
    constructor(props) {
        super(props);
        this.state;
    }

    render() {
        return (
            <div>
                <Area_Menu/>
                <MainTable data={data}/>
            </div>
        )
    }
}

export default Boss_Area_Main;