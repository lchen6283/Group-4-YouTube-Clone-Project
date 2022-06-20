import React from "react";

/**
 * Class component Counter, manages likes and dislikes of a comment
 * @returns Button that adds likes and dislikes to a comment
 */
class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      likeCount: 0,
      dislikeCount: 0,
    };
  }

  likeIncrement = () => {
    this.setState({ likeCount: this.state.likeCount + 1 });
  };

  dislikeIncrement = () => {
    this.setState({ dislikeCount: this.state.dislikeCount + 1 });
  };

  render() {
    return (
      <>
        <p></p>
        <button id="like-button" type="submit" onClick={this.likeIncrement}>
          👍{this.state.likeCount}{" "}
        </button>

        <button id="dislike-button" onClick={this.dislikeIncrement}>
          👎{this.state.dislikeCount}
        </button>
        <p></p>
      </>
    );
  }
}
export default Counter;
