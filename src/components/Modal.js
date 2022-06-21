import React from "react";
import "./Modal.css";

/**
 * Modal Window that displays an error message
 * @params navigate - useNavigate()
 * @returns Error Message in Modal Window View
 */
const Modal = ({ navigate }) => {
  const [display, setDisplay] = React.useState(true);

  const close = () => {
    setDisplay(false);
    navigate("./");
  };

  if (display) {
    return (
      <div className="modal-wrapper">
        <div className="modal-backdrop" />
        <div className="modal-box">
          <h1>400 error</h1>
          <p>Sent bad request</p>
          <button id="modal-button" onClick={close}>
            Close
          </button>
          <img
            id="modal-image"
            src="https://c.tenor.com/eDchk3srtycAAAAj/piffle-error.gif"
            alt="Error!"
          />
        </div>
      </div>
    );
  }
  return null;
};

export default Modal;
