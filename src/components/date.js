import React,{Component}from 'react';
import MonthExample from './dateexample';
import './date.css'
class DateExample extends Component {
    constructor() {
        super();
        var today = new Date(),
            date = today.getDate() + '-' + (today.getMonth('default', { month: 'long' }) + 1) + '-' + today.getFullYear();           
        this.state = {
            date: date
        };
    }
    render() {
        return (
            <div id="date_example">
               {this.state.date}
            </div>
        );
    }
}
export default DateExample