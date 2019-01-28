import React from 'react';
import PropTypes from 'prop-types';

const productCard = (props) => {
    return (
        <React.Fragment>
            <div className={'col-sm-6 col-md-6 col-lg-4 mb-4'}>

                <div className="shop-card">
                    <div className="shop-card-image">
                        <img
                            src={require(`../assets/images/shop_images/${props.productImage}`)}
                            alt={props.productImage.split('.')[0]}
                        />
                        {props.productSale ? <span className="shop-card-sale">Sale</span> : null}

                        {props.productDiscountPrice ?
                            <span className="shop-card-discount">
                                {`${Math.round(((props.productDiscountPrice - props.productPrice) * 100) / props.productDiscountPrice)}%`}
                                    </span>
                            : null
                        }
                    </div>

                    <div className="shop-card-content">
                        <h3 className="shop-card-title">{props.productName}</h3>
                        <div className="shop-card-price">Ksh. {Math.round(props.productPrice).toLocaleString()}
                            <span
                                className={'shop-card-discount-price'}>{Math.round(props.productDiscountPrice).toLocaleString()}</span>
                        </div>

                        <button type="button"
                                className="btn shop-btn-primary btn-sm"
                                //disabled={props.productQuantity <= 0 }
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

};

export default productCard;