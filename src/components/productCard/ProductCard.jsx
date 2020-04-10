import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from "react-router-dom";
import './ProductCard.css'
import { FaHeart } from "react-icons/fa";

const productCard = (props) => {

    let currencyKeys = Object.keys(props.currency);
    let currencyValue = props.currency[currencyKeys[0]];
    let currencyName = props.currency[currencyKeys[1]];

    return (
        <React.Fragment>
            <div className={'col-sm-6 col-md-6 col-lg-4 mb-4'}>

                <div className="shop-card">
                    <div className="shop-card-image">
                        <NavLink
                        to={'/women'}
                        exact>
                        <img
                            src={require(`../../assets/images/shop_images/${props.productImage}`)}
                            alt={props.productImage.split('.')[0]}
                        />
                        </NavLink>
                        {props.productSale ? <span className="shop-card-new">Sale</span> : null}
                        <span className="shop-card-wishlist" title="add to wishlist"><FaHeart /></span>
                        {props.productDiscountPrice ?
                            <span className="shop-card-discount">
                                {`-${Math.round(((props.productDiscountPrice - props.productPrice) * 100) / props.productDiscountPrice)}%`}
                            </span>
                            : null
                        }
                    </div>

                    <div className="shop-card-content">
                        <h3 className="shop-card-title">{props.productName}</h3>
                        <div className="shop-card-price-container">
                            <span
                                className='shop-card-price'>
                                {currencyName}
                                {Math.round(props.productPrice * currencyValue).toLocaleString()}
                            </span>
                            {
                                props.productDiscountPrice ?
                                    <span
                                        className={'shop-card-discount-price'}>
                                        <span style={{ textTransform: 'lowercase' }}>
                                            {currencyName}
                                        </span>
                                        {
                                            Math.round(props.productDiscountPrice * currencyValue).toLocaleString()
                                        }
                                    </span>
                                    : null
                            }
                        </div>

                        <button type="button"
                            className="btn shop-btn-primary btn-block"
                            disabled={props.productQuantity <= 0}
                            onClick={props.addToCart}>
                            {props.productQuantity > 0 ? ' Add To Cart' : 'Out Of Stock'}
                        </button>
                    </div>
                </div>

            </div>
        </React.Fragment>
    )
};

productCard.propTypes = {
    productCategory: PropTypes.string.isRequired,
    productImage: PropTypes.string.isRequired,
    productSale: PropTypes.bool.isRequired,
    productDiscountPrice: PropTypes.number,
    productPrice: PropTypes.number.isRequired,
    productName: PropTypes.string.isRequired,
    addToCart: PropTypes.func.isRequired,
    productQuantity: PropTypes.number.isRequired,
    currency: PropTypes.object.isRequired
};

export default productCard;