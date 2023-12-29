import React from 'react'
import tick from '../../assets/Icons/tick.svg'
import laptop from '../../assets/Images/laptop.png'
const ProductDetails = () => {
  return (
    <div>
      <div className='productImages'>
        <div><img src={laptop} alt='product' /></div>
        <div>
          <div><img src={laptop} alt='product' /></div>
          <div><img src={laptop} alt='product' /></div>
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
      </div>
    </div>
  )
}

export default ProductDetails