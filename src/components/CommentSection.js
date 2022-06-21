import React from "react";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
import "./CommentSection.css";

/**
 * Class component Comment section, manages a list of user made comments
 * @returns Comment form and Comment list
 */
class CommentSection extends React.Component {
  constructor() {
    super();
    this.state = {
      commentList: [],
    };
  }

  addCommentToList = (userComment) => {
    this.setState({ commentList: [...this.state.commentList, userComment] });
  };

  render() {
    return (
      <section id="comment-section">
        <CommentForm addCommentToList={this.addCommentToList} />
        {this.state.commentList.length ? (
          <div>
            <CommentList arrayOfComments={this.state.commentList} />
          </div>
        ) : null}
      </section>
    );
  }
}
export default CommentSection;
