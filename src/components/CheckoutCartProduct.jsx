import React from 'react';

const checkoutCartProduct = () => {
    return (
        <React.Fragment>
            <li className="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                    <h6 className="my-0">Product name</h6>
                    <small className="text-muted">Brief description</small>
                </div>
                <span className="text-muted">$12</span>
            </li>
        </React.Fragment>
    )
}

export default checkoutCartProduct;
