import Counter from "./Counter";

/**
 * Creates list items of comments made by users
 * @params array[] - Array of strings
 * @returns List element with a Counter component
 */
const createList = (array) => {
  return array.map((a) => {
    return (
      <li>
        <p>{a}</p>
        <Counter />
      </li>
    );
  });
};

/**
 * Creates a list of comments based on what has been submitted via the form
 * @params arrayOfComments[] - Array of comments
 * @returns Unordered list containing comments
 */
const CommentList = ({ arrayOfComments }) => {
  return <ul>{createList(arrayOfComments)}</ul>;
};

export default CommentList;
