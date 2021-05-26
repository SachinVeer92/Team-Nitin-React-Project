import React from "react";
import ReactDOM from "react-dom";
import App from './App';
import './index.css';
import LifeCycleApp from './small_programs/life_cycle_events/LifeCycleApp'
import BudgetApp from './sachin_u/budget_program/BudgetApp';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// ReactDOM.render(<App key='test' />, document.getElementById("root"));
ReactDOM.render(<BudgetApp />, document.getElementById("root"));