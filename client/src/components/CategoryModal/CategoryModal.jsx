import React, { useState } from "react";
import "./CategoryModal.css";
import AddButton from "../AddButton/AddButton";
import DiscardButton from "../AddButton/DiscardButton";
import { useDispatch, useSelector } from "react-redux";
import { addCategory } from "../../Redux/api/categoryApi";
import { addSubCategoryApi } from "../../Redux/api/subCategoryApi";

const CategoryModal = ({ handleClose, heading, placeholder }) => {

  const [category, setCategory] = useState({
    categoryName: ""
  })
  const [subCategory, setSubCategory] = useState({
    categoryId: "",
    subcategoryName: ""
  })

  const { getcategory } = useSelector((state) => state.categoryReducer);

  const dispatch = useDispatch();
  // add new category
  const addCategoryhandle = () => {
    dispatch(addCategory(category))
  }

  //add new subcategory
  const addSubCategory = () => {
    dispatch(addSubCategoryApi(subCategory))
  }
  return (
    <div className="categoryModal_main">
      <div className="modal_card">
        <h3 className="heading_text">{heading}</h3>
        <form action="" className="categoryModal_form">
          {heading === "Add Sub Category" && (
            <select
              value={subCategory.categoryId}
              onChange={(e) => setSubCategory({ ...subCategory, categoryId: e.target.value })}
              name=""
              id=""
              className="categoryModal_selector"
            >
              <option value="">Select category</option>
              {getcategory.category.map((category) => (
                <option key={category._id} value={category._id}>
                  {category.categoryName}
                </option>
              ))}
            </select>
          )}

          <input
            type="text"
            placeholder={placeholder}
            className="categoryModal_input"
            value={
              heading === "Add Sub Category" ? subCategory.subcategoryName : category.categoryName
            }

            onChange={heading === "Add Sub Category" ? (e) => setSubCategory({ ...subCategory, subcategoryName: e.target.value }) : (e) => setCategory({ ...category, categoryName: e.target.value })}
          />
        </form>
        <div className="button_container">
          <AddButton text={'Add'}
            onClick={(e) => {
              if (heading === "Add Sub Category") {
                addSubCategory(e);
                handleClose();
              } else {
                addCategoryhandle(e);
                handleClose();
              }

            }}
          />
          <DiscardButton onClick={handleClose} />
        </div>
      </div>
      <div className="modal_closer" onClick={handleClose}></div>
    </div>
  );
};

export default CategoryModal;



