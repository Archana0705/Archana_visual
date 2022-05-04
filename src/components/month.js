import React,{Component}from 'react';
import "./cssexample.css"
class PrintMonth extends Component{
    constructor(){
        super();

        var strdate = new Date();

        var date =
            strdate.toLocaleString("en", { month: "long"  })
             + '-' +
            strdate.getDate() + '-' + strdate.getFullYear()+'-'+
            strdate.toLocaleDateString("en", { weekday: 'long' });
        

        this.state = {
            date: date
    }
}
render() {
    return (
        <div className='date' id="month_example">
           {this.state.date}
        </div>
    );
}
}
export default PrintMonth