import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import axiosInstance from "./../../../axios/axiosAPI";
import LineChart from "../../charts/linechart"

function getRandomDateArray(numItems) {
    // Create random array of objects (with date)
    let data = [];
    let baseTime = new Date('2018-05-01T00:00:00').getTime();
    let dayMs = 24 * 60 * 60 * 1000;
    for(var i = 0; i < numItems; i++) {
      data.push({
        time: new Date(baseTime + i * dayMs),
        value: Math.round(2 + 8 * Math.random())
      });
    }
    return data;
  }
  
  function getData() {
    let data = [
        {
      title: 'Неполадки 1 уч',
      data: getRandomDateArray(150)
    },
    {
        title: 'Неполадки 2 уч',
        data: getRandomDateArray(150)
      },
      {
        title: 'Неполадки 3 уч',
        data: getRandomDateArray(150)
      },
    ];
    return data;
  }

class Boss_Workshop_Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: getData()
          };
        this.handleLogout = this.handleLogout.bind(this)
    }

    componentDidMount() {
        window.setInterval(() => {
          this.setState({
            data: getData(this.state.data[0])
          })
        }, 10000)
      }

    async handleLogout() {
        try {
            const response = await axiosInstance.post('/blacklist/', {
                "refresh_token": localStorage.getItem("refresh_token")
            });
            localStorage.removeItem('access_token');
            localStorage.removeItem('refresh_token');
            axiosInstance.defaults.headers['Authorization'] = null;
            this.props.history.push("/login/");
            return response;
        }
        catch (e) {
            console.log(e);
        }
    };

    render() {
        return (
            <div>
        <div>
            <div className="SlaveCharts">
                <For each="data" in={this.state}>
                <div className="main chart-wrapper">
                    <LineChart
                        data={data.data}
                        title={data.title}
                        color="#3E517A"
                    />
                </div>
                </For>
            </div>
      </div>
                <button onClick={this.handleLogout}>Выйти</button>
            </div>
        )
    }
}

export default Boss_Workshop_Main;