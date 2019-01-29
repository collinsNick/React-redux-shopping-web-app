import React from 'react';
import PropTypes from 'prop-types';

const footer = (props) => {
    return (
        <ul>
            <div className="row">
                {props.deliveryOptions.map((option, index) => {
                    return (
                        <div className="col-12 col-sm-7 py-2 text-capitalize shop-delivery-options mt-3" key={index}>
                            <li className={' '}>
                                <label className={'w-100 d-flex flex-row'}>
                                    <input
                                        key={index}
                                        type="radio"
                                        value={option.id}
                                        checked={props.usedDeliveryOption === option.id}
                                        onChange={props.deliveryOptionChanged}
                                    />
                                    <div className={'w-100 d-flex justify-content-between'}>
                                        <div>{option.name}</div>
                                        <div className={''}>{option.duration}</div>
                                        <div>Ksh. {option.cost}</div>
                                    </div>
                                </label>
                            </li>
                        </div>
                    )
                })}
            </div>
        </ul>
    )
};

footer.propTypes = {
    deliveryOptions: PropTypes.array.isRequired,
    usedDeliveryOption: PropTypes.number,
    deliveryOptionChanged: PropTypes.func.isRequired,
};

export default footer;
