import React from 'react';
import {Grid, Button} from "semantic-ui-react";
import _ from 'lodash';
import {DateTime, Duration, Info, Interval, Settings} from 'luxon';

let curDate = DateTime.local();

function dayMonth(i) {
    let mas = [];
    for( let j = 1; j <= curDate.daysInMonth; j++){
        mas.push(j);
    }
    return mas[i];
}

function createEvent(){
    alert('so its a createEvent function');
}

const Dates = () => _.times(curDate.daysInMonth, i => (
    <Grid.Column key={i} >
        <Button basic color='teal' size='mini' fluid style={{marginTop: '10px'}} onClick={createEvent}>
            {dayMonth(i) + ' week'}
        </Button>
    </Grid.Column>
));

const BodyGridMonth = () => (
        <Grid columns={7} >
            <Grid.Row style={{marginTop: '20px'}}>
                <Dates />
            </Grid.Row>
        </Grid>
);

export default BodyGridMonth;