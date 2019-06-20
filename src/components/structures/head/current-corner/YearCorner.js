import React from 'react';
import {DateTime, Duration, Info, Interval, Settings} from 'luxon';

let curDate = DateTime.local();

const YearCorner = () => (
    <h1>{curDate.year}</h1>
);

export default YearCorner;