import _ from 'lodash';
import React, {useState} from 'react';
import './App.css';
import { Button, Header, Icon, Menu, Card, Image, Grid, Segment, Placeholder} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import {DateTime, Duration, Info, Interval, Settings} from 'luxon';

let curDate = DateTime.local();
curDate = DateTime.local().minus({months: 0});
curDate = DateTime.local().plus({years: 0});

// console.log(curDate.day + ' its a day');
// console.log(curDate.year + ' its a year');
// console.log(curDate.month + ' its a month');
// console.log(curDate.weekday + ' its a weekday');
// console.log(curDate.daysInMonth + ' its a days in month');
// console.log(curDate.weekNumber + ' its a week number');

function dayWeek(i) {
    let mas = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
    return mas[i];
}

function monthName() {
    let mas = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль',
        'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
    return mas[curDate.month - 1];
}

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

function minusYear(){
    let i = 1;
    alert(DateTime.local().minus({year: i}).year);
}

function plusYear(){
    let i = 1;
    alert(DateTime.local().plus({year: i}).year);
}

function minusMonth(){
    let i = 1;
    alert(DateTime.local().minus({month: i}).month);
}

function plusMonth(){
    let i = 1;
    alert(DateTime.local().plus({month: i}).month);
}

const dates = _.times(curDate.daysInMonth, i => (
    <Grid.Column key={i} >
        <Button basic color='teal' size='mini' fluid style={{marginTop: '10px'}} onClick={createEvent}>
            {dayMonth(i)}
        </Button>
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

function Years(){
    let curYear = curDate.year;
    const [date, setDate] = useState({date: curYear});

    function minus(){
        setDate({date: date.date - 1});
        console.log(date.date);
    }

    function plus(){
        setDate({date: date.date + 1})
    }

    return(
        <div>
            <Button icon='arrow left' onClick={()=>minus()}/>
            <Segment inverted tertiary>
                {date.date}
            </Segment>
            <Button icon='arrow right' onClick={plus}/>
        </div>
    )
}


function Months()
{
    let curMonth = curDate.month;
    const [date, setDate] = useState({date: curMonth});
    let mas = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль',
        'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

    function minus(){
        if (date.date - 1 >= 0){
            setDate({date: date.date - 1});
        }

        console.log(date.date);
    }

    function plus(){
        if (date.date + 1 < 12){
            setDate({date: date.date + 1});
        }
        console.log(date.date);
    }

    return(
        <div>
            <Button icon='arrow left' onClick={minus}/>
            <Segment inverted tertiary>
                {mas[date.date]}
            </Segment>
            <Button icon='arrow right' onClick={plus}/>
        </div>
    )
}

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
