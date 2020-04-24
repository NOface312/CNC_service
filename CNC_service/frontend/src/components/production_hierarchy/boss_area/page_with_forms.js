import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import axiosInstance from "./../../../axios/axiosAPI";
import Area_Menu from "./../../../helpers/menus/area_menu";
import DocumentTable from "../../table/boss_area/DocumentTable"

var data = [
    {number: "1", date: "01.01.2020", comment: "comment 1", status: "In work"},
    {number: "2", date: "02.01.2020", comment: "comment 2", status: "Complete"},
    {number: "3", date: "03.01.2020", comment: "comment 3", status: "Cannot do that"},
    {number: "4", date: "04.01.2020", comment: "comment 4", status: "In work"},
    {number: "5", date: "05.01.2020", comment: "comment 5", status: "In work"},
]


class Boss_Area_Page_With_Forms extends Component {
    constructor(props) {
        super(props);
        this.state;
    }
    onClickCreate(){
        alert("Запрс делаеца")
    }
    render() {
        return (
            <div>
                <Area_Menu/>
                Начальник участка
                Главная
                <div><button type="button" onClick={() => 
                       this.onClickCreate()}
                    >
                    Создать запрос
                </button></div>
                <DocumentTable data={data}/>
            </div>
        )
    }
}

export default Boss_Area_Page_With_Forms;