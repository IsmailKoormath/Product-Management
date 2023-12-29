import React, { useState } from 'react'
import tick from '../../assets/Icons/tick.svg'
import laptop from '../../assets/Images/laptop.png'
import BodyButton from '../../components/BodyButton/BodyButton'
import './ProductDetails.css'
import Header from '../../components/Header/Header'

import wishlisticon from '../../assets/Icons/heart-dark.svg'
import arrow from '../../assets/Icons/arrow.svg'
const ProductDetails = () => {
  const [wishlist, setWishlist] = useState(false)
  const [count, setCount] = useState(1)

  // for wish list handle
  const handleWishlist = () => {
    setWishlist(!wishlist)
  }

  // couter function
  const increment = () => {
    setCount(count+1)
  }
  const decrement = () => {
    if(count>1)
    setCount(count-1)
  }
  return (
    <>
      <Header />
      <div className="productDetailsPath">
        Home <img className="arrow_icon" src={arrow} alt="Arrow" />
        Product details<img className="arrow_icon" src={arrow} alt="Arrow" />
      </div>
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
          <span className='availability'>Availability: <img src={tick} alt="" /><span> In stock</span></span>
          <p>Hurry up! only 34 product left in stock!</p>
          <div className='line'></div>
          <p className='ram'>Ram: <div className='ramSize'>4 GB</div><div className='ramSize'>8 GB</div><div className='ramSize'>16
            GB</div></p>
          <p className='quantity'>Quantity:<div className='counter'>
            <button onClick={decrement} className='operator'>-</button>
            <span className='productcount'>{count}</span>
            <button onClick={increment} className='operator'>+</button>
          </div></p>
          <div className='productDetails-Buttons'>
            <button className='productDetails-button'>Edit product</button>
            <button className='productDetails-button'>Buy it now</button>
            <div onClick={handleWishlist} className={wishlist ? 'wishlist favorite' : 'wishlist'}><img src={wishlisticon} alt="wishlist" /></div>
          </div>

        </div>
      </div>
    </>
  )
}

export default ProductDetails