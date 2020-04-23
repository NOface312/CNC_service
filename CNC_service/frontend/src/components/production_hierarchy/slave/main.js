import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import axiosInstance from "./../../../axios/axiosAPI";
import Slave_Menu from "./../../../helpers/menus/slave_menu";

class Slave_Main extends Component {
    constructor(props) {
        super(props);
        this.state;
    }

    render() {
        return (
            <div>
                <Slave_Menu/>
                Работник
            </div>
        )
    }
}

export default Slave_Main;