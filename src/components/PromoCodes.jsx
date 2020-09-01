import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class PromoCodes extends Component {

    render() {
        return (
            this.props.promoCodeProps.length > 0 ?
                <div>
                    { this.props.showText ?
                    <span>
                        <h5>Great Discounts!</h5>
                        <p>Use the following promo codes to get amazing discounts</p>
                    </span> : null }
                    <ul className="list-group list-group-flush">
                        {
                            this.props.promoCodeProps.map( (promoCode, index) => (
                                <li
                                    className="list-group-item d-flex justify-content-between align-items-center"
                                key={index}>
                                    <span className={'shop-text-red'}>{promoCode.code}</span>
                                    <span className="badge badge-light badge-pill">
                                    {promoCode.percentage}%
                                </span>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                : this.props.children
        )
    }
}

PromoCodes.propTypes = {
    promoCodeProps: PropTypes.array,
    showText:PropTypes.bool.isRequired
};

const mapStateToProps = state => {
    return {
        promoCodeProps: state.promoCode,
    }
};

export default connect(mapStateToProps)(PromoCodes);