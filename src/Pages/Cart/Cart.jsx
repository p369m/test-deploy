import React from 'react'
import { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../Context/StoreContext'
import { food_list } from '../../assets/frontend_assets/assets'
const Cart = () => {
  const {cartItems,addToCart,removeFromCart}=useContext(StoreContext);
  return (
    <div >
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item,i)=>{
          if (cartItems[item._id]>0){
            return (
              <div>
              <div key={i} className="cart-items-title cart-items-item">
                <img src={item.image} alt="" />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{cartItems[item._id]}</p>
                <p>${cartItems[item._id]*item.price}</p>
                <p className='cross' onClick={()=>removeFromCart(item._id)}>X</p>
              </div>
              <hr />
              </div>
            )
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div className="cart-total-details">
          <p>Subtotal</p>
          <p>{0}</p>
        </div>
        <hr />
        <div className="cart-total-details">
          <p>Delivery fee</p>
          <p>{2}</p>
        </div>
        <hr />
        <div className="cart-total-details">
          <p>Total</p>
          <p>{4}</p>
        </div>
        <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promo-code">
      <div>
        <p>If you have any promo code, Enter it here</p>
      </div>
      <div className="cart-promo-input">
        <input type="text" placeholder='promo code' />
        <button>Submit</button>
      </div>
    </div> 
       
      </div>
      
    </div>
    
    </div>
  )
}

export default Cart
