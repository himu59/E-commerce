import React from 'react'
import { useStateValue } from './StateProvider'
import CurrencyFormat from 'react-currency-format'
import './subtotal.css'
import { getBasketTotal } from './reducer'

function Subtotal() {
    const [{basket}] = useStateValue()
    return (
        <div className="subtotal">
             <h2>Subtotal</h2>
            <CurrencyFormat
            renderText = {(value) =>(
                <>
                <p>
                    Subtotal ({basket.length} items) : <strong>{`${value}`}</strong>
                </p> 
                <small className="subtotal_gift">
                    <input type="checkbox"/>This order contains a gift
                </small>
                </>
            )} 
            decimalScale = {2}
            value = {getBasketTotal(basket)}
            displayType = {"text"}
            thousandSeperator = {true}
            prefix = {"$"}
            ></CurrencyFormat>
            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
