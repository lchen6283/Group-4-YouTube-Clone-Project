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

  render() {
 
    return (
      <div id="comment-form">
        <label>
          Name
          <br></br>
          <input
            id="input-box"
            type="text"
            placeholder="Name..."
            // value={this.state.userName}
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
            value={this.state.comment}
          ></input>
        </label>
        <button onClick={this.handleFormSubmit}
        >
          Post
          </button>
        {/* <input id="submit-comment-button"type="submit" value="Post">
          </input> */}
      </div>
    );
  }
}


export default CommentForm;
