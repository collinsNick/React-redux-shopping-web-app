import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {addToCart} from '../../store/actions/shop';
import ProductCard from '../../components/ProductCard';
import SecondaryLayout from "../../Layouts/SecondaryLayout";
import EmptyCategoryPageContent from  '../../components/EmptyCategoryPageContent';

class Index extends Component {

    render() {

        let products = <EmptyCategoryPageContent />;

        if (this.props.productsProps) {
            products = this.props.productsProps.map(product => {
                return (
                    <ProductCard
                        key={product.id}
                        productName={product.name}
                        productPrice={product.price}
                        productDiscountPrice={product.discount_price}
                        productSale={product.sale}
                        productImage={product.img}
                        productCategory={product.category}
                        productQuantity={product.quantity}
                        currency={this.props.usedCurrencyProp}
                        addToCart={() => this.props.addProductToCartProp(product.id, product.quantity)}
                    />
                )
            })
        }
        return (
            <SecondaryLayout>
                {products}
            </SecondaryLayout>
        )
    }
}

const mapStateToProps = state => {
    return {
        productsProps: state.products,
        usedCurrencyProp: state.usedCurrency
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addProductToCartProp: (productId, productQuantity) => dispatch(addToCart(productId, productQuantity))
    }
};

Index.propTypes = {
    productsProps: PropTypes.array.isRequired,
    usedCurrencyProp: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);