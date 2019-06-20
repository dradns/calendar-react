import React from 'react';
import {DateTime, Duration, Info, Interval, Settings} from 'luxon';

let curDate = DateTime.local();

function monthName() {
    let mas = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль',
        'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
    return mas[curDate.month - 1];
}

const MonthCorner = () => (
    <h1>{monthName()}</h1>
);

export default MonthCorner;