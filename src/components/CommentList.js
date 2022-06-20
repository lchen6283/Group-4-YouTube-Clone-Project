import React from "react";
import CommentForm from "./CommentForm";
import Counter from "./Counter";
import CommentSection from "./CommentSection";

//Does not need to be state
//Move handleformsubmit to CommentSection
class CommentList extends React.Component {
  constructor() {
    super();
    this.state = {
      commentList: [],
      userName: "",
      comment: "",
    };
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    const commenter = e.target.userName.value;
    const commen = e.target.comment.value;
    if (!!commenter && !!commen) {
      this.setState({
        commentList: this.state.commentList.concat(
          `${commenter} says, "${commen}"`
        ),
      });
    }

    console.log(this.state.commentList);
    e.target.userName.value = "";
    e.target.comment.value = "";
  };

  render() {
    //         const {commentValue,userComment,userName,commentList}= this.props
    return (
      // comment section state
      <>
        <section>
          <div>
            <h3>Comments</h3>

            <ul>
              {this.state.commentList.length > 0
                ? this.state.commentList.map((comment, i) => {
                    return (
                      <li key={i} className="comment">
                        {comment}
                      </li>
                    );
                  })
                : ""}
            </ul>
            <Counter />
          </div>
        </section>
      </>
    );
  }
}

export default CommentList;
