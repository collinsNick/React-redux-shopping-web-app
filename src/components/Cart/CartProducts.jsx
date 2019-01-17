import React from 'react';
import PropTypes from 'prop-types';

const cartProducts = (props) => {
    return (
        <React.Fragment>
            <div className="row">
                <div className="col">
                    <div className="row">
                        <div className="col-sm-2">
                            <img className={'shop-cart-image'} src={props.productPhoto}
                                 alt={props.productPhoto.split('.')[0]}/>
                        </div>
                        <div className="col-sm-4 shop-cart-product-details">
                            <h5 className="shop-cart-name text-capitalize">{props.productName}</h5>
                            <h6 className="shop-cart-category ">
                                {props.productCategory}
                            </h6>
                            <div>
                                <span className={"badge " + (props.productQuantity > 0 ? 'badge-success' : 'badge-danger')}>
                                    {props.productQuantity > 0 ? 'In Stock' : 'Out of Stock'}
                                </span>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="row">
                                <div className="col-sm-6 text-left">
                                    <h6 className={'shop-cart-item-price'}>Ksh. {props.productPrice}</h6>
                                    <input
                                        disabled={props.productQuantity <= 0}
                                        type="input"
                                        value={props.productCount}
                                        onChange={props.updateProductCount}
                                        className="form-control input-sm shop-cart-quantity my-3 w-50"/>
                                    <h6 className={'shop-cart-item total'}>Item Total
                                        Ksh. <span>{props.productPrice * props.productCount}</span></h6>
                                </div>
                                <div className="col-sm-4 offset-sm-2 text-right shop-cart-b-container">
                                    <button type="button" onClick={props.removeCartProduct}
                                            className="btn btn-primary btn-sm">
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
}

cartProducts.propTypes = {
    productPhoto: PropTypes.string.isRequired,
    productName: PropTypes.string.isRequired,
    productCategory: PropTypes.string.isRequired,
    productPrice: PropTypes.number.isRequired,
    updateProductCount: PropTypes.func.isRequired,
    productQuantity: PropTypes.number.isRequired,
    removeCartProduct: PropTypes.func.isRequired,
};

export default cartProducts;