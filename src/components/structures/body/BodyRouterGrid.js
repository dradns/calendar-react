import React from 'react'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import BodyGridMonth from "./body-grid/BodyGridMonth";
import BodyGridDay from "./body-grid/BodyGridDay";
import BodyGridWeek from "./body-grid/BodyGridWeek";
import BodyGridYear from "./body-grid/BodyGridYear";

const BodyRouterGrid = () => (
    <React.Fragment>
        <Route  path={'/day'} component={BodyGridDay} />
        <Route  path={'/week'} component={BodyGridWeek} />
        <Route  path={'/month'} component={BodyGridMonth} />
        <Route  path={'/year'} component={BodyGridYear} />
    </React.Fragment>
);

export default BodyRouterGrid;

