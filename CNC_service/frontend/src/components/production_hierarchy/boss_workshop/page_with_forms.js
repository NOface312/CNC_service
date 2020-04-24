import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import axiosInstance from "./../../../axios/axiosAPI";
import Workshop_Menu from "./../../../helpers/menus/workshop_menu";
import DocumentTable from "../../table/boss_workshop/DocumentTable"

var data = [
    {number: "1", area: "area 1", boss_area: "boss 1", date: "01.01.2020", comment: "comment 1", status: "In work"},
    {number: "2", area: "area 2", boss_area: "boss 2", date: "02.01.2020", comment: "comment 2", status: "Complete"},
    {number: "3", area: "area 3", boss_area: "boss 3", date: "03.01.2020", comment: "comment 3", status: "Cannto do that"},
    {number: "4", area: "area 4", boss_area: "boss 4", date: "04.01.2020", comment: "comment 4", status: "In work"},
    {number: "5", area: "area 5", boss_area: "boss 5", date: "05.01.2020", comment: "comment 5", status: "In work"},
]

class Boss_Workshop_Page_With_Forms extends Component {
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
                Главная
                Здесь будет список отправленных документов. Предоставим возможность отслеживания форм и удаления их.<br/>
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

export default Boss_Workshop_Page_With_Forms;