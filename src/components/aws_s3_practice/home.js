import React,{Component} from "react";
import { SecureCall } from "./secureCall";
class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            content : ""
         }
        
    }
    scObj = new SecureCall();
    componentDidMount(prevProp){
        this.scObj.getData().then(data=>{
            this.setState((prevState,prevProp)=>{
                return{content : (data)}
            })
        });
    }
    downloadFunction(evt){
        console.log(evt.target.innerHTML);
        let temp = new SecureCall()
        temp.test(evt.target.innerHTML)
    }
    render() { 
        console.log(typeof(this.state.content.data));
        return ( 
        <>
        <h1>Hello</h1>
        <div>
            {
                this.state.content.length === 0 ? null :  this.state.content.data.map(item=>{return <button onClick= {this.downloadFunction}>{item}</button>})
            }
        </div>
        </> );
    }
}
 
export default App;