import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {addToCart} from "../../store/actions/shop";
import ProductCard from '../../components/productCard/ProductCard';
import SecondaryLayout from '../../Layouts/SecondaryLayout';
import EmptyCategoryPageContent from  '../../components/EmptyCategoryPageContent';

class ProductCategoriesPage extends Component {
    render() {

        let productsCount =  this.props.productsProps.length;
        let products = <EmptyCategoryPageContent />;
        const { match: { params } } = this.props;

        if (productsCount > 0) {
            products = this.props.productsProps
                .map(product => {
                    return (
                        <ProductCard
                            key={product.id}
                            product={product}
                            currency={this.props.usedCurrencyProp}
                            addToCart={() => this.props.addProductToCartProp(product.id)}
                        />
                    )
                })
        }
        return (
            <SecondaryLayout results={`(${productsCount} items found)`}>
                {products}
            </SecondaryLayout>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        productsProps: state.products.filter(product => product.category === ownProps.match.params.category),
        usedCurrencyProp: state.usedCurrency
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addProductToCartProp: (productId) => dispatch(addToCart(productId))
    }
};

ProductCategoriesPage.propTypes = {
    productsProps: PropTypes.array.isRequired,
    usedCurrencyProp: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductCategoriesPage);