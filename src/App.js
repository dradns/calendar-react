import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Calendar from './components/Calendar';

const App = () => (
    <Calendar />
);

export default App;

