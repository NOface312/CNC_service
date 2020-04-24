import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import axiosInstance from "./../../../axios/axiosAPI";
import Workshop_Menu from "./../../../helpers/menus/workshop_menu";
import WorkshopTable from "../../table/workshop_table"

var data = [
    {name: "Станок 1", area: "Зона 1"},
    {name: "Станок 2", area: "Зона 2"},
    {name: "Станок 3", area: "Зона 3"},
    {name: "Станок 4", area: "Зона 4"},
  ]

class Boss_Workshop_CNC_Manager extends Component {
    constructor(props) {
        super(props);
        this.state;
    }

    onClickCreate(){
        alert("create")
    }

    render() {
        return (
            <div>
                <Workshop_Menu />
                Начальник цеха
                Управление станками
                <button type="button" onClick={() => 
                       this.onClickCreate()}
                    >
                    Create CNC
                </button>
                <WorkshopTable data={data}/> 
            </div>
        )
    }
}

export default Boss_Workshop_CNC_Manager;