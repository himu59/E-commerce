import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { useStateValue } from './StateProvider'
import {auth} from './Firebase'
function Header() {
    const [{basket,user}] = useStateValue()
    // console.log(basket)
    const login = () => {
        if(user) {
            auth.signOut()
        }
    }
    return (
        <nav className="header">
            <Link to="/">
            <h5 style={{color:'white'}}>Himanshu</h5>
            </Link>
            <div className="header_search">
            <input className="header_searchInput"></input>
            <SearchIcon className="header_searchIcon"/>
            </div>

            <div className="header_nav">
                <Link to={!user && "/login"} className="header_link">
                    <div onClick={login} className="header_option">
                    <span className="header_option_line1">Hello{` ${user?.email}`}</span>
                    <span className="header_option_line2">{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>
                
            </div>
            <div className="header_nav">
                <Link to="/login" className="header_link">
                    <div  className="header_option">
                    <span className="header_option_line1">Returns</span>
                    <span className="header_option_line2">& Orders</span>
                    </div>
                </Link>
            </div>
            <div className="header_nav">
                <Link to="/" className="header_link">
                    <div className="header_option">
                    <span className="header_option_line1">Yours</span>
                    <span className="header_option_line2">Prime</span>
                    </div>
                </Link>
            </div>

            <Link to="/checkout" className="header_link">
                <div className="header_option_basket">
                    <ShoppingBasketIcon/>
                    <span style={{fontWeight:"800",marginLeft:"10px",marginRight:"10px"}}>{basket?.length}</span>
                </div>
            </Link>

        </nav>
    )
}

export default Header
// rfce