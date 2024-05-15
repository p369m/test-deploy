import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../Context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({catagory}) => {
const {food_list}=useContext(StoreContext)
 
  return (
    <div className='food-display' id="food-display">
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {food_list.map((item,i)=>{
            // console.log(item.category)
            if (catagory==="all"|| catagory===item.category){
              return (
                <FoodItem key={i} name={item.name} id={item._id} image={item.image} description={item.description} price={item.price} />
            )
            }
           
        })}
      </div>
    </div>
  )
}

export default FoodDisplay
