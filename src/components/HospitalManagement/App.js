import React,{Component} from 'react';
import axios from "axios";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    storeUser = evt =>{
        let UserIda  = document.getElementById('UserId').value
        let UserDesiga  = document.getElementById('UserDesig').value
        let UserNamea  = document.getElementById('UserName').value
        let Gendera     = document.getElementById('Gender').value
        let UserTypea   = document.getElementById('UserType').value
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({'UserId' : UserIda,
                                    'UserDesig': UserDesiga,
                                    'UserName' : UserNamea,
                                    'Gender' : Gendera,
                                    'UserType' : UserTypea })
        };  
        console.log(requestOptions)
        fetch('http://localhost:9080/addUser', requestOptions)
        .then(response => response.json())
        .then(data => alert(`Data added successfully ${JSON.stringify(data.message)}`));
    }

    authUser = evt =>{
        let UserNamea  = document.getElementById('UserName').value
        let UserIda  = document.getElementById('UserId').value
        axios.get('http://localhost:9080/auth',{
            headers : {
                'Authorization' : `${UserIda} ${UserNamea}`
            }
        }).then(res=>{
            document.getElementById('test').innerHTML = JSON.stringify(res.data.value);
            console.log(res.data.value)
        })
        .catch(err=>{
            console.log(err)
        })
    }   

    render() { 
        return ( 
        <div id="test">
                <input type='text' id = "UserId" placeholder= 'UserId'/>
                <input type='text' id = "UserName" placeholder= 'UserName'/>
                <button value='submit' onClick={this.authUser}>Submit</button> 
        </div> );
    }
} 

export default App;