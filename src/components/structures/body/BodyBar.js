import React from 'react';
import {Grid, Segment} from "semantic-ui-react";
import _ from 'lodash';

function dayWeek(i) {
    let mas = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
    return mas[i];
}

const Weekdays = () => _.times(7, i => (
    <Grid.Column key={i} >
        <Segment color='orange' textAlign='center'>{dayWeek(i)}</Segment>
    </Grid.Column>
));


const BodyBar = () => (
  <Grid columns={7}>
      <Grid.Row>
            <Weekdays />
      </Grid.Row>
  </Grid>
);

export default BodyBar;