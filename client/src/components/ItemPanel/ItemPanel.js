import React, { useState } from "react";
import "./ItemPanel.css";
import BodyButton from "../BodyButton/BodyButton";
import ItemCard from "../ItemCard/ItemCard";
import CategoryModal from "../CategoryModal/CategoryModal";
import ProductModal from "../ProductModal/ProductModal";

const ItemPanel = () => {
  const [categoryModal, setCategoryModal] = useState(false);
  const [subCategoryModal, setSubCategoryModal] = useState(false);
  const [productModal, setProductModal] = useState(false);


  const handleCategoryModal = () => {
    setCategoryModal(!categoryModal);
  };

  const handleSubCategoryModal = () => {
    setSubCategoryModal(!subCategoryModal);
  };

  const handleProductModal = () => {
    setProductModal(!productModal);
  };

  return (
    <>
      <div className="itemPanel_main">
        <div className="itemPanel_button_container">
          <BodyButton
            text="Add category"
            borderRadius="1.2rem"
            fontSize="0.875rem"
            onClick={handleCategoryModal}
          />
          <BodyButton
            text="Add sub category"
            borderRadius="1.2rem"
            fontSize="0.875rem"
            onClick={handleSubCategoryModal}
          />
          <BodyButton
            text="Add product"
            borderRadius="1.2rem"
            fontSize="0.875rem"
            onClick={handleProductModal}
          />
        </div>
        <div className="panel_card_container">
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
        </div>
      </div>
      {categoryModal && (
        <CategoryModal
          handleAccept={""}
          handleClose={handleCategoryModal}
          heading={"Add Category"}
          placeholder={"Enter category name"}
        />
      )}
      {subCategoryModal && (
        <CategoryModal
          handleAccept={""}
          handleClose={handleSubCategoryModal}
          heading={"Add Sub Category"}
          placeholder={"Enter sub category name"}
        />
      )}
      {productModal && <ProductModal handleClose={handleProductModal}/>}
    </>
  );
};

export default ItemPanel;
