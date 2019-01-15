import React from 'react';

const productCard = (props) => {
    return (
        <React.Fragment>
            <div className={'col-sm-6 col-md-6 col-lg-4 mb-4'}>

                <div className="shop-card">
                    <div className="shop-card-image">
                        <img
                            src={`../assets/shop_images/${props.productCategory}/${props.productImage}`}
                            alt={props.productImage.split('.')[0]}
                        />
                        {props.productSale ? <span className="shop-card-sale">Sale</span> : null}

                        {props.productDiscountPrice ?
                            <span className="shop-card-discount">
                                {`${Math.round(((props.productDiscountPrice - props.productPrice)*100)/props.productDiscountPrice)}%`}
                                    </span>
                            : null
                        }
                    </div>

                    <div className="shop-card-content">
                        <h3 className="shop-card-title">{props.productName}</h3>
                        <div className="shop-card-price">Ksh. {props.productPrice.toLocaleString()}
                            <span className={'shop-card-discount-price'}>Ksh.{props.productDiscountPrice.toLocaleString()}</span>
                        </div>
                        <button type="button" className="btn btn-primary btn-sm shop-cart-button" onClick={props.addToCart}>Add To Cart</button>
                    </div>
                </div>

            </div>
        </React.Fragment>
    )
}

export default productCard;