import _ from 'lodash';
import React from 'react';
import './App.css';
import { Button, Header, Icon, Menu, Card, Image, Grid, Segment, Placeholder} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import {DateTime, Duration, Info, Interval, Settings} from 'luxon';

let curDate = DateTime.local();
curDate = DateTime.local().minus({months: 1});
curDate = DateTime.local().minus({years: 1});

console.log(curDate.year);
console.log(curDate.day + ' its a day');
console.log(curDate.year + ' its a year');
console.log(curDate.month + ' its a month');
console.log(curDate.weekday + ' its a weekday');
console.log(curDate.daysInMonth + ' its a days in month');
console.log(curDate.weekNumber + ' its a week number');

function dayWeek(i) {
    let mas = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
    return mas[i];
}

function dayMonth(i) {
    let mas = [];
    for( let j = 1; j <= curDate.daysInMonth; j++){
        mas.push(j);
    }
    return mas[i];
}

const dates = _.times(curDate.daysInMonth, i => (
    <Grid.Column key={i} >
        <Button basic color='teal' size='mini' fluid style={{marginTop: '10px'}}>
            {dayMonth(i)}
        </Button>

        {/*<Segment raised>*/}
        {/*    <Placeholder fluid style={{marginTop: '0px'}}>*/}
        {/*        <Placeholder.Header image>*/}
        {/*            <Placeholder.Line />*/}
        {/*            <Placeholder.Line />*/}
        {/*        </Placeholder.Header>*/}
        {/*        <Placeholder.Paragraph>*/}
        {/*            <Placeholder.Line length='medium' />*/}
        {/*            <Placeholder.Line length='short' />*/}
        {/*        </Placeholder.Paragraph>*/}
        {/*    </Placeholder>*/}
        {/*</Segment>*/}
    </Grid.Column>
));

const weekdays = _.times(7, i => (
    <Grid.Column key={i} >
        {/*<Header as='h3' textAlign='center'></Header>*/}
        <Segment color='orange' textAlign='center'>{dayWeek(i)}</Segment>
    </Grid.Column>
));

const LYearRMonth = () => (
    <Grid>
        <Grid.Column floated='left' width={5}>
            <Years/>
        </Grid.Column>
        <Grid.Column floated='right' width={5}>
            <Months/>
        </Grid.Column>
    </Grid>
);

const Years = () => (
    <div>
        <Button icon='arrow left' />
        <Segment inverted tertiary>
            2019
        </Segment>
        <Button icon='arrow right' />
    </div>
);

const Months = () => (
    <div>
        <Button icon='arrow left' />
        <Segment inverted tertiary>
            June
        </Segment>
        <Button icon='arrow right' />
    </div>
);

const GridCalendar = () => (
    <div>
        <LYearRMonth/>
        <Grid columns={7} >
            <Grid.Row style={{marginTop: '20px'}}>
                {weekdays}
            </Grid.Row>
        </Grid>

        <Grid columns={7} >
            <Grid.Row style={{marginTop: '20px'}}>
                {dates}
            </Grid.Row>
        </Grid>
    </div>
);

function App() {
  return (
    <GridCalendar/>
  );
}

export default App;
