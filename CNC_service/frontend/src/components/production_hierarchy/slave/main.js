import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import axiosInstance from "./../../../axios/axiosAPI";
import Slave_Menu from "./../../../helpers/menus/slave_menu";
import SlaveTable from "../../table/slave/SlaveTable"

var data = [
    {number: "1", date_request: "01.01.2020", boss_repair: "boss 1", comment: "comment 1", CNC: "CNC 1", status: "status 1"},
    {number: "2", date_request: "02.01.2020", boss_repair: "boss 2", comment: "comment 2", CNC: "CNC 2", status: "status 2"},
    {number: "3", date_request: "03.01.2020", boss_repair: "boss 3", comment: "comment 3", CNC: "CNC 3", status: "status 3"},
    {number: "4", date_request: "04.01.2020", boss_repair: "boss 4", comment: "comment 4", CNC: "CNC 4", status: "status 4"},
]

class Slave_Main extends Component {
    constructor(props) {
        super(props);
        this.state;
    }

    render() {
        return (
            <div>
                <Slave_Menu/>
                <SlaveTable data = {data}/>
            </div>
        )
    }
}

export default Slave_Main;