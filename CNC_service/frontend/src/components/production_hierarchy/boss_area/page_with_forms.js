import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import axiosInstance from "./../../../axios/axiosAPI";
import Area_Menu from "./../../../helpers/menus/area_menu";


class Boss_Area_Page_With_Forms extends Component {
    constructor(props) {
        super(props);
        this.state;
    }
    render() {
        return (
            <div>
                <Area_Menu/>
                Начальник участка
                Главная
                Здесь будет список отправленных документов. Предоставим возможность отслеживания форм и удаления их.<br/>
                В идеале еще добавить редактирования. И при совсем классном раскладе забабахать кнопку с созданием формочки.
            </div>
        )
    }
}

export default Boss_Area_Page_With_Forms;