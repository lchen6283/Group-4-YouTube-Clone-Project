import React, { forwardRef } from "react";
import "./Modal.css";

const Modal = () => {
  const [display, setDisplay] = React.useState(true);

  const close = () => {
    setDisplay(false);
  };

  if (display) {
    return (
      <div className="modal-wrapper">
        <div className="modal-backdrop" />
        <div className="modal-box">
          <h1>400 error</h1>
          <p>Sent bad request</p>
          <button onClick={close}></button>
        </div>
      </div>
    );
  }
  return null;
};

export default Modal;

//return <button onClick={(event) => this.showModal()} />;

//  (props) => {
//   const [display, setDisplay] = React.useState(true);

//   const open = () => {
//     setDisplay(true);
//   };

//   const close = () => {
//     setDisplay(false);
//   };

//   if (display) {
//     return (
//       <div className="modal-wrapper">
//         <div className="modal-backdrop" />
//         <div className="modal-box">
//           <h1>Modal Window</h1>
//           <p>My Modal Display</p>
//           <button onClick={close}></button>
//         </div>
//       </div>
//     );
//   }
//   return null;
// };
