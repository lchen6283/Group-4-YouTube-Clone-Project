import React from "react";
import CommentSection from "./CommentSection";
import Css from "./CommentSection.css";


class CommentForm extends React.Component {
  constructor() {
    super();
    this.state = {
      commentValue : "",
      commentList: [],
      userName: "",
      comment: ""
    }
  }
 handleChange = (event) => {
 
    let commenter = event.target.userName.value;
    let commen = event.target.comment.value;   
    if (!!commenter && !!commen) {
      this.setState({
        commentList: this.state.commentList.concat(
          `${commenter} says, "${commen}"`
        )
      })}}
    

  render() {
 
    return (
      <>
      <div id="comment-form">
        <label>
          Name
          <br></br>
          <input
            id="input-box"
            type="text"
            placeholder="Name..."
         
            value={this.userName}
          ></input>
        </label>
        <br></br>
        <br></br>
        <label>
          Comment
          <br></br>
          <input
            id="input-box"
            type="text"
            placeholder="..."
            onChange={this.state.handleChange}
          ></input>
        </label>
        <button onClick={this.handleFormSubmit}
        >
          Post
          </button>
        {/* <input id="submit-comment-button"type="submit" value="Post">
          </input> */}
      </div>
      <div>
      <ul>
        {this.state.commentList.length > 0
                ? this.state.commentList.map((i) => {
                    return (  <li key={i} className="comment">
                    `{this.state.userName} says {this.state.comment}`
                  </li>    );
                  })
                : ""}
        </ul>
      </div>
      </>
    );
  }
}


export default CommentForm;
