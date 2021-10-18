import React,{Component} from "react";
import BodyDom from "./bodyDom";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data : [ 
                {ProductId : 1, ProductName : 'P1'},
                {ProductId : 2, ProductName : 'P2'},
                {ProductId : 3, ProductName : 'P3'},
                {ProductId : 4, ProductName : 'P4'},
            ],
            showDelete : false,
         }
    }
    render() { 
        return ( <>
        <div>
            <table>
                <thead>
                    <td>Product Id</td>
                    <td>Product Name</td>
                    {
                        this.state.showDelete? <td>Delete</td>:null
                    }
                </thead>
                <tbody>
                    {
                        this.state.data.map(item=>{
                             return (<BodyDom/>)
                        })
                    }
                </tbody>
            </table>
        </div>
        </> );
    }
}
 
export default App;