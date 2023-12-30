import React from "react";
import "./CategoryModal.css";
import AddButton from "../AddButton/AddButton";
import DiscardButton from "../AddButton/DiscardButton";

const CategoryModal = ({ handleClose, heading, placeholder, handleAccept }) => {
  return (
    <div className="categoryModal_main">
      <div className="modal_card">
        <h3 className="heading_text">{heading}</h3>
        <form action="" className="categoryModal_form">
          {heading === "Add Sub Category" && (
            <select value={}onChange={} name="" id="" className="categoryModal_selector">
              <option value="">Select category</option>
              <option value="">hello</option>
              <option value="">ok</option>
            </select>
          )}
          <input
            type="text"
            placeholder={placeholder}
            className="categoryModal_input"
            onChange={()=>handlechange()}
          />
        </form>
        <div className="button_container">
          <AddButton onClick={handleAccept} />
          <DiscardButton onClick={handleClose} />
        </div>
      </div>
      <div className="modal_closer" onClick={handleClose}></div>
    </div>
  );
};

export default CategoryModal;
