import React from 'react';

const footer = (props) => {
    return (
        <React.Fragment>
            <div className="row">
                <div className="col">
                    <div className="row">
                        <div className="col-sm-2">
                            <img className={'shop-cart-image'} src={props.productPhoto} alt={props.productPhoto.split('.')[0]}/>
                        </div>
                        <div className="col-sm-4">
                            <h5 className="shop-cart-name text-capitalize">{props.productName}</h5>
                            <h6 className="shop-cart-category ">
                                {props.productCategory}
                            </h6>
                        </div>
                        <div className="col-sm-6">
                            <div className="row">
                                <div className="col-sm-6 text-left">
                                    <h6 className={'shop-cart-item-price'}>Ksh. {props.productPrice}</h6>
                                    <input type="text" className="form-control input-sm shop-cart-quantity my-3 w-50"/>
                                    <h6 className={'shop-cart-item total'}>Item Total Ksh. <span>{props.productPrice * props.productCount}</span></h6>
                                </div>
                                <div className="col-sm-4 offset-sm-2 text-right shop-cart-b-container">
                                    <button type="button" className="btn btn-primary btn-sm">
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

export default footer;