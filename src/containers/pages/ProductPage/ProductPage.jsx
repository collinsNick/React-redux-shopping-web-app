import React, { Component } from 'react';
import { connect } from 'react-redux';
// import './ProductPage.css'

class ProductPage extends Component {

    render() {
        return (
            <div className="container py-4">
                <h2>{this.props.productsProp.name}</h2>
            </div>
        )
    }
}
const mapStateToProps = (state,ownProps) => {
    return {
        productsProp: state.products.find(product => product.slug === ownProps.match.params.productSlug),
        usedCurrencyProp: state.usedCurrency
    }
};

export default connect(mapStateToProps)(ProductPage);