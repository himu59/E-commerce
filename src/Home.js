import React from 'react'
import './home.css'

import Product from './Product'
function Home() {
    return (
        <div className="home">
            <img src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" className="homeImg"></img>
            <div className="home_row">
                <Product
                key = "12dasd34"
                title = "New Apple MacBook Pro (16-inch, 16GB RAM, 512GB Storage, 2.6GHz Intel Core i7) - Space Gray"
                price = {2149}
                rating = {5}
                image = "https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP775/sp775-mbp13touch-silver.jpeg"
                />
                <Product
                key= "123das5"
                title = "Timex Unisex TW5K86300F5 Ironman Classic 50 Move + Watch with Black Resin Band"
                price = {27}
                rating = {4}
                image = "https://staticimg.titan.co.in/Titan/Catalog/1696NC01_2.jpg?pView=pdp"
                />
                <Product
                key= "123dsa6"
                title = "Apple iPhone 11 Pro Max (64GB, Space Gray) + Cricket Wireless Plan"
                price = {1099}
                rating = {5}
                image = "https://rukminim1.flixcart.com/image/500/500/k2jbyq80pkrrdj/mobile-refurbished/e/b/u/iphone-11-pro-max-64-a-mwhg2hn-a-apple-0-original-imafkg2fg3evmhuy.jpeg?q=70"
                />
            </div>
            <div className="home_row">
                <Product
                key = "12das34"
                title = "SKYWORTH E20300 32 INCH 720P LED A53 Quad-CORE Android TV Smart 32E20300 with Voice Control Smart Remote, 1mm Thin Bezel"
                price = {439}
                rating = {5}
                image = "https://assetscdn1.paytm.com/images/catalog/product/L/LA/LARVW-80-CM-32-BEST66254274C7FA7E/1562547669727_19.jpg?imwidth=282&impolicy=hq"
                />
                <Product
                key= "123das4"
                title = "JBL Pulse 3 - Wireless Bluetooth Waterproof Speaker - Black"
                price = {139}
                rating = {3}
                image = "https://m.media-amazon.com/images/I/71XRDYZChLL._AC_UY327_FMwebp_QL65_.jpg"
                />
                <Product
                key = "123dasd4"
                title = "Nike Boston Celtics Men's Just Do It Mezzo Dri-Fit T-Shirt"
                price = {39}
                rating = {3}
                image = "https://m.media-amazon.com/images/I/51emdmdE09L._AC_UL480_FMwebp_QL65_.jpg"
                />
            </div>
            <div className="home_row">
                <Product
                key= "1fad234"
                title = "New Apple MacBook Pro (16-inch, 16GB RAM, 512GB Storage, 2.6GHz Intel Core i7) - Space Gray"
                price = {2149}
                rating = {5}
                image = "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSOrCJTbQHfsqTLTvJNNVLx-FrWP7Cs7XFDdSQEF4hUqsUeXcdIhwxyXvt9DiOzMJdYLnhm7DUlTL8&usqp=CAc"
                />
                <Product
                key= "1af234"
                title = "New Apple MacBook Pro (16-inch, 16GB RAM, 512GB Storage, 2.6GHz Intel Core i7) - Space Gray"
                price = {2149}
                rating = {5}
                image = "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSOrCJTbQHfsqTLTvJNNVLx-FrWP7Cs7XFDdSQEF4hUqsUeXcdIhwxyXvt9DiOzMJdYLnhm7DUlTL8&usqp=CAc"
                />
                <Product
                key= "12fds34"
                title = "New Apple MacBook Pro (16-inch, 16GB RAM, 512GB Storage, 2.6GHz Intel Core"
                price = {2149}
                rating = {3}
                image = "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSOrCJTbQHfsqTLTvJNNVLx-FrWP7Cs7XFDdSQEF4hUqsUeXcdIhwxyXvt9DiOzMJdYLnhm7DUlTL8&usqp=CAc"
                />
            </div>
            
        </div>
    )
}

export default Home
 