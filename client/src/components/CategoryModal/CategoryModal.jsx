import React, { useState } from "react";
import "./CategoryModal.css";
import AddButton from "../AddButton/AddButton";
import DiscardButton from "../AddButton/DiscardButton";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addCategory } from "../../Redux/api/categoryApi";

const CategoryModal = ({ handleClose, heading, placeholder }) => {
  const [category,setCategory]=useState('')

  const dispatch = useDispatch()

  // add new category
  const addCategoryhandle=(e)=>{
    dispatch(addCategory(category, handleClose))
  }

  //add new subcategory
  const addSubCategory=(e)=>{
    dispatch()
  }
  return (
    <div className="categoryModal_main">
      <div className="modal_card">
        <h3 className="heading_text">{heading}</h3>
        <form action="" className="categoryModal_form">
          {heading === "Add Sub Category" && (
            <select  name="" id="" className="categoryModal_selector">
              <option value="">Select category</option>
              <option value="">hello</option>
              <option value="">ok</option>
            </select>
          )}
          <input
            type="text"
            placeholder={placeholder}
            className="categoryModal_input"
            onChange={(e)=>setCategory({...category,categoryName:e.target.value})}
          />
        </form>
        <div className="button_container">
          <AddButton onClick={heading === "Add Sub Category" ? (e) => addSubCategory(e) : (e) => addCategoryhandle(e)} />
          <DiscardButton onClick={handleClose} />
        </div>
      </div>
      <div className="modal_closer" onClick={handleClose}></div>
    </div>
  );
};

export default CategoryModal;
