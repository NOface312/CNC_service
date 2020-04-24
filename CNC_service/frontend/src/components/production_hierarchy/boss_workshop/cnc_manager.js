import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import axiosInstance from "./../../../axios/axiosAPI";
import Workshop_Menu from "./../../../helpers/menus/workshop_menu";
import WorkshopTable from "../../table/boss_workshop/CNCTable"
import LineChart from "../../charts/linechart"

function getRandomDateArray(numItems) {
    // Create random array of objects (with date)
    let data = [];
    let baseTime = new Date('2020-05-01T00:00:00').getTime();
    let dayMs = 24 * 60 * 60 * 1000;
    for(var i = 0; i < numItems; i++) {
      data.push({
        time: new Date(baseTime + i * dayMs),
        value: Math.round(2 + 8 * Math.random())
      });
    }
    return data;
  }
  
  function getData(value) {
    let data = [];
    for (var i = 0; i < value; i++){
        data.push({
            title: "Неполадки " + i + " станка",
            data: getRandomDateArray(50)
        });
    }
    return data;
  }

class Boss_Workshop_CNC_Manager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: getData()
          };
        this.number = 5;
    }
    componentDidMount() {
        window.setInterval(() => {
          this.setState({
            data: getData(this.number)
          })
        }, 5000)
    }
    onClickCreate(){
        this.number = this.number + 1;
    }
    render() {
        let charts = []

        this.state['data'].forEach(data => {
            charts.push(
                <div className="main chart-wrapper">
                    <LineChart
                        data={data.data}
                        title={data.title}
                        color="#3E517A"
                    />
                </div>
            )
        })

        return (
            <div>
                <Workshop_Menu />
                Начальник цеха
                Управление станками
                <div><button type="button" onClick={() => 
                       this.onClickCreate()}
                    >
                    Создать станок
                </button></div>
                <div className="Charts">
                    {charts}
                </div>
            </div>
        )
    }
}

export default Boss_Workshop_CNC_Manager;