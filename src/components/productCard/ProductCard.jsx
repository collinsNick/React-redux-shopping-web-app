import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";
import './ProductCard.css'
import AddToWishList from '../AddToWishlist/AddToWishlist'
import Ratings from '../Ratings/Ratings';
import { LocalShipping, International, Warehouse } from '../UI/Icons/Icons.jsx';


const productCard = (props) => {

    let currencyKeys = Object.keys(props.currency);
    let currencyValue = props.currency[currencyKeys[0]];
    let currencyName = props.currency[currencyKeys[1]];
    let item = props.product;

    return (
        <React.Fragment>
            <div className={'col-sm-6 col-md-6 col-lg-4 mb-4'}>

                <div className="shop-card">
                    <div className="shop-card-image">
                        <NavLink
                            to={'/women'}
                            exact>
                            <img
                                src={require(`../../assets/images/shop_images/${item.img}`)}
                                alt={item.img.split('.')[0]}
                            />
                        </NavLink>
                        {item.sale ? <span className="shop-card-sale">Sale</span> : null}
                        <AddToWishList
                        productId={item.id}
                        title={'add to wishlist'}
                        classStyleName={'shop-card-wishlist'}
                        />
                        {item.discount_price ?
                            <span className="shop-card-discount">
                                {`-${Math.round(((item.discount_price - item.price) * 100) / item.discount_price)}%`}
                            </span>
                            : null
                        }
                    </div>

                    <div className="shop-card-content">
                        <h2 className="shop-card-vendor">
                            {item.vendor ? item.vendor.name : null}
                        </h2>
                        <h3 className="shop-card-title">{item.name}</h3>
                        <Ratings
                        ratings={5}
                        totalVotes={300}
                        containerClassName={'shop-card-ratings-container'}
                        fullStarIcon={'full-star-icon'}
                        halfStarIcon={'half-star-icon'}
                        emptyStarIcon={'empty-star-icon'}
                        />
                        <div className="shop-card-price-container">
                            <span
                                className='shop-card-price'>
                                {currencyName}
                                {Math.round(item.price * currencyValue).toLocaleString()}
                            </span>
                            {
                                props.discount_price ?
                                    <span
                                        className={'shop-card-discount-price'}>
                                        <span style={{ textTransform: 'lowercase' }}>
                                            {currencyName}
                                        </span>
                                        {
                                            Math.round(item.discount_price * currencyValue).toLocaleString()
                                        }
                                    </span>
                                    : null
                            }
                        </div>

                        <div className="shop-card-features-container">
                        <span className="shop-card-product-features padding" title="Fullfiled By Duka"><Warehouse /></span>
                        <span className="shop-card-product-features" title="Local Shipping"><LocalShipping /></span>
                        <span className="shop-card-product-features padding" title="International Shipping"><International /></span>
                        </div>

                        <button type="button"
                            className="btn shop-btn-primary btn-block"
                            disabled={item.quantity <= 0}
                            onClick={props.addToCart}>
                            {item.quantity > 0 ? ' Add To Cart' : 'Out Of Stock'}
                        </button>
                    </div>
                </div>

            </div>
        </React.Fragment>
    )
};

productCard.propTypes = {
    product: PropTypes.object.isRequired,
    currency: PropTypes.object.isRequired
};

export default productCard;