import React,{Component} from 'react';
import './input.css'
class NameForm extends Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
    }
  
    handleChange=(event)=> {
      this.setState({value: event.target.value});
    }
  
    render() {     
      return(
        <form id="input_example"> 
          <label>
            Type Here : 
            <br/>
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <h1>{this.state.value}</h1>
        </form>
      );
    }
  }
  
export default NameForm