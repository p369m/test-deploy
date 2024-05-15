import React, { useContext, useState } from 'react'
import './FoodItem.css'
import { frontend_assets } from '../../assets/frontend_assets/assets'
import { StoreContext } from '../../Context/StoreContext'

const FoodItem = ({name,id,image,description,price}) => {

 
  const {cartItems,addToCart,removeFromCart}=useContext(StoreContext);
  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <img src={image} alt="" className="food-item-image" />
        {
          !cartItems[id]?<img className='add' onClick={()=>addToCart(id)} src={frontend_assets.add_icon_white}/>:
          <div className="food-item-counter">
            <img onClick={()=>removeFromCart(id)} src={frontend_assets.remove_icon_red}/>
            <p>{cartItems[id]}</p>
            <img onClick={()=>addToCart(id)} src={frontend_assets.add_icon_green}/>
          </div>
        }
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={frontend_assets.rating_starts}/>
        </div>
        <p className="food-item-description">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  )
}

export default FoodItem
