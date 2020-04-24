import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import axiosInstance from "./../../../axios/axiosAPI";
import Workshop_Menu from "./../../../helpers/menus/workshop_menu";


class Boss_Workshop_Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            /*data: getData()*/
          };
    }
    render() {
        return (
            <div>
              <Workshop_Menu/>
            </div>
        )
    }
}
export default Boss_Workshop_Main;