import React from 'react';
import {Grid} from "semantic-ui-react";
import Head from './structures/Head';
import Body from './structures/Body';

const Calendar = () => (
    <Grid columns={1} centered>
        <Grid.Row>
            <Head />
        </Grid.Row>

        <Grid.Row>
            <Body />
        </Grid.Row>
    </Grid>
);

export default Calendar;