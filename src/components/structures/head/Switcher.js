import React from 'react';
import { Button } from 'semantic-ui-react';
import {Grid, Segment} from "semantic-ui-react";

const Switcher = () => (
    <Grid style={{ justifyContent: 'space-evenly'}}>
        <Grid.Row>
            <Button icon='angle double left' />
            <Segment color='grey' content='test'></Segment>
            <Button icon='angle double right' />
        </Grid.Row>
    </Grid>
);

export default Switcher;

