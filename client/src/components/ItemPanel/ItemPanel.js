import React, { useEffect, useState } from "react";
import "./ItemPanel.css";
import { map } from "lodash";
import BodyButton from "../BodyButton/BodyButton";
import ItemCard from "../ItemCard/ItemCard";
import CategoryModal from "../CategoryModal/CategoryModal";
import ProductModal from "../ProductModal/ProductModal";
import arrow from "../../assets/Icons/arrow.svg";
import Pagination from "@mui/material/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsApi } from "../../Redux/api/productApi";

const ItemPanel = () => {
  const [categoryModal, setCategoryModal] = useState(false);
  const [subCategoryModal, setSubCategoryModal] = useState(false);
  const [productModal, setProductModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

    const dispatch = useDispatch();


  const { AllProducts } = useSelector((state) => state.productReducer);

    const limitPerPage = 5;
     let NumProducts = AllProducts?.total;
  const NumPage = Math.ceil(NumProducts / limitPerPage);
  
  useEffect(() => {
    dispatch(getAllProductsApi({ currentPage, limitPerPage }));
  }, [currentPage]);

  const handlePageChange = (e,p) => {
    setCurrentPage(p);
  };

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
          {map(AllProducts.product, (product) => (
            <ItemCard key={product._id} product={product} />
          ))}
        </div>
        <div className="pagination_container">
          <h5 className="total_counts_text">
            {NumProducts > limitPerPage ? limitPerPage : NumProducts} of{" "}
            {NumProducts} items
          </h5>
          <Pagination
            color="warning"
            count={NumPage}
            page={currentPage}
            onChange={handlePageChange}
          />
          <h6 className="showMore_text">
            Show <span> 10 rows</span> <img src={arrow} alt="Arrow" />
          </h6>
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
      {productModal && (
        <ProductModal
          heading={"Add Product"}
          handleClose={handleProductModal}
        />
      )}
    </>
  );
};

export default ItemPanel;
