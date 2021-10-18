import React, { Component } from 'react'

class BlogCard extends Component{
    state = {
        likeCount : 0
    }
    increaseCount=()=>{
        this.setState((prevState,prevProp)=>{
            return {likeCount : prevState.likeCount +1}
        })
    }
    render()
    {
        return (
        <div className = {this.props.className} >
            <h2>{this.props.title}</h2>
            <p>{this.props.desc}</p> 
            <p>Like Count : {this.state.likeCount}</p>
            <button onClick = {this.increaseCount}>Like</button>
        </div>
    );}
}

export default BlogCard;