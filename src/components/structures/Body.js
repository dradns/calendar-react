import React from 'react';
import BodyBar from './body/BodyBar';
import BodyGrid from './body/BodyGrid';
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
                <BodyGrid />
            </Grid.Column>
        </Grid.Row>
    </Grid>
);

export default Body;