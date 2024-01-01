import React, { useEffect, useState } from "react";
import "./ProductModal.css";
import AddButton from "../AddButton/AddButton";
import DiscardButton from "../AddButton/DiscardButton";
import addVarient from "../../assets/Icons/add-varient.svg";
import arrow from "../../assets/Icons/arrow.svg";
import crossIcon from "../../assets/Icons/cross-icon.svg";
import { useDispatch, useSelector } from "react-redux";
import { getallSubCategoryApi } from "../../Redux/api/subCategoryApi";
import {
  addProductApi,
  editProductApi,
  getSingleProductApi,
} from "../../Redux/api/productApi";
import { map } from "lodash";
import { useParams } from "react-router-dom";

const ProductModal = ({ handleClose, heading }) => {
  const [count, setCount] = useState(1);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [data, setData] = useState({
    title: "",
    ram: "",
    price: "",
    description: "",
    subcategory: {
      subcategoryId: "",
      subcategoryName: "",
    },
  });
  const dispatch = useDispatch();
  const params = useParams();
  const productId = params.id;

  const { Allsubcategory, singleProduct } = useSelector((state) => ({
    Allsubcategory: state.subcategoryReducer.Allsubcategory,
    singleProduct: state.productReducer.singleProduct,
  }));

  useEffect(() => {
    setData(" ");
    dispatch(getallSubCategoryApi());
    if (productId) {
      dispatch(getSingleProductApi(productId));
      setData(singleProduct?.product);
    }
  }, []);

  const handleIncreaseCount = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const handleDecreaseCount = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  const handleFileChange = (event) => {
    const files = event.target.files;
    const filesArray = Array.from(files);

    // Check if the limit is reached
    if (selectedFiles.length + filesArray.length <= 3) {
      setSelectedFiles((prevFiles) => [...prevFiles, ...filesArray]);
    } else {
      alert("You can only pick up to 3 images.");
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const removeImage = (index) => {
    const newFiles = [...selectedFiles];
    newFiles.splice(index, 1);
    setSelectedFiles(newFiles);
  };

  const handleFormSubmit = async () => {
    const product = new FormData();
    selectedFiles.forEach((image, index) => {
      product.append("product", image, image.name);
    });
    product.append("title", data.title);
    product.append("ram", data.ram);
    product.append("price", data.price);
    product.append("totalProductCount", count);
    product.append("description", data.description);
    product.append(
      "subcategory[subcategoryId]",
      data?.subcategory?.subcategoryId
    );
    if (heading === "Edit Product") {
      dispatch(editProductApi(product, productId));
    } else {
      dispatch(addProductApi(product));
    }
  };

  const hideFilePicker = selectedFiles.length >= 3;

  return (
    <div className="productModal_main">
      <div className="productModal_card">
        <h3 className="heading_text">{heading}</h3>
        <form action="">
          <div className="row_container">
            <label htmlFor="title">Title :</label>
            <input
              name="title"
              onChange={handleInputChange}
              value={data?.title}
              id="title"
              type="text"
              className="title_input"
            />
          </div>
          <div className="row_container">
            <label htmlFor="ram">Ram :</label>
            <div className="ram_input_row">
              <input
                name="ram"
                value={data?.ram}
                onChange={handleInputChange}
                id="ram"
                type="number"
                placeholder="Ram"
                className="ram_input"
              />
              <input
                name="price"
                onChange={handleInputChange}
                value={data?.price}
                id="number"
                type="number"
                placeholder="Price"
                className="ram_input"
              />
              <img
                src={addVarient}
                alt="Add More Varient"
                className="addVarient_icon"
              />
            </div>
          </div>
          <div className="row_container">
            <label htmlFor="product">Total Products :</label>
            <div id="product" className="product_count">
              <img
                src={arrow}
                alt="Arrow Left"
                className="arrow_left"
                onClick={handleDecreaseCount}
              />
              <span>{count}</span>
              <img
                src={arrow}
                alt="Arrow Right"
                onClick={handleIncreaseCount}
              />
            </div>
            <label htmlFor="product" className="subCategoryLabel">
              sub category :
            </label>
            <select
              value={data?.subcategory?.subcategoryId}
              onChange={(e) =>
                setData({
                  ...data,
                  subcategory: {
                    ...data.subcategory,
                    subcategoryId: e.target.value,
                    subcategoryName:
                      e.target.options[e.target.selectedIndex].text,
                  },
                })
              }
              name=""
              id=""
            >
              <option value="">Select sub category</option>
              {map(Allsubcategory?.subcategory, (sub) => (
                <option key={sub._id} value={sub._id}>
                  {sub?.subcategoryName}
                </option>
              ))}
            </select>
          </div>
          <div className="row_container">
            <label htmlFor="description">Add Description :</label>
            <input
              name="description"
              value={data?.description}
              onChange={handleInputChange}
              id="description"
              type="text"
              className="title_input"
            />
          </div>
          <div className="row_container">
            <label htmlFor="description">Upload image:</label>
            {selectedFiles.map((file, index) => (
              <div key={index} className="selected_image">
                <img
                  src={crossIcon}
                  alt="Remove Icon"
                  className="remove_icon"
                  onClick={() => removeImage(index)}
                />
                <img
                  src={URL.createObjectURL(file)}
                  alt={`file-${index}`}
                  className="selected"
                />
              </div>
            ))}
            {!hideFilePicker && (
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleFileChange}
                className="image_selector"
              />
            )}
          </div>
        </form>
        <div className="button_container">
          <AddButton
            text={heading === "Edit Product" ? "Edit" : "Add"}
            onClick={(e) => {
              handleFormSubmit();
              handleClose();
            }}
          />
          <DiscardButton onClick={handleClose} />
        </div>
      </div>
      <div className="productModal_closer" onClick={handleClose}></div>
    </div>
  );
};

export default ProductModal;
