import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import axiosInstance from "./../../../axios/axiosAPI";
import Repair_Menu from "./../../../helpers/menus/repair_menu";
import FormTable from "../../table/boss_repair_service/FormTable"

var data = [
    {number: "1", date_request: "01.01.2020", boss_area: "boss 1", comment: "comment 1", CNC: "CNC 1", type_request: "Починить", status: "status 1"},
    {number: "2", date_request: "02.01.2020", boss_area: "boss 2", comment: "comment 2", CNC: "CNC 2", type_request: "Плановая проверка",status: "status 2"},
    {number: "3", date_request: "03.01.2020", boss_area: "boss 3", comment: "comment 3", CNC: "CNC 3", type_request: "Чекни просто",status: "status 3"},
    {number: "4", date_request: "04.01.2020", boss_area: "boss 4", comment: "comment 4", CNC: "CNC 4", type_request: "Мимо пройди",status: "status 4"},
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
                Начальник ремонтной службы
                Главная
                <FormTable data= {data}/>
            </div>
        )
    }
}

export default Boss_Repair_Service_Page_With_Forms;