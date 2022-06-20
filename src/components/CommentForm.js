import React from "react";
import "./CommentSection.css";

/**
 * Class component Comment form, manages comments and users
 * @returns Form
 */
class CommentForm extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      comment: "",
    };
  }

  updateUserName = (event) => {
    const { value } = event.target;
    this.setState({
      userName: value,
    });
  };

  updateComment = (event) => {
    const { value } = event.target;
    this.setState({
      comment: value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.props.addCommentToList(
      `${this.state.userName} says: ${this.state.comment}`
    );
    this.setState({
      userName: "",
      comment: "",
    });
  };

  render() {
    return (
      <div id="comment-form">
        <form onSubmit={this.handleFormSubmit}>
          <label for="input-box">
            Name
            <br></br>
            <input
              className="input-box"
              id="name"
              type="text"
              placeholder="Name..."
              onChange={this.updateUserName}
              autoComplete="off"
            ></input>
          </label>
          <br></br>
          <br></br>
          <label>
            Comment
            <br></br>
            <input
              className="input-box"
              id="comment"
              type="text"
              placeholder="..."
              onChange={this.updateComment}
              autoComplete="off"
            ></input>
          </label>
          <button type="submit">Post</button>
        </form>
      </div>
    );
  }
}

export default CommentForm;
