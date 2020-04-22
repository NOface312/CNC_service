import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import axiosInstance from "./../../../axios/axiosAPI";

class Boss_Workshop_Main extends Component {
    constructor(props) {
        super(props);
        this.state;
    }

    render() {
        return (
            <div>Начальник цеха
                Управление станками (опционально)
            </div>
        )
    }
}

export default Boss_Workshop_Main;