import React from 'react';
import {DateTime, Duration, Info, Interval, Settings} from 'luxon';

let curDate = DateTime.local();

const DateCorner = () => (
    <h1>{curDate.day}</h1>
);

export default DateCorner;