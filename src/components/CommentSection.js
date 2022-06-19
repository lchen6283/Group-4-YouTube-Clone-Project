import { eventWrapper } from "@testing-library/user-event/dist/utils";
import React from "react";
import CommentForm from "./CommentForm";
import CommentListSection from "./CommentList";
import CommentList from "./CommentList";
import Css from "./CommentSection.css";

class CommentSection extends React.Component{
constructor(){
  super()
} 
render(){
    return (
      <>
      ...
        <section id="comment-section">
          <h2>Leave A Comment</h2>
          <CommentForm CommentList={CommentList}
          commentValue={this.commentValue}
          handleCommentValue={this.handleCommentValue}
          userName={this.userName}
          userComment={this.userComment}
          />
          <CommentListSection />
        </section>
      </>
    );
  }
}
export default CommentSection;
