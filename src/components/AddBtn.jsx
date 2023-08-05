import React, { useRef, forwardRef } from "react";
import Modal from "./Modal";
import "./AddBtn.css";

function AddBtn() {
  const handleAddClick = () => {
    console.log("handle on click ");
    // openModal();
  };
  return (
    <>
      <Modal />
      <div className="addBtn" onClick={handleAddClick}>
        AddBtn
      </div>
    </>
  );
}

export default AddBtn;
