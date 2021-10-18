// import logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';
import BlogCard from './components/test1';
class App extends Component {
  hideElements = false;
  state(){
  }
  toggleContent=()=>{
    // alert('Button Clicked')
    this.setState((prevState,prevProp)=>{
      return {hideElements : !prevState.hideElements}
    })
  }
  tempObj = [
    {title : 'T1' , desc : "D1"},{title : 'T2' , desc : "D2"},{title : 'T3' , desc : "D3"},
  ]
  render()
  {
    // alert('Page loaded.')
    console.log(this.state.hideElements)
    return (
    <div className="App">
      <button onClick={this.toggleContent}>{this.state.hideElements ? 'Show':'Hide'}</button>
      {
      this.tempObj.map((item,pos)=>{
    return (
      this.state.hideElements ? null : <BlogCard key = {pos} title = {item.title} desc = {item.desc} className = 'test' />
    );
  })
  }
  
    </div>
  );
}}

export default App;
