// import React from "react";
// import CommentForm from "./CommentForm";
// import Counter from "./Counter";
// import CommentSection from "./CommentSection";
import Counter from "./Counter";

// //Does not need to be state
// //Move handleformsubmit to CommentSection

const createList = (array) => {
  const list = array.map((a) => {
    return (
      <li>
        <p>{a}</p>
        <Counter />
      </li>
    );
  });
  return list;
};

const CommentList = ({ arrayOfComments }) => {
  //const list = createList(arrayOfComments);
  return <div>{createList(arrayOfComments)}</div>;
};

export default CommentList;
