import React from "react";

class Counter extends React.Component{
  constructor(){
    super();
    this.state ={
      likeCount : 0,
 dislikeCount : 0,
    }
  }
 
 likeIncrement = () => {
   
    this.likeCount ++
 
  }

  dislikeIncrement = () => {
   
        this.dislikeCount ++
  }

render(){
      return (
   <>
     <p></p>
        <button id="like-button" type="submit" onClick={this.state.likeIncrement}>👍{this.state.likeCount} </button>
       
      
      <button id="dislike-button" onClick={this.state.dislikeIncrement}>👎{this.state.dislikeCount}</button> 
      <p></p>
      </>
      )
      }  
    }
  export default Counter;
  