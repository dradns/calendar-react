import React from 'react';
import {Grid} from "semantic-ui-react";
import DateCorner from './current-corner/DateCorner';
import MonthCorner from './current-corner/MonthCorner';
import YearCorner from './current-corner/YearCorner';

const CurrentCorner = () => (
    <Grid style={{ justifyContent: 'space-evenly'}}>
        <Grid.Column>
            <DateCorner/>
        </Grid.Column>

        <Grid.Column>
            <MonthCorner/>
        </Grid.Column>

        <Grid.Column>
            <YearCorner/>
        </Grid.Column>
    </Grid>
);

export default CurrentCorner;