import React from 'react'
import { useStateValue } from './StateProvider'
import './ad.css'
import CheckoutProduct from './CheckoutProduct'

import Subtotal from './Subtotal'
function Checkout() {
    const [{basket}] = useStateValue()

    return (
        <div className="checkout">
            <div className="checkbox_left">
                <img className="ad" src ="
                https://images-eu.ssl-images-amazon.com/images/G/31/IN-hq/2020/img/Certified_Refurbished/XCM_Manual_1500x300_1216785_in_certified_refurbished_renewed_mobiles_category_1093f42a_fae7_4c3c_bd5e_35fb0bd1b71e_jpg_LOWER_QL85_.jpgg"></img>   

                {basket?.length == 0 ?(
                    <div>
                        <h2>Your Shopping Basket is empty</h2>
                        <p>You have no item in basket. To add items on basket click on "Add to basket" next to item.</p>
                    </div>
                ) : (
                    <div>
                        <h2 className="checkbox_title">Your Shopping Basket</h2>
                        {basket.map((item)=>(                        
                            <CheckoutProduct
                                id = {item.id}
                                title = {item.title}
                                image = {item.image}
                                price = {item.price}
                                rating = {item.rating}
                            />
                        ))}
                    </div>
                )} 
 
            </div>
            {basket.length > 0 && (
                <div className="checkout_right">
                    <Subtotal
                    ></Subtotal>
                </div>
            )}
        </div>
    )
}

export default Checkout
