import React from 'react'
import tick from '../../assets/Icons/tick.svg'
import laptop from '../../assets/Images/laptop.png'
import BodyButton from '../../components/BodyButton/BodyButton'
import './ProductDetails.css'
import Header from '../../components/Header/Header'
const ProductDetails = () => {
  return (
    <>
    <Header/>
    <div className='productDetailspage'>
      <div className='productImages'>
        <div className='productMainImage'><img src={laptop} alt='product' /></div>
        <div className='moreImages'>
          <div className='otherImages'><img src={laptop} alt='product' /></div>
            <div className='otherImages'><img src={laptop} alt='product' /></div>
        </div>
      </div>
      <div className='productsDetails'>
        <h3 className='productName'>Tablet as a laptop</h3>
        <h3 className='productPrice'>$11,70</h3>
        <span>Availability: <img src={tick} alt="" /><span> In stock</span></span>
        <p>Hurry up! only 34 product left in stock!</p>
        <div className='line'></div>
        <p>Ram: <div>4 GB</div></p>
        <p>Quantity:<div><button>-</button><span>1</span><button>+</button></div></p>
        <div className='productDetails-Buttons'> <BodyButton text={'Edit product'} borderRadius={"1.6rem"} fontSize={"1.2rem"} onClick={''} /> <BodyButton text={'Buy it now'} borderRadius={"1.6rem"} fontSize={"1.2rem"} onClick={''} /></div>
       
      </div>
    </div>
    </>
  )
}

export default ProductDetails