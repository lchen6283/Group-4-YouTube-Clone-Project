import { eventWrapper } from "@testing-library/user-event/dist/utils";
import React from "react";
import CommentForm from "./CommentForm";
import CommentListSection from "./CommentList";
import CommentList from "./CommentList";
import "./CommentSection.css";

//Question: Does not need to be a Class since it does not handle State
//Maybe it should handle state, and handle the comment list state and addcommentstolist method
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
      <>
        <section id="comment-section">
          <h2>Leave A Comment</h2>
          <CommentForm addCommentToList={this.addCommentToList} />
          {this.state.commentList.length ? (
            <ul>
              <CommentList arrayOfComments={this.state.commentList} />
            </ul>
          ) : null}
        </section>
      </>
    );
  }
}
export default CommentSection;
