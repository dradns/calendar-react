import React from 'react';
import ButtonPanel from './head/ButtonPanel';
import CurrentCorner from './head/CurrentCorner';
import Switcher from './head/Switcher';
import {Grid} from "semantic-ui-react";

const Head = () => (
    <Grid celled>
        <Grid.Row >
            <Grid.Column width={4}>
                <CurrentCorner />
            </Grid.Column>

            <Grid.Column width={8}>
                <ButtonPanel />
            </Grid.Column>

            <Grid.Column width={4}>
                <Switcher />
            </Grid.Column>
        </Grid.Row>
    </Grid>
);

export default Head;

