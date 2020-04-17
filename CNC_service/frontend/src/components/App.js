import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import Control from './control';
import Login from "./auth/login";
import Signup from "./auth/signup";
import Boss_Workshop_Main from './production_hierarchy/boss_area/main';
import Boss_Area_Main from './production_hierarchy/boss_area/main';
import Boss_Repair_Service_Main from './production_hierarchy/boss_repair_service/main';
import Slave_Main from './production_hierarchy/slave/main';
import { ControlRoute } from './../helpers/private_routes/control_route';
import { WorkshopRoute } from './../helpers/private_routes/type_routes/workshop_route';
import { AreaRoute } from './../helpers/private_routes/type_routes/area_route';
import { SlaveRoute } from './../helpers/private_routes/type_routes/slave_route';
import { RepairRoute } from './../helpers/private_routes/type_routes/repair_route';

class App extends Component {

    render() {
        return (
            <div className="site">
                <main>
                    <Switch>
                        <WorkshopRoute exact path={"/workshop/"} component={Boss_Workshop_Main } />

                        <AreaRoute exact path={"/area/"} component={ Boss_Area_Main } />

                        <RepairRoute exact path={"/repair/"} component={Boss_Repair_Service_Main } />

                        <SlaveRoute exact path={"/worker/"} component={ Slave_Main } />

                        <ControlRoute exact path={"/"} component={Control} />

                        <Route exact path={"/login/"} component={ Login } />
                        <Route exact path={"/signup/"} component={ Signup } />
                    </Switch>
                </main>
            </div>
        );
    }
}

export default App;