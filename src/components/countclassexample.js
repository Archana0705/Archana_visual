import React,{Component} from "react";

class ClassCount extends Component{
    constructor(){
        super()
        this.state={
            count:0
        }
        this.handler=this.handler.bind(this)
    }
    handler(){
        this.setState({
            count:this.state.count+1
        })
    }
  render(){
     return(
         <div>
             <h1>{this.state.count}</h1>
             <button onClick={this.handler}>Click Here</button>
         </div>
     )
  }
}
export default ClassCount