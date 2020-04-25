import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import axiosInstance from "./../../../axios/axiosAPI";
import Repair_Menu from "./../../../helpers/menus/repair_menu";
import FormTable from "../../table/boss_repair_service/FormTable"

var data = [
    {number: "1", boss_repair: "boss 1", worker: "worker 1", status: "In work", comment: "comment 1", date_request: "01-01-2020", cnc: "CNC 1"},
    {number: "2", boss_repair: "boss 2", worker: "worker 2", status: "In work", comment: "comment 2", date_request: "02-01-2020", cnc: "CNC 2"},
    {number: "3", boss_repair: "boss 3", worker: "worker 3", status: "In work", comment: "comment 3", date_request: "01-03-2020", cnc: "CNC 3"},
]

class Boss_Repair_Service_Page_With_Forms extends Component {
    constructor(props) {
        super(props);
        this.state;
    }
    render() {
        return (
            <div>
                <Repair_Menu/>
                <FormTable data= {data}/>
            </div>
        )
    }
}

export default Boss_Repair_Service_Page_With_Forms;