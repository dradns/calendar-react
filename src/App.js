import _ from 'lodash';
import React from 'react';
import './App.css';
import { Button, Header, Icon, Menu, Card, Image, Grid, Segment, Placeholder} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'

function dayWeek(i) {
    let mas = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
    return mas[i];
}

function dayMonth(i) {
    let mas = [];
    for( let j = 1; j < 32; j++){
        mas.push(j);
    }
    return mas[i];
}

const dates = _.times(31, i => (
    <Grid.Column key={i} >
        <Button basic color='teal' size='mini' fluid style={{marginTop: '10px'}}>
            {dayMonth(i)}
        </Button>

        <Segment raised>
            <Placeholder fluid style={{marginTop: '0px'}}>
                <Placeholder.Header image>
                    <Placeholder.Line />
                    <Placeholder.Line />
                </Placeholder.Header>
                <Placeholder.Paragraph>
                    <Placeholder.Line length='medium' />
                    <Placeholder.Line length='short' />
                </Placeholder.Paragraph>
            </Placeholder>
        </Segment>
    </Grid.Column>
));

const weekdays = _.times(7, i => (
    <Grid.Column key={i} >
        <Header as='h3' textAlign='center'>{dayWeek(i)}</Header>
    </Grid.Column>
));

const createEvent = _.times(7, i => (
    <Grid.Column key={i} >
        <Button basic color='teal' size='mini'>
            Create event
        </Button>
    </Grid.Column>
));

const GridCalendar = () => (
    <div>
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
