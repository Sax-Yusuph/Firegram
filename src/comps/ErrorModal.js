import React, { useContext } from "react";
import { FileContext } from "../auth/fileContext";

export default function ErrorModal() {
  const { error, setError } = useContext(FileContext);
  const handleClick = (e) => {
    setError(null);
  };
  return (
    <div class="modal" id="modal-name">
      <div class="modal-sandbox"></div>
      <div class="modal-box">
        <div class="modal-body">
          <div class="close-modal" onClick={handleClick}>
            &#10006;
          </div>
          <h1>Error</h1>
          <h3>{error}</h3>
        </div>
      </div>
    </div>
  );
}
