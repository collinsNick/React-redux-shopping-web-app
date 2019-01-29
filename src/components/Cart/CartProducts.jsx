import React from 'react';
import PropTypes from 'prop-types';

const cartProducts = (props) => {

    let currencyKeys = Object.keys(props.currency);
    let currencyName = props.currency[currencyKeys[1]];

    return (
        <React.Fragment>
            <div className="row">
                <div className="col">
                    <div className="row">
                        <div className="col-md-2 shop-cart-image-div">
                            <img className={'shop-cart-image'}
                                 src={require(`../../assets/images/shop_images/${props.productPhoto}`)}
                                 alt={props.productPhoto.split('.')[0]}/>
                        </div>
                        <div className="col-sm-5 col-md-4 shop-cart-product-details">
                            <h5 className="shop-cart-name text-capitalize">{props.productName}</h5>
                            <h6 className="shop-cart-category ">
                                {props.productCategory}
                            </h6>
                            <div>
                                <span
                                    className={"badge " + (props.productQuantity > 0 ? 'badge-success' : 'badge-danger')}>
                                    {props.productQuantity > 0 ? 'In Stock' : 'Out of Stock'}
                                </span>
                            </div>
                        </div>
                        <div className="col-sm-7 col-md-6">
                            <div className="row">
                                <div className="col-sm-6 text-left">
                                    <h6 className={'shop-cart-item-price'}>
                                        <span style={{textTransform:'capitalize'}}>{currencyName}</span>
                                         {props.productPrice.toLocaleString()}
                                        </h6>
                                    <select
                                        className="form-control input-sm my-3 w-50"
                                        disabled={props.productQuantity <= 0}
                                        value={props.productCount}
                                        onChange={props.updateProductCount}
                                    >
                                        {[...Array(props.productQuantity)].map((number, index) => (
                                            <option key={index} value={index + 1}>{index + 1}</option>
                                        ))}
                                    </select>
                                    <h6 className={'shop-cart-item-total'}>Total
                                       <span style={{textTransform:'capitalize'}}> {currencyName}</span>
                                        <span>{props.productPrice * props.productCount.toLocaleString()}</span>
                                    </h6>
                                </div>
                                <div className="col-sm-4 offset-sm-2 shop-cart-b-container">
                                    <button type="button" onClick={props.removeCartProduct}
                                            className="btn shop-btn-warning btn-sm">
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
        </React.Fragment>
    )
};

cartProducts.propTypes = {
    productPhoto: PropTypes.string.isRequired,
    productName: PropTypes.string.isRequired,
    productCategory: PropTypes.string.isRequired,
    productPrice: PropTypes.number.isRequired,
    updateProductCount: PropTypes.func.isRequired,
    productQuantity: PropTypes.number.isRequired,
    removeCartProduct: PropTypes.func.isRequired,
    currency: PropTypes.object.isRequired
};

export default cartProducts;