import _ from 'lodash';
import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
// import './App.css';
import { Button, Header, Icon, Menu, Card, Image, Grid, Segment, Placeholder} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import {DateTime, Duration, Info, Interval, Settings} from 'luxon';
// import App from "../../App";

let curDate = DateTime.local();

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

function createEvent(){
    alert('so its a createEvent function');
}

const Dates = () => _.times(curDate.daysInMonth, i => (
    <Grid.Column key={i} >
        <Button basic color='teal' size='mini' fluid style={{marginTop: '10px'}} onClick={createEvent}>
            {dayMonth(i)}
        </Button>
    </Grid.Column>
));

const Weekdays = () => _.times(7, i => (
    <Grid.Column key={i} >
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
        curDate = curDate.minus({year : 1});
        console.log(setDate.date);
        console.log(curDate.year);
    }

    function plus(){
        setDate({date: date.date + 1});
        curDate = curDate.plus({year : 1});
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
        if (date.date > 1){
            setDate({date: date.date - 1});
            curDate = curDate.minus({month : 1});
        }
    }

    function plus(){
        if (date.date < 12){
            setDate({date: date.date + 1});
            curDate = curDate.plus({month : 1});
        }
    }

    return(
        <div>
            <Button icon='arrow left' onClick={minus}/>
            <Segment inverted tertiary>
                {mas[date.date - 1]}
            </Segment>
            <Button icon='arrow right' onClick={plus}/>
        </div>
    )
}

const MonthCalendar = (props) => (
    <div>
        <LYearRMonth/>
        <Grid columns={7} >
            <Grid.Row style={{marginTop: '20px'}}>
                <Weekdays />
            </Grid.Row>
        </Grid>

        <Grid columns={7} >
            <Grid.Row style={{marginTop: '20px'}}>
                <Dates qual={curDate}/>
            </Grid.Row>
        </Grid>
    </div>
);

export default MonthCalendar;