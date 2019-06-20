import React from 'react';
import BodyBar from './body/BodyBar';
import BodyRouterGrid from './body/BodyRouterGrid';
import {Grid} from "semantic-ui-react";

const Body = () => (
    <Grid>
        <Grid.Row>
            <Grid.Column width={16}>
                <BodyBar />
            </Grid.Column>
        </Grid.Row>

        <Grid.Row>
            <Grid.Column width={16}>
                <BodyRouterGrid />
            </Grid.Column>
        </Grid.Row>
    </Grid>
);

export default Body;