import React, { useState } from "react";
import "./ProductModal.css";
import AddButton from "../AddButton/AddButton";
import DiscardButton from "../AddButton/DiscardButton";
import addVarient from "../../assets/Icons/add-varient.svg";
import arrow from "../../assets/Icons/arrow.svg";
import crossIcon from "../../assets/Icons/cross-icon.svg";

const ProductModal = ({ handleClose }) => {
  const [count, setCount] = useState(1);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const[selectedSubCategory,setSelectedSubCategory]=useState()
  const [product,setProduct]=useState({
    count
  })

  const handleIncreaseCount = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const handleDecreaseCount = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };
  
// take product details

     const handleProductDetails = (e) => {
       setProduct({
         ...product,
         [e.target.name]: e.target.value,
       });
     };

 // take images from the file

  const handleFileChange = (event) => {
    const files = event.target.files;
    const filesArray = Array.from(files);

    if (selectedFiles.length + filesArray.length <= 3) {
      setSelectedFiles((prevFiles) => [...prevFiles, ...filesArray]);
    } else {
      alert("You can only pick up to 3 images.");
    }
  };

  // remove image function

  const removeImage = (index) => {
    const newFiles = [...selectedFiles];
    newFiles.splice(index, 1);
    setSelectedFiles(newFiles);
  };

  const hideFilePicker = selectedFiles.length >= 3;

  return (
    <div className="productModal_main">
      <div className="productModal_card">
        <h3 className="heading_text">Add Product</h3>
        <form action="">
          <div className="row_container">
            <label htmlFor="title">Title :</label>
            <input
              name="title"
              onChange={handleProductDetails}
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
                onChange={handleProductDetails}
                id="ram"
                type="number"
                placeholder="Ram"
                className="ram_input"
              />
              <input
                name="price"
                onChange={handleProductDetails}
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
            <select name="" id="">
              <option value="">Select sub category</option>
              <option value="">hello</option>
              <option value="">hai</option>
            </select>
          </div>
          <div className="row_container">
            <label htmlFor="description">Add Description :</label>
            <input name="description" onChange={handleProductDetails} id="description" type="text" className="title_input" />
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
          <AddButton />
          <DiscardButton onClick={handleClose} />
        </div>
      </div>
      <div className="productModal_closer" onClick={handleClose}></div>
    </div>
  );
};

export default ProductModal;
