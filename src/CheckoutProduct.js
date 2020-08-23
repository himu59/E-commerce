import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'

function CheckoutProduct({id,image,price,title,rating}) {
    const [{basket},dispatch] = useStateValue()
    // dispatch is used to remove item from basket array
    const removeFromBasket = () => {
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id:id,
        })
    }
    return (
        <div className='checkout_product'>
           {/* {basket} */}
            <img src={image} className="checkout_product_img" alt=""/>
                <div className="checkbox_product_info">
                    <p className="checkbox_product_title">{title}</p>
                    <p className="checkout_product_price">
                        <small>$</small>
                        <strong>{price}</strong>
                    </p>
                    <div className="checkout_product_rating">
                        {Array(rating)
                        .fill()
                        .map((_)=>(<p>⭐</p>))}
                    </div>
                    <button className="checkout_product_btn" onClick={removeFromBasket}>
                            Remove product from basket
                    </button>
                </div>
       </div>            
    )
}

export default CheckoutProduct
