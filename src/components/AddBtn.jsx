import React, { useRef, forwardRef } from "react";
import "./AddBtn.css";

function AddBtn({onClick}) {

  return (
    <>
      <div className="addBtn" onClick={onClick}>
        AddBtn
      </div>
    </>
  );
}

export default AddBtn;
