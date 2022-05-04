import React,{Component} from "react";

class MonthExample extends Component {
    constructor() {
        super()
        this.state = {
            currentDate: Date().toLocaleString('default', { month: 'long' })
        }
    }
    render() {
        return (
            <div>
                <p>
                    {this.state.currentDate}
                </p>
            </div>
        );
    }
}

export default MonthExample